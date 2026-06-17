---
name: react-export
description: Reviews RGRM React component API, props, tree-shakeable sub-path exports, and React.mdx documentation snippets. Use when reviewing React layer changes or when the user invokes @react-export.
disable-model-invocation: true
---

# React export review

## Checklist

### Component API

- [ ] Props extend correct HTML element type
- [ ] Sensible defaults documented (e.g. `variant = 'primary'`)
- [ ] `className` merged via core `classNames()` — not overwritten
- [ ] Text children wrapped in label class when CSS expects it

### Package exports

- [ ] Sub-path: `@rgrmdesign/rgrm-ds-react/<name>`
- [ ] tsup entry registered
- [ ] Barrel `src/index.ts` re-exports
- [ ] No CSS import in component file

### Documentation

- [ ] `React.mdx` with install steps and copy-paste examples
- [ ] `snippets.ts` provides accurate usage snippet
- [ ] `fixtures.ts` argTypes match public API

## Output template

```markdown
## Critical

- issue + fix

## Suggestions

- improvement

## OK

- item
```

Reference: `packages/react/src/button/Button.tsx`, `apps/storybook/src/button/React.mdx`.
