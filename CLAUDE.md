# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo Overview

SiteSpark — marketing website for a two-person student web design studio (Grant Tong and Siddharth Gattu). The repo contains two separate sites:

| Directory | Stack | Status |
|---|---|---|
| `tg-web-studio/` | Plain HTML/CSS/JS, no build step | Legacy |
| `tg-web-studio-next/` | Next.js 16, React 19, Tailwind v4, TypeScript | Active |

Collaborators: `granito12` (Grant) and `siddharthgattu-sys` (Siddharth). Always `git fetch` before committing — both push to `main`.

---

## Next.js Site (`tg-web-studio-next/`)

### Commands

All commands run from inside `tg-web-studio-next/`:

```bash
npm run dev      # Dev server on :3000 (or :3001 if :3000 is taken)
npm run build    # Production build
npm run lint     # ESLint
```

### Architecture

`src/app/page.tsx` assembles all section components in order. **The page section order must match the navbar tab order.** Current order:

```
Hero → ValueStrip → About → Serve → Portfolio → Services → Process → Faq → Contact
```

Tabbed sections (Portfolio, Services, Process, Faq, Contact) must have `id` attributes that match the `url` hash in the `navItems` array in `site-header.tsx`. Non-tabbed sections (ValueStrip, About, Serve) don't need nav entries.

**`src/components/sections/`** — one component per page section. `SiteHeader` is `"use client"` because it tracks scroll position to toggle the logo's CSS filter (white on dark hero → black on light sections). `Hero` is a server component that wraps `PixelHero` in a dark-mode div (see Dark Section Pattern below).

**`src/components/ui/`** — reusable primitives:
- `tubelight-navbar.tsx` — floating pill navbar with Framer Motion `layoutId` spring animation, IntersectionObserver scroll spy, and a 1-second navigation lock on click to prevent tab flicker when smooth-scrolling past intermediate sections
- `pixel-perfect-hero.tsx` — full-viewport hero with a canvas-based pixel ripple animation, "tahoe-glass-text" white shimmer headline, and a brand logo marquee. Accepts `pixelColors` prop to bypass DOM color computation (required when the hero is inside a dark wrapper — see below). Also accepts `primaryHref`/`secondaryHref` for scroll-to-section CTAs.
- `container-scroll-animation.tsx` — scroll-driven 3D tilt animation using Framer Motion
- `shape-landing-hero.tsx` — legacy full-bleed dark hero using `@paper-design/shaders-react` `MeshGradient`; no longer used for the active hero but kept in the codebase

### Logo

The SiteSpark logo lives at `public/logo-sitespark.png` (trimmed PNG, 670×179, white mark on transparent background). It appears in both `site-header.tsx` and `footer.tsx`. In the header, `filter: brightness(0)` is applied when scrolled to make it dark on light-background sections. The footer is always dark (`bg-navy-900`) so no filter is needed there.

### Design Tokens

Tailwind v4 — tokens are defined in the `@theme {}` block in `src/app/globals.css`, **not** in a `tailwind.config.js`. Never hardcode colors.

Key tokens:
- Brand: `brand-500` (#112250 navy), `brand-400` (#3558A4), `brand-300` (#7090C4)
- CTA: `cta-500` (#F5F0E9 swan wing cream), `cta-600` (#E8E1D7)
- Text: `ink` (#112250), `ink-muted` (#3D4E70)
- Dark backgrounds: `navy-900` (#0D1428), `navy-800` (#18223C)
- Fonts: `--font-heading` (Archivo), `--font-body` (Space Grotesk), `--font-syncopate` (Syncopate — loaded, available for display use)

### Utility Classes (defined in `globals.css`)

- `btn-cta` — primary CTA button (cream fill, navy text, pill shape)
- `btn-outline-light` — ghost button for dark backgrounds
- `btn-outline` — ghost button for light backgrounds
- `eyebrow` / `eyebrow-light` — small all-caps section labels

### Key Patterns

**Adding a new nav tab:** Add the section component with a matching `id` to `page.tsx`, add the nav item to the `navItems` array in `site-header.tsx`. The `id` must exactly match the `url` hash (e.g. `id="work"` ↔ `url: "#work"`).

**Section scroll targeting:** All tabbed sections use `scroll-mt-24` to offset for the fixed navbar. Non-tabbed sections don't need this.

**`overscroll-behavior: none`** is set on `html` in `globals.css` to reduce macOS rubber-band bounce (partially effective in Chrome).

**Dark Section Pattern:** The hero is a `div.dark` with inline CSS variable overrides so `PixelHero`'s shadcn-style tokens (`bg-background`, `text-primary`, etc.) resolve to SiteSpark navy colors instead of the site's default white. Always pass `pixelColors` explicitly when using `PixelHero` inside such a wrapper — its color-detection code appends a div to `document.body`, which sits outside the dark wrapper and would pick up white-mode values otherwise.

### Screenshots

Puppeteer is installed in `node_modules/`. The bundled Chrome for Testing has a `Page.captureScreenshot` bug on macOS ARM64 — always use system Chrome instead:

```js
puppeteer.launch({
  headless: 'new',
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
})
```

Use `waitUntil: 'load'` (not `networkidle0`) with the Next.js dev server to avoid HMR connection timeouts.

---

## HTML Site (`tg-web-studio/`)

Three files: `index.html` (all markup), `css/style.css` (tokens + component styles), `js/main.js` (nav, scroll reveal, FAQ accordion, portfolio filter, form submit). A `<script type="module">` at the bottom of `index.html` runs the hero wave animation via `simplex-noise@4` from CDN.

Serve via the parent directory's static server: `node /Users/granttong/WEB/serve.mjs` → `http://localhost:3000/Websites-Claude-Code/tg-web-studio/index.html`
