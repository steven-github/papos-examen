import { lessonMap, lessonOrder } from "@/data/lessons";
import type { AppProgress, LessonSlug, MistakeRecord, ScoreRecord, TopicProgressSummary } from "@/types";

const STORAGE_KEY = "grammar-galaxy-progress-v1";

const createScoreRecord = (): ScoreRecord => ({
  attempts: 0,
  best: 0,
  latest: 0,
});

export const initialProgress: AppProgress = {
  completedLessons: [],
  unlockedLessons: [lessonOrder[0]],
  quizScores: {},
  practiceScores: {},
  gameHighScores: {},
  mockExamHistory: [],
  mistakes: [],
  rewards: 0,
};

export function loadProgress(): AppProgress {
  if (typeof window === "undefined") {
    return initialProgress;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return initialProgress;
    }

    const parsed = JSON.parse(raw) as Partial<AppProgress>;

    const baseProgress = {
      ...initialProgress,
      ...parsed,
      completedLessons: parsed.completedLessons ?? [],
      unlockedLessons: parsed.unlockedLessons?.length
        ? (parsed.unlockedLessons as LessonSlug[])
        : [lessonOrder[0]],
      quizScores: parsed.quizScores ?? {},
      practiceScores: parsed.practiceScores ?? {},
      gameHighScores: parsed.gameHighScores ?? {},
      mockExamHistory: parsed.mockExamHistory ?? [],
      mistakes: parsed.mistakes ?? [],
      rewards: parsed.rewards ?? 0,
    };

    const unlocked = new Set<LessonSlug>(baseProgress.unlockedLessons);

    lessonOrder.forEach((lesson, index) => {
      const hasCompleted = baseProgress.completedLessons.includes(lesson);
      const hasPractice = (baseProgress.practiceScores[lesson]?.attempts ?? 0) > 0;
      const hasQuiz = (baseProgress.quizScores[lesson]?.attempts ?? 0) > 0;

      if (hasCompleted || hasPractice || hasQuiz) {
        unlocked.add(lesson);
        const nextLesson = lessonOrder[index + 1];
        if (nextLesson) {
          unlocked.add(nextLesson);
        }
      }
    });

    return {
      ...baseProgress,
      unlockedLessons: Array.from(unlocked),
    };
  } catch {
    return initialProgress;
  }
}

export function saveProgress(progress: AppProgress) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function updateScoreRecord(record: ScoreRecord | undefined, score: number): ScoreRecord {
  const current = record ?? createScoreRecord();

  return {
    attempts: current.attempts + 1,
    latest: score,
    best: Math.max(current.best, score),
  };
}

export function mergeMistakes(
  current: MistakeRecord[],
  incoming: MistakeRecord[],
): MistakeRecord[] {
  const deduped = new Map<string, MistakeRecord>();

  [...current, ...incoming].forEach((mistake) => {
    deduped.set(mistake.questionId, mistake);
  });

  return Array.from(deduped.values()).slice(-20);
}

export function calculateOverallProgress(progress: AppProgress): number {
  const lessonWeight = progress.completedLessons.length / lessonOrder.length;
  const quizWeight =
    lessonOrder.reduce((sum, lesson) => sum + (progress.quizScores[lesson]?.best ?? 0), 0) /
    (lessonOrder.length * 100);
  const mockWeight = (progress.mockExamHistory.at(-1)?.score ?? 0) / 100;

  return Math.round((lessonWeight * 0.45 + quizWeight * 0.35 + mockWeight * 0.2) * 100);
}

export function getTopicSummaries(progress: AppProgress): TopicProgressSummary[] {
  return lessonOrder.map((lesson) => ({
    id: lesson,
    lessonDone: progress.completedLessons.includes(lesson),
    quizBest: progress.quizScores[lesson]?.best ?? 0,
    practiceBest: progress.practiceScores[lesson]?.best ?? 0,
  }));
}

export function getWeakAreas(progress: AppProgress): string[] {
  const weak = getTopicSummaries(progress)
    .filter((topic) => topic.quizBest < 80 || topic.practiceBest < 70)
    .map((topic) => lessonMap[topic.id].title);

  return weak.length ? weak : ["You are doing great in every topic!"];
}