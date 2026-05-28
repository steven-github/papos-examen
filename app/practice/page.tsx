"use client";

import { useMemo, useState } from "react";

import { CelebrationModal } from "@/components/CelebrationModal";
import { ChildHeader } from "@/components/ChildHeader";
import { ExerciseCard } from "@/components/ExerciseCard";
import { NavigationMenu } from "@/components/NavigationMenu";
import { ResultSummary } from "@/components/ResultSummary";
import { practiceExercises } from "@/data/exercises";
import { useProgress } from "@/hooks/useProgress";
import type { MistakeRecord } from "@/types";

export default function PracticePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [mistakes, setMistakes] = useState<MistakeRecord[]>([]);
  const [answeredCurrent, setAnsweredCurrent] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const { recordPractice, progress } = useProgress();
  const question = practiceExercises[currentIndex];
  const score = useMemo(
    () => Math.round((correctCount / practiceExercises.length) * 100),
    [correctCount],
  );

  const reset = () => {
    setCurrentIndex(0);
    setCorrectCount(0);
    setMistakes([]);
    setAnsweredCurrent(false);
    setFinished(false);
  };

  const handleAnswered = (isCorrect: boolean, mistake?: MistakeRecord) => {
    setAnsweredCurrent(true);
    const nextCorrect = correctCount + (isCorrect ? 1 : 0);

    if (!isCorrect && mistake) {
      setMistakes((list) => [...list, mistake]);
    }

    setCorrectCount(nextCorrect);

    const isLast = currentIndex >= practiceExercises.length - 1;

    if (isLast) {
      const allMistakes = isCorrect || !mistake ? mistakes : [...mistakes, mistake];
      const nextScore = Math.round(
        (nextCorrect / practiceExercises.length) * 100,
      );
      recordPractice("mixed", nextScore, allMistakes);
      setFinished(true);
      if (nextScore >= 70) {
        setShowCelebration(true);
      }
      return;
    }
  };

  const goToNextQuestion = () => {
    setCurrentIndex((value) => value + 1);
    setAnsweredCurrent(false);
  };

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-6 sm:px-6">
        <ChildHeader
          eyebrow="Practica"
          title="Zona de practica interactiva"
          subtitle="Resuelve un reto por turno y aprende al momento."
          rewardCount={progress.rewards}
        />

        {!finished && question ? (
          <>
            <div className="glass-card rounded-4xl px-5 py-4 text-sm font-black text-slate-700">
              Pregunta {currentIndex + 1} de {practiceExercises.length}
            </div>
            <ExerciseCard key={question.id} question={question} onAnswered={handleAnswered} />
            {answeredCurrent && currentIndex < practiceExercises.length - 1 ? (
              <div className="glass-card rounded-4xl p-5">
                <p className="text-sm font-bold text-slate-600">
                  Mira la explicacion y avanza cuando ya la entiendas.
                </p>
                <button
                  type="button"
                  onClick={goToNextQuestion}
                  className="mt-3 inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white"
                >
                  Avanzar a la siguiente pregunta
                </button>
              </div>
            ) : null}
          </>
        ) : (
          <ResultSummary
            score={score}
            correct={correctCount}
            total={practiceExercises.length}
            title={score >= 80 ? "Genial! Lo hiciste super bien!" : "Buen trabajo! Vamos por otra ronda."}
            onRetry={reset}
          />
        )}

        <CelebrationModal
          open={showCelebration}
          title="Lluvia de estrellas"
          message="Wow! Sacaste un gran puntaje en practica."
          onClose={() => setShowCelebration(false)}
        />
      </main>
    </div>
  );
}
