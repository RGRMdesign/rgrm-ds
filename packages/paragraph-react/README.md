# @rgrmdesign/paragraph-react

React wrapper for paragraph typography. Importing this package also loads
[`@rgrmdesign/paragraph-css`](https://www.npmjs.com/package/@rgrmdesign/paragraph-css) (included as a
dependency — no separate CSS import needed).

## Install

```bash
pnpm add @rgrmdesign/paragraph-react @rgrmdesign/rgrm-ds-tokens react
```

`@rgrmdesign/paragraph-css` is installed automatically. Load design tokens once in your app.

## Usage

```tsx
import '@rgrmdesign/rgrm-ds-tokens';
import { Paragraph } from '@rgrmdesign/paragraph-react';

export function Example() {
  return (
    <>
      <Paragraph size="large">Lead paragraph.</Paragraph>
      <Paragraph>Default body copy.</Paragraph>
      <Paragraph size="small">Caption or fine print.</Paragraph>
    </>
  );
}
```

For vanilla HTML (no React), use `@rgrmdesign/paragraph-css` directly instead.

## Props

| Prop        | Type                    | Description                          |
| ----------- | ----------------------- | ------------------------------------ |
| `size`      | `'small'` \| `'large'`  | Size modifier; omit for main scale.  |
| `className` | `string`                | Extra classes merged after modifiers.|
| …rest       | `<p>` HTML attributes   | Passed to the underlying element.    |

You can also use `paragraphClassNames(size, className)` if you need the class string without the component.
