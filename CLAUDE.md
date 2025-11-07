# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a French-language presentation about "local-first architecture and sync engines" built with Reveal.js, Preact, and TypeScript. The presentation explores modern web architecture patterns where data is synchronized rather than fetched, covering concepts like CRDTs, sync engines, and local-first software principles.

**Presentation URL:** https://benjilegnard.github.io/local-first-and-sync-engines/

## Commands

### Development
```bash
pnpm dev          # Start development server with hot reload
pnpm build        # Type-check with tsc and build for production
pnpm preview      # Preview production build locally
```

Package manager: **pnpm 10.13.1** (enforced via packageManager field)

## Architecture

### Reveal.js Integration
- **Main entry:** `src/main.tsx` initializes Reveal.js with plugins (Markdown, Notes, Highlight)
- **Slides source:** `public/local-first-and-sync-engines.md` (markdown file)
- **Slide separators:**
  - `\n\n\n` for horizontal slides
  - `\n\n` for vertical slides
  - `Notes :\n` for speaker notes
- **Configuration:** No progress bar, no controls, slide numbers for speaker view only, no transitions

### Interactive Components
The presentation can embed interactive Preact components in slides by:
1. Create component in `src/slides/` directory
2. Import component in `src/main.tsx`
3. Add component to `components` object (key = HTML element ID, value = component reference)
4. Add `<div id="component-key"></div>` in markdown where you want the component

**Example:** `network-balls` component is registered and can be used via `<div id="network-balls"></div>`

### SVG Component Authoring Guidelines

When creating interactive SVG components for slides:

- **Use `SvgContainer`:** Wrap SVG content in the `<SvgContainer>` component from `src/components/svg-container.tsx` for consistent dimensions (1280x720) and themed background
- **Stroke width:** Always use the `STROKE_WIDTH` constant exported from `src/components/svg-container.tsx` for consistent line thickness across all visualizations
- **Attribute naming:** Use kebab-case for SVG attributes (e.g., `stroke-width`, `font-size`, `text-anchor`), not camelCase
- **Colors:** Use Catppuccin CSS custom properties (`--ctp-*`) defined in `src/style.scss` for all fills and strokes to ensure proper light/dark mode switching
  - Available colors: `--ctp-text`, `--ctp-subtext0`, `--ctp-subtext1`, `--ctp-surface0`, `--ctp-surface1`, `--ctp-surface2`, `--ctp-overlay0`, `--ctp-overlay1`, `--ctp-overlay2`, `--ctp-base`, `--ctp-mantle`, `--ctp-crust`
  - Accent colors: `--ctp-rosewater`, `--ctp-flamingo`, `--ctp-pink`, `--ctp-mauve`, `--ctp-red`, `--ctp-maroon`, `--ctp-peach`, `--ctp-yellow`, `--ctp-green`, `--ctp-teal`, `--ctp-sky`, `--ctp-sapphire`, `--ctp-blue`, `--ctp-lavender`
- **Example:** `<circle fill="var(--ctp-mauve)" stroke="var(--ctp-text)" stroke-width={STROKE_WIDTH} />`

### Styling System
- **SCSS:** `src/style.scss` is the main stylesheet
- **Theme:** Catppuccin color scheme with automatic light/dark mode switching:
  - Light mode: Latte palette
  - Dark mode: Mocha palette
  - Switches based on `prefers-color-scheme` media query
- **CSS Custom Properties:** Theme colors are exposed as `--ctp-*` variables
- **Syntax Highlighting:** Uses Catppuccin themes for highlight.js (switches with color scheme)
- **Reveal.js Theme:** Custom theme based on Reveal.js template system, overrides CSS custom properties (`--r-*`) for dark mode

### Custom Vite Plugin
`vite.config.ts` includes a custom HMR plugin that triggers full page reload when `.md` files change, ensuring slide updates are reflected immediately during development.

## File Structure

```
src/
├── main.tsx                 # Entry point, Reveal.js initialization
├── style.scss              # Main stylesheet with Catppuccin theming
├── components/             # Reusable Preact components
│   └── svg-container.tsx   # SVG wrapper with fixed dimensions
└── slides/                 # Interactive slide components
    └── network-balls.tsx   # Network latency visualization (WIP)

public/
└── local-first-and-sync-engines.md  # Presentation content
```

## Key Dependencies

- **reveal.js 5.2.1:** Presentation framework
- **preact 10.27.0:** Lightweight React alternative for interactive components
- **@preact/signals:** State management
- **sass 1.90.0:** SCSS compilation
- **@catppuccin/palette & @catppuccin/highlightjs:** Color schemes
- **vite 7.1.2:** Build tool and dev server

## Presentation Language

All content is in French. Maintain French for slides, comments in presentation markdown, and user-facing text.
