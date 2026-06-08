---
'@rgrmdesign/rgrm-ds-core': minor
'@rgrmdesign/rgrm-ds-css': minor
'@rgrmdesign/rgrm-ds-elements': minor
'@rgrmdesign/rgrm-ds-react': minor
---

Heading: split semantic `level` (h1–h6) from visual `appearance` (h1–h6 | display).

**Breaking:** `level="display"` is removed. Use `level={1} appearance="display"` (React) or `level="1" appearance="display"` (element). `HeadingLevel` no longer includes `'display'`; use `HeadingAppearance` for the visual scale. `headingClassNames()` now takes `appearance` as its first argument.

CSS class names are unchanged; the CSS package is released in lockstep with no functional stylesheet changes.
