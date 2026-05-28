"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowRight, CheckCircle2, Headphones } from "lucide-react";

import { ChildHeader } from "@/components/ChildHeader";
import { NavigationMenu } from "@/components/NavigationMenu";
import { lessonMap } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";
import type { LessonSlug } from "@/types";

export default function LessonDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug as LessonSlug;
  const lesson = lessonMap[slug];
  const { markLessonComplete, progress } = useProgress();

  if (!lesson) {
    return (
      <div className="page-shell">
        <NavigationMenu />
        <main className="content-wrap mx-auto max-w-4xl px-4 py-10">
          <div className="glass-card rounded-4xl p-6 text-center">
            <h1 className="section-title text-3xl text-slate-800">Lesson not found</h1>
          </div>
        </main>
      </div>
    );
  }

  const alreadyCompleted = progress.completedLessons.includes(slug);

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6">
        <ChildHeader
          eyebrow="Lesson"
          title={`${lesson.emoji} ${lesson.title}`}
          subtitle={lesson.goal}
          rewardCount={progress.rewards}
        />

        <section className="glass-card rounded-4xl p-6">
          <h2 className="section-title text-3xl text-slate-800">Simple explanation</h2>
          <p className="mt-3 text-base font-bold text-slate-700">{lesson.simpleExplanation}</p>
          <div className="mt-4 rounded-3xl bg-white/90 p-4">
            <p className="mb-2 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-700">
              <Headphones className="h-4 w-4" /> Audio-ready script
            </p>
            <p className="text-sm font-bold text-slate-700">{lesson.audioText}</p>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {lesson.sections.map((section) => (
            <article key={section.title} className="glass-card rounded-4xl p-5">
              <p className="text-3xl">{section.emoji}</p>
              <h3 className="section-title mt-2 text-2xl text-slate-800">{section.title}</h3>
              <p className="mt-2 text-sm font-bold text-slate-600">{section.body}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="glass-card rounded-4xl p-5">
            <h3 className="section-title text-3xl text-slate-800">Examples</h3>
            <ul className="mt-4 space-y-3">
              {lesson.examples.map((example) => (
                <li key={example.sentence} className="rounded-3xl bg-white/90 p-3">
                  <p className="text-sm font-black text-slate-700">{example.sentence}</p>
                  <p className="mt-1 text-xs font-bold text-slate-500">Focus: {example.highlight}</p>
                  <p className="mt-1 text-xs font-bold text-blue-700">{example.note}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="glass-card rounded-4xl p-5">
            <h3 className="section-title text-3xl text-slate-800">Quick checks</h3>
            <div className="mt-4 space-y-3">
              {lesson.quickChecks.map((check) => (
                <div key={check.prompt} className="rounded-3xl bg-white/90 p-3">
                  <p className="text-sm font-black text-slate-700">{check.prompt}</p>
                  <p className="mt-1 text-xs font-bold text-slate-500">Choices: {check.choices.join(" | ")}</p>
                  <p className="mt-1 text-xs font-bold text-emerald-700">
                    Correct: {check.correctAnswer} - {check.explanation}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="glass-card rounded-4xl p-5">
          <h3 className="section-title text-3xl text-slate-800">Vocabulary set</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {lesson.vocabulary.map((word) => (
              <span key={word} className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-700 ring-1 ring-slate-200">
                {word}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => markLessonComplete(slug)}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white"
            >
              <CheckCircle2 className="h-4 w-4" /> {alreadyCompleted ? "Completed" : "Mark as done"}
            </button>
            <Link
              href="/practice"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-700 ring-1 ring-slate-200"
            >
              Practice now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
