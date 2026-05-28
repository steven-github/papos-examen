interface AnswerButtonProps {
  label: string;
  onClick: () => void;
  selected?: boolean;
  correct?: boolean;
  wrong?: boolean;
  disabled?: boolean;
}

export function AnswerButton({
  label,
  onClick,
  selected,
  correct,
  wrong,
  disabled,
}: AnswerButtonProps) {
  const stateClass = correct
    ? "border-emerald-400 bg-emerald-100 text-emerald-800"
    : wrong
      ? "border-rose-400 bg-rose-100 text-rose-800"
      : selected
        ? "border-blue-700 bg-blue-700 text-white"
        : "border-white/60 bg-white/80 text-slate-700 hover:border-blue-200 hover:bg-blue-50";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-[1.25rem] border px-4 py-3 text-left text-base font-bold shadow-sm transition ${stateClass} ${disabled ? "cursor-not-allowed opacity-70" : ""}`}
    >
      {label}
    </button>
  );
}