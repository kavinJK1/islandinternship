#!/usr/bin/env node
'use strict';

/**
 * Zoho one-time token exchange script.
 * Run this ONCE to swap your authorization code for a refresh token.
 *
 * Usage:
 *   ZOHO_AUTH_CODE=<your_code> npm run zoho:exchange-code
 *
 * After running, copy the printed ZOHO_REFRESH_TOKEN into your .env file.
 * The auth code is single-use — if it expires, generate a new one from
 * the Zoho API Console: https://api-console.zoho.eu/
 */

// env.js auto-loads .env — no dotenv package needed
require('../src/config/env');
const zoho = require('../src/services/zoho');

const INFO = '\x1b[36mℹ\x1b[0m';
const PASS = '\x1b[32m✓\x1b[0m';
const FAIL = '\x1b[31m✗\x1b[0m';

async function run() {
  const code = process.env.ZOHO_AUTH_CODE;

  if (!code) {
    console.error(`\n${FAIL} ZOHO_AUTH_CODE environment variable not set.\n`);
    console.error(`  Usage: ZOHO_AUTH_CODE=your_code npm run zoho:exchange-code\n`);
    process.exit(1);
  }

  console.log(`\n${INFO} Exchanging Zoho authorization code for tokens...\n`);

  try {
    const tokens = await zoho.exchangeCodeForTokens(code);

    console.log(`${PASS} Token exchange successful!\n`);
    console.log('  ─────────────────────────────────────────────────────────');
    console.log(`  access_token:  ${tokens.access_token?.slice(0, 20)}... (expires in ${tokens.expires_in}s)`);
    console.log(`  refresh_token: ${tokens.refresh_token}`);
    console.log('  ─────────────────────────────────────────────────────────');
    console.log('\n  Add this to your .env file:');
    console.log(`\n  ZOHO_REFRESH_TOKEN=${tokens.refresh_token}\n`);

  } catch (err) {
    console.error(`\n${FAIL} ${err.message}\n`);
    console.error('  Possible causes:');
    console.error('  - Auth code already used (codes are single-use)');
    console.error('  - Auth code expired (usually valid for 10 minutes)');
    console.error('  - redirect_uri mismatch in Zoho API Console');
    console.error('  - Wrong ZOHO_CLIENT_ID / ZOHO_CLIENT_SECRET\n');
    process.exit(1);
  }
}

run();
