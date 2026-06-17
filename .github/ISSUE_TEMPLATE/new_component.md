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

Every component gets a core module. Pick one:

- [ ] **classNames only** (default — like Link)
- [ ] **Variants / sizes** — types and modifiers (like Button, Paragraph)
- [ ] **Shared logic** — constants or non-trivial logic (describe below):

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

When the spec above is complete, add label `agent:build` — the GitHub Action triggers the
Cursor automation webhook (see
[`docs/cursor-automation-build-component.md`](../../docs/cursor-automation-build-component.md)).
Repository owner only.

**Fallback (local/debug):** start a cloud agent manually with `/build-component` and link
this issue.
