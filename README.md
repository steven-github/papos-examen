# Grammar Galaxy Mission - Next.js App

Interactive educational web app in Next.js for a 3rd grade grammar exam.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- localStorage persistence

## Features

- Child-friendly UI with large controls and bright soft palette
- Lessons with simple explanations and examples
- Practice section with many question types
- Topic quizzes and stars/rewards
- Mini games area
- Final mock exam
- Mistake review with correction explanations
- Progress dashboard with weak-area insights
- Progressive lesson unlock system

## Exam Context Embedded in the App

- School: Love at Work International Christian School
- Subject: Grammar
- Evaluation: #2
- School Year: 2026
- Teacher: Priscilla Martinez
- Exam Date: Friday, May 29th, 2026

## Topics Included

- Subject Pronouns
- Possessive Adjectives
- Can / Can't
- Present Progressive
- Verb-ing vocabulary and usage

## Project Structure

```txt
app/
  page.tsx
  lessons/
  practice/
  games/
  quiz/
  mock-exam/
  review/
  progress/
components/
data/
hooks/
styles/
types/
utils/
```

## Install

```bash
npm install
```

## Run Dev Server

```bash
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
```

## Notes

- Progress is saved in browser localStorage key `grammar-galaxy-progress-v1`.
- The app is designed mobile-first and works well on phones/tablets.

## Future Improvements

1. Add richer drag-and-drop interactions with a dedicated DnD library.
2. Add optional voice narration with Web Speech API.
3. Add printable worksheets generated from quiz data.
4. Add multi-child profiles and cloud sync.
5. Add teacher mode with custom question packs.
