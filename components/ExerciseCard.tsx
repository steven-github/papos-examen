"use client";

import { DragEvent, useMemo, useState } from "react";
import { CheckCircle2, Lightbulb } from "lucide-react";

import { AnswerButton } from "@/components/AnswerButton";
import { HighlightedEvaluableText } from "@/components/HighlightedEvaluableText";
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
  onRetryWrong?: () => void;
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

function getDefaultHint(question: ExerciseQuestion): string {
  switch (question.type) {
    case "multiple-choice":
      return "Lee todas las opciones y elige la que respeta mejor la estructura del tema.";
    case "fill-blank":
      return "Identifica la regla del tema y escribe solo la palabra que completa el espacio en blanco.";
    case "true-false":
      return "Si la afirmacion es correcta, marca true; si no lo es, marca false.";
    case "reorder":
      return "Ordena desde el inicio logico de la oracion y revisa el verbo principal.";
    case "match":
      return "Relaciona cada elemento de la izquierda con su pareja correcta de la derecha.";
    default:
      return "Lee con calma y aplica la regla del tema.";
  }
}

function cleanHintPrefix(hint: string): string {
  return hint.replace(/^\s*pista\s*:\s*/i, "").trim();
}

function buildFillBlankHint(question: FillBlankQuestion): string {
  const answer = question.acceptableAnswers[0] ?? "";
  const trimmed = answer.trim();
  const promptText = question.prompt.toLowerCase();

  let ruleHint = "";

  if (question.topic === "present-progressive") {
    ruleHint = "Usa present progressive: am/is/are + verbo con -ing.";
  } else if (question.topic === "can-cant") {
    ruleHint = "Despues de can/can't, usa el verbo base o la respuesta corta correcta (can).";
  } else if (question.topic === "possessive-adjectives") {
    ruleHint = "Completa con el possessive adjective correcto segun el dueño (my/your/his/her/its/our/their).";
  }

  // Extra guidance from wording patterns in the prompt.
  if (promptText.includes("yes, i ___") || promptText.includes("yes, he ___") || promptText.includes("yes, she ___")) {
    ruleHint = "Es una respuesta corta: completa con la palabra que cierra correctamente la respuesta.";
  }

  if (!trimmed) {
    return `${ruleHint || "Piensa en la palabra clave del tema para completar la oracion."}`;
  }

  const words = trimmed.split(/\s+/).filter(Boolean);
  const firstLetter = trimmed.charAt(0);
  const lastLetter = trimmed.charAt(trimmed.length - 1);

  if (words.length > 1) {
    return `${ruleHint} La respuesta tiene ${words.length} palabras y empieza con "${firstLetter}".`.trim();
  }

  return `${ruleHint} La respuesta empieza con "${firstLetter}", termina con "${lastLetter}" y tiene ${trimmed.length} letras.`.trim();
}

export function ExerciseCard({ question, onAnswered, disabled, onRetryWrong }: ExerciseCardProps) {
  const [selectedChoice, setSelectedChoice] = useState<string>("");
  const [fillValue, setFillValue] = useState("");
  const [showFillHint, setShowFillHint] = useState(false);
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
      title: isCorrect ? "Muy bien!" : "Buen intento!",
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
      selectedAnswer: answerText || "(vacio)",
      correctAnswer: getCorrectAnswerLabel(question),
      explanation: question.explanation,
      type: question.type,
    });
  };

  const resetQuestionAttempt = () => {
    setSelectedChoice("");
    setFillValue("");
    setShowFillHint(false);
    setMatchAnswers({});
    setSubmitted(false);
    setIsCorrect(false);

    if (question.type === "reorder") {
      setReorderPool([...question.tokens]);
      setReorderBuilt([]);
    }
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
      const generatedHint = q.hint ? cleanHintPrefix(q.hint) : buildFillBlankHint(q);

      return (
        <div className="space-y-3">
          <input
            value={fillValue}
            onChange={(event) => setFillValue(event.target.value)}
            disabled={disabled || submitted}
            placeholder={q.placeholder ?? "Escribe tu respuesta"}
            className="w-full rounded-3xl border border-white/80 bg-white px-4 py-3 text-base font-bold text-slate-700 outline-none ring-blue-200 focus:ring"
          />
          <button
            type="button"
            disabled={disabled || submitted}
            onClick={() => setShowFillHint((value) => !value)}
            className="rounded-full bg-blue-100 px-5 py-2 text-xs font-black uppercase tracking-[0.16em] text-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {showFillHint ? "Ocultar pista extra" : "DAME UNA PISTA"}
          </button>
          {showFillHint ? (
            <p className="rounded-2xl bg-white/90 px-4 py-3 text-sm font-bold text-slate-600">
              <Lightbulb className="mr-1 inline h-4 w-4 text-amber-500" />
              {generatedHint}
            </p>
          ) : null}
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
            Revisar respuesta
          </button>
        </div>
      );
    }

    if (question.type === "true-false") {
      const q = question as TrueFalseQuestion;
      const quotedPhrases = Array.from(q.statement.matchAll(/"([^"]+)"/g)).map((match) => match[1]);

      return (
        <div className="space-y-3">
          <p className="rounded-3xl bg-white/85 px-4 py-3 text-base font-bold text-slate-700">
            <HighlightedEvaluableText text={q.statement} phrases={quotedPhrases} />
          </p>
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
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500">Banco de palabras (arrastra o toca)</p>
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
            <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-blue-700">Suelta aqui para formar la oracion</p>
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
                <p className="text-sm font-bold text-slate-400">Suelta palabras aqui</p>
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
            Revisar orden
          </button>
        </div>
      );
    }

    const q = question as MatchQuestion;

    return (
      <div className="space-y-3">
        {q.pairs.map((pair) => (
          <label key={`${q.id}-${pair.left}`} className="block rounded-3xl bg-white/85 p-3">
            <p className="mb-2 text-sm font-black text-slate-700">
              <span className="evaluable-text">{pair.left}</span>
            </p>
            <select
              value={matchAnswers[pair.left] ?? ""}
              disabled={disabled || submitted}
              onChange={(event) =>
                setMatchAnswers((prev) => ({
                  ...prev,
                  [pair.left]: event.target.value,
                }))
              }
              className="w-full rounded-2xl border border-blue-100 bg-white px-3 py-2 font-black text-blue-800"
            >
              <option value="">Elige una opcion</option>
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
          Revisar relacion
        </button>
      </div>
    );
  };

  return (
    <article className="glass-card rounded-4xl p-5 sm:p-6">
      <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-700">
        <CheckCircle2 className="h-4 w-4" /> {question.type.replace("-", " ")}
      </div>
      <h3 className="section-title text-2xl text-slate-800">
        <span className="evaluable-text">{question.prompt}</span>
      </h3>
      <p className="mt-2 text-sm font-bold text-slate-500">
        Pista: <span>{question.hint ? cleanHintPrefix(question.hint) : getDefaultHint(question)}</span>
      </p>

      <div className="mt-4">{renderQuestionBody()}</div>

      {feedback ? (
        <div className="mt-4 rounded-3xl bg-white/90 p-4">
          <p className={`section-title text-2xl ${feedback.tone}`}>{feedback.title}</p>
          <p className="mt-2 text-sm font-bold text-slate-600">{question.explanation}</p>
          <p className="mt-2 inline-flex items-center gap-1 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
            <Lightbulb className="h-4 w-4" /> Explicacion: {question.explanation}
          </p>
          {!isCorrect && !disabled ? (
            <button
              type="button"
              onClick={() => {
                if (onRetryWrong) {
                  onRetryWrong();
                  return;
                }

                resetQuestionAttempt();
              }}
              className="mt-3 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-slate-700 ring-1 ring-slate-200"
            >
              {onRetryWrong ? "REINTENTAR (RANDOM)" : "REINTENTAR"}
            </button>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
