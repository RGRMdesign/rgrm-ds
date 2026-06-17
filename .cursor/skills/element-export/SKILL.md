---
name: element-export
description: Reviews RGRM web component API, rgrm-* custom element tags, light DOM implementation, observedAttributes, registerElements registration, and Element.mdx snippets. Use when reviewing web component layer changes or when the user invokes @element-export.
disable-model-invocation: true
---

# Element export review

## Checklist

### Custom element

- [ ] Light DOM only — no `attachShadow`
- [ ] `RGRM_<NAME>_TAG = 'rgrm-<name>'` exported
- [ ] `observedAttributes` covers all public attributes
- [ ] Inner element uses core `classNames()` for BEM classes
- [ ] Label-wrapping for text children (see Button pattern)

### Package & registration

- [ ] `index.ts` starts with `import '@rgrmdesign/rgrm-ds-css/<name>'`
- [ ] `customElements.define` in `index.ts`
- [ ] Registered in `apps/storybook/.storybook/registerElements.ts`
- [ ] sideEffects entry in `package.json`
- [ ] Sub-path export: `@rgrmdesign/rgrm-ds-elements/<name>`

### Documentation

- [ ] `Element.mdx` with install and usage
- [ ] `snippets.ts` shows `<rgrm-<name>>` usage
- [ ] Story title uses "Web Components" (not "Element")

## Output template

```markdown
## Critical

- issue + fix

## Suggestions

- improvement

## OK

- item
```

Reference: `packages/elements/src/button/`, `apps/storybook/src/button/Element.mdx`.
