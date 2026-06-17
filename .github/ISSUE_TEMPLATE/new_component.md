---
name: New component
about: Request a new design system component for agent or manual implementation
title: 'Component: '
labels: enhancement
---

## Component

**Name:**

**Storybook category:** Foundations / Typography / Content / Wrappers / Actions / Forms

**Roadmap phase:** Now / Next / Later

## Variants

<!-- e.g. primary, secondary, disabled -->

## API per layer

### CSS

BEM classes and modifiers:

### React

Props (with defaults):

### Web Component

Attributes on `<rgrm-<name>>`:

## Core scope

Every component gets a core module. Default is **classNames only** (like Link). Check extra items only when applicable:

- [ ] classNames() only (default — leave unchecked if nothing extra)
- [ ] - variant / size types and modifiers (like Button, Paragraph)
- [ ] - shared constants or non-trivial logic — describe:

## Acceptance criteria

- [ ] CSS layer complete
- [ ] Core layer complete (`classNames.ts` minimum)
- [ ] React layer complete
- [ ] Web Component layer complete
- [ ] All three sandboxes updated
- [ ] Storybook: Overview + CSS + React + Web Components docs & stories
- [ ] Accessibility checked (WCAG AA, all themes)
- [ ] Changeset added

## Design references

Figma link or screenshots (optional):

## Agent build

Add label `agent:build` when ready for a cloud agent to implement. Then start a cloud agent with `/build-component` and link this issue.
