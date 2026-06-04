# @rgrmdesign/paragraph-element

Custom element `<rgrm-paragraph>` for paragraph typography. Importing this package registers the
element and loads
[`@rgrmdesign/paragraph-css`](https://www.npmjs.com/package/@rgrmdesign/paragraph-css).

Uses **light DOM** (inner `<p>` with BEM classes) so design tokens from the document apply normally.

## Install

```bash
pnpm add @rgrmdesign/paragraph-element @rgrmdesign/rgrm-ds-tokens
```

## Usage

```html
<script type="module">
  import '@rgrmdesign/rgrm-ds-tokens';
  import '@rgrmdesign/paragraph-element';
</script>

<rgrm-paragraph size="large">Lead paragraph.</rgrm-paragraph>
<rgrm-paragraph>Default body copy.</rgrm-paragraph>
<rgrm-paragraph size="small">Caption or fine print.</rgrm-paragraph>
```

Or in application code:

```js
import '@rgrmdesign/rgrm-ds-tokens';
import '@rgrmdesign/paragraph-element';
```

## Attributes

| Attribute | Values              | Description                    |
| --------- | ------------------- | ------------------------------ |
| `size`    | `small` \| `large`  | Size modifier; omit for main.  |

## API

- `RgrmParagraphElement` — class for extending or testing
- `RGRM_PARAGRAPH_TAG` — `'rgrm-paragraph'`
- `paragraphClassNames(size, className?)` — same helper as other surfaces
