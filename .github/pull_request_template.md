## Summary

<!-- What does this PR change and why? -->

## Agent metadata

- Issue: #
- Token proposals: docs/token-proposals/<component>.md (yes/no)
- Chromatic: new/changed snapshots expected (yes/no)

## Layer checklist

- [ ] CSS — src + export + lightningcss build rule
- [ ] Core — `classNames.ts` + tsup entry + export
- [ ] React — src + tsup entry + export
- [ ] Element — src + tsup entry + export + sideEffects
- [ ] Storybook — Overview + 3 layer docs + 3 stories + storySort
- [ ] registerElements.ts updated
- [ ] sandbox-css / sandbox-react (`<Root>`) / sandbox-element
- [ ] Changeset (minor) in `.changeset/`
- [ ] `README.md` roadmap updated (if new component)

## Checklist

- [ ] Pre-commit hooks ran (or `pnpm format` / `pnpm lint:css` pass locally)
- [ ] Storybook updated (if UI changed)
- [ ] Accessibility panel checked on affected stories (if UI changed)
- [ ] Changeset added (`pnpm changeset`) if published packages change

Closes #
