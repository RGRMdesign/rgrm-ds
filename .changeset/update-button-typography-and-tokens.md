---
'@rgrmdesign/rgrm-ds-css': patch
'@rgrmdesign/rgrm-ds-react': patch
'@rgrmdesign/rgrm-ds-elements': patch
---

Update button typography and require `@rgrmdesign/rgrm-ds-tokens` >= 0.13.1.

- **Button** — inherit `font-size` from parent context instead of `--rgrm-scale-font-size-main`; apply `--rgrm-button-primary-font-weight` from component tokens
- Bump minimum `@rgrmdesign/rgrm-ds-tokens` peer dependency to >= 0.13.1 across CSS, React, and Elements packages
