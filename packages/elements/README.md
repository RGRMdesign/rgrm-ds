# @rgrmdesign/rgrm-ds-elements

Web Components for the RGRM design system. Styles come from
[`@rgrmdesign/rgrm-ds-css`](../css/) and are loaded automatically on import.

Components use **light DOM** (an inner element with BEM classes) so design tokens
from the document apply normally.

## Install

```bash
pnpm add @rgrmdesign/rgrm-ds-elements @rgrmdesign/rgrm-ds-tokens
```

## Usage

Import everything (registers all elements):

```js
import '@rgrmdesign/rgrm-ds-tokens';
import '@rgrmdesign/rgrm-ds-elements';
```

Or register a single component via its sub-path export:

```js
import '@rgrmdesign/rgrm-ds-tokens';
import '@rgrmdesign/rgrm-ds-elements/paragraph';
```

```html
<rgrm-paragraph size="large">Lead paragraph.</rgrm-paragraph>
<rgrm-paragraph>Default body copy.</rgrm-paragraph>
<rgrm-paragraph size="small">Caption or fine print.</rgrm-paragraph>
```

## Paragraph (`<rgrm-paragraph>`)

| Attribute | Values             | Description                   |
| --------- | ------------------ | ----------------------------- |
| `size`    | `small` \| `large` | Size modifier; omit for main. |

Also exported: `RgrmParagraphElement` (class), `RGRM_PARAGRAPH_TAG`
(`'rgrm-paragraph'`), and `paragraphClassNames(size, className?)`.
