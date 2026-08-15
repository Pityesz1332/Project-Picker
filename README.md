# Project Picker

Turn "I want to build something" into a concrete idea.

Project Picker is a tiny slot-machine web app that pairs a random **thing** (e.g. "CLI Tool", "Discord Bot", "RAG Pipeline") with a random **audience or purpose** (e.g. "Developers", "Nurses", "Crypto Enthusiasts") to spit out a project idea like:

> Build a **Browser Extension** for **Freelancers**

Reroll either side independently, lock the one you like, or hit **Surprise Me** to roll both at once.

## Features

- 🎰 Animated slot-machine reroll with a settling tick effect
- 🔒 Lock a side so only the other one rerolls
- ✨ "Surprise Me" to reroll both at once
- 🌙 Light/dark mode, persisted to `localStorage` and defaulting to system preference
- 150+ "things" and 130+ "audiences" to combine

## Getting started

This project uses [pnpm](https://pnpm.io).

```bash
pnpm install
```

## Scripts

| Command        | Description                          |
| -------------- | ------------------------------------- |
| `pnpm dev`     | Start the Vite dev server with HMR    |
| `pnpm build`   | Type-check and build for production   |
| `pnpm preview` | Preview the production build locally  |
| `pnpm lint`    | Run Oxlint                            |

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev) for dev/build tooling
- [Tailwind CSS 4](https://tailwindcss.com) for styling
- [Oxlint](https://oxc.rs) for linting

## Project structure

```
src/
├── App.tsx              # Page layout and top-level state wiring
├── components/
│   └── Picker.tsx        # One slot-machine reel (label, value, lock, reroll)
├── data/
│   ├── things.ts          # List of "thing" options
│   └── audiences.ts       # List of "audience/purpose" options
├── hooks/
│   ├── usePicker.ts        # Reroll animation + lock state for one reel
│   └── useDarkMode.ts      # Dark mode state, persisted to localStorage
└── index.css
```

To add more ideas, just extend the arrays in [`src/data/things.ts`](src/data/things.ts) and [`src/data/audiences.ts`](src/data/audiences.ts).
