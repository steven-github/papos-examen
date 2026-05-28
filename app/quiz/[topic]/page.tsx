"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import { CelebrationModal } from "@/components/CelebrationModal";
import { ChildHeader } from "@/components/ChildHeader";
import { ExerciseCard } from "@/components/ExerciseCard";
import { NavigationMenu } from "@/components/NavigationMenu";
import { ResultSummary } from "@/components/ResultSummary";
import { quizMap } from "@/data/quizzes";
import { useProgress } from "@/hooks/useProgress";
import type { LessonSlug, MistakeRecord } from "@/types";

export default function TopicQuizPage() {
  const params = useParams<{ topic: string }>();
  const topic = params.topic as LessonSlug;
  const quiz = quizMap[topic];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [mistakes, setMistakes] = useState<MistakeRecord[]>([]);
  const [finished, setFinished] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const { recordQuiz, progress } = useProgress();

  const score = quiz
    ? Math.round((correctCount / quiz.questions.length) * 100)
    : 0;

  if (!quiz) {
    return (
      <div className="page-shell">
        <NavigationMenu />
        <main className="content-wrap mx-auto max-w-4xl px-4 py-10">
          <div className="glass-card rounded-4xl p-6 text-center">
            <h1 className="section-title text-3xl text-slate-800">Quiz not found</h1>
          </div>
        </main>
      </div>
    );
  }

  const question = quiz.questions[currentIndex];

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

    const isLast = currentIndex >= quiz.questions.length - 1;

    if (isLast) {
      const allMistakes = isCorrect || !mistake ? mistakes : [...mistakes, mistake];
      const nextScore = Math.round((nextCorrect / quiz.questions.length) * 100);
      recordQuiz(topic, nextScore, allMistakes);
      setFinished(true);
      if (nextScore >= 80) {
        setShowCelebration(true);
      }
      return;
    }

    setTimeout(() => {
      setCurrentIndex((value) => value + 1);
    }, 380);
  };

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-6 sm:px-6">
        <ChildHeader
          eyebrow="Quiz"
          title={`${quiz.emoji} ${quiz.title}`}
          subtitle={quiz.description}
          rewardCount={progress.rewards}
        />

        {!finished && question ? (
          <>
            <div className="glass-card rounded-4xl px-5 py-4 text-sm font-black text-slate-700">
              Question {currentIndex + 1} of {quiz.questions.length}
            </div>
            <ExerciseCard key={question.id} question={question} onAnswered={handleAnswered} />
          </>
        ) : (
          <ResultSummary
            score={score}
            correct={correctCount}
            total={quiz.questions.length}
            title={score >= 80 ? "Quiz champion!" : "Great effort, keep training!"}
            onRetry={reset}
          />
        )}

        <CelebrationModal
          open={showCelebration}
          title="Quiz Star!"
          message="Amazing! You got a high score in this topic."
          onClose={() => setShowCelebration(false)}
        />
      </main>
    </div>
  );
}
