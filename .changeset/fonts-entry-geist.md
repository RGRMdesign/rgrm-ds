---
"@rgrmdesign/rgrm-ds-css": minor
"@rgrmdesign/rgrm-ds-react": minor
"@rgrmdesign/rgrm-ds-elements": minor
---

Add optional `/fonts` entry points that load Geist Sans via `@fontsource/geist-sans` (weights 400, 500, 700) and align the primary font-family token with Fontsource’s registered name (`Geist Sans`).

- `@rgrmdesign/rgrm-ds-css/fonts` — foundation entry (new dependency on `@fontsource/geist-sans`)
- `@rgrmdesign/rgrm-ds-react/fonts` and `@rgrmdesign/rgrm-ds-elements/fonts` — re-exports for consumers on strict package managers (e.g. pnpm)

Import once in your app entry after tokens, e.g. `import '@rgrmdesign/rgrm-ds-react/fonts'`.
