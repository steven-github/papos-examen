"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, Star } from "lucide-react";

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
          subtitle="Hi champ! Let us learn, play, and get ready for Grammar Evaluation #2 with fun mini steps."
          rewardCount={progress.rewards}
        />

        <section className="grid gap-4 md:grid-cols-2">
          <article className="glass-card rounded-4xl p-5">
            <h2 className="section-title text-3xl text-slate-800">Your progress today</h2>
            <p className="mt-2 text-sm font-bold text-slate-600">
              {hydrated ? "Your answers are saved on this device." : "Loading your saved progress..."}
            </p>
            <div className="mt-4 space-y-4">
              <ProgressBar value={overallProgress} label="Overall mission" tone="blue" />
              <ProgressBar
                value={Math.round((progress.completedLessons.length / lessons.length) * 100)}
                label="Lessons completed"
                tone="green"
              />
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/lessons"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white"
              >
                Start learning <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/mock-exam"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-700 ring-1 ring-slate-200"
              >
                Try mock exam
              </Link>
            </div>
          </article>

          <article className="glass-card rounded-4xl p-5">
            <h2 className="section-title text-3xl text-slate-800">Exam details</h2>
            <ul className="mt-4 space-y-2 text-sm font-bold text-slate-700">
              <li>Teacher: Priscilla Martinez</li>
              <li>Subject: Grammar</li>
              <li>Evaluation: #2</li>
              <li>School Year: 2026</li>
              <li>Exam date: Friday, May 29th, 2026</li>
            </ul>
            <div className="mt-5 rounded-3xl bg-white/90 p-4">
              <p className="text-sm font-black text-slate-600">Book references:</p>
              <p className="mt-2 text-sm font-bold text-slate-600">
                Grammar Friends pages 16 to 19 and 22 to 24, plus Family and Friends pages 24, 25, and 33.
              </p>
            </div>
          </article>
        </section>

        <section>
          <h2 className="section-title mb-4 text-3xl text-slate-800">Topic quick view</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
                    {topic.id.replaceAll("-", " ")}
                  </h3>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-700">
                    {topic.lessonDone ? "Done" : "In progress"}
                  </span>
                </div>
                <ProgressBar value={topic.quizBest} label="Best quiz" tone="gold" />
                <div className="mt-3">
                  <ProgressBar value={topic.practiceBest} label="Best practice" tone="pink" />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Link href="/practice" className="glass-card rounded-4xl p-5 transition hover:-translate-y-1">
            <div className="mb-3 inline-flex rounded-2xl bg-blue-100 p-3">
              <BookOpen className="h-6 w-6 text-blue-700" />
            </div>
            <h3 className="section-title text-2xl text-slate-800">Practice Zone</h3>
            <p className="mt-2 text-sm font-bold text-slate-600">Interactive exercises with instant feedback.</p>
          </Link>
          <Link href="/quiz" className="glass-card rounded-4xl p-5 transition hover:-translate-y-1">
            <div className="mb-3 inline-flex rounded-2xl bg-emerald-100 p-3">
              <Brain className="h-6 w-6 text-emerald-700" />
            </div>
            <h3 className="section-title text-2xl text-slate-800">Quiz Time</h3>
            <p className="mt-2 text-sm font-bold text-slate-600">Earn stars and unlock rewards with each quiz.</p>
          </Link>
          <Link href="/games" className="glass-card rounded-4xl p-5 transition hover:-translate-y-1">
            <div className="mb-3 inline-flex rounded-2xl bg-amber-100 p-3">
              <Star className="h-6 w-6 text-amber-700" />
            </div>
            <h3 className="section-title text-2xl text-slate-800">Mini Games</h3>
            <p className="mt-2 text-sm font-bold text-slate-600">Play quick games and keep grammar fresh.</p>
          </Link>
        </section>
      </main>
    </div>
  );
}
