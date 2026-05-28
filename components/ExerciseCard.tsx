"use client";

import { DragEvent, useMemo, useState } from "react";
import { CheckCircle2, Lightbulb } from "lucide-react";

import { AnswerButton } from "@/components/AnswerButton";
import type {
  ExerciseQuestion,
  FillBlankQuestion,
  MatchQuestion,
  MistakeRecord,
  MultipleChoiceQuestion,
  ReorderQuestion,
  TrueFalseQuestion,
} from "@/types";

interface ExerciseCardProps {
  question: ExerciseQuestion;
  onAnswered: (isCorrect: boolean, mistake?: MistakeRecord) => void;
  disabled?: boolean;
}

function normalized(value: string) {
  return value.trim().toLowerCase();
}

function getCorrectAnswerLabel(question: ExerciseQuestion): string {
  switch (question.type) {
    case "multiple-choice":
      return question.correctAnswer;
    case "fill-blank":
      return question.acceptableAnswers[0];
    case "true-false":
      return question.correctAnswer;
    case "reorder":
      return question.correctOrder.join(" ");
    case "match":
      return question.pairs.map((pair) => `${pair.left} -> ${pair.right}`).join(" | ");
    default:
      return "";
  }
}

export function ExerciseCard({ question, onAnswered, disabled }: ExerciseCardProps) {
  const [selectedChoice, setSelectedChoice] = useState<string>("");
  const [fillValue, setFillValue] = useState("");
  const [matchAnswers, setMatchAnswers] = useState<Record<string, string>>({});
  const [reorderPool, setReorderPool] = useState<string[]>(
    question.type === "reorder" ? [...question.tokens] : [],
  );
  const [reorderBuilt, setReorderBuilt] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const feedback = useMemo(() => {
    if (!submitted) {
      return null;
    }

    return {
      title: isCorrect ? "Great job!" : "Nice try!",
      tone: isCorrect ? "text-emerald-700" : "text-rose-700",
    };
  }, [isCorrect, submitted]);

  const submitAnswer = (answerText: string, valid: boolean) => {
    setSubmitted(true);
    setIsCorrect(valid);

    if (valid) {
      onAnswered(true);
      return;
    }

    onAnswered(false, {
      questionId: question.id,
      topic: question.topic,
      prompt: question.prompt,
      selectedAnswer: answerText || "(empty)",
      correctAnswer: getCorrectAnswerLabel(question),
      explanation: question.explanation,
      type: question.type,
    });
  };

  const renderQuestionBody = () => {
    if (question.type === "multiple-choice") {
      const q = question as MultipleChoiceQuestion;

      return (
        <div className="space-y-3">
          {q.options.map((option) => (
            <AnswerButton
              key={option}
              label={option}
              onClick={() => {
                if (submitted || disabled) {
                  return;
                }

                setSelectedChoice(option);
                submitAnswer(option, normalized(option) === normalized(q.correctAnswer));
              }}
              selected={selectedChoice === option}
              correct={submitted && normalized(option) === normalized(q.correctAnswer)}
              wrong={
                submitted &&
                selectedChoice === option &&
                normalized(option) !== normalized(q.correctAnswer)
              }
              disabled={disabled || submitted}
            />
          ))}
        </div>
      );
    }

    if (question.type === "fill-blank") {
      const q = question as FillBlankQuestion;

      return (
        <div className="space-y-3">
          <input
            value={fillValue}
            onChange={(event) => setFillValue(event.target.value)}
            disabled={disabled || submitted}
            placeholder={q.placeholder ?? "Type your answer"}
            className="w-full rounded-3xl border border-white/80 bg-white px-4 py-3 text-base font-bold text-slate-700 outline-none ring-blue-200 focus:ring"
          />
          <button
            type="button"
            disabled={disabled || submitted}
            onClick={() => {
              const answer = normalized(fillValue);
              const valid = q.acceptableAnswers.some((candidate) => normalized(candidate) === answer);
              submitAnswer(fillValue, valid);
            }}
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            Check answer
          </button>
        </div>
      );
    }

    if (question.type === "true-false") {
      const q = question as TrueFalseQuestion;

      return (
        <div className="space-y-3">
          <p className="rounded-3xl bg-white/85 px-4 py-3 text-base font-bold text-slate-700">{q.statement}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {["true", "false"].map((choice) => (
              <AnswerButton
                key={choice}
                label={choice}
                onClick={() => {
                  if (submitted || disabled) {
                    return;
                  }

                  setSelectedChoice(choice);
                  submitAnswer(choice, choice === q.correctAnswer);
                }}
                selected={selectedChoice === choice}
                correct={submitted && choice === q.correctAnswer}
                wrong={submitted && selectedChoice === choice && choice !== q.correctAnswer}
                disabled={disabled || submitted}
              />
            ))}
          </div>
        </div>
      );
    }

    if (question.type === "reorder") {
      const q = question as ReorderQuestion;

      const moveToken = (source: "pool" | "built", index: number) => {
        if (source === "pool") {
          const token = reorderPool[index];
          if (!token) {
            return;
          }

          setReorderPool((prev) => prev.filter((_, i) => i !== index));
          setReorderBuilt((prev) => [...prev, token]);
          return;
        }

        const token = reorderBuilt[index];
        if (!token) {
          return;
        }

        setReorderBuilt((prev) => prev.filter((_, i) => i !== index));
        setReorderPool((prev) => [...prev, token]);
      };

      const onDragStart = (event: DragEvent<HTMLButtonElement>, source: "pool" | "built", index: number) => {
        event.dataTransfer.setData("text/plain", JSON.stringify({ source, index }));
      };

      const onDrop = (event: DragEvent<HTMLDivElement>, target: "pool" | "built") => {
        event.preventDefault();
        const payload = event.dataTransfer.getData("text/plain");

        if (!payload) {
          return;
        }

        try {
          const parsed = JSON.parse(payload) as { source: "pool" | "built"; index: number };
          if (parsed.source !== target) {
            moveToken(parsed.source, parsed.index);
          }
        } catch {
          return;
        }
      };

      return (
        <div className="space-y-3">
          <div
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => onDrop(event, "pool")}
            className="rounded-3xl bg-white/85 p-3 text-sm font-bold text-slate-700"
          >
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">Word bank (drag or tap)</p>
            <div className="flex min-h-12 flex-wrap gap-2">
              {reorderPool.map((token, index) => (
                <button
                  key={`${q.id}-${token}-${index}-pool`}
                  type="button"
                  draggable={!submitted && !disabled}
                  onDragStart={(event) => onDragStart(event, "pool", index)}
                  onClick={() => (!submitted && !disabled ? moveToken("pool", index) : undefined)}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm font-black text-slate-700"
                >
                  {token}
                </button>
              ))}
            </div>
          </div>

          <div
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => onDrop(event, "built")}
            className="rounded-3xl border border-dashed border-blue-200 bg-white p-3"
          >
            <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-blue-700">Drop here to build sentence</p>
            <div className="flex min-h-12 flex-wrap gap-2">
              {reorderBuilt.length ? (
                reorderBuilt.map((token, index) => (
                  <button
                    key={`${q.id}-${token}-${index}-built`}
                    type="button"
                    draggable={!submitted && !disabled}
                    onDragStart={(event) => onDragStart(event, "built", index)}
                    onClick={() => (!submitted && !disabled ? moveToken("built", index) : undefined)}
                    className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-black text-slate-700"
                  >
                    {token}
                  </button>
                ))
              ) : (
                <p className="text-sm font-bold text-slate-400">Drop tokens here</p>
              )}
            </div>
          </div>

          <button
            type="button"
            disabled={disabled || submitted}
            onClick={() => {
              const expected = normalized(q.correctOrder.join(" "));
              const builtAnswer = reorderBuilt.join(" ");
              submitAnswer(builtAnswer, normalized(builtAnswer) === expected);
            }}
            className="rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            Check order
          </button>
        </div>
      );
    }

    const q = question as MatchQuestion;

    return (
      <div className="space-y-3">
        {q.pairs.map((pair) => (
          <label key={`${q.id}-${pair.left}`} className="block rounded-3xl bg-white/85 p-3">
            <p className="mb-2 text-sm font-black text-slate-700">{pair.left}</p>
            <select
              value={matchAnswers[pair.left] ?? ""}
              disabled={disabled || submitted}
              onChange={(event) =>
                setMatchAnswers((prev) => ({
                  ...prev,
                  [pair.left]: event.target.value,
                }))
              }
              className="w-full rounded-2xl border border-blue-100 bg-white px-3 py-2 font-bold text-slate-700"
            >
              <option value="">Choose one</option>
              {q.options.map((option) => (
                <option key={`${pair.left}-${option}`} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        ))}
        <button
          type="button"
          disabled={disabled || submitted}
          onClick={() => {
            const allCorrect = q.pairs.every(
              (pair) => normalized(matchAnswers[pair.left] ?? "") === normalized(pair.right),
            );
            submitAnswer(JSON.stringify(matchAnswers), allCorrect);
          }}
          className="rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          Check match
        </button>
      </div>
    );
  };

  return (
    <article className="glass-card rounded-4xl p-5 sm:p-6">
      <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-700">
        <CheckCircle2 className="h-4 w-4" /> {question.type.replace("-", " ")}
      </div>
      <h3 className="section-title text-2xl text-slate-800">{question.prompt}</h3>
      {question.hint ? <p className="mt-2 text-sm font-bold text-slate-500">Hint: {question.hint}</p> : null}

      <div className="mt-4">{renderQuestionBody()}</div>

      {feedback ? (
        <div className="mt-4 rounded-3xl bg-white/90 p-4">
          <p className={`section-title text-2xl ${feedback.tone}`}>{feedback.title}</p>
          <p className="mt-2 text-sm font-bold text-slate-600">{question.explanation}</p>
          <p className="mt-2 inline-flex items-center gap-1 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
            <Lightbulb className="h-4 w-4" /> Why: {question.explanation}
          </p>
        </div>
      ) : null}
    </article>
  );
}
