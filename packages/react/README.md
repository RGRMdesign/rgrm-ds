# @rgrmdesign/rgrm-ds-react

React components for the RGRM design system. Importing a component also loads its
styles from [`@rgrmdesign/rgrm-ds-css`](../css/) — no separate CSS import needed.

## Install

```bash
pnpm add @rgrmdesign/rgrm-ds-react @rgrmdesign/rgrm-ds-tokens react
```

`@rgrmdesign/rgrm-ds-css` is installed automatically. Load design tokens once in
your app.

## Usage

```tsx
import '@rgrmdesign/rgrm-ds-tokens';
import { Heading, Paragraph } from '@rgrmdesign/rgrm-ds-react';

export function Example() {
  return (
    <>
      <Heading level="display">Hero title.</Heading>
      <Heading level={1}>Page title.</Heading>
      <Paragraph size="large">Lead paragraph.</Paragraph>
      <Paragraph>Default body copy.</Paragraph>
      <Paragraph size="small">Caption or fine print.</Paragraph>
    </>
  );
}
```

Import a single component via its sub-path export for the tightest tree-shaking:

```tsx
import { Heading } from '@rgrmdesign/rgrm-ds-react/heading';
import { Paragraph } from '@rgrmdesign/rgrm-ds-react/paragraph';
```

## Heading

| Prop        | Type                            | Description                                          |
| ----------- | ------------------------------- | ---------------------------------------------------- |
| `level`     | `1` \| `2` … `6` \| `'display'` | Sets the scale (def. 2). `'display'` renders `<h1>`. |
| `className` | `string`                        | Extra classes merged after the modifier.             |
| …rest       | `<h1>`–`<h6>` HTML attrs        | Passed to the underlying element.                    |

You can also use `headingClassNames(level, className)` if you need the class string
without the component.

## Paragraph

| Prop        | Type                   | Description                           |
| ----------- | ---------------------- | ------------------------------------- |
| `size`      | `'small'` \| `'large'` | Size modifier; omit for main scale.   |
| `className` | `string`               | Extra classes merged after modifiers. |
| …rest       | `<p>` HTML attributes  | Passed to the underlying element.     |

You can also use `paragraphClassNames(size, className)` if you need the class
string without the component.
