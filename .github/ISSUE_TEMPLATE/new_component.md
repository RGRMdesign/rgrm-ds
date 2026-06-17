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

## Design direction

Describe **what the component should feel like** — not CSS properties. The build agent
translates this into token-driven styles (`var(--rgrm-*, fallback)`), BEM classes, and
`docs/token-proposals/<name>.md`. You do not need to specify `background`, `border`, or
exact pixel values.

<!-- How to fill in this section:
- **Intent** — what the component is for and where it appears in the UI.
- **Preferred look** — 1–2 sentences on visual weight (e.g. subtle vs prominent, outlined vs filled).
- **References** — link to a specific Figma frame and/or attach a screenshot marked "implement this".
- **Similar to / Avoid** — point at existing components ("lighter than Button", "not button-like").
- **Content** — typical label text and length (helps spacing and typography without prescribing CSS).
If two directions were explored, say which is preferred (✅) and which to reject (❌).
-->

**Intent:**

**Preferred look:**

**References:** <!-- Figma frame URL and/or screenshot -->

**Similar to:** <!-- e.g. Link (minimal, inline) -->

**Avoid:** <!-- e.g. solid fill, button-like hover states -->

**Typical content:** <!-- e.g. "New", "Draft", short counts — max ~12 characters -->

**Agent note:** Propose tokens and BEM in code per `AGENTS.md`. If ambiguous, prefer the
lighter option and document assumptions in the PR.

## Variants

<!-- e.g. primary, secondary, disabled — informed by design direction above -->

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
- [ ] Visual matches **Design direction** in Root, Dark, and Brand themes

## Agent build

When the spec above is complete, add label `agent:build` — the GitHub Action triggers the
Cursor automation webhook (see
[`docs/cursor-automation-build-component.md`](../../docs/cursor-automation-build-component.md)).
Repository owner only.

**Fallback (local/debug):** start a cloud agent manually with `/build-component` and link
this issue.
