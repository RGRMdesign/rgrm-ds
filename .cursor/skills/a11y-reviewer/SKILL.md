---
name: a11y-reviewer
description: Reviews RGRM design system components for WCAG AA accessibility using Storybook addon-a11y patterns, semantic HTML, and theme contrast across Root, Dark, and Brand. Use when reviewing accessibility, a11y stories, or when the user invokes @a11y-reviewer.
disable-model-invocation: true
---

# Accessibility reviewer

## Scope

Test **all three story types** (CSS, React, Web Components) × **three themes** (Root, Dark, Brand via Storybook toolbar).

## Checklist

### Semantic markup

- [ ] Correct HTML elements (headings → h1–h6, buttons → button with type, links → a with href)
- [ ] Wrappers expose semantic elements, not generic divs
- [ ] Interactive elements keyboard-accessible

### Colour & contrast

- [ ] Colour from token themes — verify WCAG AA (color-contrast rule)
- [ ] All three themes usable (Root / Dark / Brand)
- [ ] Focus states visible (`:focus-visible`)

### Storybook a11y panel

- [ ] Open Accessibility panel on each affected story
- [ ] No violations on CSS, React, and Web Components stories
- [ ] Chromatic a11y baseline will be updated on PR — note expected changes

## Output template

```markdown
## Critical

- [story/theme]: violation + fix

## Suggestions

- improvement

## OK

- story/theme combinations that pass
```

Reference: `Governance.mdx` accessibility section, `@storybook/addon-a11y` in `apps/storybook/.storybook/preview.tsx`.
