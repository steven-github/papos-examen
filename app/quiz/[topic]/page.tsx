"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

import { CelebrationModal } from "@/components/CelebrationModal";
import { ChildHeader } from "@/components/ChildHeader";
import { ExerciseCard } from "@/components/ExerciseCard";
import { HighlightedEvaluableText } from "@/components/HighlightedEvaluableText";
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
  const [answeredQuestionIds, setAnsweredQuestionIds] = useState<string[]>([]);
  const [answeredCurrent, setAnsweredCurrent] = useState(false);
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
            <h1 className="section-title text-3xl text-slate-800">Quiz no encontrado</h1>
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
    setAnsweredQuestionIds([]);
    setAnsweredCurrent(false);
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
    const previousQuestion = quiz.questions[previousIndex];
    setAnsweredCurrent(answeredQuestionIds.includes(previousQuestion.id));
  };

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-6 sm:px-6">
        <ChildHeader
          eyebrow="Quiz"
          title={
            <>
              {quiz.emoji}{" "}
              <HighlightedEvaluableText text={quiz.title} phrases={quiz.evaluablePhrases} />
            </>
          }
          subtitle={<HighlightedEvaluableText text={quiz.description} phrases={quiz.evaluablePhrases} />}
          rewardCount={progress.rewards}
        />

        {!finished && question ? (
          <>
            <div className="glass-card rounded-4xl px-5 py-4 text-sm font-black text-slate-700">
              Pregunta {currentIndex + 1} de {quiz.questions.length}
            </div>
            <ExerciseCard key={question.id} question={question} onAnswered={handleAnswered} />
            {currentIndex > 0 || (answeredCurrent && currentIndex < quiz.questions.length - 1) ? (
              <div className="glass-card rounded-4xl p-5">
                {answeredCurrent && currentIndex < quiz.questions.length - 1 ? (
                  <p className="text-sm font-bold text-slate-600">
                    Mira la explicacion y avanza cuando ya la entiendas.
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
                  {answeredCurrent && currentIndex < quiz.questions.length - 1 ? (
                    <button
                      type="button"
                      onClick={goToNextQuestion}
                      className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white"
                    >
                      Avanzar a la siguiente pregunta
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
            total={quiz.questions.length}
            title={score >= 80 ? "Campeon del quiz!" : "Vas muy bien! Intentalo otra vez."}
            onRetry={reset}
          />
        )}

        <CelebrationModal
          open={showCelebration}
          title="Estrella del quiz"
          message="Increible! Te fue excelente en este tema."
          onClose={() => setShowCelebration(false)}
        />
      </main>
    </div>
  );
}
