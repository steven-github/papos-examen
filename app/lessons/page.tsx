"use client";

import { ChildHeader } from "@/components/ChildHeader";
import { LessonCard } from "@/components/LessonCard";
import { NavigationMenu } from "@/components/NavigationMenu";
import { lessons } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";

export default function LessonsPage() {
  const { progress } = useProgress();

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <ChildHeader
          eyebrow="Lecciones"
          title="Grammar paso a paso"
          subtitle="Lecciones cortitas y faciles. Completa una y se abre la siguiente."
          rewardCount={progress.rewards}
        />

        <section className="grid gap-4 md:grid-cols-2">
          {lessons.map((lesson) => (
            <LessonCard
              key={lesson.slug}
              lesson={lesson}
              unlocked={progress.unlockedLessons.includes(lesson.slug)}
              completed={progress.completedLessons.includes(lesson.slug)}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
