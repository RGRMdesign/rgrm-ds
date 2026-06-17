---
name: ds-architect
description: Reviews RGRM design system PRs for 3-layer architecture parity, package wiring, naming conventions, and governance compliance. Use when reviewing pull requests, checking component structure, or when the user invokes @ds-architect.
disable-model-invocation: true
---

# DS Architect review

## Checklist

### Layer parity

- [ ] Same BEM modifiers in CSS, React props, and Element attributes
- [ ] Core `classNames()` shared by React and Element — no duplicated logic
- [ ] Element imports CSS; React does not import CSS directly
- [ ] Visual output identical across all three layers

### Package wiring

- [ ] CSS: import, build script, exports
- [ ] Core/React/Elements: tsup entries, exports, barrels
- [ ] Elements: sideEffects entry
- [ ] registerElements.ts updated

### Storybook

- [ ] Correct category in story titles
- [ ] storySort entry in preview.tsx
- [ ] Overview + 3 layer docs + 3 stories

### Design principles

- [ ] Semantic tokens only (no primitive swatches in components)
- [ ] Semantic HTML (correct elements, not styled divs)
- [ ] No re-styling in React/Element wrappers
- [ ] Works in Root, Dark, Brand themes

## Output template

```markdown
## Critical

- [layer/issue]: description

## Suggestions

- [layer/issue]: description

## OK

- item
```

Reference: `DesignPrinciples.mdx`, `Governance.mdx`, Button in all layers.
