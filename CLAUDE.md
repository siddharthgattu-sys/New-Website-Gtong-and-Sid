# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

TG Web Studio — a marketing website for a two-person student web design studio (Grant Tong and Siddharth Gattu). The site is **plain HTML/CSS/JS with no build step, no framework, and no package manager**.

## Serving & Previewing

The dev server and screenshot tool live in the **parent directory** (`/Users/granttong/WEB/`), not in this repo:

```bash
# Start server (serves WEB/ as root at http://localhost:3000)
node /Users/granttong/WEB/serve.mjs

# Site URL (not the root — it's in a subdirectory)
http://localhost:3000/Websites-Claude-Code/tg-web-studio/index.html

# Screenshot
node /Users/granttong/WEB/screenshot.mjs http://localhost:3000/Websites-Claude-Code/tg-web-studio/index.html
```

Check `lsof -i :3000` before starting the server — it's often already running.

## Architecture

All code lives in `tg-web-studio/` across three files:

| File | Role |
|------|------|
| `index.html` | All markup. Sections are self-contained and commented (`NAVBAR`, `HERO`, `VALUE STRIP`, etc.) |
| `css/style.css` | All styles. Opens with CSS custom properties (design tokens), then component blocks in the same order as the HTML |
| `js/main.js` | Single `DOMContentLoaded` listener. Handles: footer year, mobile nav, scroll reveal (IntersectionObserver), FAQ accordion, portfolio filter, form validation/submission |

There is also a `<script type="module">` block at the bottom of `index.html` that runs the hero wave animation (imports `simplex-noise` from jsDelivr CDN).

## Design Tokens

All brand values live in `:root` in `style.css`. Never hardcode colors — use variables:

- `--color-primary: #0EA5E9` / `--color-primary-dark: #0284C7`
- `--color-cta: #F97316` / `--color-cta-dark: #EA580C`
- `--color-dark-bg: #07203A` (used by `.serve`, `.contact`, `.footer`)
- `--font-heading: "Archivo"` / `--font-body: "Space Grotesk"`
- `--radius-pill: 999px` (buttons), `--radius-lg: 24px` (cards)

## Key Patterns

**Scroll reveal:** Elements with `.reveal` start at `opacity: 0; transform: translateY(24px)` and gain `.is-visible` via IntersectionObserver. In Puppeteer screenshots these sections appear blank — that's expected; they work fine in a real browser.

**Hero wave background:** Interactive SVG animation in `index.html` (`#waveSvg`). Uses `simplex-noise@4` from CDN via ESM import. Responds to `mousemove` and `touchmove` on the hero element. On resize, `setSize()` + `setLines()` rebuild the grid.

**Porting React components:** When given a React/TypeScript/Tailwind component prompt, always port it to vanilla JS + CSS. Use `<script type="module">` for ESM CDN imports when an npm package is needed.

**Dark sections** (`.serve`, `.contact`, `.footer`) use `--color-dark-bg` and have their own light text/border token variants (`--color-dark-text`, `--color-dark-border`, etc.).

## Repo Notes

- Shared repo: collaborators are `granito12` (Grant) and `siddharthgattu-sys` (Siddharth). Always `git fetch` before committing to check for upstream changes.
- Remote: `git@github.com:siddharthgattu-sys/Websites-Claude-Code`
- The file `CLAUDE (2).md` in the repo root is a copy of the global frontend design rules — it is not repo-specific and can be ignored.
