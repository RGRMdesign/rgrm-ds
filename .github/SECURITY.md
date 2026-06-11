# Security Policy

The RGRM Design System ships public npm packages that are consumed as dependencies in
production applications. We take security reports seriously and appreciate responsible
disclosure.

## Scope

This policy covers the packages published from this repository:

| Package | Description |
| ------- | ----------- |
| `@rgrmdesign/rgrm-ds-core` | Shared logic and types |
| `@rgrmdesign/rgrm-ds-css` | Component styles (CSS) |
| `@rgrmdesign/rgrm-ds-react` | React components |
| `@rgrmdesign/rgrm-ds-elements` | Web Components |

Design tokens live in a separate repository
([`@rgrmdesign/rgrm-ds-tokens`](https://www.npmjs.com/package/@rgrmdesign/rgrm-ds-tokens)).
Report token-related issues through that repository's security policy if one exists, or
via the reporting channel below.

Sandboxes, Storybook, and other apps in this monorepo are development and documentation
tools. Reports affecting only those apps are lower priority unless they demonstrate a
vulnerability in a published package.

## Supported versions

We provide security fixes for the **latest published version** of each package on npm.
Older versions are not actively supported. Upgrade to the latest release before reporting
an issue in an outdated version.

## Reporting a vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Use one of these channels:

1. **[GitHub private vulnerability reporting](https://github.com/RGRMdesign/rgrm-ds/security/advisories/new)** (preferred) — use the **Report a vulnerability** button on the repository's Security tab.
2. If private reporting is unavailable, contact the maintainers through an existing private channel you already use with RGRM Design.

Include as much detail as possible:

- Affected package and version (e.g. `@rgrmdesign/rgrm-ds-react@0.5.7`)
- Steps to reproduce
- Impact (e.g. XSS, supply-chain, denial of service)
- A minimal proof of concept, if applicable

## What to expect

| Step | Target |
| ---- | ------ |
| Acknowledgement | Within 48 hours |
| Initial assessment | Within 7 business days |
| Fix and advisory | Depends on severity; critical issues are prioritised |

We follow **coordinated disclosure**. Please allow reasonable time for a fix before
public disclosure. We will credit reporters in the advisory unless you prefer to remain
anonymous.

## Out of scope

The following are generally **not** treated as security vulnerabilities in this project:

- Issues in consuming applications caused by misuse of the API
- Visual or accessibility bugs without a security impact
- Reports against versions that are no longer the latest release, without demonstrating that the issue still exists in the latest version
- Vulnerabilities in development dependencies that do not affect published package artifacts

## Security best practices for consumers

- Pin or regularly update `@rgrmdesign/rgrm-ds-*` packages to the latest release.
- Load `@rgrmdesign/rgrm-ds-tokens` exactly once in your application, as documented.
- Do not pass untrusted HTML into component props unless the component explicitly
  supports and sanitises it.
