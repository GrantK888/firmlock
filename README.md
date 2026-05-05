# FirmLock Marketing Site

The FirmLock marketing website, built in Next.js 14 (App Router) with TypeScript, Tailwind CSS, and lucide-react icons. Every design decision follows the FirmLock brand system.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — lint

## Project structure

```
app/
├── layout.tsx           # Fonts (Libre Baskerville + Plus Jakarta Sans) and metadata
├── page.tsx             # Composes all sections
├── globals.css          # Tailwind directives + hero grid bg
├── components/
│   ├── Logo.tsx         # Shield-and-columns SVG (navy/white variants)
│   ├── Button.tsx       # primary/secondary/ghost/dark/outline-dark × sm/md/lg
│   ├── Badge.tsx        # Status pills (green/amber/red/blue/gray)
│   ├── SectionIntro.tsx # Overline + h2 + lead pattern
│   ├── Nav.tsx          # Sticky top nav
│   └── PortalPreview.tsx# Hero mockup
└── sections/
    ├── Hero.tsx
    ├── TrustStrip.tsx
    ├── Positioning.tsx     # "Between two worlds" 3-col
    ├── Features.tsx        # 6-feature grid
    ├── SplitFeature.tsx    # Stripe Connect + invoice mockup
    ├── Testimonial.tsx     # Dark quote + stats strip
    ├── Pricing.tsx         # 3 tiers, featured middle
    ├── FAQ.tsx             # Client-side accordion
    ├── CTA.tsx             # Dark conversion block
    └── Footer.tsx
```

## Design system

Tokens live in `tailwind.config.ts`. Use these exclusively — do not introduce new colors, fonts, or radii outside the system.

### Colors

| Token | Hex | Usage |
|---|---|---|
| `navy-900` | #0A1628 | Dominant dark color |
| `navy-800`/`navy-700`/`navy-500` | | Borders, depth |
| `action` | #3B82F6 | Interactive only — never decorative |
| `action-light` | #60A5FA | Hover |
| `action-soft` | #DBEAFE | Selected backgrounds |
| `silver` | #B0C4DE | Premium accents |
| `paper` | #F9F9F9 | Workspace backgrounds |
| `emerald` / `amber` / `red` / `slate` | | Functional status |

### Typography

- `font-serif` — Libre Baskerville 700. Headlines only.
- `font-sans` — Plus Jakarta Sans 400/500/600/700. Everything else.
- Scale: `text-display`, `text-h1`, `text-h2`, `text-h3`, `text-overline`.

### Components

- `<Button variant="..." size="...">` — all five variants, three sizes
- `<Badge variant="..." withDot>` — five color variants
- `<Logo variant="navy|white">` — never recolor, never stretch

## Brand rules (non-negotiable)

- Oxford Navy dominates dark surfaces
- Blue `action` is strictly interactive
- Libre Baskerville + Plus Jakarta Sans only — never Inter, never Playfair
- Lucide icons at `strokeWidth={1.8}`, never filled
- Sentence case on buttons and labels
- No exclamation points, no emoji in UI, no hedging
- 8px grid for all spacing
- Card radius 12–16px, button radius 8–10px
- Generous spacing — when in doubt, add more

## Adding future designs

Every new FirmLock deliverable (landing pages, email templates, in-app UI) should reuse the existing `components/` primitives and Tailwind tokens. Create new section components under `app/sections/` and compose them from existing primitives. If a new primitive is truly needed, add it under `app/components/` and document it here.
