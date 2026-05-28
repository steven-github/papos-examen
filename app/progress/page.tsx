"use client";

import { ChildHeader } from "@/components/ChildHeader";
import { NavigationMenu } from "@/components/NavigationMenu";
import { ProgressBar } from "@/components/ProgressBar";
import { lessons } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";

export default function ProgressPage() {
  const { progress, overallProgress, topicSummaries, weakAreas, resetProgress } = useProgress();

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6">
        <ChildHeader
          eyebrow="Progress"
          title="Your Learning Dashboard"
          subtitle="Track lesson completion, quiz scores, mock exams, and areas to improve."
          rewardCount={progress.rewards}
        />

        <section className="grid gap-4 md:grid-cols-2">
          <article className="glass-card rounded-4xl p-6">
            <h2 className="section-title text-3xl text-slate-800">Overall progress</h2>
            <div className="mt-4 space-y-4">
              <ProgressBar value={overallProgress} label="Total mission" tone="blue" />
              <ProgressBar
                value={Math.round((progress.completedLessons.length / lessons.length) * 100)}
                label="Lesson completion"
                tone="green"
              />
              <ProgressBar
                value={progress.mockExamHistory.at(-1)?.score ?? 0}
                label="Latest mock exam"
                tone="gold"
              />
            </div>
          </article>

          <article className="glass-card rounded-4xl p-6">
            <h2 className="section-title text-3xl text-slate-800">Need more practice</h2>
            <ul className="mt-4 space-y-2">
              {weakAreas.map((area) => (
                <li key={area} className="rounded-2xl bg-white/90 px-4 py-3 text-sm font-bold text-slate-700 capitalize">
                  {area}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="glass-card rounded-4xl p-6">
          <h2 className="section-title text-3xl text-slate-800">Topic bars</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {topicSummaries.map((topic) => (
              <div key={topic.id} className="rounded-3xl bg-white/90 p-4">
                <h3 className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                  {topic.id.replaceAll("-", " ")}
                </h3>
                <ProgressBar value={topic.quizBest} label="Quiz" tone="pink" />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={resetProgress}
            className="mt-5 rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white"
          >
            Reset local progress
          </button>
        </section>
      </main>
    </div>
  );
}
