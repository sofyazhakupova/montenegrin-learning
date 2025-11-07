# Montenegrin Learning Platform – Technical Spec

_Last updated: 2025-11-07_

## Overview
- **Purpose**: Solo-language learning site (Duolingo-style) focused on Montenegrin / Serbian.
- **Deliverables**: Dashboard (`index.html`), lesson experience (`lesson.html`), lessons catalog (`lessons.html`), vocabulary trainer (`vocab.html`), quiz placeholder (`quiz.html`), data/config (`lessons-data.js`, `vocab/*.json`).
- **Tech**: Static HTML/CSS/JS, no build tooling. Uses `localStorage` for client-side persistence.

## Entry Points
| Page | Purpose | Notes |
|------|---------|-------|
| `index.html` | Dashboard/home | Shows next lesson, progress stats, bar chart, quick actions. |
| `lessons.html` | Lessons overview | Filterable list (all / not started / in progress / completed / locked). |
| `lesson.html` | Lesson player | Lesson 1 with tabbed guide/vocab/practice/challenge sections, hero pronoun chips for quick review, shared vocab cards (know/practice), interactive click-based drills, and real-life challenge badge. |
| `vocab.html` | Vocabulary trainer | Renders category tabs from `vocab/vocab-data.js`, tracks known/unknown status, shows conjugations, shared references, and modal details. |
| `quiz.html` | Quiz hub (placeholder) | Coming-soon message, links back to lessons/vocab. |

## Shared Navigation
All pages share the header nav:
```
Dashboard (index) | Lessons | Vocabulary | Quiz
```

## Data & Persistence
- `lessons-data.js`
  - Exports `lessonsData` dictionary with metadata (`id`, `title`, `level`, `goal`, `theory`, `vocabulary`, `practice`, `order`, `available`, `vocabularySet`).
  - Helper functions: `getAvailableLessons()`, `getLessonById()`, `getLessonByOrder()`.
- `vocab/vocab-data.js`
  - Central vocabulary source grouped by lesson + category (pronouns, verbs, nouns, etc.).
  - Verb entries include present tense conjugation tables; shared section covers numbers/days/months.
- Legacy JSON (`vocab/a1.json`) retained for reference; platform now reads from `vocab-data.js`.
- Progress keys in `localStorage`:
  - `montenegrin_lesson_progress_v1` — statuses per lesson (`not_started`, `in_progress`, `completed`).

## JavaScript (`script.js`)
Shared utility module executed on all pages:
1. **Progress helpers**: sanitize + cache lesson progress, update count summary, find next lesson.
2. **Dashboard**: reads `lessonsData`, calculates completion, updates stat cards and mini bar chart.
3. **Lessons list**: renders rows with status pill + CTA; supports filter chips.
4. **UX helpers**: script toggle for hero (if present), smooth scrolling for anchor links.
5. **Error-handling**: sanitizes corrupted storage, wraps render calls in `try/catch`.

### Page-specific hooks
- `lesson.html`: renders Lesson 1 guide notes, shared vocab with know/practice sync, interactive MCQ/matching/dialogue drills, flashcards, and a real-life challenge button inside tabbed guide / vocab / practice / challenge panels (progress status wiring TBD for other lessons).
- `vocab.html`: aggregates all lessons into category tabs (verbs, nouns, etc.), renders cards with conjugations, supports known/unknown toggles, a global progress bar, and modal translations/notes.

## Styling (`styles.css`)
- Global palette via CSS variables.
- Components: header/nav, dashboard cards, quick actions, charts, lesson rows, exercise layouts, vocabulary cards.
- Responsive breakpoints at 950px (lesson rows) and 768px (dashboard padding, hero fallback).
- Background color: `#f5f7fa` to frame cards.

## Current Content
- **Lessons**: nineteen entries defined (course roadmap A1.1 → B1.1). `lesson1` is playable; `lesson2`–`lesson19` currently flagged `available: false` with theory/vocabulary/practice scaffolding ready for content builds.
- **Vocabulary**: `vocab/vocab-data.js` lists lesson-by-lesson vocab (A1.1 → B1.1) with categories + conjugations; shared section tracks numbers/days/months.
- **Lesson 1 exercises**: translation, MCQ, fill-in, matching, translation.
- **Course plan**: see `docs/course-plan-en.md` for the full 19-lesson roadmap (A1.1 → B1.1).

## Known Gaps / TODO
- Parameterize `lesson.html` to render any lesson based on query string.
- Build quiz generator to pull from completed lesson exercises.
- Add vocabulary overview page (multi-set chooser) + progress rollup.
- Add streak/XP logic to dashboard.
- Produce actual charts (Chart.js or custom) once data is richer.

---
> Keep this spec updated whenever we add or change pages, storage keys, or data structures so rebuilding from scratch stays straightforward.

