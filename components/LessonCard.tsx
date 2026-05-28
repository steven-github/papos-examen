import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";

import { HighlightedEvaluableText } from "@/components/HighlightedEvaluableText";
import type { Lesson } from "@/types";

interface LessonCardProps {
  lesson: Lesson;
  unlocked: boolean;
  completed: boolean;
}

export function LessonCard({ lesson, unlocked, completed }: LessonCardProps) {
  return (
    <article
      className={`glass-card rounded-[2rem] bg-gradient-to-br p-5 ${lesson.color} transition-transform duration-300 ${unlocked ? "hover:-translate-y-1" : "opacity-70 grayscale-[0.15]"}`}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <div className="mb-2 text-4xl">{lesson.emoji}</div>
          <h3 className="section-title text-2xl text-slate-800">
            <span className="evaluable-text">{lesson.title}</span>
          </h3>
        </div>
        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
          {completed ? "lista" : unlocked ? "abierta" : "bloqueada"}
        </span>
      </div>
      <p className="mb-4 text-sm text-slate-600">{lesson.goal}</p>
      <p className="mb-6 text-sm font-semibold text-slate-700">
        <HighlightedEvaluableText text={lesson.simpleExplanation} phrases={lesson.evaluablePhrases} />
      </p>
      {unlocked ? (
        <Link
          href={`/lessons/${lesson.slug}`}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-black text-white"
        >
          Comenzar <ArrowRight className="h-4 w-4" />
        </Link>
      ) : (
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/10 px-4 py-3 text-sm font-black text-slate-500">
          <Lock className="h-4 w-4" /> Termina la anterior para abrir esta
        </div>
      )}
    </article>
  );
}