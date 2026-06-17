---
name: build-component
description: Builds a complete RGRM design system component across CSS, React, and Web Component layers from a GitHub issue or spec. Use when implementing a new component, when an issue has the agent:build label, or when the user invokes @build-component or /build-component.
---

# Build component

## Quick start

1. Read the issue/spec and `AGENTS.md`
2. Follow `/build-component` command checklist step by step
3. Use Button as reference in every layer

## Build order

CSS → Core (if needed) → React + Elements → sandboxes → Storybook

## Reference files

| Layer     | Path                                             |
| --------- | ------------------------------------------------ |
| CSS       | `packages/css/src/button/index.css`              |
| Core      | `packages/core/src/button/classNames.ts`         |
| React     | `packages/react/src/button/Button.tsx`           |
| Element   | `packages/elements/src/button/button-element.ts` |
| Storybook | `apps/storybook/src/button/`                     |

## Temporary tokens

If a token is not yet in `@rgrmdesign/rgrm-ds-tokens`:

1. Use `var(--rgrm-<component>-<property>, <fallback>)` in CSS
2. Create `docs/token-proposals/<component>.md` with table: token name | fallback | theme | rationale
3. Note in PR summary: "Token proposals — implement in Figma"
4. Never use hardcoded colours as final styling

## Package wiring

Do not skip: tsup entries, package.json exports, CSS build script line, elements sideEffects, preview storySort, registerElements.ts.

## Finish

- `pnpm changeset` (minor)
- `pnpm format`
- `/validate-component`
- PR against `main` — never publish to npm
