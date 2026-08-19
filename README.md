# SkillForge AI — Premium Home Page

Assignment: ACDYON Technologies internship assessment, Part 2 (Premium Home Page).
Invented product: **SkillForge AI**, an AI-powered career growth platform for students.

## Run locally

```bash
npm install
npm run dev
```

Open the printed localhost URL. To produce a production build:

```bash
npm run build
npm run preview
```

## Deploying

This is a stock Vite + React app — push the folder to a GitHub repo and import it
into Vercel with default settings (framework preset: Vite). No environment
variables or backend are required.

## What each file does

- `src/App.jsx` — assembles the page from the section components, in order.
- `src/components/Navbar.jsx` — sticky nav; collapses to a menu button under 860px.
- `src/components/Hero.jsx` — headline, subhead, CTAs, and a static `ProductPreview`.
- `src/components/ProductPreview.jsx` — the dashboard mock (readiness gauge, skill
  bars, recommendation). Takes a `role` object as a prop, so it's reused twice.
- `src/components/ReadinessGauge.jsx` — the semicircular SVG gauge. Animates by
  transitioning `stroke-dashoffset`, which is why the fill sweeps in smoothly
  whenever `value` changes.
- `src/components/CareerPath.jsx` — **the one required interaction**. Three role
  tabs (Full Stack / AI Engineer / Frontend) swap which role object is passed to
  `ProductPreview`, so the gauge, skill bars, and recommendation all update.
- `src/components/HowItWorks.jsx`, `Features.jsx`, `FinalCTA.jsx`, `Footer.jsx` —
  supporting sections, each a plain functional component with no local state.
- `src/data/roles.js` — the mock data for all three roles. Clearly commented as
  sample data, not real user data.
- `src/styles.css` — one global stylesheet, organized top to bottom in the order
  sections appear on the page, with a token block at the top (`:root`) so every
  color/spacing decision traces back to one place.

No backend, no auth, no routing, no state management library — the brief asked
for a landing page, not a product build-out, so the whole app is ~9 components
and one CSS file.

## The interaction

Choosing a role in the "Choose where you want to go" section re-renders the
dashboard with that role's mock readiness score, skill breakdown, and
recommendation. It's plain `useState` in `CareerPath.jsx` — no API call.

## Design notes (for the follow-up interview)

- **Why this isn't the "AI landing page" default look:** paper-light background
  with ink-navy text, not a dark page with a neon glow or a cream/terracotta
  serif hero. The one dark surface on the page is the dashboard itself, styled
  like an actual product screen, not a decorative panel.
- **Why numbers are set in a monospace face:** IBM Plex Mono is used only for
  data (percentages, the eyebrow labels) to make the dashboard read like a real
  instrument rather than marketing copy.
- **Why the product visual and the interaction share one component:** the brief
  asks for a "show the product" section, a "product experience" section, and an
  interaction — showing the same dashboard mock three separate times would be
  repetitive. `ProductPreview` is reused: static in the hero, live in the role
  selector. One honest product surface, not three.
- **Why "01/02/03" appears in How It Works but nowhere else:** those three steps
  are a genuine sequence (goal → gap → build). The feature grid and role tabs
  aren't sequential, so they aren't numbered.

## Known limitations

- All product data (readiness scores, skill percentages, recommendations) is
  hand-written mock data for three roles — there's no real user, model, or
  backend behind it, by design (see assignment's AI Integration section).
- Fonts load from Google Fonts at runtime; if deployed somewhere that blocks
  that request, headings fall back to the system sans-serif stack gracefully.
- Tab navigation for the role selector uses `role="tab"`/`aria-selected` but
  doesn't yet implement roving-tabindex arrow-key navigation — each tab is a
  real, individually focusable `<button>`, so keyboard and screen-reader users
  can still operate it, just via Tab rather than arrow keys.
