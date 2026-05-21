# Architecture

## Design Goals

- Keep the first version easy to understand.
- Use feature folders so future screens have a natural place to live.
- Keep profile and tapper logic separate.
- Store data locally until a backend is actually needed.

## Key Folders

- `src/app`: App shell, top-level state, and routing decisions.
- `src/features/profile`: Profile setup screen.
- `src/features/tapper`: Main tapping game screen.
- `src/lib`: Shared hooks and utilities.
- `src/styles`: Global styling.

## State

The first version stores data in `localStorage` through `useLocalStorageState`.

Stored keys:

- `tapper.profile`
- `tapper.privateMode`
- `tapper.stats`

## Future Backend Path

When profiles need real accounts, introduce an API layer in `src/lib/api` and keep the UI components mostly unchanged. The profile shape can later gain an `id`, avatar, auth provider, or cloud sync metadata.
