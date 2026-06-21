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

`src/app/page.tsx` assembles all section components in order. **The page section order must match the navbar link order.** Current order:

```
Hero → Serve → Portfolio → Services → Process → Faq → About → Contact
```

Linked sections (Portfolio, Services, Process, Faq, Contact) must have `id` attributes matching the `href` hash in the `navLinks` array in `site-header.tsx`. Non-linked sections (Serve, About) don't need nav entries.

**`src/components/sections/`** — one component per page section:
- `site-header.tsx` — `"use client"`. Floating header that widens to `max-w-[1420px]` at the top and shrinks to `max-w-[1150px]` floating pill when scrolled past 80px. Logo flips from white to `brightness(0)` on scroll. All nav links and CTAs call `scrollToHash` from `src/lib/scroll.ts`.
- `hero.tsx` — `"use client"`. Wraps `PixelHero` in a `div.dark` with inline CSS variable overrides for the navy theme. Passes `description` as `React.ReactNode` (static text + `KineticText`).
- `serve.tsx` — Compact dark strip (`bg-[#080D1A]`), 6-column grid of label-only pills, heading uses serif italic on "yours" to echo the hero.

**`src/components/ui/`** — reusable primitives:
- `pixel-perfect-hero.tsx` — full-viewport hero with canvas pixel ripple, "tahoe-glass-text" shimmer headline, and value-prop marquee. `description` prop accepts `React.ReactNode`. Requires `pixelColors` prop when inside a dark wrapper (see Dark Section Pattern).
- `kinetic-text.tsx` — CSS hover-driven font-weight cascade. Hovering a letter spikes it to `font-[900]`; neighbors interpolate via `has-[+span:hover]` selectors. No framer-motion.
- `menu-toggle-icon.tsx` — animated hamburger/close SVG.
- `use-scroll.ts` — RAF-throttled scroll hook with `{ passive: true }`. Returns `true` once `window.scrollY` exceeds a threshold.
- `container-scroll-animation.tsx` — scroll-driven 3D tilt (Framer Motion). Legacy, still in codebase.
- `tubelight-navbar.tsx` / `shape-landing-hero.tsx` — legacy components, unused.

**`src/lib/scroll.ts`** — shared smooth-scroll utility. `smoothScrollTo(targetY)` runs a 500ms `easeInOutQuart` RAF animation. `scrollToHash(href)` resolves a hash to a DOM element (respecting `scroll-margin-top`) and calls `smoothScrollTo`. A single `activeRaf` ref cancels any in-progress animation. Import this instead of writing inline scroll logic.

### Logo

`public/logo-sitespark.png` (670×179 PNG, white on transparent). Used in `site-header.tsx` and `footer.tsx`. Header applies `filter: brightness(0)` when scrolled to darken it on light sections.

### Design Tokens

Tailwind v4 — tokens live in the `@theme {}` block in `src/app/globals.css`. Never hardcode colors or fonts.

Key tokens:
- Brand: `brand-500` (#112250), `brand-400` (#3558A4), `brand-300` (#7090C4)
- Dark backgrounds: `navy-900` (#0D1428), `navy-800` (#18223C)
- Text: `ink` (#112250), `ink-muted` (#3D4E70)
- CTA: `cta-500` (#F5F0E9 cream), `cta-600` (#E8E1D7)
- Fonts: `--font-heading` (Archivo), `--font-body` (Poppins), `--font-stack-headline` (Poppins — used for hero description), `--font-syncopate` (loaded, available)

### Key Patterns

**Adding a nav link:** Add the section with a matching `id` to `page.tsx`, add to `navLinks` in `site-header.tsx`. Linked sections need `scroll-mt-24`.

**Smooth scroll:** Always use `scrollToHash` from `src/lib/scroll.ts`. Never use CSS `scroll-behavior: smooth` — it was removed because it conflicts with Framer Motion's `useScroll`.

**Dark Section Pattern:** The hero wraps `PixelHero` in `div.dark` with inline CSS variable overrides. Always pass `pixelColors` explicitly — the component's fallback color-detection reads from `document.body` which sits outside the dark wrapper.

**Hero description:** `PixelHero` accepts `description` as `React.ReactNode`, allowing inline components like `KineticText`. `hero.tsx` must be `"use client"` because it renders client components in the description prop.

**`KineticText` pointer events:** The description container in `pixel-perfect-hero.tsx` is `pointer-events-none`. The inner description div overrides with `pointer-events-auto` so hover works on `KineticText`.

### Screenshots

Puppeteer is in `node_modules/`. Always use system Chrome on macOS:

```js
puppeteer.launch({
  headless: 'new',
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
})
```

Use `waitUntil: 'load'` (not `networkidle0`) to avoid HMR timeouts. Screenshots save to `../temporary screenshots/` (relative to repo root) via `screenshot.mjs`.

---

## HTML Site (`tg-web-studio/`)

Three files: `index.html`, `css/style.css`, `js/main.js`. Hero wave animation via `simplex-noise@4` from CDN.

Serve via parent static server: `node /Users/granttong/WEB/serve.mjs` → `http://localhost:3000/Websites-Claude-Code/tg-web-studio/index.html`
