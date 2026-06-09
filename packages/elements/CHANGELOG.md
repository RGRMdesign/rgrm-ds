# @rgrmdesign/rgrm-ds-elements

## 0.5.3

### Patch Changes

- Updated dependencies []:
  - @rgrmdesign/rgrm-ds-css@0.5.3

## 0.5.2

### Patch Changes

- [`b99d7cd`](https://github.com/RGRMdesign/rgrm-ds/commit/b99d7cdf58c5ee57f44b451df3ed9d4a7693fbf8) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Add margin: 0 to body

- Updated dependencies [[`b99d7cd`](https://github.com/RGRMdesign/rgrm-ds/commit/b99d7cdf58c5ee57f44b451df3ed9d4a7693fbf8)]:
  - @rgrmdesign/rgrm-ds-core@0.4.1
  - @rgrmdesign/rgrm-ds-css@0.5.2

## 0.5.1

### Patch Changes

- [`89501e2`](https://github.com/RGRMdesign/rgrm-ds/commit/89501e29bc18f56641fbac6bc8ad737ce0fbe36b) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Add `::selection` styles to Root via `--rgrm-root-selection-background-color` and `--rgrm-root-selection-color` (`@rgrmdesign/rgrm-ds-tokens` >= 0.10.0).
  - `@rgrmdesign/rgrm-ds-css/root` — document-wide text selection colours on `html.rgrm-root ::selection`
  - `@rgrmdesign/rgrm-ds-react` and `@rgrmdesign/rgrm-ds-elements` — peer dependency bumped to `@rgrmdesign/rgrm-ds-tokens` >= 0.10.0

- Updated dependencies [[`89501e2`](https://github.com/RGRMdesign/rgrm-ds/commit/89501e29bc18f56641fbac6bc8ad737ce0fbe36b)]:
  - @rgrmdesign/rgrm-ds-css@0.5.1

## 0.5.0

### Minor Changes

- [`9bb95b1`](https://github.com/RGRMdesign/rgrm-ds/commit/9bb95b1d732e9cf6823844ca5b4cfe20c4602b0c) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Add Root for document-level styles driven by `--rgrm-root-*` tokens (`@rgrmdesign/rgrm-ds-tokens` >= 0.9.0).
  - `@rgrmdesign/rgrm-ds-css/root` — applies `font-size` on `html.rgrm-root` and colour, background, and inherited typography on `body.rgrm-root`
  - `@rgrmdesign/rgrm-ds-core/root` — `RGRM_ROOT_CLASS`, `applyRootDocumentClasses()`, and `removeRootDocumentClasses()` (ref-counted)
  - `@rgrmdesign/rgrm-ds-react/root` — `<Root>` wrapper that activates the classes on mount
  - `@rgrmdesign/rgrm-ds-elements/root` — `<rgrm-root>` custom element for vanilla HTML

  Load tokens once, then import the Root entry for your stack (or add `class="rgrm-root"` to `<html>` and `<body>` for CSS-only setups).

### Patch Changes

- Updated dependencies [[`9bb95b1`](https://github.com/RGRMdesign/rgrm-ds/commit/9bb95b1d732e9cf6823844ca5b4cfe20c4602b0c)]:
  - @rgrmdesign/rgrm-ds-css@0.5.0
  - @rgrmdesign/rgrm-ds-core@0.4.0

## 0.4.1

### Patch Changes

- [`00e7b36`](https://github.com/RGRMdesign/rgrm-ds/commit/00e7b367bb3285eeb0ec142a63839ed9e8836806) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Fix `/fonts` so it no longer overrides `--rgrm-typography-font-primary-family`. Register `@font-face` under `Geist` (matching the token) using Fontsource files directly, instead of importing Fontsource CSS that registers `Geist Sans`.

  React and Elements are republished so `/fonts` re-exports pick up the css fix for consumers on strict package managers.

- Updated dependencies [[`00e7b36`](https://github.com/RGRMdesign/rgrm-ds/commit/00e7b367bb3285eeb0ec142a63839ed9e8836806)]:
  - @rgrmdesign/rgrm-ds-css@0.4.1

## 0.4.0

### Minor Changes

- [`5b72331`](https://github.com/RGRMdesign/rgrm-ds/commit/5b723314f1a11c92304f01d2b0c00a37fc4176bd) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Add optional `/fonts` entry points that load Geist Sans via `@fontsource/geist-sans` (weights 400, 500, 700) and align the primary font-family token with Fontsource’s registered name (`Geist Sans`).
  - `@rgrmdesign/rgrm-ds-css/fonts` — foundation entry (new dependency on `@fontsource/geist-sans`)
  - `@rgrmdesign/rgrm-ds-react/fonts` and `@rgrmdesign/rgrm-ds-elements/fonts` — re-exports for consumers on strict package managers (e.g. pnpm)

  Import once in your app entry after tokens, e.g. `import '@rgrmdesign/rgrm-ds-react/fonts'`.

### Patch Changes

- Updated dependencies [[`5b72331`](https://github.com/RGRMdesign/rgrm-ds/commit/5b723314f1a11c92304f01d2b0c00a37fc4176bd)]:
  - @rgrmdesign/rgrm-ds-css@0.4.0

## 0.3.0

### Minor Changes

- [`b40a1ab`](https://github.com/RGRMdesign/rgrm-ds/commit/b40a1ab4bf5b5ea7e224c286b5437e6e8eb44db1) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Heading: split semantic `level` (h1–h6) from visual `appearance` (h1–h6 | display).

  **Breaking:** `level="display"` is removed. Use `level={1} appearance="display"` (React) or `level="1" appearance="display"` (element). `HeadingLevel` no longer includes `'display'`; use `HeadingAppearance` for the visual scale. `headingClassNames()` now takes `appearance` as its first argument.

  CSS class names are unchanged; the CSS package is released in lockstep with no functional stylesheet changes.

### Patch Changes

- Updated dependencies [[`b40a1ab`](https://github.com/RGRMdesign/rgrm-ds/commit/b40a1ab4bf5b5ea7e224c286b5437e6e8eb44db1)]:
  - @rgrmdesign/rgrm-ds-core@0.3.0
  - @rgrmdesign/rgrm-ds-css@0.3.0

## 0.2.1

### Patch Changes

- [`4de0384`](https://github.com/RGRMdesign/rgrm-ds/commit/4de0384682ced563a53ebf8828d245663f2717f7) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Update ds-tokens dependency

- Updated dependencies [[`4de0384`](https://github.com/RGRMdesign/rgrm-ds/commit/4de0384682ced563a53ebf8828d245663f2717f7)]:
  - @rgrmdesign/rgrm-ds-core@0.2.1
  - @rgrmdesign/rgrm-ds-css@0.2.1

## 0.2.0

### Minor Changes

- [`09cf76d`](https://github.com/RGRMdesign/rgrm-ds/commit/09cf76da34b1850215cef407168ce7a0ef45da74) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Add a Button component (primary variant) across all layers, built on the new
  `--rgrm-button-*` tokens from `@rgrmdesign/rgrm-ds-tokens` 0.6.0. Ships
  `buttonClassNames` (core), `.rgrm-button` styles (css), the `<Button>` React
  component, and the `<rgrm-button>` web component, each with `./button` sub-path
  exports. The token peer dependency is bumped to `>=0.6.0`.

### Patch Changes

- Updated dependencies [[`09cf76d`](https://github.com/RGRMdesign/rgrm-ds/commit/09cf76da34b1850215cef407168ce7a0ef45da74)]:
  - @rgrmdesign/rgrm-ds-core@0.2.0
  - @rgrmdesign/rgrm-ds-css@0.2.0

## 0.1.1

### Patch Changes

- [`b1c2c6b`](https://github.com/RGRMdesign/rgrm-ds/commit/b1c2c6b0798b9ed92ec0000072c96c4d706f80e0) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Test for release workflow

- Updated dependencies [[`b1c2c6b`](https://github.com/RGRMdesign/rgrm-ds/commit/b1c2c6b0798b9ed92ec0000072c96c4d706f80e0)]:
  - @rgrmdesign/rgrm-ds-core@0.1.1
  - @rgrmdesign/rgrm-ds-css@0.1.1

## 0.1.0

### Minor Changes

- [`9e12821`](https://github.com/RGRMdesign/rgrm-ds/commit/9e1282198e7d242b9e22318573e034d20875e524) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - First release with 3 components: Section, Heading and Paragraph

### Patch Changes

- Updated dependencies [[`9e12821`](https://github.com/RGRMdesign/rgrm-ds/commit/9e1282198e7d242b9e22318573e034d20875e524)]:
  - @rgrmdesign/rgrm-ds-core@0.1.0
  - @rgrmdesign/rgrm-ds-css@0.1.0
