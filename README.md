# SkillForge AI — Premium Home Page

A landing page for **SkillForge AI**, an AI-powered career growth platform for students, built for the ACDYON Technologies internship assessment.

---

## Getting Started

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev

```


3. Build and preview for production:
```bash
npm run build
npm run preview

```



---

## Deployment

This is a standard Vite + React project.

* **Platform:** Vercel (or any static host)
* **Framework Preset:** Vite
* **Build Command:** `npm run build`
* **Output Directory:** `dist`
* **Backend / Environment Variables:** None required

---

## Project Structure

```
SkillForge-AI/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky nav bar; collapses below 860px
│   │   ├── Hero.jsx            # Headline, primary CTAs, and static preview
│   │   ├── ProductPreview.jsx  # Reusable dashboard (gauge, skills, recommendations)
│   │   ├── ReadinessGauge.jsx  # Semicircular SVG gauge with stroke transitions
│   │   ├── CareerPath.jsx      # Role switcher that updates preview via useState
│   │   ├── HowItWorks.jsx      # 3-step process section
│   │   ├── Features.jsx        # Feature grid
│   │   ├── FinalCTA.jsx        # Bottom call-to-action section
│   │   └── Footer.jsx          # Site footer
│   ├── data/
│   │   └── roles.js            # Mock dataset for career paths and skill readiness
│   ├── App.jsx                 # Main layout composition
│   ├── main.jsx                # React root entry
│   └── styles.css              # Global tokens and layout styling
├── index.html
├── package.json
└── vite.config.js

```

---

## Key Features & Architecture

* **Interactive Preview:** Switching roles in the career path section re-renders the dashboard with that role's mock readiness score, skill breakdown, and recommendation via local `useState`.
* **Lightweight Build:** Pure React and standard CSS tokens without extra UI component libraries, routing, or state management frameworks.
* **Design System:** Paper-light theme with dark dashboard contrast, structured typography hierarchy, and CSS custom properties for maintainability.
