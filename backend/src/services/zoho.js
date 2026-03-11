'use strict';

/**
 * Zoho Mail Service (EU data centre)
 * Uses Node.js built-in fetch — zero external dependencies.
 * Docs: https://www.zoho.com/mail/help/api/
 */

const env = require('../config/env');

// ─── Token cache ──────────────────────────────────────────────────────────────

let _accessToken    = null;
let _tokenExpiresAt = 0;

// ─── HTTP helper ──────────────────────────────────────────────────────────────

async function zohoRequest(method, url, body = null) {
  const token = await getAccessToken();

  const options = {
    method,
    headers: {
      Authorization:  `Zoho-oauthtoken ${token}`,
      'Content-Type': 'application/json',
      Accept:         'application/json',
    },
    signal: AbortSignal.timeout(10_000),
  };

  if (body !== null) options.body = JSON.stringify(body);

  const res = await fetch(url, options);

  let data;
  try { data = await res.json(); } catch { data = null; }

  if (!res.ok) {
    const msg = data?.data?.message || data?.message || res.statusText;
    throw new Error(`[Zoho] ${method} ${url} → HTTP ${res.status}: ${msg}`);
  }

  return data;
}

// ─── OAuth ────────────────────────────────────────────────────────────────────

/**
 * Exchange a one-time authorization code for tokens.
 * Run via: ZOHO_AUTH_CODE=<code> npm run zoho:exchange-code
 */
async function exchangeCodeForTokens(code) {
  const { clientId, clientSecret, accountsBase } = env.zoho;
  if (!clientId || !clientSecret) throw new Error('ZOHO_CLIENT_ID / ZOHO_CLIENT_SECRET not set');

  const params = new URLSearchParams({
    grant_type:    'authorization_code',
    client_id:     clientId,
    client_secret: clientSecret,
    code,
    redirect_uri:  'https://islandinternship.com',
  });

  const res = await fetch(`${accountsBase}/oauth/v2/token`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body:    params.toString(),
    signal:  AbortSignal.timeout(10_000),
  });

  const data = await res.json();
  if (data.error) throw new Error(`Zoho token exchange failed: ${data.error}`);
  return data;
}

/**
 * Refresh access token using stored refresh token.
 * Called automatically by getAccessToken().
 */
async function refreshAccessToken() {
  const { clientId, clientSecret, refreshToken, accountsBase } = env.zoho;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      'Zoho credentials incomplete — ensure ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ' +
      'and ZOHO_REFRESH_TOKEN are all set in .env'
    );
  }

  const params = new URLSearchParams({
    grant_type:    'refresh_token',
    client_id:     clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
  });

  const res = await fetch(`${accountsBase}/oauth/v2/token`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body:    params.toString(),
    signal:  AbortSignal.timeout(10_000),
  });

  const data = await res.json();
  if (data.error) throw new Error(`Zoho token refresh failed: ${data.error}`);

  _accessToken    = data.access_token;
  _tokenExpiresAt = Date.now() + (data.expires_in - 60) * 1000;

  return _accessToken;
}

/**
 * Get a valid access token, auto-refreshing if expired.
 */
async function getAccessToken() {
  if (_accessToken && Date.now() < _tokenExpiresAt) return _accessToken;
  return refreshAccessToken();
}

// ─── Account / Organisation ───────────────────────────────────────────────────

/** Get all Zoho Mail accounts for the authenticated user. */
async function getAccounts() {
  const res = await zohoRequest('GET', `${env.zoho.mailBase}/accounts`);
  return res.data ?? res;
}

/** Get a specific account by ID. */
async function getAccount(accountId) {
  const res = await zohoRequest('GET', `${env.zoho.mailBase}/accounts/${accountId}`);
  return res.data ?? res;
}

// ─── Domains ──────────────────────────────────────────────────────────────────

/** List all domains configured in Zoho Mail for an account. */
async function listDomains(accountId) {
  const res = await zohoRequest('GET', `${env.zoho.mailBase}/accounts/${accountId}/domains`);
  return res.data ?? res;
}

/** Get status of a specific domain (verified, MX set, SPF set, etc.) */
async function getDomainStatus(accountId, domainName) {
  const res = await zohoRequest('GET', `${env.zoho.mailBase}/accounts/${accountId}/domains/${domainName}`);
  return res.data ?? res;
}

// ─── Mailboxes ────────────────────────────────────────────────────────────────

/** List all mailboxes under an account. */
async function listMailboxes(accountId) {
  const res = await zohoRequest('GET', `${env.zoho.mailBase}/accounts/${accountId}/accounts`);
  return res.data ?? res;
}

/** Get a specific mailbox. */
async function getMailbox(accountId, mailboxId) {
  const res = await zohoRequest('GET', `${env.zoho.mailBase}/accounts/${accountId}/accounts/${mailboxId}`);
  return res.data ?? res;
}

/**
 * [STUB] Create a mailbox — uncomment when ready.
 *
 * @example
 * await createMailbox(accountId, {
 *   emailAddress: 'kavin@islandinternship.com',
 *   firstName: 'Kavin',
 *   lastName: 'Kulatunga',
 *   password: 'secure-password',
 * });
 */
// async function createMailbox(accountId, details) {
//   const res = await zohoRequest('POST', `${env.zoho.mailBase}/accounts/${accountId}/accounts`, details);
//   return res.data ?? res;
// }

module.exports = {
  exchangeCodeForTokens,
  refreshAccessToken,
  getAccessToken,
  getAccounts,
  getAccount,
  listDomains,
  getDomainStatus,
  listMailboxes,
  getMailbox,
  // createMailbox,
};
