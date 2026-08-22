# Ian Exam Prep - Next.js App

Interactive educational web app in Next.js for Ian's 3rd grade Science and Grammar exams.

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
- Exam-first study paths for Science and Grammar

## Exam Context Embedded in the App

- School: Love at Work International Christian School
- Student: Ian
- Subjects: Science and Grammar
- Science Test: II Test, 10%
- Grammar Evaluation: #2, Second Period
- School Year: 2026
- Science Teacher: Maria Paula Guillen Calvo
- Grammar Teacher: Priscilla Martinez
- Science Date: August 27, 2026
- Grammar Due Date: Friday, August 28th, 2026

## Topics Included

- Science: Types of Pollution, Waste, Reduce/Reuse/Recycle, Properties of Matter, States of Matter, Changes of State
- Grammar: Present Simple affirmative/negative/questions, have/has, good at, Unit 6 vocabulary, adverbs of frequency, in/on/at, a/an/some, would like, comparative and superlative adjectives

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
