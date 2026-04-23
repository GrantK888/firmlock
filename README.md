# FirmLock Website — Next.js

Marketing homepage built with **Next.js 14** (App Router), **TypeScript**, and **CSS Modules**. No Tailwind — design tokens live in `app/globals.css`.

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 14 App Router |
| Language | TypeScript |
| Styles | CSS Modules + CSS custom properties |
| Icons | lucide-react |
| Fonts | Libre Baskerville + Plus Jakarta Sans (Google Fonts) |
| Animations | IntersectionObserver via `components/ScrollReveal.tsx` |

## File structure

```
app/
  globals.css          ← All design tokens (colors, type, spacing, radii, shadows)
  layout.tsx           ← Root layout + metadata
  page.tsx             ← Homepage — assembles all sections

components/
  Nav.tsx / .module.css
  Hero.tsx / .module.css
  TrustStrip.tsx / .module.css
  Positioning.tsx / .module.css
  Features.tsx / .module.css
  PaymentsSplit.tsx / .module.css
  Testimonial.tsx / .module.css
  Pricing.tsx / .module.css
  FAQ.tsx / .module.css      ← 'use client' (accordion state)
  CTA.tsx / .module.css
  Footer.tsx / .module.css
  ScrollReveal.tsx           ← 'use client' IntersectionObserver wiring

  ui/
    Button.tsx / .module.css  ← <Button> and <LinkButton> — variant + size props
    Badge.tsx / .module.css   ← Status badges (on-track, paid, overdue, etc.)
    LogoMark.tsx              ← FirmLock SVG shield mark
```

## Design tokens

All tokens are CSS custom properties defined in `app/globals.css`. Key ones:

```css
--navy-900: #0A1628   /* Oxford Navy — dominant dark */
--blue-500: #3B82F6   /* Action only — buttons, links */
--serif:    'Libre Baskerville', Georgia, serif
--sans:     'Plus Jakarta Sans', system-ui, sans-serif
--container: 1100px
```

## Scroll animations

Any element with `data-reveal` fades up on scroll. Add `data-reveal-delay="100"` (multiples of 100, up to 500) to stagger children. `ScrollReveal.tsx` wires the IntersectionObserver once on mount — it's a client component imported in `app/page.tsx`.

## Adding pages

Create `app/about/page.tsx`, `app/pricing/page.tsx`, etc. Import `Nav` and `Footer` from components. All design tokens are globally available.

## Assets

Logo files are in the parent design system at `assets/`. Copy the ones you need into `public/`:

```
public/
  firmlock-logo-navy.png
  firmlock-logo-white.png
  firmlock-logo-wordmark.png
```

Then reference with Next.js `<Image>` component. The SVG `LogoMark` component is used inline in Nav and Footer so no image file is required for those.
