node scripts/test-godaddy.js#!/usr/bin/env node
'use strict';

/**
 * GoDaddy verification script
 * Usage: npm run test:godaddy
 *
 * Tests: credentials, domain info, list records, get MX records
 * Defaults to OTE environment. Set GODADDY_ENV=production in .env for live DNS.
 */

require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const godaddy = require('../src/services/godaddy');
const env     = require('../src/config/env');

const PASS = '\x1b[32m✓\x1b[0m';
const FAIL = '\x1b[31m✗\x1b[0m';
const INFO = '\x1b[36mℹ\x1b[0m';

async function run() {
  console.log(`\n${INFO} GoDaddy Test — environment: \x1b[33m${env.godaddy.env}\x1b[0m, domain: \x1b[33m${env.domain}\x1b[0m\n`);

  // ── 1. Domain info ──────────────────────────────────────────────────────────
  process.stdout.write('  1. Get domain info ... ');
  try {
    const info = await godaddy.getDomainInfo();
    console.log(`${PASS} status=${info.status}, expires=${info.expires?.split('T')[0] ?? 'N/A'}`);
  } catch (err) {
    console.log(`${FAIL} ${err.message}`);
  }

  // ── 2. List all DNS records ─────────────────────────────────────────────────
  process.stdout.write('  2. List all DNS records ... ');
  try {
    const records = await godaddy.listRecords();
    console.log(`${PASS} ${records.length} record(s) found`);
    records.slice(0, 5).forEach(r =>
      console.log(`       ${r.type.padEnd(6)} ${r.name.padEnd(20)} → ${r.data}`)
    );
    if (records.length > 5) console.log(`       ... and ${records.length - 5} more`);
  } catch (err) {
    console.log(`${FAIL} ${err.message}`);
  }

  // ── 3. Get MX records ───────────────────────────────────────────────────────
  process.stdout.write('  3. Get MX records ... ');
  try {
    const mx = await godaddy.getRecords('MX');
    if (mx.length === 0) {
      console.log(`${INFO} No MX records yet (expected if Zoho not configured)`);
    } else {
      console.log(`${PASS} ${mx.length} MX record(s)`);
      mx.forEach(r => console.log(`       priority=${r.priority} → ${r.data}`));
    }
  } catch (err) {
    console.log(`${FAIL} ${err.message}`);
  }

  // ── 4. Get A record for @ ───────────────────────────────────────────────────
  process.stdout.write('  4. Get A record (@) ... ');
  try {
    const a = await godaddy.getRecords('A', '@');
    if (a.length === 0) {
      console.log(`${INFO} No A record for @ yet`);
    } else {
      console.log(`${PASS} → ${a.map(r => r.data).join(', ')}`);
    }
  } catch (err) {
    console.log(`${FAIL} ${err.message}`);
  }

  console.log('\n  Done.\n');
}

run().catch(err => {
  console.error(`\n${FAIL} Unexpected error: ${err.message}\n`);
  process.exit(1);
});
