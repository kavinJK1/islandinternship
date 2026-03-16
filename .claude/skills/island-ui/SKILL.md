---
name: island-ui
description: >
  Use this skill for ALL UI work on the Island Internship Next.js website —
  implementing sections, styling components, updating layouts, fixing visual
  issues, or redesigning pages. Trigger whenever the user asks to build,
  change, or improve any part of the site's appearance or structure,
  references a section by name (hero, costs, FAQ, etc.), mentions the homepage
  or a specific page component, or wants to implement a design. Also trigger
  for "make it look better", "fix the styling", "implement the redesign", and
  any similar visual/layout request in this project.
---

# Island Internship — UI Implementation Skill

You are building the Island Internship website. This is a real student internship
business, not a portfolio project. Decisions should be grounded in what communicates
clearly and converts students — not what is visually impressive for its own sake.

## Core Design Philosophy

**Light, warm editorial aesthetic — not dark, not corporate.**

The site targets Dutch university students who need to complete a required internship.
The design should feel: trustworthy, calm, slightly editorial, and warmer than typical
SaaS. Think a premium travel magazine crossed with a university admissions page.

Avoid:
- Dark hero sections (the design system has dark panel vars but the default is light cream)
- Cold blue corporate palettes
- Heavy shadows or glassmorphism effects
- Cluttered layouts with too many competing elements

Embrace:
- Generous whitespace
- Warm cream backgrounds (`var(--bg)`, `var(--bg-soft)`)
- Serif headings (Playfair Display) for editorial moments, DM Sans for body
- Forest green (`var(--forest)`) as the primary accent
- Amber (`var(--amber)`) sparingly for warmth
- Subtle scroll-triggered fade-up animations

## Design Tokens (from globals.css)

```css
/* Backgrounds */
--bg: #f6f0e6          /* main page background */
--bg-soft: #fbf7f1     /* lighter panel */
--bg-sand: #ecdfce     /* slightly darker section bg */
--bg-stone: #dfd1bf    /* dividers, borders */
--panel: rgba(255,251,246,0.9)  /* frosted panel */

/* Text */
--text: #1f2822        /* primary text */
--muted: #5f655f       /* secondary/meta text */
--soft-text: #7d8179   /* tertiary */

/* Accents */
--forest: #295a4d      /* primary green — CTAs, eyebrows, icons */
--forest-deep: #1f463b /* hover state for forest */
--ocean: #426c78       /* secondary blue-green */
--amber: #ad7a3c       /* warm accent, use sparingly */

/* Dark sections (use for contrast — footer, CTA banner) */
--dark: #111816
--dark-panel: #19211f
--dark-line: rgba(255,255,255,0.1)
--dark-text: rgba(255,255,255,0.84)
--dark-muted: rgba(255,255,255,0.62)

/* Elevation */
--shadow-sm: 0 10px 30px rgba(33,39,35,0.06)
--shadow-md: 0 18px 45px rgba(33,39,35,0.09)
--shadow-lg: 0 28px 70px rgba(27,33,30,0.13)

/* Radius */
--radius-sm: 18px
--radius-md: 24px
--radius-lg: 32px
```

## Typography Rules

**Fonts loaded in app/layout.tsx:**
- `var(--font-serif)` → Playfair Display (400, 500, 600 — normal + italic)
- `var(--font-sans)` → DM Sans (300, 400, 500, 600, 700)

**When to use serif:**
- Section headings (`h2`, `h3`) for emotional/editorial sections: hero, testimonials, community, final CTA
- Pull quotes, large callout numbers, destination names

**When to use sans:**
- Body copy, eyebrows, nav, buttons, cards, form labels, meta text, pricing
- Any information-dense section (costs table, included cards, FAQ)

**Scale guidelines:**
- `clamp(2.5rem, 5vw, 4rem)` for hero h1
- `clamp(1.75rem, 3.5vw, 2.75rem)` for section h2
- `clamp(1.1rem, 2vw, 1.35rem)` for section sub-copy
- `0.72rem` with `0.16em` letter-spacing for eyebrows (all-caps, forest color)

## Project Structure

```
/app
  layout.tsx           ← fonts loaded here, do NOT add more fonts
  globals.css          ← all CSS vars and utility classes live here
  page.tsx             ← renders <HomePage />

/components/home/
  home-page.tsx        ← full page orchestrator, assembles all sections
  sections.tsx         ← ALL section components (Hero, Trust, Costs, etc.)
  header.tsx           ← sticky nav
  hero-phrases.tsx     ← animated rotating tagline
  destination-explorer.tsx  ← interactive destination switcher
  application-modal.tsx     ← apply modal
  guide-card.tsx       ← email lead magnet card
  icons.tsx            ← SVG icon system

/data/homepage.ts      ← ALL copy, numbers, arrays — edit copy here, not JSX
```

**Golden rule: copy goes in `data/homepage.ts`, not hardcoded in JSX.**
When adding or editing text content, update the data file and reference it in the component.

## Section Inventory

The following sections exist in `sections.tsx` (in page order):
1. **HeroSection** — headline, rotating phrase, bullets, gallery photos
2. **TrustSection** — stats row + university logos
3. **IncludedSection** — 6-card grid of what's included in the program
4. **DestinationsSection** — Bali vs Sri Lanka destination cards
5. **TracksSection** — 6 internship track cards
6. **ProcessSection** — 4-step "how it works"
7. **OutcomesSection** — 4 career outcome cards with images
8. **CommunitySection** — photo mosaic + community bullet points
9. **TestimonialsSection** — video cards + quote cards
10. **ResourcesSection** — guide download, AI quiz, info session cards
11. **CompaniesSection** — B2B section for host companies
12. **CostsSection** — pricing cards + monthly expense table + comparison callout
13. **SafeguardsSection** — trust/safety grid (university docs, visa, support)
14. **FaqSection** — accordion FAQ
15. **CtaBannerSection** — final conversion section (can be dark background)
16. **FooterSection** — links, contact, copyright

## Animation Pattern

Use CSS class `fade-up` for scroll-triggered entrance animations. The IntersectionObserver
script in `home-page.tsx` (or a `useEffect` in the component) adds `.visible` when elements
enter the viewport.

```css
/* In globals.css */
.fade-up {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
.delay-1 { transition-delay: 0.1s; }
.delay-2 { transition-delay: 0.2s; }
.delay-3 { transition-delay: 0.3s; }
```

Add `fade-up` and `delay-N` to elements that should animate in on scroll.
Always respect `prefers-reduced-motion` — the globals.css should disable these.

## Implementation Checklist

When building or updating any section:

1. **Check `data/homepage.ts` first** — the data may already be there
2. **Use CSS vars, not hardcoded hex codes** — makes theming and maintenance easier
3. **Mobile-first** — use `clamp()` for type, `min()` for widths, test at 375px
4. **Semantic HTML** — `<section>`, `<article>`, `<nav>`, `<h1>`-`<h6>` in order
5. **Images use `next/image`** with `alt` text, `loading="lazy"` for below-fold
6. **No inline styles** unless strictly necessary — CSS classes preferred
7. **Add `fade-up` to section entry points** — at minimum the `<section>` tag or first heading

## Common Patterns

### Eyebrow + Heading + Subtext block:
```tsx
<span className="eyebrow">Label text</span>
<h2 className="section-title">Editorial heading in Playfair</h2>
<p className="section-copy">Supporting copy in DM Sans</p>
```

### Card with hover lift:
```css
.my-card {
  background: var(--bg-soft);
  border: 1px solid var(--bg-stone);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}
.my-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-3px);
}
```

### Dark contrast section (for CTA banner, footer):
```tsx
<section className="dark-section">
  {/* text inside uses var(--dark-text) and var(--dark-muted) */}
</section>
```
```css
.dark-section {
  background: var(--dark);
  color: var(--dark-text);
}
```

### Forest CTA button:
```css
.btn-primary {
  background: var(--forest);
  color: white;
  border-radius: 100px;
  padding: 14px 28px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.2s ease;
}
.btn-primary:hover { background: var(--forest-deep); }
```

## What NOT to Do

- Don't add new font imports to `layout.tsx` — use `--font-serif` and `--font-sans`
- Don't use Tailwind utility classes — this project uses CSS modules/globals
- Don't hardcode `#295a4d` — use `var(--forest)`
- Don't put a dark background on the hero — it's light cream by default
- Don't animate layout properties (width, height, padding) — only opacity and transform
- Don't create new component files for single-use elements — add to `sections.tsx`
- Don't skip the data file — if you're hardcoding copy in JSX, move it to `data/homepage.ts`

## Requesting Clarification

If the task is ambiguous (e.g., "make the hero better" without specifics), ask one
focused question before starting: "Better how — more visual impact, clearer message,
different layout, or all three?" Then proceed.
