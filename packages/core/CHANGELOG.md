# @rgrmdesign/rgrm-ds-core

## 0.7.0

### Minor Changes

- [#33](https://github.com/RGRMdesign/rgrm-ds/pull/33) [`6d582eb`](https://github.com/RGRMdesign/rgrm-ds/commit/6d582eb18116d5028a79f16311adad03485bb8c3) - Add Badge component across CSS, Core, React, and Web Components layers.

## 0.6.0

### Minor Changes

- [`fe52469`](https://github.com/RGRMdesign/rgrm-ds/commit/fe5246995b2e539d9c8a6bf30ce7d3303b380389) - Add Link component for inline navigation styling.
  - **Link** — inline anchor with underline driven by `--rgrm-link-*` component tokens (`@rgrmdesign/rgrm-ds-tokens` >= 0.13.0)
  - `@rgrmdesign/rgrm-ds-core` — `linkClassNames()`
  - `@rgrmdesign/rgrm-ds-css` — `.rgrm-link` BEM styles
  - `@rgrmdesign/rgrm-ds-react` — `<Link>` component
  - `@rgrmdesign/rgrm-ds-elements` — `<rgrm-link>` custom element

## 0.5.0

### Minor Changes

- [`4ebf248`](https://github.com/RGRMdesign/rgrm-ds/commit/4ebf248f12031e08de1371a2181ddab68893446f) - Add Inline and Stack layout components.
  - **Inline** — horizontal flex row with optional gap (`-`, `sm`, `md`, `lg`) using `--rgrm-scale-space-*` tokens
  - **Stack** — vertical flex column with optional gap (`-`, `xs`, `sm`, `md`, `lg`, `xl`) using `--rgrm-scale-space-*` tokens
  - `@rgrmdesign/rgrm-ds-core` — `inlineClassNames()`, `stackClassNames()`, and gap types
  - `@rgrmdesign/rgrm-ds-css` — `.rgrm-inline` and `.rgrm-stack` BEM styles
  - `@rgrmdesign/rgrm-ds-react` — `<Inline>` and `<Stack>` components
  - `@rgrmdesign/rgrm-ds-elements` — `<rgrm-inline>` and `<rgrm-stack>` custom elements

## 0.4.2

### Patch Changes

- [`9f83a53`](https://github.com/RGRMdesign/rgrm-ds/commit/9f83a53ce9d1e19777f37f48a47fc34f1c83b3ff) - Add `text-box-trim` for tighter typographic rhythm and refactor button labels.
  - `@rgrmdesign/rgrm-ds-css/heading` and `/paragraph` — `text-box-trim: trim-both` and `text-box-edge: cap alphabetic` on base classes
  - `@rgrmdesign/rgrm-ds-css/button` — new `.rgrm-button__label` element with text-box trim; layout and padding stay on `.rgrm-button`
  - `@rgrmdesign/rgrm-ds-core/button` — export `BUTTON_LABEL_CLASS`
  - `@rgrmdesign/rgrm-ds-react` and `@rgrmdesign/rgrm-ds-elements` — wrap string/text children in `.rgrm-button__label` automatically

  Vanilla HTML: wrap button text in `<span class="rgrm-button__label">`. For icon + text, keep icons outside the label span.

## 0.4.1

### Patch Changes

- [`b99d7cd`](https://github.com/RGRMdesign/rgrm-ds/commit/b99d7cdf58c5ee57f44b451df3ed9d4a7693fbf8) Thanks [@RGRMdesign](https://github.com/RGRMdesign)! - Add margin: 0 to body

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
