# RGRM Design System

A pnpm + Turborepo monorepo for the RGRM design system. The component packages ship
plain CSS that consumes the CSS custom properties from
[`@rgrmdesign/rgrm-ds-tokens`](https://www.npmjs.com/package/@rgrmdesign/rgrm-ds-tokens)
(design tokens generated from Figma variables, maintained in a separate repository).

## Structure

```
rgrm-ds/
├── apps/
│   ├── sandbox-css/       # Vite preview for *-css packages (port 5173)
│   ├── sandbox-react/     # Vite + React preview (port 5174)
│   ├── sandbox-element/   # Vite preview for *-element packages (port 5175)
│   └── storybook/         # Component docs (port 6006)
└── packages/
    ├── sandbox-shared/    # Shared theme switcher + sandbox chrome styles
    ├── paragraph-css/     # @rgrmdesign/paragraph-css — body typography (CSS)
    ├── paragraph-react/   # @rgrmdesign/paragraph-react — React wrapper
    └── paragraph-element/ # @rgrmdesign/paragraph-element — <rgrm-paragraph>
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
pnpm dev        # watch packages + run all sandboxes
```

| Sandbox          | URL                      | Purpose                          |
| ---------------- | ------------------------ | -------------------------------- |
| `sandbox-css`    | http://localhost:5173    | Vanilla HTML / CSS classes       |
| `sandbox-react`  | http://localhost:5174    | React components                 |
| `sandbox-element`| http://localhost:5175    | Web Components (`<rgrm-paragraph>`) |
| `storybook`      | http://localhost:6006    | Storybook (component docs)          |

All sandboxes include a Root / Dark / Brand theme switch that toggles `data-theme` on `<html>`.
Storybook exposes the same themes via the toolbar (globals).

Run a single sandbox:

```bash
pnpm dev:css
pnpm dev:react
pnpm dev:element
```

Storybook (build packages first if you have not run `pnpm build`):

```bash
pnpm storybook
pnpm build-storybook   # static export in apps/storybook/storybook-static
```

### Published docs (GitHub Pages)

Storybook is deployed from `main` via [`.github/workflows/deploy-storybook.yml`](.github/workflows/deploy-storybook.yml):

**https://rgrmdesign.github.io/rgrm-ds/**

One-time setup in the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Production builds use `base: '/rgrm-ds/'` in `apps/storybook/.storybook/main.ts` (local `pnpm storybook` is unchanged).

## Scripts

| Script                         | Description                                                           |
| ------------------------------ | --------------------------------------------------------------------- |
| `pnpm dev`                     | Turbo: package watch builds + all sandboxes.                          |
| `pnpm dev:css`                 | Only `sandbox-css`.                                                   |
| `pnpm dev:react`               | Only `sandbox-react`.                                                 |
| `pnpm dev:element`             | Only `sandbox-element`.                                               |
| `pnpm storybook`               | Storybook dev server (`apps/storybook`, port 6006).                   |
| `pnpm build-storybook`         | Static Storybook build.                                               |
| `pnpm build`                   | Builds every package and all sandboxes.                               |
| `pnpm clean`                   | Removes build output and caches.                                      |
| `pnpm format` / `format:check` | Prettier across the repo.                                             |

## Adding a new component package

1. Create `packages/<name>-css/` with styles that consume token custom properties.
2. Add optional `packages/<name>-react/` and/or `packages/<name>-element/` adapters.
3. Reuse the `build` / `dev` / `clean` scripts from an existing package.
4. Add demos to the matching sandbox app(s).
