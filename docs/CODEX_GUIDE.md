# Codex Guide For This Repo

Use Codex as a pair programmer: give it a goal, let it inspect the project, ask it to make a focused change, then review what it did.

## Strong Prompts

```text
Inspect the app structure and explain where profile logic lives.
```

```text
Add a milestone message at 100 taps. Keep the change small, update docs if needed, and run lint/build.
```

```text
Review my current diff as if this is a GitHub pull request.
```

```text
Create a roadmap issue list from docs/ROADMAP.md.
```

## Useful Skills To Practice

- Reading a codebase before changing it.
- Asking for one small feature at a time.
- Reviewing diffs instead of trusting generated code blindly.
- Running local checks before pushing.
- Writing clear PR descriptions.
- Separating product ideas from implementation tasks.

## Good Codex Habits

- Ask Codex to explain its plan before large changes.
- Ask for file references when learning the code.
- Ask for tradeoffs when there are multiple possible designs.
- Ask it to run checks, but still read the results.
- Keep PRs small so both you and Codex can reason about them.

## Example Learning Session

1. Ask Codex to explain the folder structure.
2. Pick one roadmap item.
3. Ask Codex to implement it on a new branch.
4. Ask Codex to show the important diff.
5. Ask Codex to review the diff for bugs.
6. Push and open a draft pull request.
7. Merge after checks pass.

## What To Avoid

- Asking for five unrelated features in one prompt.
- Merging code you have not run or reviewed.
- Letting docs drift away from the actual app.
- Treating Codex as a replacement for understanding your own project.
