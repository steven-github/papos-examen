import type { GameDefinition } from "@/types";

export const games: GameDefinition[] = [
  {
    id: "word-match",
    title: "Word Match",
    emoji: "🧠",
    description: "Relaciona pistas con la palabra correcta de grammar.",
    rewardText: "Gana estrellas al relacionar rapido.",
  },
  {
    id: "memory-cards",
    title: "Memory Cards",
    emoji: "🃏",
    description: "Voltea tarjetas y encuentra pares de grammar.",
    rewardText: "Encuentra todos los pares para ganar una insignia.",
  },
  {
    id: "build-sentence",
    title: "Build the Sentence",
    emoji: "🧱",
    description: "Ordena palabras arrastrando en el orden correcto.",
    rewardText: "El orden perfecto da estrellas extra.",
  },
  {
    id: "fast-answer",
    title: "Fast Answer",
    emoji: "⚡",
    description: "Responde rapido antes de que se acabe el tiempo.",
    rewardText: "Supera tu mejor puntaje y celebra.",
  },
];