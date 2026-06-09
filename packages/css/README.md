# @rgrmdesign/rgrm-ds-css

Component styles for the RGRM design system. Ships plain CSS that consumes the
CSS custom properties from
[`@rgrmdesign/rgrm-ds-tokens`](https://www.npmjs.com/package/@rgrmdesign/rgrm-ds-tokens).

## Install

```bash
pnpm add @rgrmdesign/rgrm-ds-css @rgrmdesign/rgrm-ds-tokens
```

`@rgrmdesign/rgrm-ds-tokens` is a peer dependency — load it once in your app so the
required custom properties are defined.

## Usage

Import tokens, fonts, and component styles:

```js
import '@rgrmdesign/rgrm-ds-tokens'; // design tokens (once, app-wide)
import '@rgrmdesign/rgrm-ds-css/fonts'; // Geist Sans via Fontsource (400, 500, 700)
import '@rgrmdesign/rgrm-ds-css';
```

The `/fonts` entry loads `@fontsource/geist-sans` and aligns the primary font-family token
with Fontsource’s registered name (`Geist Sans`). Skip it if you load Geist yourself.

Or import a single component's styles via its sub-path export:

```js
import '@rgrmdesign/rgrm-ds-css/heading';
import '@rgrmdesign/rgrm-ds-css/paragraph';
```

```html
<h1 class="rgrm-heading rgrm-heading--display">Hero title</h1>
<h1 class="rgrm-heading rgrm-heading--h1">Page title</h1>
<h2 class="rgrm-heading rgrm-heading--h2">Section title</h2>

<p class="rgrm-paragraph rgrm-paragraph--large">A larger lead paragraph.</p>
<p class="rgrm-paragraph">Body copy at the default scale.</p>
<p class="rgrm-paragraph rgrm-paragraph--small">Fine print / captions.</p>
```

## React / Web Component

Use [`@rgrmdesign/rgrm-ds-react`](../react/) or
[`@rgrmdesign/rgrm-ds-elements`](../elements/) (`<rgrm-paragraph>`) for framework
wrappers that apply these classes and load the stylesheet automatically.

## Components

| Sub-path     | Classes                                                                              |
| ------------ | ------------------------------------------------------------------------------------ |
| `/fonts`     | `@font-face` for Geist Sans (optional; load once in app entry)                       |
| `/heading`   | `.rgrm-heading`, `.rgrm-heading--display`, `.rgrm-heading--h1` … `.rgrm-heading--h6` |
| `/paragraph` | `.rgrm-paragraph`, `.rgrm-paragraph--small`, `.rgrm-paragraph--large`                |
