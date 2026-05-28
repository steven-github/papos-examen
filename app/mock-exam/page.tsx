"use client";

import { useMemo, useState } from "react";

import { CelebrationModal } from "@/components/CelebrationModal";
import { ChildHeader } from "@/components/ChildHeader";
import { ExerciseCard } from "@/components/ExerciseCard";
import { NavigationMenu } from "@/components/NavigationMenu";
import { ResultSummary } from "@/components/ResultSummary";
import { mockExamQuestions } from "@/data/mockExam";
import { useProgress } from "@/hooks/useProgress";
import type { MistakeRecord } from "@/types";

export default function MockExamPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [mistakes, setMistakes] = useState<MistakeRecord[]>([]);
  const [finished, setFinished] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const { recordMockExam, progress } = useProgress();
  const question = mockExamQuestions[currentIndex];
  const score = useMemo(() => Math.round((correctCount / mockExamQuestions.length) * 100), [correctCount]);

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

    const isLast = currentIndex >= mockExamQuestions.length - 1;

    if (isLast) {
      const allMistakes = isCorrect || !mistake ? mistakes : [...mistakes, mistake];
      const nextScore = Math.round((nextCorrect / mockExamQuestions.length) * 100);
      recordMockExam(nextScore, allMistakes);
      setFinished(true);
      if (nextScore >= 75) {
        setShowCelebration(true);
      }
      return;
    }

    setTimeout(() => {
      setCurrentIndex((value) => value + 1);
    }, 360);
  };

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-6 sm:px-6">
        <ChildHeader
          eyebrow="Mock Exam"
          title="Final Grammar Challenge"
          subtitle="Mixed questions like your real test. Take your time and read each sentence carefully."
          rewardCount={progress.rewards}
        />

        {!finished && question ? (
          <>
            <div className="glass-card rounded-4xl px-5 py-4 text-sm font-black text-slate-700">
              Section question {currentIndex + 1} of {mockExamQuestions.length}
            </div>
            <ExerciseCard key={question.id} question={question} onAnswered={handleAnswered} />
          </>
        ) : (
          <ResultSummary
            score={score}
            correct={correctCount}
            total={mockExamQuestions.length}
            title={score >= 85 ? "Excellent mock exam!" : "Good run. Review and retry!"}
            onRetry={reset}
          />
        )}

        <CelebrationModal
          open={showCelebration}
          title="Mock Exam Win!"
          message="Fantastic score! You are getting ready for the real exam."
          onClose={() => setShowCelebration(false)}
        />
      </main>
    </div>
  );
}
