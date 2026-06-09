---
"@rgrmdesign/rgrm-ds-css": minor
"@rgrmdesign/rgrm-ds-core": minor
"@rgrmdesign/rgrm-ds-react": minor
"@rgrmdesign/rgrm-ds-elements": minor
---

Add Root for document-level styles driven by `--rgrm-root-*` tokens (`@rgrmdesign/rgrm-ds-tokens` >= 0.9.0).

- `@rgrmdesign/rgrm-ds-css/root` — applies `font-size` on `html.rgrm-root` and colour, background, and inherited typography on `body.rgrm-root`
- `@rgrmdesign/rgrm-ds-core/root` — `RGRM_ROOT_CLASS`, `applyRootDocumentClasses()`, and `removeRootDocumentClasses()` (ref-counted)
- `@rgrmdesign/rgrm-ds-react/root` — `<Root>` wrapper that activates the classes on mount
- `@rgrmdesign/rgrm-ds-elements/root` — `<rgrm-root>` custom element for vanilla HTML

Load tokens once, then import the Root entry for your stack (or add `class="rgrm-root"` to `<html>` and `<body>` for CSS-only setups).
