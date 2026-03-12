# Island Internships Website (GoDaddy-Ready)

Static marketing website for immediate deployment on GoDaddy shared hosting.

## Included
- `index.html` full one-page site (all requested sections)
- `css/styles.css` responsive styling
- `js/main.js` navigation, modal, FAQ accordion, cookie banner, accessibility controls
- `.htaccess` clean URL handling + HTTPS redirect + custom 404
- `404.html` custom not-found page
- `privacy.html` and `terms.html` legal templates
- `images/` SVG placeholders + hero image placeholder
- `favicon.ico` and `apple-touch-icon.png`

## Deploy to GoDaddy (cPanel/File Manager)
1. Log in to GoDaddy and open your hosting dashboard.
2. Open **cPanel** > **File Manager**.
3. Go to `public_html/`.
4. Upload the full contents of this folder (`island-internships-website/*`) into `public_html/`.
5. Confirm `.htaccess` is present in `public_html/`.
6. In GoDaddy dashboard, enable SSL certificate for the domain.
7. Wait for SSL provisioning and verify `https://yourdomain.com` loads correctly.

## Deploy with GoDaddy Website Builder
- Website Builder does not support direct static file import with all custom JS/CSS rules.
- Use this project as design/content source and rebuild section-by-section in builder.
- Recommended: use cPanel hosting for exact behavior parity.

## Domain + Email Setup
1. Connect your domain DNS to the GoDaddy hosting account.
2. Set up mailbox `hello@yourdomain.com` using GoDaddy Professional Email or Google Workspace.
3. Replace placeholder email text and links in `index.html`.

## Form Endpoint Setup (Formspree/Getform)
- Current form action placeholders: `https://formspree.io/f/your-form-id`
- Replace all placeholder endpoints in `index.html` with your real endpoint.
- Test each form after deployment:
  - Sri Lanka waitlist form
  - Host company form
  - Main contact form
  - Modal lead form

Detailed form setup: see `FORM-SETUP.md`.

## Image Replacement Guide
Detailed replacement steps: see `IMAGE-REPLACEMENT.md`.

## SEO + Launch QA
- SEO checklist: `SEO-CHECKLIST.md`
- Post-launch test list: `POST-LAUNCH-CHECKLIST.md`

## Local Preview
Run from the project root:

```bash
cd island-internships-website
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

## Before Going Live
- Replace placeholder domain (`islandstage.com`) in canonical and OG URL tags.
- Replace GA measurement ID `G-XXXXXXXXXX`.
- Replace WhatsApp number and Calendly link.
- Replace legal templates (`privacy.html`, `terms.html`) with approved final text.
- Replace placeholder images/icons with brand assets.
