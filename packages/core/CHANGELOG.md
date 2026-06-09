# @rgrmdesign/rgrm-ds-core

## 0.4.0

### Minor Changes

- [`9bb95b1`](https://github.com/RGRMdesign/rgrm-ds/commit/9bb95b1d732e9cf6823844ca5b4cfe20c4602b0c) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Add Root for document-level styles driven by `--rgrm-root-*` tokens (`@rgrmdesign/rgrm-ds-tokens` >= 0.9.0).
  - `@rgrmdesign/rgrm-ds-css/root` — applies `font-size` on `html.rgrm-root` and colour, background, and inherited typography on `body.rgrm-root`
  - `@rgrmdesign/rgrm-ds-core/root` — `RGRM_ROOT_CLASS`, `applyRootDocumentClasses()`, and `removeRootDocumentClasses()` (ref-counted)
  - `@rgrmdesign/rgrm-ds-react/root` — `<Root>` wrapper that activates the classes on mount
  - `@rgrmdesign/rgrm-ds-elements/root` — `<rgrm-root>` custom element for vanilla HTML

  Load tokens once, then import the Root entry for your stack (or add `class="rgrm-root"` to `<html>` and `<body>` for CSS-only setups).

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
