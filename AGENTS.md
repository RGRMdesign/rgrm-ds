# Agent instructions — RGRM Design System

Central entry point for Cursor agents (cloud and local) working in this repository.

## Canonical documentation

Read these before changing components:

| Topic                                   | Location                                       |
| --------------------------------------- | ---------------------------------------------- |
| Design principles (8 rules)             | `apps/storybook/src/docs/DesignPrinciples.mdx` |
| Architecture & definition of done       | `apps/storybook/src/docs/Governance.mdx`       |
| Consumer setup (tokens, fonts, theming) | `apps/storybook/src/docs/GettingStarted.mdx`   |
| Adding a component                      | `README.md#adding-a-new-component`             |
| Pull request expectations               | `CONTRIBUTING.md`                              |
| Roadmap                                 | `README.md#roadmap`                            |

## Three-layer model

Consumers pick one of **three equivalent layers** — same visuals, same behaviour, different integration style:

| Layer              | Package                        | For                                      |
| ------------------ | ------------------------------ | ---------------------------------------- |
| **CSS**            | `@rgrmdesign/rgrm-ds-css`      | Hand-written HTML or any stack           |
| **React**          | `@rgrmdesign/rgrm-ds-react`    | React apps                               |
| **Web Components** | `@rgrmdesign/rgrm-ds-elements` | Vanilla JS, SSR, or non-React frameworks |

**CSS is the single source of truth for visuals.** React and Web Components are thin wrappers that apply the exact same BEM classes — they never add their own styling.

### Shared core (required)

Every three-layer component includes **`packages/core`** so React and Web Components share the same class logic (see Link for the minimal case):

- At minimum: `<name>ClassNames(className?)` — e.g. `linkClassNames()`, `badgeClassNames()`
- Add variant types, modifier constants, or shared logic when the component needs them (Button, Paragraph)

Imported by both `@rgrmdesign/rgrm-ds-react/<name>` and `@rgrmdesign/rgrm-ds-elements/<name>`. Minimal reference: **Link** (`packages/core/src/link/`). Full reference: **Button**.

### Web Components specifics

The Elements layer is not “CSS with a tag” — each component is a **custom element** with its own contract:

- **Tag:** `<rgrm-<name>>` (e.g. `<rgrm-button variant="primary">`)
- **Light DOM** — no Shadow DOM; an inner semantic element (e.g. `<button>`) receives BEM classes via core `classNames()`
- **`observedAttributes`** — public HTML attributes mirror React props (e.g. `variant`)
- **CSS side-effect** — `index.ts` imports `@rgrmdesign/rgrm-ds-css/<name>` so styles load on import
- **Registration** — add to `apps/storybook/.storybook/registerElements.ts`; set `sideEffects` in `package.json`

### Build order

CSS → Core → React + Web Components (in parallel) → three sandboxes → Storybook (Overview + CSS + React + Web Components docs).

Reference implementation: **Button** — `packages/{css,core,react,elements}/src/button/` and `apps/storybook/src/button/`.

## Naming conventions

| Domain          | Convention              | Example                          |
| --------------- | ----------------------- | -------------------------------- |
| CSS classes     | BEM with `rgrm-` prefix | `.rgrm-list--unordered`          |
| Tokens          | `--rgrm-{group}-{name}` | `--rgrm-theme-text`              |
| Web components  | `rgrm-{component}`      | `<rgrm-list>`                    |
| Package imports | sub-path per component  | `@rgrmdesign/rgrm-ds-react/list` |

- Use **semantic** tokens (`--rgrm-theme-*`, `--rgrm-button-primary-*`), not primitive swatches (`--rgrm-core-swatch-*`)
- Prefer fluid `clamp()` tokens for scalable spacing/type
- Theming via `data-theme` (Root / Dark / Brand) — components read tokens, never define themes

## Token policy

Components must be token-driven. If a token does not yet exist in `@rgrmdesign/rgrm-ds-tokens`:

1. Use `var(--rgrm-<component>-<property>, <fallback>)` in CSS
2. Document proposals in `docs/token-proposals/<component>.md`
3. Note in the PR: "Token proposals — implement in Figma"
4. Never use raw hex/rgb/px as final styling without the `var()` fallback pattern

## Package wiring (required per component)

Register the component in all affected packages:

| Package      | Update                                                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| **css**      | `src/<name>/index.css`, `@import` in `src/index.css`, lightningcss line in `build` script, `./<name>` + `./<name>.css` exports |
| **core**     | `classNames.ts`, tsup entry, `package.json` export, barrel `src/index.ts`                                                      |
| **react**    | `<Name>.tsx`, tsup entry, export, barrel                                                                                       |
| **elements** | `<name>-element.ts`, tsup entry, export, barrel, **`sideEffects`** entry, `registerElements.ts`                                |

Also update `apps/storybook/.storybook/preview.tsx` **storySort** under the correct category.

## Storybook conventions

- Story title: `{Category}/{Component}/{CSS|React|Web Components}`
- Overview MDX: `<Meta title='{Category}/{Component}/Overview' name='Overview' />`
- Figma link via `FIGMA_LIBRARY_URL` from `apps/storybook/src/docs/links.ts`
- Category mapping: Foundation → `Foundations`, Layout → `Wrappers`, Interaction → `Actions`

## Sandboxes

| App               | Pattern                                        |
| ----------------- | ---------------------------------------------- |
| `sandbox-css`     | BEM classes in `index.html`                    |
| `sandbox-react`   | `<Name>Demo.jsx` inside `<Root>` in `main.jsx` |
| `sandbox-element` | `<rgrm-<name>>` in `index.html`                |

## Toolchain

- Node **24.x** (`.nvmrc`), pnpm **10.33.0**
- Tokens peer: `@rgrmdesign/rgrm-ds-tokens` — see `peerDependencies` in `packages/css/package.json` (range `>=…` accepts all newer npm releases; bump the floor there when a component requires newer tokens)
- Run `pnpm build:packages` before Storybook

## Validation

```bash
pnpm format:check
pnpm lint:css
pnpm build:packages
pnpm build-storybook
```

Use `/build-component` for the full build checklist; use `/validate-component` before opening a PR.

## Changesets & release

- New component → `pnpm changeset` with **minor** bump for `css` (+ `core`/`react`/`elements` if changed)
- Only `packages/*` are publishable; apps and Storybook are ignored
- **Never publish to npm** — open a PR against `main`; maintainers handle release

## CI gates

| Gate                       | Workflow                                      |
| -------------------------- | --------------------------------------------- |
| Format + Stylelint + build | `.github/workflows/ci.yml`                    |
| Visual + a11y regression   | `.github/workflows/chromatic.yml`             |
| Release                    | `.github/workflows/release.yml` (after merge) |

Pre-commit: Husky runs lint-staged (Prettier + Stylelint on staged files).

## Cloud agent workflow

1. GitHub issue with label `agent:build` describes the component
2. Cloud agent runs `/build-component` command
3. Agent opens PR with layer checklist filled in
4. Local review: `@ds-architect`, `@a11y-reviewer`, `@react-export`, `@element-export`

See `docs/pilot-badge.md` for the first pilot (Badge component).

## Cursor Cloud specific instructions

Cloud agents use `.cursor/environment.json` with a **Node 24** Dockerfile (matches `.nvmrc` and `package.json` `engines`). If `install` or `start` fails with `ERR_PNPM_UNSUPPORTED_ENGINE`, the environment snapshot is stale — re-save it from [Cloud Agents dashboard](https://cursor.com/dashboard?tab=cloud-agents) after merging environment changes.

After environment bootstrap succeeds, verify before opening a PR:

```bash
pnpm format:check
pnpm lint:css
pnpm build:packages
pnpm build-storybook
```

Use `/validate-component` for the full checklist. Storybook runs in the cloud VM terminal (`pnpm storybook -- --ci`) for visual and Accessibility panel checks.
