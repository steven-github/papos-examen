export type LessonSlug =
  "possessive-adjectives"
  | "can-cant"
  | "present-progressive";

export type TopicId = LessonSlug | "mixed";

export interface LessonSection {
  title: string;
  emoji: string;
  body: string;
}

export interface LessonExample {
  sentence: string;
  highlight: string;
  note: string;
}

export interface LessonQuickCheck {
  prompt: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Lesson {
  slug: LessonSlug;
  title: string;
  emoji: string;
  color: string;
  goal: string;
  simpleExplanation: string;
  audioText: string;
  sections: LessonSection[];
  examples: LessonExample[];
  quickChecks: LessonQuickCheck[];
  vocabulary: string[];
}

interface BaseQuestion {
  id: string;
  topic: TopicId;
  type:
    | "multiple-choice"
    | "fill-blank"
    | "true-false"
    | "reorder"
    | "match";
  prompt: string;
  explanation: string;
  hint?: string;
  audioPrompt?: string;
  stars?: number;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: "multiple-choice";
  options: string[];
  correctAnswer: string;
}

export interface FillBlankQuestion extends BaseQuestion {
  type: "fill-blank";
  acceptableAnswers: string[];
  placeholder?: string;
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: "true-false";
  statement: string;
  correctAnswer: "true" | "false";
}

export interface ReorderQuestion extends BaseQuestion {
  type: "reorder";
  tokens: string[];
  correctOrder: string[];
}

export interface MatchPair {
  left: string;
  right: string;
}

export interface MatchQuestion extends BaseQuestion {
  type: "match";
  pairs: MatchPair[];
  options: string[];
}

export type ExerciseQuestion =
  | MultipleChoiceQuestion
  | FillBlankQuestion
  | TrueFalseQuestion
  | ReorderQuestion
  | MatchQuestion;

export interface QuizSet {
  id: LessonSlug;
  title: string;
  emoji: string;
  description: string;
  questions: ExerciseQuestion[];
}

export interface GameDefinition {
  id: string;
  title: string;
  emoji: string;
  description: string;
  rewardText: string;
}

export interface MistakeRecord {
  questionId: string;
  topic: TopicId;
  prompt: string;
  selectedAnswer: string;
  correctAnswer: string;
  explanation: string;
  type: ExerciseQuestion["type"];
}

export interface ScoreRecord {
  attempts: number;
  best: number;
  latest: number;
}

export interface MockExamAttempt {
  score: number;
  takenAt: string;
}

export interface AppProgress {
  completedLessons: LessonSlug[];
  unlockedLessons: LessonSlug[];
  quizScores: Record<string, ScoreRecord>;
  practiceScores: Record<string, ScoreRecord>;
  gameHighScores: Record<string, number>;
  mockExamHistory: MockExamAttempt[];
  mistakes: MistakeRecord[];
  rewards: number;
}

export interface TopicProgressSummary {
  id: LessonSlug;
  lessonDone: boolean;
  quizBest: number;
  practiceBest: number;
}