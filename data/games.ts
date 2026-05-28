import type { GameDefinition } from "@/types";

export const games: GameDefinition[] = [
  {
    id: "word-match",
    title: "Word Match",
    emoji: "🧠",
    description: "Match clues with the correct grammar word.",
    rewardText: "Earn stars by matching quickly.",
  },
  {
    id: "memory-cards",
    title: "Memory Cards",
    emoji: "🃏",
    description: "Flip cards and find grammar pairs.",
    rewardText: "Find all pairs to win a shiny badge.",
  },
  {
    id: "build-sentence",
    title: "Build the Sentence",
    emoji: "🧱",
    description: "Drag words into the right order.",
    rewardText: "Perfect order means extra stars.",
  },
  {
    id: "fast-answer",
    title: "Fast Answer",
    emoji: "⚡",
    description: "Answer quickly before time runs out.",
    rewardText: "Beat your best score and celebrate.",
  },
];