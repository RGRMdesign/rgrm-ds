# @rgrmdesign/paragraph-css

Paragraph / body text typography for the RGRM design system. Ships plain CSS that
consumes the CSS custom properties from
[`@rgrmdesign/rgrm-ds-tokens`](https://www.npmjs.com/package/@rgrmdesign/rgrm-ds-tokens).

## Install

```bash
pnpm add @rgrmdesign/paragraph-css @rgrmdesign/rgrm-ds-tokens
```

`@rgrmdesign/rgrm-ds-tokens` is a peer dependency — load it once in your app so the
required custom properties are defined.

## Usage

```js
import '@rgrmdesign/rgrm-ds-tokens'; // defines the design tokens (once, app-wide)
import '@rgrmdesign/paragraph-css';
```

```html
<p class="rgrm-paragraph rgrm-paragraph--measure">Body copy at the default scale.</p>
<p class="rgrm-paragraph rgrm-paragraph--large">A larger lead paragraph.</p>
<p class="rgrm-paragraph rgrm-paragraph--small">Fine print / captions.</p>
```

## React

Use [`@rgrmdesign/paragraph-react`](../paragraph-react/) or
[`@rgrmdesign/paragraph-element`](../paragraph-element/) (`<rgrm-paragraph>`) for framework wrappers
that apply the same classes and load this stylesheet automatically. Import
`@rgrmdesign/paragraph-css` directly only for hand-written HTML with classes.

## Classes

| Class                                | Purpose                                   |
| ------------------------------------ | ----------------------------------------- |
| `.rgrm-paragraph`                    | Base body text (the `main` scale).        |
| `.rgrm-paragraph--small` / `--large` | Alternate size scales.                    |
| `.rgrm-paragraph--medium` / `--bold` | Weight modifiers.                         |
| `.rgrm-paragraph--measure`           | Caps line length for comfortable reading. |
