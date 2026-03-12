# Form Endpoint Setup Guide

## Option A: Formspree
1. Create an account at `formspree.io`.
2. Create one form endpoint for each funnel (recommended):
   - Student leads
   - Company leads
   - Hogeschool/partnership leads
3. Copy endpoint URL like `https://formspree.io/f/abcde123`.
4. In `index.html`, replace each `action="https://formspree.io/f/your-form-id"` with your endpoint.
5. Submit test entries and confirm email delivery.

## Option B: Getform
1. Create an account at `getform.io`.
2. Create forms and copy endpoints.
3. Replace each form `action` URL in `index.html`.
4. Submit test entries and verify dashboard capture.

## Field Mapping (Current)
- Student modal: `name`, `email`, `program`, `source`
- Sri Lanka waitlist: `name`, `email`, `program`, `dates`
- Company intake: `company`, `industry`, `role_type`, `email`, `company_size`
- Contact form: `name`, `email`, `persona`, `message`

## Spam Protection
- Enable provider-level spam filtering.
- Add optional honeypot field via provider settings.
- Consider enabling reCAPTCHA on high-volume forms.
