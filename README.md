# LeetCode 75 Flashcards

Interactive flashcard app covering all 75 LeetCode patterns — with custom visualizations, 3D card flip, progress tracking, and category/difficulty filtering.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss) ![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)

## Features

- **75 problems** across 11 categories (Arrays, Trees, Graphs, DP, and more)
- **Custom visualization** for every single problem — no generic fallbacks
- **3D card flip** animation — front shows the problem & viz, back shows solution
- **Progress tracking** — mark cards as Known / Review / Unseen, persisted in localStorage
- **Filters** — search by title, pattern, or tag; filter by category and difficulty
- **Keyboard shortcuts** — `Space` to flip, `Esc` to close, `←` `→` to navigate
- **Mobile responsive** — collapsible sidebar drawer on small screens

## Categories

| Category | Problems |
|---|---|
| Arrays & Hashing | 9 |
| Two Pointers | 5 |
| Sliding Window | 6 |
| Stack | 7 |
| Binary Search | 7 |
| Linked List | 7 |
| Trees | 10 |
| Tries | 3 |
| Heap / Priority Queue | 5 |
| Graphs | 9 |
| Dynamic Programming | 7 |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Tech Stack

- **React 18** + **TypeScript**
- **Tailwind CSS** — utility-first styling
- **Vite 5** — build tool
- **lucide-react** — icons
- **localStorage** — progress persistence (no backend required)

## Project Structure

```
src/
├── components/       # UI components (FlashcardApp, CardModal, etc.)
├── data/cards/       # Card data for all 75 problems
├── visualizations/   # Custom viz component per problem
├── hooks/            # useProgress (localStorage progress tracking)
└── types/            # TypeScript types
```
