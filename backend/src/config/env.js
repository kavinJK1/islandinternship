'use strict';

/**
 * Zero-dependency .env loader.
 * Reads backend/.env and populates process.env.
 */

const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '../../.env');

if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');

  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;

    const eqIdx = line.indexOf('=');
    if (eqIdx === -1) continue;

    const key = line.slice(0, eqIdx).trim();
    const val = line.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');

    if (key && !(key in process.env)) {
      process.env[key] = val;
    }
  }
}

function optional(key, fallback = undefined) {
  return process.env[key] || fallback;
}

const env = {
  NODE_ENV: optional('NODE_ENV', 'development'),
  PORT: optional('PORT', '3001'),

  // ─── GoDaddy ────────────────────────────────────────────────
  godaddy: {
    oteKey: optional('GODADDY_OTE_KEY'),
    oteSecret: optional('GODADDY_OTE_SECRET'),
    oteBase: optional('GODADDY_OTE_BASE_URL', 'https://api.ote-godaddy.com'),

    prodKey: optional('GODADDY_PROD_KEY'),
    prodSecret: optional('GODADDY_PROD_SECRET'),
    prodBase: optional('GODADDY_PROD_BASE_URL', 'https://api.godaddy.com'),

    env: optional('GODADDY_ENV', 'ote'),
  },

  // ─── Zoho (EU) ───────────────────────────────────────────────
  zoho: {
    clientId: optional('ZOHO_CLIENT_ID'),
    clientSecret: optional('ZOHO_CLIENT_SECRET'),
    refreshToken: optional('ZOHO_REFRESH_TOKEN'),

    accountsBase: optional('ZOHO_ACCOUNTS_BASE', 'https://accounts.zoho.eu'),
    mailBase: optional('ZOHO_MAIL_BASE', 'https://mail.zoho.eu/api'),
  },

  domain: optional('DOMAIN', 'islandinternship.com'),
};

module.exports = env;