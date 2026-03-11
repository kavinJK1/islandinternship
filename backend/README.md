# Island Internship — Backend Services

GoDaddy DNS + Zoho Mail integration for `islandinternship.com`.
**Zero external dependencies** — uses Node.js 18+ built-in `fetch`.

---

## Structure

```
backend/
├── src/
│   ├── config/env.js           # .env loader (no dotenv package needed)
│   └── services/
│       ├── godaddy.js          # DNS: list, get, upsert, delete
│       └── zoho.js             # OAuth token refresh + mail/domain queries
├── scripts/
│   ├── zoho-exchange-code.js   # ONE-TIME: swap auth code → refresh token
│   ├── test-godaddy.js         # Verify GoDaddy credentials + DNS
│   └── test-zoho.js            # Verify Zoho credentials + accounts
├── .env.example
├── .gitignore
└── package.json
```

---

## Setup

### 1. Create your .env file

```bash
cd backend
cp .env.example .env
```

Fill in `.env` with your credentials (never commit this file):

```env
# GoDaddy — OTE (test environment, safe to experiment)
GODADDY_OTE_KEY=hk8Gy82puWWT_7bQq2wW9ue8DutA5KXbZ76
GODADDY_OTE_SECRET=TnsWTMUn3HbYdF7snPnTyH
GODADDY_OTE_BASE_URL=https://api.ote-godaddy.com

# GoDaddy — Production (real DNS, changes go live immediately)
GODADDY_PROD_KEY=hk8Gy82puWWT_WwAJ6pvhekRcM6umiSifSk
GODADDY_PROD_SECRET=9aNn68yHGjoA4ohjj9RwHr
GODADDY_PROD_BASE_URL=https://api.godaddy.com

# Start on OTE, switch to production when confident
GODADDY_ENV=ote

# Zoho EU
ZOHO_CLIENT_ID=1000.TTTSQA0DVL7A87JJL8ASNK6AU1G4IJ
ZOHO_CLIENT_SECRET=76bad3d5a40acc8948377627622cbe67779269db94
ZOHO_REFRESH_TOKEN=           # ← fill in after step 2
ZOHO_ACCOUNTS_BASE=https://accounts.zoho.eu
ZOHO_MAIL_BASE=https://mail.zoho.eu/api

DOMAIN=islandinternship.com
```

### 2. Get your Zoho refresh token (one-time)

Your auth code is: `ffb9f673e05f66f9bc6bd8d98009f6ca6a13a4e158`

**⚠️ Auth codes are single-use and expire in ~10 minutes.**
If this one has already expired, generate a new one at:
https://api-console.zoho.eu/ → your app → Generate Code → scope `ZohoMail.accounts.ALL`

Then run:

```bash
ZOHO_AUTH_CODE=ffb9f673e05f66f9bc6bd8d98009f6ca6a13a4e158 node scripts/zoho-exchange-code.js
```

Copy the printed `ZOHO_REFRESH_TOKEN` value into your `.env`.

---

## Test commands

```bash
# Test GoDaddy (OTE by default — safe)
node scripts/test-godaddy.js

# Test Zoho (requires ZOHO_REFRESH_TOKEN in .env)
node scripts/test-zoho.js

# Test both
npm run test:all
```

### Switch to production GoDaddy

Edit `.env`:
```
GODADDY_ENV=production
```
Then re-run tests. All DNS changes will affect live DNS.

---

## Use in code

```js
const godaddy = require('./src/services/godaddy');
const zoho    = require('./src/services/zoho');

// List all DNS records
const records = await godaddy.listRecords();

// Get only MX records
const mx = await godaddy.getRecords('MX');

// Set Zoho MX records (run once when connecting Zoho Mail)
await godaddy.upsertRecord('MX', '@', [
  { data: 'mx.zoho.eu',  priority: 10, ttl: 3600 },
  { data: 'mx2.zoho.eu', priority: 20, ttl: 3600 },
  { data: 'mx3.zoho.eu', priority: 50, ttl: 3600 },
]);

// Set SPF record for Zoho
await godaddy.upsertRecord('TXT', '@', [
  { data: 'v=spf1 include:zoho.eu ~all', ttl: 3600 },
]);

// Point www to Netlify
await godaddy.upsertRecord('CNAME', 'www', [
  { data: 'your-site.netlify.app', ttl: 600 },
]);

// Zoho — get accounts and domains
const accounts = await zoho.getAccounts();
const domains  = await zoho.listDomains(accounts[0].accountId);
```

---

## GoDaddy environments

| GODADDY_ENV | Endpoint | Effect |
|-------------|----------|--------|
| `ote` | api.ote-godaddy.com | Safe test — no real DNS changes |
| `production` | api.godaddy.com | Live DNS — changes propagate immediately |

Always test in OTE first.

---

## Adding mailbox creation

In `src/services/zoho.js`, uncomment `createMailbox` and use:

```js
await zoho.createMailbox(accountId, {
  emailAddress: 'kavin@islandinternship.com',
  firstName: 'Kavin',
  lastName: 'Kulatunga',
  password: 'strong-password',
});
```
