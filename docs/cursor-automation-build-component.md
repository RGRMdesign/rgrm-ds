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
2. Add label `agent:build` (repository owner only)
3. GitHub Action triggers the Cursor automation
4. Cloud agent follows `.cursor/commands/build-component.md`, runs `/validate-component`, and opens a PR with `Closes #<issue>`

**Fallback (local/debug):** start a cloud agent manually with `/build-component` and link the issue — no webhook required.

## Agent instructions

Copy everything inside the block below into the automation **Instructions** field.

---

Webhook payload: `issue.number`, `issue.title`, `issue.body`, `issue.url`.

If the issue spec is incomplete, comment on the issue and stop — do not open a PR.

Read `AGENTS.md` (including **Language**). Follow `.cursor/commands/build-component.md` end to end for GitHub issue #<issue.number>.

Run `/validate-component` (or `pnpm validate:component`) before opening the PR — all checks must pass.

All repository content must be **English** (fixtures, sandboxes, Storybook, snippets, PR text).

Open a PR against `main` using the PR template: fill **Agent metadata** and **Layer checklist**; body ends with `Closes #<issue.number>`.

Do not self-merge.

---
