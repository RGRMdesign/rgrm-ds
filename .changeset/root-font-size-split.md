---
"@rgrmdesign/rgrm-ds-css": patch
---

Split Root font-size responsibilities to avoid double fluid scaling.

- `html.rgrm-root` — `font-size: 100%` (stable rem basis; respects user font settings)
- `body.rgrm-root` — default text `font-size` from `--rgrm-root-font-size`

Update Storybook Root docs to match.
