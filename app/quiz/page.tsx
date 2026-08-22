"use client";

import { ChildHeader } from "@/components/ChildHeader";
import { NavigationMenu } from "@/components/NavigationMenu";
import { QuizCard } from "@/components/QuizCard";
import { subjectDescriptions, subjectLabels } from "@/data/lessons";
import { quizzes } from "@/data/quizzes";
import { useProgress } from "@/hooks/useProgress";
import type { ExamSubject } from "@/types";

const subjects: ExamSubject[] = ["science", "grammar"];

export default function QuizHomePage() {
  const { progress } = useProgress();

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <ChildHeader
          eyebrow="Quizzes"
          title="Quizzes por examen"
          subtitle="Responde preguntas cortas de Science o Grammar sin mezclar temas."
          rewardCount={progress.rewards}
        />

        {subjects.map((subject) => (
          <section key={subject} className="space-y-4">
            <div className="rounded-4xl bg-white/80 p-5 ring-1 ring-white/70">
              <h2 className="section-title text-3xl text-slate-800">{subjectLabels[subject]}</h2>
              <p className="mt-1 text-sm font-bold text-slate-600">{subjectDescriptions[subject]}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {quizzes
                .filter((quiz) => quiz.subject === subject)
                .map((quiz) => (
                  <QuizCard key={quiz.id} quiz={quiz} bestScore={progress.quizScores[quiz.id]} />
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
