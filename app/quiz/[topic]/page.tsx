"use client";

import type { LessonSlug, MistakeRecord } from "@/types";

import { CelebrationModal } from "@/components/CelebrationModal";
import { ChildHeader } from "@/components/ChildHeader";
import { ExerciseCard } from "@/components/ExerciseCard";
import { HighlightedEvaluableText } from "@/components/HighlightedEvaluableText";
import { NavigationMenu } from "@/components/NavigationMenu";
import { ResultSummary } from "@/components/ResultSummary";
import { buildQuestionSession } from "@/utils/random";
import { quizMap } from "@/data/quizzes";
import { useParams } from "next/navigation";
import { useProgress } from "@/hooks/useProgress";
import { useState } from "react";

export default function TopicQuizPage() {
    const params = useParams<{ topic: string }>();
    const topic = params.topic as LessonSlug;
    const quiz = quizMap[topic];
    const baseQuestions = quiz?.questions ?? [];
    const [questionSet, setQuestionSet] = useState(() => buildQuestionSession(baseQuestions, 10));

    const [currentIndex, setCurrentIndex] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [mistakes, setMistakes] = useState<MistakeRecord[]>([]);
    const [answeredQuestionIds, setAnsweredQuestionIds] = useState<string[]>([]);
    const [answeredCurrent, setAnsweredCurrent] = useState(false);
    const [pendingFinalScore, setPendingFinalScore] = useState<number | null>(null);
    const [pendingFinalMistakes, setPendingFinalMistakes] = useState<MistakeRecord[] | null>(null);
    const [finished, setFinished] = useState(false);
    const [showCelebration, setShowCelebration] = useState(false);

    const { recordQuiz, progress } = useProgress();

    const score = quiz && questionSet.length ? Math.round((correctCount / questionSet.length) * 100) : 0;

    if (!quiz) {
        return (
            <div className='page-shell'>
                <NavigationMenu />
                <main className='content-wrap mx-auto max-w-7xl  px-4 py-10'>
                    <div className='glass-card rounded-4xl p-6 text-center'>
                        <h1 className='section-title text-3xl text-slate-800'>Quiz no encontrado</h1>
                    </div>
                </main>
            </div>
        );
    }

    const question = questionSet[currentIndex];

    const reset = () => {
        setQuestionSet(buildQuestionSession(baseQuestions, 10));
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

        const nextAnsweredCount = answeredQuestionIds.length + 1;

        if (nextAnsweredCount >= questionSet.length) {
            const allMistakes = isCorrect || !mistake ? mistakes : [...mistakes, mistake];
            const nextScore = Math.round((nextCorrect / questionSet.length) * 100);
            setPendingFinalScore(nextScore);
            setPendingFinalMistakes(allMistakes);
            return;
        }
    };

    const finishQuiz = () => {
        const finalScore = pendingFinalScore ?? score;
        const finalMistakes = pendingFinalMistakes ?? mistakes;

        recordQuiz(topic, finalScore, finalMistakes);
        setFinished(true);

        if (finalScore >= 80) {
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

        const nextIndex = unansweredIndices.includes(sequentialIndex) ? sequentialIndex : (unansweredIndices[0] ?? sequentialIndex);

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

    return (
        <div className='page-shell'>
            <NavigationMenu />
            <main className='content-wrap mx-auto flex w-full max-w-7xl  flex-col gap-6 px-4 py-6 sm:px-6'>
                <ChildHeader
                    eyebrow='Quiz'
                    title={
                        <>
                            {quiz.emoji} <HighlightedEvaluableText text={quiz.title} phrases={quiz.evaluablePhrases} />
                        </>
                    }
                    subtitle={<HighlightedEvaluableText text={quiz.description} phrases={quiz.evaluablePhrases} />}
                    rewardCount={progress.rewards}
                />

                {!finished && question ? (
                    <>
                        <div className='glass-card rounded-4xl px-5 py-4 text-sm font-black text-slate-700'>
                            Pregunta {currentIndex + 1} de {questionSet.length}
                        </div>
                        <ExerciseCard key={question.id} question={question} onAnswered={handleAnswered} />
                        {currentIndex > 0 || answeredCurrent ? (
                            <div className='glass-card rounded-4xl p-5'>
                                {answeredCurrent && pendingFinalScore === null ? (
                                    <p className='text-sm font-bold text-slate-600'>Mira la explicacion y avanza cuando ya la entiendas.</p>
                                ) : null}
                                {answeredCurrent && pendingFinalScore !== null ? (
                                    <p className='text-sm font-bold text-slate-600'>
                                        Ya respondiste la ultima pregunta. Lee la explicacion y luego presiona Ver resultado.
                                    </p>
                                ) : null}
                                <div className='mt-3 flex flex-wrap gap-3'>
                                    {currentIndex > 0 ? (
                                        <button
                                            type='button'
                                            onClick={goToPreviousQuestion}
                                            className='inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-black text-slate-700 ring-1 ring-slate-200'
                                        >
                                            Ir a la pregunta anterior
                                        </button>
                                    ) : null}
                                    {answeredCurrent && pendingFinalScore === null ? (
                                        <button
                                            type='button'
                                            onClick={goToNextQuestion}
                                            className='inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white'
                                        >
                                            Avanzar a la siguiente pregunta
                                        </button>
                                    ) : null}
                                    {answeredCurrent && pendingFinalScore !== null ? (
                                        <button
                                            type='button'
                                            onClick={finishQuiz}
                                            className='inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white'
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
                        title={score >= 80 ? "Campeon del quiz!" : "Vas muy bien! Intentalo otra vez."}
                        onRetry={reset}
                    />
                )}

                <CelebrationModal
                    open={showCelebration}
                    title='Estrella del quiz'
                    message='Increible! Te fue excelente en este tema.'
                    onClose={() => setShowCelebration(false)}
                />
            </main>
        </div>
    );
}
