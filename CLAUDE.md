# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo Overview

TG Web Studio — marketing website for a two-person student web design studio (Grant Tong and Siddharth Gattu). The repo contains two separate sites:

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
npm run dev      # Dev server — starts on :3001 if :3000 is taken
npm run build    # Production build
npm run lint     # ESLint
```

Port 3000 is typically occupied by the static file server in the parent `/WEB/` directory.

### Architecture

`src/app/page.tsx` assembles all section components in order. **The page section order must match the navbar tab order** — currently: Portfolio (Work) → Services → Process → FAQ → Contact. Non-tabbed sections (ValueStrip, About, Serve) sit above these.

**`src/components/sections/`** — one server component per page section. Hero is the exception — it delegates to `HeroGeometric` which is `"use client"` due to Framer Motion and the MeshGradient shader.

**`src/components/ui/`** — reusable primitives:
- `tubelight-navbar.tsx` — floating pill navbar with Framer Motion `layoutId` spring animation, IntersectionObserver scroll spy, and a 1-second navigation lock on click to prevent tab flicker when smooth-scrolling past intermediate sections
- `shape-landing-hero.tsx` — full-bleed dark hero using `@paper-design/shaders-react` `MeshGradient`
- `container-scroll-animation.tsx` — scroll-driven 3D tilt animation using Framer Motion

### Design Tokens

Tailwind v4 — tokens are defined in the `@theme {}` block in `src/app/globals.css`, **not** in a `tailwind.config.js`. Never hardcode colors.

Key tokens:
- Brand: `brand-500` (#112250 navy), `brand-400` (#3558A4), `brand-300` (#7090C4)
- CTA: `cta-500` (#F5F0E9 swan wing cream), `cta-600` (#E8E1D7)
- Text: `ink` (#112250), `ink-muted` (#3D4E70)
- Dark backgrounds: `navy-900` (#0D1428), `navy-800` (#18223C)
- Fonts: `--font-heading` (Archivo), `--font-body` (Space Grotesk)

### Utility Classes (defined in `globals.css`)

- `btn-cta` — primary CTA button (cream fill, navy text, pill shape)
- `btn-outline-light` — ghost button for dark backgrounds
- `btn-outline` — ghost button for light backgrounds
- `eyebrow` / `eyebrow-light` — small all-caps section labels

### Key Patterns

**Adding a new nav tab:** Add the section component with a matching `id` to `page.tsx`, add the nav item to the `navItems` array in `site-header.tsx`. The `id` must exactly match the `url` hash (e.g. `id="work"` ↔ `url: "#work"`).

**Section scroll targeting:** All tabbed sections use `scroll-mt-24` to offset for the fixed navbar. Non-tabbed sections don't need this.

**`overscroll-behavior: none`** is set on `html` in `globals.css` to reduce macOS rubber-band bounce (partially effective in Chrome — the compositor handles some of it before CSS applies).

**Hero background:** `MeshGradient` from `@paper-design/shaders-react` — monochrome black/white palette. Colors are set inline in `shape-landing-hero.tsx`.

---

## HTML Site (`tg-web-studio/`)

Three files: `index.html` (all markup), `css/style.css` (tokens + component styles), `js/main.js` (nav, scroll reveal, FAQ accordion, portfolio filter, form submit). A `<script type="module">` at the bottom of `index.html` runs the hero wave animation via `simplex-noise@4` from CDN.

Serve via the parent directory's static server: `node /Users/granttong/WEB/serve.mjs` → `http://localhost:3000/Websites-Claude-Code/tg-web-studio/index.html`
