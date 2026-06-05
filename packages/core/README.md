# @rgrmdesign/rgrm-ds-core

Framework-agnostic building blocks for the RGRM design system: BEM class name
builders and shared types used by the React and Web Component packages.

This package has no styling and no framework dependency. Most apps consume
[`@rgrmdesign/rgrm-ds-react`](../react/), [`@rgrmdesign/rgrm-ds-elements`](../elements/)
or [`@rgrmdesign/rgrm-ds-css`](../css/) instead of importing this directly.

## Install

```bash
pnpm add @rgrmdesign/rgrm-ds-core
```

## Usage

```ts
import { paragraphClassNames, type ParagraphSize } from '@rgrmdesign/rgrm-ds-core/paragraph';

paragraphClassNames('large'); // "rgrm-paragraph rgrm-paragraph--large"
```

Each component exposes its logic under a sub-path export (e.g. `/paragraph`).
The root export (`.`) re-exports everything.
