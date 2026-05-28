"use client";

import { useEffect, useMemo, useState } from "react";

import type { AppProgress, LessonSlug, MistakeRecord } from "@/types";
import {
  calculateOverallProgress,
  getTopicSummaries,
  getWeakAreas,
  initialProgress,
  loadProgress,
  mergeMistakes,
  saveProgress,
  updateScoreRecord,
} from "@/utils/storage";
import { lessonOrder } from "@/data/lessons";

export function useProgress() {
  const [progress, setProgress] = useState<AppProgress>(initialProgress);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = loadProgress();
    queueMicrotask(() => {
      setProgress(saved);
      setHydrated(true);
    });
  }, []);

  const persist = (updater: (current: AppProgress) => AppProgress) => {
    setProgress((current) => {
      const next = updater(current);
      saveProgress(next);
      return next;
    });
  };

  const markLessonComplete = (lesson: LessonSlug) => {
    persist((current) => {
      const completedLessons = Array.from(new Set([...current.completedLessons, lesson])) as LessonSlug[];
      const currentIndex = lessonOrder.indexOf(lesson);
      const nextLesson = lessonOrder[currentIndex + 1];
      const unlockedLessons = Array.from(
        new Set([...current.unlockedLessons, lesson, ...(nextLesson ? [nextLesson] : [])]),
      ) as LessonSlug[];

      return {
        ...current,
        completedLessons,
        unlockedLessons,
        rewards: current.rewards + 10,
      };
    });
  };

  const recordPractice = (topic: string, score: number, mistakes: MistakeRecord[]) => {
    persist((current) => ({
      ...current,
      practiceScores: {
        ...current.practiceScores,
        [topic]: updateScoreRecord(current.practiceScores[topic], score),
      },
      mistakes: mergeMistakes(current.mistakes, mistakes),
      rewards: current.rewards + Math.max(3, Math.round(score / 12)),
    }));
  };

  const recordQuiz = (topic: string, score: number, mistakes: MistakeRecord[]) => {
    persist((current) => ({
      ...current,
      quizScores: {
        ...current.quizScores,
        [topic]: updateScoreRecord(current.quizScores[topic], score),
      },
      mistakes: mergeMistakes(current.mistakes, mistakes),
      rewards: current.rewards + Math.max(6, Math.round(score / 10)),
    }));
  };

  const recordGameScore = (gameId: string, score: number) => {
    persist((current) => ({
      ...current,
      gameHighScores: {
        ...current.gameHighScores,
        [gameId]: Math.max(current.gameHighScores[gameId] ?? 0, score),
      },
      rewards: current.rewards + Math.max(1, score),
    }));
  };

  const recordMockExam = (score: number, mistakes: MistakeRecord[]) => {
    persist((current) => ({
      ...current,
      mockExamHistory: [
        ...current.mockExamHistory,
        {
          score,
          takenAt: new Date().toISOString(),
        },
      ].slice(-5),
      mistakes: mergeMistakes(current.mistakes, mistakes),
      rewards: current.rewards + Math.max(10, Math.round(score / 8)),
    }));
  };

  const clearMistake = (questionId: string) => {
    persist((current) => ({
      ...current,
      mistakes: current.mistakes.filter((mistake) => mistake.questionId !== questionId),
    }));
  };

  const resetProgress = () => {
    saveProgress(initialProgress);
    setProgress(initialProgress);
  };

  const overallProgress = useMemo(() => calculateOverallProgress(progress), [progress]);
  const topicSummaries = useMemo(() => getTopicSummaries(progress), [progress]);
  const weakAreas = useMemo(() => getWeakAreas(progress), [progress]);

  return {
    progress,
    hydrated,
    overallProgress,
    topicSummaries,
    weakAreas,
    markLessonComplete,
    recordPractice,
    recordQuiz,
    recordGameScore,
    recordMockExam,
    clearMistake,
    resetProgress,
  };
}