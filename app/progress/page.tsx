"use client";

import { ChildHeader } from "@/components/ChildHeader";
import { NavigationMenu } from "@/components/NavigationMenu";
import { ProgressBar } from "@/components/ProgressBar";
import { lessonMap, lessons } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";

export default function ProgressPage() {
  const { progress, overallProgress, topicSummaries, weakAreas, resetProgress } = useProgress();

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6">
        <ChildHeader
          eyebrow="Progreso"
          title="Panel de aprendizaje"
          subtitle="Mira tus logros, tus puntajes y que tema practicar mas."
          rewardCount={progress.rewards}
        />

        <section className="grid gap-4 md:grid-cols-2">
          <article className="glass-card rounded-4xl p-6">
            <h2 className="section-title text-3xl text-slate-800">Progreso general</h2>
            <div className="mt-4 space-y-4">
              <ProgressBar value={overallProgress} label="Mision total" tone="blue" />
              <ProgressBar
                value={Math.round((progress.completedLessons.length / lessons.length) * 100)}
                label="Lecciones completadas"
                tone="green"
              />
              <ProgressBar
                value={progress.mockExamHistory.at(-1)?.score ?? 0}
                label="Ultimo simulacro"
                tone="gold"
              />
            </div>
          </article>

          <article className="glass-card rounded-4xl p-6">
            <h2 className="section-title text-3xl text-slate-800">Temas para practicar mas</h2>
            <ul className="mt-4 space-y-2">
              {weakAreas.map((area) => (
                <li key={area} className="rounded-2xl bg-white/90 px-4 py-3 text-sm font-bold text-slate-700 capitalize">
                  <span className="evaluable-text">{area}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="glass-card rounded-4xl p-6">
          <h2 className="section-title text-3xl text-slate-800">Barras por tema</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {topicSummaries.map((topic) => (
              <div key={topic.id} className="rounded-3xl bg-white/90 p-4">
                <h3 className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                  <span className="evaluable-text">{lessonMap[topic.id].title}</span>
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
            Empezar de nuevo
          </button>
        </section>
      </main>
    </div>
  );
}
