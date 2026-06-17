# AGENTS.md

## Cursor Cloud specific instructions

RGRM Design System is a frontend-only pnpm + Turborepo monorepo (no backend, DB, or
Docker). Publishable libraries live in `packages/*` (`core`, `css`, `react`,
`elements`); the runnable dev surfaces are the Vite sandbox apps and Storybook in
`apps/*`. Standard commands and ports are documented in `README.md` ("Getting started"
and "Scripts") — use those rather than duplicating them here.

### Environment (already provisioned in the VM snapshot)

- The repo requires **Node 24.x** (`.nvmrc`, `engines.node`, and `.npmrc` has
  `engine-strict=true`, so Node 22 fails `pnpm install`). Node 24 + `pnpm` (via Corepack,
  pinned `pnpm@10.33.0`) are already installed and set as the global default — no
  reinstall needed. Just run `pnpm ...` directly.
- Non-obvious gotcha: the base image ships an older Node at `/exec-daemon/node` which is
  early in `PATH`. The default `node`/`npm`/`npx`/`pnpm` are overridden via symlinks in
  `/usr/local/cargo/bin` (first in `PATH`) pointing at the nvm Node 24 install. `nvm use`
  alone does NOT win against `/exec-daemon`; rely on these symlinks. The exec daemon
  calls its own absolute path, so overriding `node` globally does not affect it.
- The update script runs `pnpm install` on startup. The `esbuild` build script is
  intentionally not approved (only `lightningcss-cli` is in `pnpm.onlyBuiltDependencies`);
  the "Ignored build scripts: esbuild" warning is expected and builds still succeed.

### Running / testing

- `pnpm dev` runs all three sandboxes + package watch builds concurrently (persistent).
  **Storybook is a separate process** — start it with `pnpm storybook` (port 6006), it is
  not part of `pnpm dev`.
- Dev ports: `sandbox-css` 5173, `sandbox-react` 5174, `sandbox-element` 5175,
  Storybook 6006. All sandboxes have a Root/Dark/Brand theme switch that sets
  `data-theme` on `<html>`.
- There are **no JS/TS unit tests** in this repo. The only checks (mirroring CI in
  `.github/workflows/ci.yml`) are `pnpm lint:css` (Stylelint, CSS only) and
  `pnpm format:check` (Prettier). Visual/a11y regression runs via Chromatic in CI only.
- Pre-commit runs `lint-staged` (Prettier + Stylelint `--fix` on staged files) via Husky.
