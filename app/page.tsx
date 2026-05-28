"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain } from "lucide-react";

import { ChildHeader } from "@/components/ChildHeader";
import { NavigationMenu } from "@/components/NavigationMenu";
import { ProgressBar } from "@/components/ProgressBar";
import { lessons } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";

export default function HomePage() {
  const { hydrated, overallProgress, progress, topicSummaries } = useProgress();

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <ChildHeader
          eyebrow="Love at Work International Christian School"
          title="Grammar Galaxy Mission"
          subtitle="Hola campeon! Vamos paso a paso con los temas del examen para que te vaya super bien."
          rewardCount={progress.rewards}
        />

        <section className="grid gap-4 md:grid-cols-2">
          <article className="glass-card rounded-4xl p-5">
            <h2 className="section-title text-3xl text-slate-800">Tu avance de hoy</h2>
            <p className="mt-2 text-sm font-bold text-slate-600">
              {hydrated ? "Tus respuestas quedan guardadas aqui." : "Cargando tu avance..."}
            </p>
            <div className="mt-4 space-y-4">
              <ProgressBar value={overallProgress} label="Super mision" tone="blue" />
              <ProgressBar
                value={Math.round((progress.completedLessons.length / lessons.length) * 100)}
                label="Lecciones listas"
                tone="green"
              />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/lessons"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white"
              >
                Empezar ahora <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/mock-exam"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-700 ring-1 ring-slate-200"
              >
                Probar simulacro
              </Link>
            </div>
          </article>

          <article className="glass-card rounded-4xl p-5">
            <h2 className="section-title text-3xl text-slate-800">Datos del examen</h2>
            <ul className="mt-4 space-y-2 text-sm font-bold text-slate-700">
              <li>Teacher: Priscilla Martinez</li>
              <li>Materia: Grammar</li>
              <li>Evaluacion: #2</li>
              <li>Ano escolar: 2026</li>
              <li>Fecha: Friday, May 29th, 2026</li>
            </ul>
            <div className="mt-5 rounded-3xl bg-white/90 p-4">
              <p className="text-sm font-black text-slate-600">Paginas de repaso:</p>
              <div className="mt-2 space-y-1 text-sm font-bold text-slate-600">
                <p><span className="evaluable-text">Can / Can&apos;t</span>: Grammar Friends 16, 17, 18 | Family and Friends 24, 25</p>
                <p><span className="evaluable-text">Possessive Adjectives</span>: Grammar Friends 19 | Family and Friends 25</p>
                <p><span className="evaluable-text">Present Progressive</span>: Grammar Friends 22, 23, 24 | Family and Friends 33</p>
              </div>
            </div>
          </article>
        </section>

        <section>
          <h2 className="section-title mb-4 text-3xl text-slate-800">Tus temas</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {topicSummaries.map((topic, index) => (
              <motion.article
                key={topic.id}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.08 }}
                className="glass-card rounded-4xl p-5"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h3 className="section-title text-xl capitalize text-slate-800">
                    <span className="evaluable-text">{topic.id.replaceAll("-", " ")}</span>
                  </h3>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-700">
                    {topic.lessonDone ? "Listo" : "Vamos"}
                  </span>
                </div>
                <ProgressBar value={topic.quizBest} label="Mejor quiz" tone="gold" />
                <div className="mt-3">
                  <ProgressBar value={topic.practiceBest} label="Mejor practica" tone="pink" />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <Link href="/practice" className="glass-card rounded-4xl p-5 transition hover:-translate-y-1">
            <div className="mb-3 inline-flex rounded-2xl bg-blue-100 p-3">
              <BookOpen className="h-6 w-6 text-blue-700" />
            </div>
            <h3 className="section-title text-2xl text-slate-800">Practica divertida</h3>
            <p className="mt-2 text-sm font-bold text-slate-600">Resuelve retos y aprende al instante.</p>
          </Link>
          <Link href="/quiz" className="glass-card rounded-4xl p-5 transition hover:-translate-y-1">
            <div className="mb-3 inline-flex rounded-2xl bg-emerald-100 p-3">
              <Brain className="h-6 w-6 text-emerald-700" />
            </div>
            <h3 className="section-title text-2xl text-slate-800">Quiz de estrellas</h3>
            <p className="mt-2 text-sm font-bold text-slate-600">Gana estrellas mientras repasas para el examen.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
