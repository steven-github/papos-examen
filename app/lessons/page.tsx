"use client";

import { ChildHeader } from "@/components/ChildHeader";
import { LessonCard } from "@/components/LessonCard";
import { NavigationMenu } from "@/components/NavigationMenu";
import { lessonsBySubject, subjectDescriptions, subjectLabels } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";
import type { ExamSubject } from "@/types";

const subjects: ExamSubject[] = ["science", "grammar"];

export default function LessonsPage() {
  const { progress } = useProgress();

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <ChildHeader
          eyebrow="Temas"
          title="Elige Science o Grammar"
          subtitle="Cada bloque usa solo la materia indicada en los topics y paginas adjuntas."
          rewardCount={progress.rewards}
        />

        {subjects.map((subject) => (
          <section key={subject} id={subject} className="scroll-mt-24">
            <div className="mb-4 rounded-4xl bg-white/80 p-5 ring-1 ring-white/70">
              <h2 className="section-title text-3xl text-slate-800">{subjectLabels[subject]}</h2>
              <p className="mt-1 text-sm font-bold text-slate-600">{subjectDescriptions[subject]}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {lessonsBySubject[subject].map((lesson) => (
                <LessonCard
                  key={lesson.slug}
                  lesson={lesson}
                  unlocked={progress.unlockedLessons.includes(lesson.slug)}
                  completed={progress.completedLessons.includes(lesson.slug)}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
