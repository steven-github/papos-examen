import Link from "next/link";
import { Sparkles } from "lucide-react";

import type { QuizSet, ScoreRecord } from "@/types";

interface QuizCardProps {
  quiz: QuizSet;
  bestScore?: ScoreRecord;
}

export function QuizCard({ quiz, bestScore }: QuizCardProps) {
  return (
    <Link
      href={`/quiz/${quiz.id}`}
      className="glass-card rounded-[2rem] p-5 transition hover:-translate-y-1"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <div className="mb-2 text-4xl">{quiz.emoji}</div>
          <h3 className="section-title text-2xl text-slate-800">{quiz.title}</h3>
        </div>
        <Sparkles className="h-6 w-6 text-amber-400" />
      </div>
      <p className="mb-4 text-sm text-slate-600">{quiz.description}</p>
      <div className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-black text-white">
        Best score: {bestScore?.best ?? 0}%
      </div>
    </Link>
  );
}