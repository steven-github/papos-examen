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
    setFinished(false);
  };

  const handleAnswered = (isCorrect: boolean, mistake?: MistakeRecord) => {
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

    setTimeout(() => {
      setCurrentIndex((value) => value + 1);
    }, 400);
  };

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-6 sm:px-6">
        <ChildHeader
          eyebrow="Practice"
          title="Interactive Practice Zone"
          subtitle="Solve one challenge at a time and get instant feedback with clear explanations."
          rewardCount={progress.rewards}
        />

        {!finished && question ? (
          <>
            <div className="glass-card rounded-4xl px-5 py-4 text-sm font-black text-slate-700">
              Question {currentIndex + 1} of {practiceExercises.length}
            </div>
            <ExerciseCard key={question.id} question={question} onAnswered={handleAnswered} />
          </>
        ) : (
          <ResultSummary
            score={score}
            correct={correctCount}
            total={practiceExercises.length}
            title={score >= 80 ? "Amazing practice!" : "Good effort! Keep practicing."}
            onRetry={reset}
          />
        )}

        <CelebrationModal
          open={showCelebration}
          title="Star Power!"
          message="Awesome job! You reached a strong practice score."
          onClose={() => setShowCelebration(false)}
        />
      </main>
    </div>
  );
}
