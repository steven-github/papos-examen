"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ClipboardCheck, FlaskConical } from "lucide-react";

import { ChildHeader } from "@/components/ChildHeader";
import { NavigationMenu } from "@/components/NavigationMenu";
import { ProgressBar } from "@/components/ProgressBar";
import { lessonsBySubject, subjectDescriptions, subjectLabels } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";
import type { ExamSubject } from "@/types";

const examCards: Array<{
  id: ExamSubject;
  title: string;
  subtitle: string;
  icon: typeof FlaskConical;
  tone: string;
}> = [
  {
    id: "science",
    title: "Science Exam",
    subtitle: "Pollution, waste, recycling, matter and changes of state.",
    icon: FlaskConical,
    tone: "from-emerald-200 via-sky-100 to-white",
  },
  {
    id: "grammar",
    title: "Grammar Exam",
    subtitle: "Present Simple, good at, vocabulary, review structures and comparisons.",
    icon: BookOpen,
    tone: "from-orange-200 via-rose-100 to-white",
  },
];

export default function HomePage() {
  const { hydrated, progress } = useProgress();

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <ChildHeader
          eyebrow="Love at Work International Christian School"
          title="Ian Exam Prep"
          subtitle="Elige primero el examen: Science o Grammar. Cada ruta tiene solo la materia indicada en los topics adjuntos."
          rewardCount={progress.rewards}
        />

        <section className="grid gap-4 md:grid-cols-2">
          {examCards.map((exam, index) => {
            const Icon = exam.icon;
            const lessons = lessonsBySubject[exam.id];
            const completed = lessons.filter((lesson) => progress.completedLessons.includes(lesson.slug)).length;
            const progressValue = Math.round((completed / lessons.length) * 100);

            return (
              <motion.article
                key={exam.id}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.08 }}
                className={`glass-card rounded-4xl bg-linear-to-br p-5 ${exam.tone}`}
              >
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 inline-flex rounded-2xl bg-white/85 p-3">
                      <Icon className="h-7 w-7 text-slate-800" />
                    </div>
                    <h2 className="section-title text-3xl text-slate-800">{exam.title}</h2>
                    <p className="mt-2 text-sm font-bold text-slate-700">{exam.subtitle}</p>
                  </div>
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-slate-600">
                    {lessons.length} temas
                  </span>
                </div>

                <p className="mb-4 rounded-3xl bg-white/85 px-4 py-3 text-sm font-bold text-slate-600">
                  Fuente: {subjectDescriptions[exam.id]}
                </p>
                <ProgressBar value={hydrated ? progressValue : 0} label={`${subjectLabels[exam.id]} completado`} tone={exam.id === "science" ? "green" : "pink"} />
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`/lessons#${exam.id}`}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white"
                  >
                    Estudiar {subjectLabels[exam.id]} <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/mock-exam"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-700 ring-1 ring-slate-200"
                  >
                    Simulacro <ClipboardCheck className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </section>

        <section className="glass-card rounded-4xl p-5">
          <h2 className="section-title text-3xl text-slate-800">Ruta de estudio</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {examCards.map((exam) => (
              <div key={exam.id} className="rounded-3xl bg-white/90 p-4">
                <h3 className="section-title text-2xl text-slate-800">{subjectLabels[exam.id]}</h3>
                <ul className="mt-3 space-y-2 text-sm font-bold text-slate-700">
                  {lessonsBySubject[exam.id].map((lesson) => (
                    <li key={lesson.slug}>
                      <span className="evaluable-text">{lesson.title}</span> · {lesson.source}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
