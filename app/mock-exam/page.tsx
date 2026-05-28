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
import { shuffleArray } from "@/utils/random";

export default function MockExamPage() {
  const [questionSet, setQuestionSet] = useState(() => shuffleArray(mockExamQuestions));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [mistakes, setMistakes] = useState<MistakeRecord[]>([]);
  const [answeredQuestionIds, setAnsweredQuestionIds] = useState<string[]>([]);
  const [correctQuestionIds, setCorrectQuestionIds] = useState<string[]>([]);
  const [wrongQuestionIds, setWrongQuestionIds] = useState<string[]>([]);
  const [answeredCurrent, setAnsweredCurrent] = useState(false);
  const [pendingFinalScore, setPendingFinalScore] = useState<number | null>(null);
  const [pendingFinalMistakes, setPendingFinalMistakes] = useState<MistakeRecord[] | null>(null);
  const [finished, setFinished] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const { recordMockExam, progress } = useProgress();
  const question = questionSet[currentIndex];
  const score = useMemo(
    () => Math.round((correctCount / questionSet.length) * 100),
    [correctCount, questionSet.length],
  );

  const reset = () => {
    setQuestionSet(shuffleArray(mockExamQuestions));
    setCurrentIndex(0);
    setCorrectCount(0);
    setMistakes([]);
    setAnsweredQuestionIds([]);
    setCorrectQuestionIds([]);
    setWrongQuestionIds([]);
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
      setWrongQuestionIds((list) => (list.includes(question.id) ? list : [...list, question.id]));
    }

    if (isCorrect) {
      setCorrectQuestionIds((list) => (list.includes(question.id) ? list : [...list, question.id]));
    }

    setAnsweredQuestionIds((list) => [...list, question.id]);
    setCorrectCount(nextCorrect);

    const nextAnsweredCount = answeredQuestionIds.length + 1;

    if (nextAnsweredCount >= questionSet.length) {
      const allMistakes = isCorrect || !mistake ? mistakes : [...mistakes, mistake];
      const nextScore = Math.round((nextCorrect / questionSet.length) * 100);
      setPendingFinalScore(nextScore);
      setPendingFinalMistakes(allMistakes);
      return;
    }
  };

  const finishMockExam = () => {
    const finalScore = pendingFinalScore ?? score;
    const finalMistakes = pendingFinalMistakes ?? mistakes;

    recordMockExam(finalScore, finalMistakes);
    setFinished(true);

    if (finalScore >= 75) {
      setShowCelebration(true);
    }
  };

  const goToNextQuestion = () => {
    if (!questionSet.length) {
      return;
    }

    const sequentialIndex = currentIndex + 1 < questionSet.length ? currentIndex + 1 : 0;
    const unansweredIndices = questionSet
      .map((item, index) => (answeredQuestionIds.includes(item.id) ? -1 : index))
      .filter((index) => index >= 0 && index !== currentIndex);

    const nextIndex = unansweredIndices.includes(sequentialIndex)
      ? sequentialIndex
      : unansweredIndices[0] ?? sequentialIndex;

    setCurrentIndex(nextIndex);
    const nextQuestion = questionSet[nextIndex];
    setAnsweredCurrent(answeredQuestionIds.includes(nextQuestion.id));
  };

  const goToPreviousQuestion = () => {
    const previousIndex = currentIndex - 1;

    if (previousIndex < 0) {
      return;
    }

    setCurrentIndex(previousIndex);
    const previousQuestion = questionSet[previousIndex];
    setAnsweredCurrent(answeredQuestionIds.includes(previousQuestion.id));
  };

  const goToRandomRetryQuestion = () => {
    const unansweredIndices = questionSet
      .map((item, index) => (!answeredQuestionIds.includes(item.id) && !correctQuestionIds.includes(item.id) ? index : -1))
      .filter((index) => index >= 0 && index !== currentIndex);

    const failedIndices = questionSet
      .map((item, index) => (wrongQuestionIds.includes(item.id) && !correctQuestionIds.includes(item.id) ? index : -1))
      .filter((index) => index >= 0 && index !== currentIndex);

    const candidates = unansweredIndices.length
      ? unansweredIndices
      : failedIndices.length
        ? failedIndices
        : questionSet
            .map((item, index) => (!correctQuestionIds.includes(item.id) ? index : -1))
            .filter((index) => index >= 0 && index !== currentIndex);

    if (!candidates.length) {
      return;
    }

    const nextIndex = candidates[Math.floor(Math.random() * candidates.length)] ?? currentIndex;
    setCurrentIndex(nextIndex);
    const targetQuestion = questionSet[nextIndex];
    setAnsweredCurrent(answeredQuestionIds.includes(targetQuestion.id));
  };

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-6 sm:px-6">
        <ChildHeader
          eyebrow="Simulacro"
          title="Desafio final de Grammar"
          subtitle="Reto final! Lee con calma y responde paso a paso."
          rewardCount={progress.rewards}
        />

        {!finished && question ? (
          <>
            <div className="glass-card rounded-4xl px-5 py-4 text-sm font-black text-slate-700">
              Pregunta {currentIndex + 1} de {questionSet.length}
            </div>
            <ExerciseCard
              key={question.id}
              question={question}
              onAnswered={handleAnswered}
              onRetryWrong={goToRandomRetryQuestion}
            />
            {currentIndex > 0 || answeredCurrent ? (
              <div className="glass-card rounded-4xl p-5">
                {answeredCurrent && pendingFinalScore === null ? (
                  <p className="text-sm font-bold text-slate-600">
                    Lee la explicacion con calma. Avanza cuando ya la entiendas.
                  </p>
                ) : null}
                {answeredCurrent && pendingFinalScore !== null ? (
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
                  {answeredCurrent && pendingFinalScore === null ? (
                    <button
                      type="button"
                      onClick={goToNextQuestion}
                      className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white"
                    >
                      Avanzar a la siguiente pregunta
                    </button>
                  ) : null}
                  {answeredCurrent && pendingFinalScore !== null ? (
                    <button
                      type="button"
                      onClick={finishMockExam}
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
            total={questionSet.length}
            title={score >= 85 ? "Excelente simulacro!" : "Buen intento! Revisa y vuelve a jugar."}
            onRetry={reset}
          />
        )}

        <CelebrationModal
          open={showCelebration}
          title="Gran resultado"
          message="Fantastico! Estas cada vez mas listo para el examen."
          onClose={() => setShowCelebration(false)}
        />
      </main>
    </div>
  );
}
