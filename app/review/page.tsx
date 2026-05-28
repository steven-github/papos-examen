"use client";

import Link from "next/link";
import { RotateCcw } from "lucide-react";

import { ChildHeader } from "@/components/ChildHeader";
import { NavigationMenu } from "@/components/NavigationMenu";
import { useProgress } from "@/hooks/useProgress";

export default function ReviewMistakesPage() {
  const { progress, clearMistake } = useProgress();

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6">
        <ChildHeader
          eyebrow="Review"
          title="Fix My Mistakes"
          subtitle="Check what was wrong, learn why, and try again with confidence."
          rewardCount={progress.rewards}
        />

        {progress.mistakes.length === 0 ? (
          <section className="glass-card rounded-4xl p-6 text-center">
            <h2 className="section-title text-3xl text-slate-800">No mistakes to review</h2>
            <p className="mt-2 text-sm font-bold text-slate-600">Great! Keep practicing to stay sharp.</p>
            <Link
              href="/practice"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white"
            >
              <RotateCcw className="h-4 w-4" /> Go to practice
            </Link>
          </section>
        ) : (
          <section className="space-y-4">
            {progress.mistakes.map((mistake) => (
              <article key={mistake.questionId} className="glass-card rounded-4xl p-5">
                <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-rose-600">{mistake.topic.replaceAll("-", " ")}</p>
                <h3 className="section-title text-2xl text-slate-800">{mistake.prompt}</h3>
                <p className="mt-2 text-sm font-bold text-slate-600">Your answer: {mistake.selectedAnswer}</p>
                <p className="mt-1 text-sm font-bold text-emerald-700">Correct answer: {mistake.correctAnswer}</p>
                <p className="mt-2 rounded-2xl bg-white/90 px-4 py-3 text-sm font-bold text-slate-600">Why: {mistake.explanation}</p>
                <button
                  type="button"
                  onClick={() => clearMistake(mistake.questionId)}
                  className="mt-3 rounded-full bg-slate-900 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white"
                >
                  Remove after review
                </button>
              </article>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
