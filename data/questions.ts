import { practiceExercises } from "@/data/exercises";
import { mockExamQuestions } from "@/data/mockExam";
import { quizzes } from "@/data/quizzes";

export const allQuizQuestions = quizzes.flatMap((quiz) => quiz.questions);

export const allQuestions = [
  ...practiceExercises,
  ...allQuizQuestions,
  ...mockExamQuestions,
];
