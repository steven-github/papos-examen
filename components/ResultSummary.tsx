import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";

interface ResultSummaryProps {
  score: number;
  correct: number;
  total: number;
  onRetry?: () => void;
  title?: string;
}

export function ResultSummary({ score, correct, total, onRetry, title }: ResultSummaryProps) {
  return (
    <div className="glass-card rounded-4xl p-6">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-700">
          Puntaje: {score}%
        </span>
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-black text-blue-700">
          {correct} / {total} correctas
        </span>
      </div>
      <h3 className="section-title text-3xl text-slate-800">{title ?? "Lo hiciste genial!"}</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-3xl bg-white/90 p-4">
          <div className="mb-2 flex items-center gap-2 font-black text-emerald-700">
            <CheckCircle2 className="h-5 w-5" /> Lo que hiciste bien
          </div>
          <p className="text-sm font-bold text-slate-600">Acertaste {correct} preguntas. Super!</p>
        </div>
        <div className="rounded-3xl bg-white/90 p-4">
          <div className="mb-2 flex items-center gap-2 font-black text-rose-700">
            <XCircle className="h-5 w-5" /> Lo que debes repasar
          </div>
          <p className="text-sm font-bold text-slate-600">Mira las explicaciones y vuelve a intentarlo. Tu puedes!</p>
        </div>
      </div>
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white"
        >
          <RotateCcw className="h-4 w-4" /> Jugar otra vez
        </button>
      ) : null}
    </div>
  );
}