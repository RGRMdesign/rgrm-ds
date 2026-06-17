# Validate component

Run full validation for a component change. Report pass/fail for each check.

## Commands

```bash
pnpm validate:component
```

Or run individually:

```bash
pnpm format:check
pnpm lint:css
pnpm build:packages
pnpm build-storybook
```

All four must pass. `build-storybook` is not in CI — Chromatic runs on the PR, but agents must verify locally before opening a PR.

## Layer checks

- [ ] Package exports resolve: `@rgrmdesign/rgrm-ds-{css,core,react,elements}/<name>`
- [ ] tsup entries registered in core, react, elements
- [ ] CSS lightningcss build line present
- [ ] Elements `sideEffects` includes `./dist/<name>/index.js`
- [ ] Storybook: CSS, React, and Web Components stories exist
- [ ] `preview.tsx` storySort entry present
- [ ] `registerElements.ts` includes the component
- [ ] No hardcoded colours in CSS (only `var(--rgrm-*, fallback)`)
- [ ] No non-English demo or doc strings (fixtures, sandboxes, Storybook MDX)
- [ ] Changeset in `.changeset/` (minor for new component)
- [ ] `README.md` roadmap updated (component in **Available now**, removed from **Next** if listed)

## PR checklist

- [ ] Storybook Accessibility panel checked on affected stories
- [ ] Chromatic snapshots expected for new/changed stories (note in PR)

## Output

Report results as:

- **Pass** — check name
- **Fail** — check name + what to fix

Reference: `AGENTS.md` validation section.
