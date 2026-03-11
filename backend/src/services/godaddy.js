'use strict';

/**
 * GoDaddy DNS Service
 * Uses Node.js built-in fetch — zero external dependencies.
 * Docs: https://developer.godaddy.com/doc/endpoint/domains
 */

const env = require('../config/env');

// ─── Build request helper ─────────────────────────────────────────────────────

function getCredentials() {
  const isProd = env.godaddy.env === 'production';
  const key    = isProd ? env.godaddy.prodKey    : env.godaddy.oteKey;
  const secret = isProd ? env.godaddy.prodSecret : env.godaddy.oteSecret;
  const base   = isProd ? env.godaddy.prodBase   : env.godaddy.oteBase;

  if (!key || !secret) {
    throw new Error(
      `GoDaddy ${isProd ? 'PROD' : 'OTE'} credentials missing. ` +
      `Set GODADDY_${isProd ? 'PROD' : 'OTE'}_KEY and _SECRET in .env`
    );
  }
  return { key, secret, base };
}

async function gd(method, path, body = null) {
  const { key, secret, base } = getCredentials();

  const options = {
    method,
    headers: {
      Authorization:  `sso-key ${key}:${secret}`,
      'Content-Type': 'application/json',
      Accept:         'application/json',
    },
    signal: AbortSignal.timeout(10_000),
  };

  if (body !== null) options.body = JSON.stringify(body);

  const res = await fetch(`${base}${path}`, options);

  // 204 No Content — success with no body
  if (res.status === 204) return null;

  let data;
  try { data = await res.json(); } catch { data = null; }

  if (!res.ok) {
    const msg = data?.message || data?.code || res.statusText;
    throw new Error(`[GoDaddy] ${method} ${path} → HTTP ${res.status}: ${msg}`);
  }

  return data;
}

// ─── DNS Operations ───────────────────────────────────────────────────────────

/**
 * List ALL DNS records for a domain.
 */
async function listRecords(domain = env.domain) {
  return gd('GET', `/v1/domains/${domain}/records`);
}

/**
 * Get DNS records by type (and optionally name).
 * @param {'A'|'AAAA'|'CNAME'|'MX'|'TXT'|'NS'|'SRV'} type
 * @param {string} [name]  e.g. '@', 'www', 'mail'
 */
async function getRecords(type, name = undefined, domain = env.domain) {
  const path = name
    ? `/v1/domains/${domain}/records/${type}/${name}`
    : `/v1/domains/${domain}/records/${type}`;
  return gd('GET', path);
}

/**
 * Upsert DNS records — replaces ALL records of type+name with provided array.
 *
 * @param {'A'|'AAAA'|'CNAME'|'MX'|'TXT'|'NS'|'SRV'} type
 * @param {string} name
 * @param {Array<{data: string, ttl?: number, priority?: number}>} records
 *
 * @example — Point www to Netlify
 * await upsertRecord('CNAME', 'www', [{ data: '<yoursite>.netlify.app', ttl: 600 }]);
 *
 * @example — Set Zoho MX records
 * await upsertRecord('MX', '@', [
 *   { data: 'mx.zoho.eu',  priority: 10 },
 *   { data: 'mx2.zoho.eu', priority: 20 },
 *   { data: 'mx3.zoho.eu', priority: 50 },
 * ]);
 *
 * @example — Set SPF for Zoho
 * await upsertRecord('TXT', '@', [{ data: 'v=spf1 include:zoho.eu ~all' }]);
 */
async function upsertRecord(type, name, records, domain = env.domain) {
  const body = records.map(r => ({
    type,
    name,
    data:     r.data,
    ttl:      r.ttl ?? 3600,
    ...(r.priority !== undefined ? { priority: r.priority } : {}),
  }));
  return gd('PUT', `/v1/domains/${domain}/records/${type}/${name}`, body);
}

/**
 * Delete all DNS records matching type + name.
 */
async function deleteRecord(type, name, domain = env.domain) {
  return gd('DELETE', `/v1/domains/${domain}/records/${type}/${name}`);
}

/**
 * Get domain-level info: status, expiry, nameservers.
 */
async function getDomainInfo(domain = env.domain) {
  return gd('GET', `/v1/domains/${domain}`);
}

module.exports = { listRecords, getRecords, upsertRecord, deleteRecord, getDomainInfo };
