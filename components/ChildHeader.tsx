import { CalendarDays, Star } from "lucide-react";

interface ChildHeaderProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  rewardCount?: number;
}

export function ChildHeader({ title, subtitle, eyebrow, rewardCount }: ChildHeaderProps) {
  return (
    <section className="glass-card rounded-[2rem] px-5 py-6 sm:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.24em] text-blue-700">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="section-title text-4xl leading-none text-slate-800 sm:text-5xl">{title}</h1>
          <p className="mt-3 max-w-2xl text-base font-bold text-slate-600 sm:text-lg">{subtitle}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[1.5rem] bg-white/90 px-4 py-3 shadow-sm">
            <div className="mb-1 flex items-center gap-2 text-sm font-black text-slate-500">
              <CalendarDays className="h-4 w-4" /> Exam day
            </div>
            <p className="text-sm font-bold text-slate-700">Friday, May 29th, 2026</p>
          </div>
          <div className="rounded-[1.5rem] bg-slate-900 px-4 py-3 text-white shadow-sm">
            <div className="mb-1 flex items-center gap-2 text-sm font-black text-amber-200">
              <Star className="h-4 w-4" /> Star bank
            </div>
            <p className="text-sm font-bold">{rewardCount ?? 0} stars collected</p>
          </div>
        </div>
      </div>
    </section>
  );
}