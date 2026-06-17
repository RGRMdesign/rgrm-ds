# Cursor automation: build component

Webhook-triggered cloud agent that implements a component from a GitHub issue when label `agent:build` is added.

## Prerequisites

- [Cloud Agent environment](https://cursor.com/dashboard?tab=cloud-agents) linked to `RGRMdesign/rgrm-ds` with `.cursor/environment.json` on `main`
- GitHub label `agent:build` (see `docs/pilot-badge.md`)
- Cursor automation with **Webhook** trigger, repo `RGRMdesign/rgrm-ds`, branch `main`
- Model: **Composer 2.5** (draws from included Composer pool on Pro Plus)
- Tool: **Pull request creation** enabled

## 1. Create the Cursor automation

1. Open [cursor.com/automations](https://cursor.com/automations) → **New automation**
2. **Trigger:** Webhook
3. **Repository:** `RGRMdesign/rgrm-ds`, branch `main`
4. **Model:** Composer 2.5
5. **Tools:** Pull request creation
6. Paste the [agent instructions](#agent-instructions) below
7. **Save** and set the automation **Active**
8. Copy the **webhook URL** and generate the **auth token** (“Generate auth header”)

## 2. Add GitHub repository secrets

In `RGRMdesign/rgrm-ds` → **Settings → Secrets and variables → Actions**:

| Secret                            | Value                                           |
| --------------------------------- | ----------------------------------------------- |
| `CURSOR_AUTOMATION_WEBHOOK_URL`   | Full webhook URL from the automation            |
| `CURSOR_AUTOMATION_WEBHOOK_TOKEN` | Token only (`crsr_…`), without `Bearer ` prefix |

The workflow `.github/workflows/agent-build.yml` posts to the webhook when the **repository owner** adds label `agent:build` to an issue.

## 3. Usage

1. Open a **New component** issue with a complete spec
2. Add label `agent:build` (maintainers only — requires Triage+ on the repo)
3. GitHub Action triggers the Cursor automation
4. Cloud agent runs `/build-component` and opens a PR with `Closes #<issue>`

## Agent instructions

Copy everything inside the block below into the automation **Instructions** field.

---

You are a cloud agent for the RGRM Design System (`RGRMdesign/rgrm-ds`).

This run was triggered by a GitHub webhook when label `agent:build` was added to an issue. The POST body includes:

- `repository` — e.g. `RGRMdesign/rgrm-ds`
- `issue.number`, `issue.title`, `issue.body`, `issue.url`

Use that issue as the single source of truth for the component spec.

## Before you code

1. Read `AGENTS.md`, `apps/storybook/src/docs/DesignPrinciples.mdx`, and `apps/storybook/src/docs/Governance.mdx`.
2. Read the triggered issue (`issue.body` from the webhook payload, or fetch via `gh issue view <number>`).
3. If the spec is incomplete (missing component name, Storybook category, variants, API per layer, or acceptance criteria), comment on the issue listing what is missing and **stop without opening a PR**.

## Build

Run the `/build-component` command (`.cursor/commands/build-component.md`) end to end:

- Implement all layers: CSS → Core → React → Web Component
- Storybook (Overview + CSS + React + Web Components), all three sandboxes, token proposals if needed
- Use **Button** as the full reference; use **Link** when core scope is classNames-only
- Study `packages/*/src/button/` and `apps/storybook/src/button/`

## Cloud VM (Node 24)

Before any `pnpm` command in a new shell:

```bash
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh" && nvm use 24
export PATH="$(dirname "$(nvm which current)"):$PATH"
node --version   # must print v24.x
```

## Validate and ship

1. Run `/validate-component` (`.cursor/commands/validate-component.md`).
2. `pnpm format:check`, `pnpm lint:css`, `pnpm build:packages`, `pnpm build-storybook` must pass.
3. `pnpm changeset` → **minor** for changed packages (`css`, and `core` / `react` / `elements` if touched).
4. Open a PR against `main`:
   - **Title:** `feat(<kebab-name>): add <PascalName> component`
   - **Body:** fill the PR template; end with `Closes #<issue-number>`
   - Note token proposals in the summary if applicable: "Token proposals — implement in Figma"
5. **Never publish to npm.**

## Quality bar

- BEM classes: `.rgrm-<name>`, modifiers, elements per `AGENTS.md`
- Semantic tokens with `var(--rgrm-…, <fallback>)` — no raw hex/px as final styling
- React and Elements are thin wrappers sharing core `classNames()`
- Web component: light DOM, `<rgrm-<name>>`, register in `registerElements.ts`

---
