#!/usr/bin/env node
'use strict';

/**
 * Zoho Mail verification script
 * Usage: npm run test:zoho
 *
 * Prerequisites: ZOHO_REFRESH_TOKEN must be set in .env
 * If not set, run: ZOHO_AUTH_CODE=<code> npm run zoho:exchange-code
 */

// env.js auto-loads .env — no dotenv package needed
const env  = require('../src/config/env');
const zoho = require('../src/services/zoho');

const PASS = '\x1b[32m✓\x1b[0m';
const FAIL = '\x1b[31m✗\x1b[0m';
const INFO = '\x1b[36mℹ\x1b[0m';
const WARN = '\x1b[33m⚠\x1b[0m';

async function run() {
  console.log(`\n${INFO} Zoho Mail Test — accounts base: \x1b[33m${env.zoho.accountsBase}\x1b[0m\n`);

  if (!env.zoho.refreshToken) {
    console.error(`${FAIL} ZOHO_REFRESH_TOKEN not set in .env`);
    console.error(`  Run first: ZOHO_AUTH_CODE=<code> npm run zoho:exchange-code\n`);
    process.exit(1);
  }

  // ── 1. Refresh access token ─────────────────────────────────────────────────
  process.stdout.write('  1. Refresh access token ... ');
  let accessToken;
  try {
    accessToken = await zoho.refreshAccessToken();
    console.log(`${PASS} token obtained (${accessToken.slice(0, 15)}...)`);
  } catch (err) {
    console.log(`${FAIL} ${err.message}`);
    process.exit(1);
  }

  // ── 2. Get accounts ─────────────────────────────────────────────────────────
  process.stdout.write('  2. Get Zoho Mail accounts ... ');
  let accounts = [];
  try {
    accounts = await zoho.getAccounts();
    const list = Array.isArray(accounts) ? accounts : [accounts];
    console.log(`${PASS} ${list.length} account(s) found`);
    list.forEach(a => console.log(`       accountId=${a.accountId}, email=${a.primaryEmailAddress ?? 'N/A'}`));
    accounts = list;
  } catch (err) {
    console.log(`${FAIL} ${err.message}`);
  }

  if (accounts.length === 0) {
    console.log(`\n${WARN} No accounts found — cannot test domains/mailboxes.\n`);
    return;
  }

  const firstAccountId = accounts[0].accountId;

  // ── 3. List domains ─────────────────────────────────────────────────────────
  process.stdout.write(`  3. List domains for account ${firstAccountId} ... `);
  let domains = [];
  try {
    domains = await zoho.listDomains(firstAccountId);
    const list = Array.isArray(domains) ? domains : [domains];
    console.log(`${PASS} ${list.length} domain(s)`);
    list.forEach(d => console.log(`       ${d.domainName ?? d} — verified=${d.isVerified ?? 'N/A'}`));
    domains = list;
  } catch (err) {
    console.log(`${FAIL} ${err.message}`);
  }

  // ── 4. Domain status for islandinternship.com ───────────────────────────────
  process.stdout.write(`  4. Domain status for ${env.domain} ... `);
  try {
    const status = await zoho.getDomainStatus(firstAccountId, env.domain);
    console.log(`${PASS}`);
    console.log(`       verified=${status.isVerified}, mx=${status.mxVerified ?? 'N/A'}, spf=${status.spfVerified ?? 'N/A'}`);
  } catch (err) {
    // 404 just means domain not yet added to Zoho — expected at setup stage
    if (err.message.includes('404') || err.message.includes('not found')) {
      console.log(`${INFO} Domain not yet added to Zoho Mail (expected — add it in Zoho Admin)`);
    } else {
      console.log(`${FAIL} ${err.message}`);
    }
  }

  // ── 5. List mailboxes ───────────────────────────────────────────────────────
  process.stdout.write(`  5. List mailboxes ... `);
  try {
    const mailboxes = await zoho.listMailboxes(firstAccountId);
    const list = Array.isArray(mailboxes) ? mailboxes : [mailboxes];
    console.log(`${PASS} ${list.length} mailbox(es)`);
    list.forEach(m => console.log(`       ${m.primaryEmailAddress ?? m.emailAddress ?? JSON.stringify(m)}`));
  } catch (err) {
    console.log(`${FAIL} ${err.message}`);
  }

  console.log('\n  Done.\n');
}

run().catch(err => {
  console.error(`\n${FAIL} Unexpected error: ${err.message}\n`);
  process.exit(1);
});
