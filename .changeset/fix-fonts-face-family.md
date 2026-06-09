---
"@rgrmdesign/rgrm-ds-css": patch
"@rgrmdesign/rgrm-ds-react": patch
"@rgrmdesign/rgrm-ds-elements": patch
---

Fix `/fonts` so it no longer overrides `--rgrm-typography-font-primary-family`. Register `@font-face` under `Geist` (matching the token) using Fontsource files directly, instead of importing Fontsource CSS that registers `Geist Sans`.

React and Elements are republished so `/fonts` re-exports pick up the css fix for consumers on strict package managers.
