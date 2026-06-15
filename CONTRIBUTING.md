# Contributing

Contributions from designers and developers are welcome. You do not need to write code
to help — design feedback, documentation improvements, bug reports, and feature proposals
are all valuable.

Please read the [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

## Ways to contribute

| Contribution              | How                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------- |
| Bug report                | [Open a bug issue](https://github.com/RGRMdesign/rgrm-ds/issues/new?template=bug_report.md)              |
| Feature or component idea | [Open a feature request](https://github.com/RGRMdesign/rgrm-ds/issues/new?template=feature_request.md)   |
| Design feedback           | Open a feature request with screenshots or Figma links — no code required                                |
| Code change               | Fork, branch, open a pull request (see below)                                                            |
| Design tokens             | Use the separate [`rgrm-ds-tokens`](https://www.npmjs.com/package/@rgrmdesign/rgrm-ds-tokens) repository |

Check the [roadmap](README.md#roadmap) for planned work. If you want to pick something up,
comment on an existing issue first so we avoid duplicate effort.

## Development setup

See [Getting started](README.md#getting-started) in the README. In short:

```bash
pnpm install
pnpm build
pnpm storybook   # http://localhost:6006
```

Requirements: Node.js 24.x and pnpm 10.33.0 (see [`.nvmrc`](.nvmrc)).

## Pull request workflow

1. Fork the repository and create a branch from `main`.
2. Make your changes. Run `pnpm format` and `pnpm lint:css` before opening the PR.
3. Add a **changeset** for any change that should ship to npm:

   ```bash
   pnpm changeset
   ```

   Commit the generated file in `.changeset/` with your PR. Docs-only or sandbox-only
   changes that do not affect published packages do not need a changeset.

4. Open a pull request against `main`. CI runs formatting, CSS lint, and Chromatic
   visual regression on every PR.

### What we expect in a PR

- **Components**: follow the steps in [Adding a new component](README.md#adding-a-new-component) — include CSS, framework layers as appropriate, a Storybook story, and sandbox demos.
- **Accessibility**: check the Storybook **Accessibility** panel on affected stories.
- **Visual changes**: Chromatic will post a diff on your PR; maintainers review and accept intentional changes.
- **Publishing**: contributors do not publish to npm. Merging to `main` triggers the release workflow (see [Publishing to npm](README.md#publishing-to-npm-changesets) in the README).

## Security

Do not open public issues for security vulnerabilities. See
[SECURITY.md](.github/SECURITY.md).

## Questions

Open a [GitHub issue](https://github.com/RGRMdesign/rgrm-ds/issues) for questions about
contributing. For trademark or brand questions, see [TRADEMARK.md](TRADEMARK.md).
