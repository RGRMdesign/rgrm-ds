# Validate component

Run full validation for a component change. Report pass/fail for each check.

## Commands

```bash
pnpm format:check
pnpm lint:css
pnpm build:packages
pnpm build-storybook
```

All four must pass.

## Layer checks

- [ ] Package exports resolve: `@rgrmdesign/rgrm-ds-{css,core,react,elements}/<name>`
- [ ] tsup entries registered in core, react, elements
- [ ] CSS lightningcss build line present
- [ ] Elements `sideEffects` includes `./dist/<name>/index.js`
- [ ] Storybook: CSS, React, and Web Components stories exist
- [ ] `preview.tsx` storySort entry present
- [ ] `registerElements.ts` includes the component
- [ ] No hardcoded colours in CSS (only `var(--rgrm-*, fallback)`)
- [ ] Changeset in `.changeset/` (minor for new component)

## PR checklist

- [ ] Storybook Accessibility panel checked on affected stories
- [ ] Chromatic snapshots expected for new/changed stories (note in PR)

## Output

Report results as:

- **Pass** — check name
- **Fail** — check name + what to fix

Reference: `AGENTS.md` validation section.
