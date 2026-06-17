# Pilot: Badge component

First cloud-agent pilot to validate the workflow end-to-end. **Badge** is intentionally small (single variant, minimal API) so the agent can focus on the three-layer wiring rather than component complexity.

Run this after merging the agent configuration (`.cursor/`, `AGENTS.md`, GitHub templates).

## Prerequisites

- [ ] Cloud Agent environment linked to `RGRMdesign/rgrm-ds` on [cursor.com/dashboard](https://cursor.com/dashboard?tab=cloud-agents)
- [ ] `.cursor/environment.json` committed on `main` (Node 24 via nvm in `install`)
- [ ] GitHub label `agent:build` created (see below)
- [ ] Cursor automation + repo secrets configured (see [`cursor-automation-build-component.md`](cursor-automation-build-component.md))

### Create the `agent:build` label

```bash
gh label create "agent:build" \
  --repo RGRMdesign/rgrm-ds \
  --description "Ready for cloud agent to implement" \
  --color "0E8A16"
```

## Step 1: Create issue

Use the **New component** issue template with:

| Field              | Value                       |
| ------------------ | --------------------------- |
| Name               | Badge                       |
| Storybook category | Content                     |
| Roadmap phase      | Pilot (not on roadmap yet)  |
| Variants           | `default` only              |
| Core scope         | classNames only (like Link) |

**Suggested scope** (keep the pilot small):

- Inline label/chip for short text (e.g. status, count)
- Renders as `<span>` (CSS) / wraps children (React / `<rgrm-badge>`)
- Token-driven colours from semantic/badge tokens; propose missing tokens in `docs/token-proposals/badge.md`

## Step 2: Trigger cloud agent

Add label `agent:build` when the spec is complete (repository owner only). The GitHub Action triggers the Cursor automation webhook.

**Fallback:** start a cloud agent manually with `/build-component` and link issue #\<number\>.

## Step 3: Local review

Checkout the PR branch and run:

```
/validate-component
/review-pr
```

Or invoke review skills explicitly:

```
@ds-architect check 3-layer parity + package wiring for Badge
@a11y-reviewer check Badge stories (CSS + React + Web Components) × 3 themes
@react-export verify Badge React API and snippets
@element-export verify rgrm-badge element and attributes
```

## Step 4: CI checks

- [ ] `ci.yml` passes (format, lint:css, build:packages)
- [ ] Chromatic visual diff reviewed and accepted
- [ ] Chromatic a11y results reviewed

## Step 5: After merge

1. Token proposals in `docs/token-proposals/badge.md` → implement in Figma
2. Update `rgrm-ds-tokens` repo → publish to npm
3. Remove CSS fallbacks once tokens are published
