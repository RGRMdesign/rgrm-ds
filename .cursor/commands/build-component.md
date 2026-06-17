# Build component

Build a complete design-system component from a GitHub issue or spec. Follow every step; check off as you go.

## Input

Issue body or spec with: component name, Storybook category, variants, API per layer (CSS / React / Element), acceptance criteria.

## Preparation

- [ ] Read `AGENTS.md`, `DesignPrinciples.mdx`, `Governance.mdx`
- [ ] Study Button in all layers as reference (`packages/*/src/button/`, `apps/storybook/src/button/`)

## Layer 1: CSS

- [ ] `packages/css/src/<name>/index.css` — BEM + semantic token-vars with fallbacks
- [ ] `@import` in `packages/css/src/index.css`
- [ ] lightningcss build line in `packages/css/package.json` `scripts.build`
- [ ] Exports: `./<name>` and `./<name>.css` in `packages/css/package.json`

## Core (if classNames/types needed)

- [ ] `packages/core/src/<name>/classNames.ts` + `index.ts`
- [ ] tsup entry in `packages/core/tsup.config.ts`
- [ ] Export in `packages/core/package.json` + barrel `src/index.ts`

## Layer 2: React

- [ ] `packages/react/src/<name>/<Name>.tsx` — thin wrapper, no CSS import
- [ ] `index.ts` + tsup entry + barrel + export in `package.json`

## Layer 3: Web Component

- [ ] `packages/elements/src/<name>/<name>-element.ts` — light DOM, `observedAttributes`
- [ ] `index.ts`: CSS side-effect import + `customElements.define` + core re-exports
- [ ] tsup entry + barrel + export + **sideEffects** entry in `package.json`
- [ ] Register in `apps/storybook/.storybook/registerElements.ts`

## Docs & demos

- [ ] `docs/token-proposals/<name>.md` for new tokens
- [ ] Storybook: `Overview.mdx` (FIGMA_LIBRARY_URL, "Choose an implementation")
- [ ] `Css.mdx` + `<Name>.css.stories.tsx` (title: `{Category}/{Name}/CSS`)
- [ ] `React.mdx` + `<Name>.react.stories.tsx` (title: `{Category}/{Name}/React`)
- [ ] `Element.mdx` + `<Name>.element.stories.tsx` (title: `{Category}/{Name}/Web Components`)
- [ ] `fixtures.ts` + `snippets.ts`
- [ ] `preview.tsx` storySort: add under correct category
- [ ] `sandbox-css`: demo in `index.html`
- [ ] `sandbox-react`: `<Name>Demo.jsx` in `<Root>` + `main.jsx`
- [ ] `sandbox-element`: `<rgrm-<name>>` in `index.html`

## Finish

- [ ] `pnpm changeset` → minor for css (+ core/react/elements if changed)
- [ ] `pnpm format`
- [ ] Run `/validate-component`
- [ ] Open PR against `main` with template filled in; never publish to npm

## Temporary tokens

If a token is not yet in `@rgrmdesign/rgrm-ds-tokens`:

1. Use `var(--rgrm-<component>-<property>, <fallback>)` in CSS
2. Document in `docs/token-proposals/<component>.md` (name | fallback | theme | rationale)
3. Note in PR summary: "Token proposals — implement in Figma"
4. Never use hardcoded colours as final styling
