---
'@rgrmdesign/rgrm-ds-core': patch
'@rgrmdesign/rgrm-ds-css': patch
'@rgrmdesign/rgrm-ds-react': patch
'@rgrmdesign/rgrm-ds-elements': patch
---

Add `text-box-trim` for tighter typographic rhythm and refactor button labels.

- `@rgrmdesign/rgrm-ds-css/heading` and `/paragraph` — `text-box-trim: trim-both` and `text-box-edge: cap alphabetic` on base classes
- `@rgrmdesign/rgrm-ds-css/button` — new `.rgrm-button__label` element with text-box trim; layout and padding stay on `.rgrm-button`
- `@rgrmdesign/rgrm-ds-core/button` — export `BUTTON_LABEL_CLASS`
- `@rgrmdesign/rgrm-ds-react` and `@rgrmdesign/rgrm-ds-elements` — wrap string/text children in `.rgrm-button__label` automatically

Vanilla HTML: wrap button text in `<span class="rgrm-button__label">`. For icon + text, keep icons outside the label span.
