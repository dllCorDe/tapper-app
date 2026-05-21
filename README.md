# Tapper App

A small React + TypeScript learning app for practicing Codex-assisted development, GitHub branches, pull requests, and product thinking.

## What The App Does

- Lets a user create a lightweight local profile or skip and play privately.
- Shows a focused tap screen with one large tap button.
- Tracks hit count, current streak, best streak, and hits per minute.
- Keeps state in the browser so the app can be used without a backend.

## Tech Stack

- React
- TypeScript
- Vite
- ESLint
- Local browser storage

## Folder Structure

```text
.
├── .github/              # GitHub issue and pull request templates
├── docs/                 # Product, roadmap, GitHub, and Codex learning docs
├── public/               # Static assets
├── src/
│   ├── app/              # App-level state and shell
│   ├── components/       # Reusable UI components
│   ├── features/         # Feature-specific screens and logic
│   ├── lib/              # Small shared utilities
│   └── styles/           # Global styles
├── package.json
└── README.md
```

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Useful Commands

```bash
npm run dev      # Start the app locally
npm run build    # Type-check and build production files
npm run lint     # Run lint checks
```

## Recommended Learning Flow

1. Read [docs/CODEX_GUIDE.md](docs/CODEX_GUIDE.md).
2. Read [docs/GITHUB_FLOW.md](docs/GITHUB_FLOW.md).
3. Pick one small item from [docs/ROADMAP.md](docs/ROADMAP.md).
4. Ask Codex to make the change on a branch.
5. Review the diff, run checks, and open a pull request.
