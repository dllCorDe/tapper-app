# Beginner GitHub Flow

GitHub flow is a simple habit: keep `main` stable, do each change on a branch, open a pull request, review it, then merge.

## Daily Workflow

1. Start from the latest main branch.
2. Create a branch named after the work.
3. Make one small change.
4. Run checks locally.
5. Commit with a clear message.
6. Push the branch.
7. Open a pull request.
8. Review the diff and discuss improvements.
9. Merge when the PR is ready.

## Branch Names

Use short names that describe the change:

```bash
git switch -c codex/add-profile-editing
git switch -c codex/add-milestones
git switch -c codex/fix-mobile-layout
```

## Commit Messages

Good commit messages are specific and action-oriented:

```text
Add optional profile setup
Track tap streak statistics
Document GitHub pull request flow
```

## Pull Request Checklist

- The PR has one clear purpose.
- The description explains what changed and why.
- Screenshots are included for UI changes.
- `npm run lint` passes.
- `npm run build` passes.
- You reviewed the diff before asking someone else to review it.

## How To Use Codex In This Flow

Ask Codex for small, reviewable changes:

```text
Create a branch for adding keyboard tap support, implement it, run checks, and summarize the diff.
```

Then ask Codex to review the result:

```text
Review the current diff like a pull request reviewer. Focus on bugs, missed tests, and confusing code.
```

## What Makes A Good Pull Request

- Small enough to review in a few minutes.
- Has a before and after.
- Does not mix unrelated cleanup with feature work.
- Includes docs or tests when behavior changes.
- Leaves the codebase easier to understand than before.
