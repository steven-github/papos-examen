"use client";

import { ChildHeader } from "@/components/ChildHeader";
import { NavigationMenu } from "@/components/NavigationMenu";
import { QuizCard } from "@/components/QuizCard";
import { quizzes } from "@/data/quizzes";
import { useProgress } from "@/hooks/useProgress";

export default function QuizHomePage() {
  const { progress } = useProgress();

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <ChildHeader
          eyebrow="Quizzes"
          title="Pick a Topic Quiz"
          subtitle="Each quiz gives stars, instant feedback, and clear corrections."
          rewardCount={progress.rewards}
        />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} bestScore={progress.quizScores[quiz.id]} />
          ))}
        </section>
      </main>
    </div>
  );
}
