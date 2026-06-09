# @rgrmdesign/rgrm-ds-css

## 0.4.1

### Patch Changes

- [`00e7b36`](https://github.com/RGRMdesign/rgrm-ds/commit/00e7b367bb3285eeb0ec142a63839ed9e8836806) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Fix `/fonts` so it no longer overrides `--rgrm-typography-font-primary-family`. Register `@font-face` under `Geist` (matching the token) using Fontsource files directly, instead of importing Fontsource CSS that registers `Geist Sans`.

  React and Elements are republished so `/fonts` re-exports pick up the css fix for consumers on strict package managers.

## 0.4.0

### Minor Changes

- [`5b72331`](https://github.com/RGRMdesign/rgrm-ds/commit/5b723314f1a11c92304f01d2b0c00a37fc4176bd) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Add optional `/fonts` entry points that load Geist Sans via `@fontsource/geist-sans` (weights 400, 500, 700) and align the primary font-family token with Fontsource’s registered name (`Geist Sans`).
  - `@rgrmdesign/rgrm-ds-css/fonts` — foundation entry (new dependency on `@fontsource/geist-sans`)
  - `@rgrmdesign/rgrm-ds-react/fonts` and `@rgrmdesign/rgrm-ds-elements/fonts` — re-exports for consumers on strict package managers (e.g. pnpm)

  Import once in your app entry after tokens, e.g. `import '@rgrmdesign/rgrm-ds-react/fonts'`.

## 0.3.0

### Minor Changes

- [`b40a1ab`](https://github.com/RGRMdesign/rgrm-ds/commit/b40a1ab4bf5b5ea7e224c286b5437e6e8eb44db1) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Heading: split semantic `level` (h1–h6) from visual `appearance` (h1–h6 | display).

  **Breaking:** `level="display"` is removed. Use `level={1} appearance="display"` (React) or `level="1" appearance="display"` (element). `HeadingLevel` no longer includes `'display'`; use `HeadingAppearance` for the visual scale. `headingClassNames()` now takes `appearance` as its first argument.

  CSS class names are unchanged; the CSS package is released in lockstep with no functional stylesheet changes.

## 0.2.1

### Patch Changes

- [`4de0384`](https://github.com/RGRMdesign/rgrm-ds/commit/4de0384682ced563a53ebf8828d245663f2717f7) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Update ds-tokens dependency

## 0.2.0

### Minor Changes

- [`09cf76d`](https://github.com/RGRMdesign/rgrm-ds/commit/09cf76da34b1850215cef407168ce7a0ef45da74) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Add a Button component (primary variant) across all layers, built on the new
  `--rgrm-button-*` tokens from `@rgrmdesign/rgrm-ds-tokens` 0.6.0. Ships
  `buttonClassNames` (core), `.rgrm-button` styles (css), the `<Button>` React
  component, and the `<rgrm-button>` web component, each with `./button` sub-path
  exports. The token peer dependency is bumped to `>=0.6.0`.

## 0.1.1

### Patch Changes

- [`b1c2c6b`](https://github.com/RGRMdesign/rgrm-ds/commit/b1c2c6b0798b9ed92ec0000072c96c4d706f80e0) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Test for release workflow

## 0.1.0

### Minor Changes

- [`9e12821`](https://github.com/RGRMdesign/rgrm-ds/commit/9e1282198e7d242b9e22318573e034d20875e524) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - First release with 3 components: Section, Heading and Paragraph
