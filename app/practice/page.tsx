"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ChildHeader } from "@/components/ChildHeader";
import { HighlightedEvaluableText } from "@/components/HighlightedEvaluableText";
import { NavigationMenu } from "@/components/NavigationMenu";
import { lessonMap, lessons } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";

export default function PracticePage() {
  const { progress } = useProgress();

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <ChildHeader
          eyebrow="Practica"
          title="Elige practica por tema"
          subtitle="Selecciona una leccion y practica solo ese tema, sin mezclar preguntas."
          rewardCount={progress.rewards}
        />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {lessons.map((lesson) => {
            const best = progress.practiceScores[lesson.slug]?.best ?? 0;
            const unlocked = progress.unlockedLessons.includes(lesson.slug);

            return (
              <article
                key={lesson.slug}
                className={`glass-card rounded-[2rem] bg-gradient-to-br p-5 ${lesson.color} transition-transform duration-300 ${unlocked ? "hover:-translate-y-1" : "opacity-70 grayscale-[0.15]"}`}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <div className="mb-2 text-4xl">{lesson.emoji}</div>
                    <h3 className="section-title text-2xl text-slate-800">
                      <span className="evaluable-text">{lesson.title}</span>
                    </h3>
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-700">
                    {best}%
                  </span>
                </div>

                <p className="mb-6 text-sm font-semibold text-slate-700">
                  <HighlightedEvaluableText
                    text={lesson.simpleExplanation}
                    phrases={lesson.evaluablePhrases}
                  />
                </p>

                {unlocked ? (
                  <Link
                    href={`/practice/${lesson.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-black text-white"
                  >
                    Practicar este tema <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/10 px-4 py-3 text-sm font-black text-slate-500">
                    Completa la leccion anterior
                  </div>
                )}
              </article>
            );
          })}
        </section>

        <section className="glass-card rounded-4xl p-5">
          <h2 className="section-title text-3xl text-slate-800">Consejo</h2>
          <p className="mt-2 text-sm font-bold text-slate-600">
            Practica cada tema por separado y luego haz el simulacro final.
          </p>
          <p className="mt-2 text-sm font-bold text-slate-600">
            Temas: <span className="evaluable-text">{lessonMap["possessive-adjectives"].title}</span>, <span className="evaluable-text">{lessonMap["can-cant"].title}</span>, <span className="evaluable-text">{lessonMap["present-progressive"].title}</span>
          </p>
        </section>
      </main>
    </div>
  );
}
