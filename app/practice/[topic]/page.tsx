"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";

import { CelebrationModal } from "@/components/CelebrationModal";
import { ChildHeader } from "@/components/ChildHeader";
import { ExerciseCard } from "@/components/ExerciseCard";
import { NavigationMenu } from "@/components/NavigationMenu";
import { ResultSummary } from "@/components/ResultSummary";
import { practiceByTopic } from "@/data/exercises";
import { lessonMap } from "@/data/lessons";
import { useProgress } from "@/hooks/useProgress";
import type { LessonSlug, MistakeRecord } from "@/types";

export default function TopicPracticePage() {
  const params = useParams<{ topic: string }>();
  const topic = params.topic as LessonSlug;
  const questions = practiceByTopic[topic];
  const lesson = lessonMap[topic];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [mistakes, setMistakes] = useState<MistakeRecord[]>([]);
  const [answeredQuestionIds, setAnsweredQuestionIds] = useState<string[]>([]);
  const [answeredCurrent, setAnsweredCurrent] = useState(false);
  const [pendingFinalScore, setPendingFinalScore] = useState<number | null>(null);
  const [pendingFinalMistakes, setPendingFinalMistakes] = useState<MistakeRecord[] | null>(null);
  const [finished, setFinished] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const { recordPractice, progress } = useProgress();
  const question = questions?.[currentIndex];
  const score = useMemo(() => {
    if (!questions?.length) {
      return 0;
    }

    return Math.round((correctCount / questions.length) * 100);
  }, [correctCount, questions]);

  if (!lesson || !questions?.length) {
    return (
      <div className="page-shell">
        <NavigationMenu />
        <main className="content-wrap mx-auto max-w-4xl px-4 py-10">
          <div className="glass-card rounded-4xl p-6 text-center">
            <h1 className="section-title text-3xl text-slate-800">Tema de practica no encontrado</h1>
          </div>
        </main>
      </div>
    );
  }

  const reset = () => {
    setCurrentIndex(0);
    setCorrectCount(0);
    setMistakes([]);
    setAnsweredQuestionIds([]);
    setAnsweredCurrent(false);
    setPendingFinalScore(null);
    setPendingFinalMistakes(null);
    setFinished(false);
  };

  const handleAnswered = (isCorrect: boolean, mistake?: MistakeRecord) => {
    setAnsweredCurrent(true);

    if (answeredQuestionIds.includes(question.id)) {
      return;
    }

    const nextCorrect = correctCount + (isCorrect ? 1 : 0);

    if (!isCorrect && mistake) {
      setMistakes((list) => [...list, mistake]);
    }

    setAnsweredQuestionIds((list) => [...list, question.id]);
    setCorrectCount(nextCorrect);

    const isLast = currentIndex >= questions.length - 1;

    if (isLast) {
      const allMistakes = isCorrect || !mistake ? mistakes : [...mistakes, mistake];
      const nextScore = Math.round((nextCorrect / questions.length) * 100);
      setPendingFinalScore(nextScore);
      setPendingFinalMistakes(allMistakes);
      return;
    }
  };

  const finishPractice = () => {
    const finalScore = pendingFinalScore ?? score;
    const finalMistakes = pendingFinalMistakes ?? mistakes;

    recordPractice(topic, finalScore, finalMistakes);
    setFinished(true);

    if (finalScore >= 70) {
      setShowCelebration(true);
    }
  };

  const goToNextQuestion = () => {
    setCurrentIndex((value) => value + 1);
    setAnsweredCurrent(false);
  };

  const goToPreviousQuestion = () => {
    const previousIndex = currentIndex - 1;

    if (previousIndex < 0) {
      return;
    }

    setCurrentIndex(previousIndex);
    const previousQuestion = questions[previousIndex];
    setAnsweredCurrent(answeredQuestionIds.includes(previousQuestion.id));
  };

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-6 sm:px-6">
        <ChildHeader
          eyebrow="Practica"
          title={`${lesson.emoji} ${lesson.title}`}
          subtitle="Practica enfocada en un solo tema para evitar confusiones."
          rewardCount={progress.rewards}
        />

        {!finished && question ? (
          <>
            <div className="glass-card rounded-4xl px-5 py-4 text-sm font-black text-slate-700">
              Pregunta {currentIndex + 1} de {questions.length}
            </div>
            <ExerciseCard key={question.id} question={question} onAnswered={handleAnswered} />
            {currentIndex > 0 || answeredCurrent ? (
              <div className="glass-card rounded-4xl p-5">
                {answeredCurrent && currentIndex < questions.length - 1 ? (
                  <p className="text-sm font-bold text-slate-600">
                    Mira la explicacion y avanza cuando ya la entiendas.
                  </p>
                ) : null}
                {answeredCurrent && currentIndex >= questions.length - 1 ? (
                  <p className="text-sm font-bold text-slate-600">
                    Ya respondiste la ultima pregunta. Lee la explicacion y luego presiona Ver resultado.
                  </p>
                ) : null}
                <div className="mt-3 flex flex-wrap gap-3">
                  {currentIndex > 0 ? (
                    <button
                      type="button"
                      onClick={goToPreviousQuestion}
                      className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-black text-slate-700 ring-1 ring-slate-200"
                    >
                      Ir a la pregunta anterior
                    </button>
                  ) : null}
                  {answeredCurrent && currentIndex < questions.length - 1 ? (
                    <button
                      type="button"
                      onClick={goToNextQuestion}
                      className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white"
                    >
                      Avanzar a la siguiente pregunta
                    </button>
                  ) : null}
                  {answeredCurrent && currentIndex >= questions.length - 1 ? (
                    <button
                      type="button"
                      onClick={finishPractice}
                      className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white"
                    >
                      Ver resultado
                    </button>
                  ) : null}
                </div>
              </div>
            ) : null}
          </>
        ) : (
          <ResultSummary
            score={score}
            correct={correctCount}
            total={questions.length}
            title={score >= 80 ? "Genial! Lo hiciste super bien!" : "Buen trabajo! Vamos por otra ronda."}
            onRetry={reset}
          />
        )}

        <CelebrationModal
          open={showCelebration}
          title="Lluvia de estrellas"
          message="Wow! Sacaste un gran puntaje en este tema."
          onClose={() => setShowCelebration(false)}
        />
      </main>
    </div>
  );
}
