# Post-Launch Testing Checklist

## Core functional
- [ ] Sticky nav activates on scroll.
- [ ] Mobile menu opens/closes and links scroll correctly.
- [ ] Hero CTAs work (anchor + modal).
- [ ] FAQ accordion opens/closes with keyboard and mouse.
- [ ] All forms submit and deliver data to inbox/dashboard.
- [ ] Cookie banner persists acceptance.
- [ ] Back-to-top link works.

## Device/responsive
- [ ] Mobile (320-767px)
- [ ] Tablet (768-1023px)
- [ ] Desktop (1024px+)

## Performance/accessibility
- [ ] Lighthouse mobile score >= 90 where possible.
- [ ] Images load with `loading="lazy"` below fold.
- [ ] Color contrast and focus states meet WCAG 2.1 AA.
- [ ] All interactive elements are keyboard reachable.

## GoDaddy-specific
- [ ] SSL enabled and HTTPS forced.
- [ ] `.htaccess` rewrite works for extensionless URLs.
- [ ] Custom `404.html` shown for invalid routes.
