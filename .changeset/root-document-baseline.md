---
"@rgrmdesign/rgrm-ds-css": patch
---

Extend Root document baseline styles.

- `html.rgrm-root` — `box-sizing: border-box` with `inherit` on descendants (scoped to Root activation)
- `body.rgrm-root` — `min-height: 100dvh` with `100vh` fallback
- Remove duplicate `box-sizing`, `margin`, and `min-height` rules from sandbox and Storybook chrome
