# Contributing

This repo is set up for practicing a clean beginner-friendly pull request flow.

## Before You Start

Create a branch from the latest main branch:

```bash
git switch main
git pull
git switch -c codex/short-description
```

## While You Work

- Keep the change focused on one idea.
- Prefer small commits with clear messages.
- Update docs when behavior or workflow changes.
- Run checks before opening a pull request.

```bash
npm run lint
npm run build
```

## Pull Request Description

Include:

- What changed
- Why it changed
- Screenshots for UI updates
- Any checks you ran

## Reviewing With Codex

Useful prompt:

```text
Review the current diff like a GitHub pull request reviewer. Focus on bugs, regressions, and missing tests.
```
