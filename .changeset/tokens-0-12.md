---
'@rgrmdesign/rgrm-ds-css': patch
'@rgrmdesign/rgrm-ds-react': patch
'@rgrmdesign/rgrm-ds-elements': patch
---

Require `@rgrmdesign/rgrm-ds-tokens` >= 0.12.0. Radius and size tokens moved from core to the fluid scale collection.

- `@rgrmdesign/rgrm-ds-css/button` — apply `--rgrm-button-primary-min-block-size` on the primary variant
- Replace `--rgrm-core-radius-*` references with `--rgrm-scale-radius-*`
