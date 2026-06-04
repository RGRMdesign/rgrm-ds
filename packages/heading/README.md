# @rgrmdesign/heading

Heading typography for the RGRM design system. Ships plain CSS that consumes the
CSS custom properties from [`@rgrmdesign/rgrm-ds-tokens`](https://www.npmjs.com/package/@rgrmdesign/rgrm-ds-tokens).

## Install

```bash
pnpm add @rgrmdesign/heading @rgrmdesign/rgrm-ds-tokens
```

`@rgrmdesign/rgrm-ds-tokens` is a peer dependency — load it once in your app so the
required custom properties are defined.

## Usage

```js
import '@rgrmdesign/rgrm-ds-tokens'; // defines the design tokens (once, app-wide)
import '@rgrmdesign/heading';
```

```html
<h1 class="rgrm-heading rgrm-heading--h1">
  A bold <span class="rgrm-heading__accent">accent</span> headline
</h1>
<h2 class="rgrm-heading rgrm-heading--display">Display</h2>
```

## Classes

| Class                                      | Purpose                                                      |
| ------------------------------------------ | ------------------------------------------------------------ |
| `.rgrm-heading`                            | Base heading styles (defaults to the `h2` scale).            |
| `.rgrm-heading--display` / `--h1` … `--h6` | Size/line-height scale.                                      |
| `.rgrm-heading--regular` / `--medium`      | Weight modifiers (default is bold).                          |
| `.rgrm-heading__accent`                    | Applies the themed `--heading-accent` colour to inline text. |
