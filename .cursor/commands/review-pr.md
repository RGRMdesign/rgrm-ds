# Review PR

Review a component pull request locally. Checkout the PR branch first.

## Steps

1. Checkout the PR branch
2. Run `/validate-component` — fix or report failures
3. Run specialized reviews (invoke skills explicitly):
   - `@ds-architect` — 3-layer parity + package wiring
   - `@a11y-reviewer` — accessibility across all story types and themes
   - `@react-export` — React API, exports, snippets
   - `@element-export` — web component API, attributes, registration

## Report format

```markdown
## Summary

<one paragraph>

## Critical (must fix)

- ...

## Suggestions

- ...

## OK

- ...
```

## Merge criteria

- All validation commands pass
- No critical findings from review skills
- PR template layer checklist complete
- Chromatic diff reviewed (if applicable)

Do not merge — report findings for the human reviewer.
