interface ProgressBarProps {
  value: number;
  label?: string;
  tone?: "blue" | "green" | "gold" | "pink";
}

const toneMap = {
  blue: "from-sky-400 to-blue-500",
  green: "from-emerald-400 to-lime-500",
  gold: "from-amber-300 to-orange-400",
  pink: "from-fuchsia-400 to-rose-400",
};

export function ProgressBar({ value, label, tone = "blue" }: ProgressBarProps) {
  return (
    <div className="space-y-2">
      {label ? (
        <div className="flex items-center justify-between text-sm font-bold text-slate-600">
          <span>{label}</span>
          <span>{value}%</span>
        </div>
      ) : null}
      <div className="h-4 overflow-hidden rounded-full bg-white/80 ring-1 ring-slate-200/70">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${toneMap[tone]} transition-all duration-500`}
          style={{ width: `${Math.max(6, Math.min(value, 100))}%` }}
        />
      </div>
    </div>
  );
}