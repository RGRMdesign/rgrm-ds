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
import '@rgrmdesign/rgrm-ds-elements/heading';
import '@rgrmdesign/rgrm-ds-elements/paragraph';
```

```html
<rgrm-heading level="1" appearance="display">Hero title.</rgrm-heading>
<rgrm-heading level="1">Page title.</rgrm-heading>
<rgrm-heading level="2">Section title.</rgrm-heading>

<rgrm-paragraph size="large">Lead paragraph.</rgrm-paragraph>
<rgrm-paragraph>Default body copy.</rgrm-paragraph>
<rgrm-paragraph size="small">Caption or fine print.</rgrm-paragraph>
```

## Heading (`<rgrm-heading>`)

| Attribute    | Values                 | Description                                              |
| ------------ | ---------------------- | -------------------------------------------------------- |
| `level`      | `1` … `6`              | Semantic heading level; sets inner `<h1>`–`<h6>` (def. 2). |
| `appearance` | `1` … `6` \| `display` | Visual scale; defaults to `level` when omitted.          |

Also exported: `RgrmHeadingElement` (class), `RGRM_HEADING_TAG`
(`'rgrm-heading'`), and `headingClassNames(appearance, className?)`.

## Paragraph (`<rgrm-paragraph>`)

| Attribute | Values             | Description                   |
| --------- | ------------------ | ----------------------------- |
| `size`    | `small` \| `large` | Size modifier; omit for main. |

Also exported: `RgrmParagraphElement` (class), `RGRM_PARAGRAPH_TAG`
(`'rgrm-paragraph'`), and `paragraphClassNames(size, className?)`.
