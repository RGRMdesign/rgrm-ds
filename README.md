# RGRM Design System

A pnpm + Turborepo monorepo for the RGRM design system. Packages are organised **per
layer / framework** (not per component), so adding components does not multiply the
number of packages. The CSS package ships plain CSS that consumes the CSS custom
properties from
[`@rgrmdesign/rgrm-ds-tokens`](https://www.npmjs.com/package/@rgrmdesign/rgrm-ds-tokens)
(design tokens generated from Figma variables, maintained in a separate repository).

**Contributions welcome.** See [CONTRIBUTING.md](CONTRIBUTING.md) for how to report
issues, propose features, or open a pull request.

## Roadmap

The design system is in early development. The architecture (monorepo, per-layer
packages, design tokens) is in place; the component library is still small and growing.
Published docs: **https://rgrmdesign.github.io/rgrm-ds/**

**Available now**

| Category    | Components                 |
| ----------- | -------------------------- |
| Foundation  | Root, Fonts                |
| Typography  | Heading, Paragraph         |
| Content     | Link, Badge                |
| Layout      | Section, Inline, Stack     |
| Interaction | Button (`primary` variant) |

**Next**

- Content: List, Divider, Image
- Interaction: Button variants (secondary, ghost) + disabled state

**Later**

- Forms: Label, Input, Textarea, Field
- Containers: Card, Alert
- Complex UI: Nav, Tabs, Modal, Table
- Platform: broader theming, accessibility audit, automated tests

Phases (Now / Next / Later) use priority order instead of dates or versions so the
roadmap stays accurate during rapid iteration. The **Available now** table is the source
of truth for what actually ships today. Planned work is tracked in
[GitHub Issues](https://github.com/RGRMdesign/rgrm-ds/issues) — comment on an issue
before starting work.

## Structure

```
rgrm-ds/
├── apps/
│   ├── sandbox-css/       # Vite preview for the CSS package (port 5173)
│   ├── sandbox-react/     # Vite + React preview (port 5174)
│   ├── sandbox-element/   # Vite preview for the Web Components (port 5175)
│   └── storybook/         # Component docs (port 6006)
└── packages/
    ├── sandbox-shared/    # Shared theme switcher + sandbox chrome styles
    ├── core/              # @rgrmdesign/rgrm-ds-core — framework-agnostic logic + types
    ├── css/               # @rgrmdesign/rgrm-ds-css — all component styles (CSS)
    ├── react/             # @rgrmdesign/rgrm-ds-react — React components
    └── elements/          # @rgrmdesign/rgrm-ds-elements — Web Components
```

Each package exposes one entry per component via **sub-path exports** (e.g.
`@rgrmdesign/rgrm-ds-react/paragraph`, `@rgrmdesign/rgrm-ds-css/paragraph`) plus a
barrel (`.`) that re-exports everything, so consumers keep fine-grained tree-shaking.

`core` holds shared, framework-agnostic logic (BEM class builders, types) so the React
and Web Component layers never duplicate it. It is **published to npm** because `react`
and `elements` depend on it at runtime (it is not bundled into them), so it ships as a
transitive dependency — most apps never install `core` directly. The packages only _use_
the token custom properties (`var(--rgrm-theme-text)`, …); the tokens themselves are a
**peer dependency** so they are loaded exactly once by the consuming app.

## Requirements

- Node.js 24.x (pinned in [`.nvmrc`](.nvmrc); run `nvm use` or `fnm use` locally)
- pnpm (this repo pins `pnpm@10.33.0` via `packageManager`)

## Getting started

```bash
pnpm install
pnpm build      # build all packages (CSS bundled + minified via Lightning CSS)
pnpm dev        # watch packages + run all sandboxes
```

| Sandbox           | URL                   | Purpose                             |
| ----------------- | --------------------- | ----------------------------------- |
| `sandbox-css`     | http://localhost:5173 | Vanilla HTML / CSS classes          |
| `sandbox-react`   | http://localhost:5174 | React components                    |
| `sandbox-element` | http://localhost:5175 | Web Components (`<rgrm-paragraph>`) |
| `storybook`       | http://localhost:6006 | Storybook (component docs)          |

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

Production builds for GitHub Pages set `STORYBOOK_PAGES=true` so `base` is `/rgrm-ds/` in `apps/storybook/.storybook/main.ts`. Chromatic and local `pnpm build-storybook` use `/` (the Vite default).

### Visual regression (Chromatic)

Storybook snapshots run on every pull request via [`.github/workflows/chromatic.yml`](.github/workflows/chromatic.yml).

**One-time setup**

1. Create a project at [chromatic.com](https://www.chromatic.com/) and link this repository.
2. Add the project token as a GitHub secret: **Settings → Secrets and variables → Actions → `CHROMATIC_PROJECT_TOKEN`**.
3. Merge to `main` or run locally to establish the baseline:

   ```bash
   CHROMATIC_PROJECT_TOKEN=xxx pnpm chromatic
   ```

On pull requests, Chromatic posts a visual diff; accept or deny changes in the Chromatic UI. Changes merged to `main` are auto-accepted as the new baseline.

### Accessibility regression (Chromatic + Storybook)

Storybook includes `@storybook/addon-a11y` (axe-core) for local checks — open the **Accessibility** panel on any story to see violations such as `color-contrast` on buttons.

To run the same checks in CI via Chromatic:

1. In your Chromatic project, open **Manage** → **Accessibility tests** → **Enable** (one-time for existing projects).
2. Push to `main` or open a PR; Chromatic runs accessibility tests alongside visual tests and tracks new violations against the baseline.

## Scripts

| Script                           | Description                                         |
| -------------------------------- | --------------------------------------------------- |
| `pnpm dev`                       | Turbo: package watch builds + all sandboxes.        |
| `pnpm dev:css`                   | Only `sandbox-css`.                                 |
| `pnpm dev:react`                 | Only `sandbox-react`.                               |
| `pnpm dev:element`               | Only `sandbox-element`.                             |
| `pnpm storybook`                 | Storybook dev server (`apps/storybook`, port 6006). |
| `pnpm build-storybook`           | Static Storybook build.                             |
| `pnpm chromatic`                 | Publish Storybook snapshots to Chromatic (local).   |
| `pnpm build`                     | Builds every package and all sandboxes.             |
| `pnpm build:packages`            | Builds only the publishable `packages/*`.           |
| `pnpm clean`                     | Removes build output and caches.                    |
| `pnpm format` / `format:check`   | Prettier across the repo.                           |
| `pnpm lint:css` / `lint:css:fix` | Stylelint across CSS files.                         |
| `pnpm changeset`                 | Record a changeset for the next release.            |
| `pnpm version-packages`          | Apply changesets: bump versions + changelogs.       |
| `pnpm release`                   | Build packages then `changeset publish` to npm.     |

## Publishing to npm (Changesets)

Versioning and publishing run via [Changesets](https://github.com/changesets/changesets).
The published packages are `@rgrmdesign/rgrm-ds-core`, `-css`, `-react` and
`-elements`. The apps and `sandbox-shared` are `private` and are never published.

### Workflow

1. **Add a changeset** for every change that should ship (run on your feature branch):

   ```bash
   pnpm changeset
   ```

   Pick the affected packages, the bump type (`patch` / `minor` / `major`), and write a
   short summary. This creates a markdown file in `.changeset/` — commit it with your PR.

2. **Merge to `main`.** The [`release` workflow](.github/workflows/release.yml) picks up
   the changesets and opens a **"Release packages"** PR that bumps versions and updates
   the changelogs.

3. **Merge the Release PR.** When it lands on `main`, the same workflow builds the
   packages and runs `changeset publish` to push the new versions to npm.

Internal `workspace:*` dependencies are rewritten to real version ranges automatically at
publish time, so consumers get correct semver ranges.

### One-time setup

- **npm token**: create an automation token (`npm token create`) on an account that can
  publish to the `@rgrmdesign` scope, and add it as the `NPM_TOKEN`
  [repository secret](https://github.com/RGRMdesign/rgrm-ds/settings/secrets/actions) in GitHub.
- **Workflow permissions**: in **Settings → Actions → General → Workflow permissions**,
  enable **Read and write permissions** and **Allow GitHub Actions to create and approve
  pull requests** (needed for the Release PR).
- All four packages already declare `"publishConfig": { "access": "public" }`, so the
  scoped packages publish publicly.

### Manual / local publish (fallback)

If you ever need to publish without CI:

```bash
pnpm changeset            # record the change(s)
pnpm version-packages     # bump versions + changelogs locally
git commit -am "chore: release packages"
npm login                 # must have access to the @rgrmdesign scope
pnpm release              # builds packages, then `changeset publish`
git push --follow-tags
```

> First release: packages start at `0.0.0`. A `minor` changeset publishes them as
> `0.1.0`; choose `major` if you want to start at `1.0.0`.

## License

Source code in this repository is released under the [MIT License](LICENSE).

The MIT License does not grant trademark rights. See [TRADEMARK.md](TRADEMARK.md) for
guidance on using the RGRM Design name and brand.

Design tokens (`@rgrmdesign/rgrm-ds-tokens`) are licensed separately in their own
repository.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). By participating, you agree to abide by the
[Code of Conduct](CODE_OF_CONDUCT.md).

## Adding a new component

Components live _inside_ the existing layer packages — you do **not** create new
packages per component.

1. **CSS**: add `packages/css/src/<name>/index.css`, `@import` it from
   `packages/css/src/index.css`, and add a build step + `./<name>` export.
2. **Core**: add `packages/core/src/<name>/` with at least a `classNames()` helper
   (see Link for the minimal case; Button when variants apply). Register
   `src/<name>/index.ts` as a tsup entry. React and Elements import from core — never
   duplicate BEM class strings in wrappers.
3. **React / Elements**: add `packages/<react|elements>/src/<name>/`, re-export it from
   `src/index.ts`, register `src/<name>/index.ts` as a tsup entry, and add a `./<name>`
   sub-path export.
4. Add demos to the matching sandbox app(s) and a Storybook page.
