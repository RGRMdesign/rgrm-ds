# RGRM Design System

A pnpm + Turborepo monorepo for the RGRM design system. The component packages ship
plain CSS that consumes the CSS custom properties from
[`@rgrmdesign/rgrm-ds-tokens`](https://www.npmjs.com/package/@rgrmdesign/rgrm-ds-tokens)
(design tokens generated from Figma variables, maintained in a separate repository).

## Structure

```
rgrm-ds/
├── apps/
│   └── sandbox/          # Vite (vanilla) preview app for the components
└── packages/
    ├── heading/          # @rgrmdesign/heading  — heading typography (CSS)
    └── paragraph/        # @rgrmdesign/paragraph — body typography (CSS)
```

Each package only _uses_ the token custom properties (`var(--font-size-h1)`, …); the
tokens themselves are a **peer dependency** so they are loaded exactly once by the
consuming app.

## Requirements

- Node.js >= 22
- pnpm (this repo pins `pnpm@10.33.0` via `packageManager`)

## Getting started

```bash
pnpm install
pnpm build      # build all packages (CSS bundled + minified via Lightning CSS)
pnpm dev        # watch packages + run the sandbox (Vite)
```

The sandbox opens at the URL Vite prints (default http://localhost:5173) and includes a
Root / Dark / Brand theme switch that toggles `data-theme` on `<html>`.

## Scripts

| Script                         | Description                                                           |
| ------------------------------ | --------------------------------------------------------------------- |
| `pnpm dev`                     | Turbo runs each package's CSS watch build and the sandbox dev server. |
| `pnpm build`                   | Builds every package and the sandbox.                                 |
| `pnpm clean`                   | Removes build output and caches.                                      |
| `pnpm format` / `format:check` | Prettier across the repo.                                             |

## Adding a new component package

1. Create `packages/<name>/` with a `package.json` and `src/index.css`.
2. Author classes that consume token custom properties; add the tokens package as a
   `peerDependency`.
3. Reuse the `build` / `dev` / `clean` scripts from an existing package.
