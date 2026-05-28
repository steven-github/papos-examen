import type { GameDefinition } from "@/types";

interface GameCardProps {
  game: GameDefinition;
  highScore?: number;
  active: boolean;
  onClick: () => void;
}

export function GameCard({ game, highScore, active, onClick }: GameCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`glass-card rounded-[2rem] p-5 text-left transition ${active ? "ring-2 ring-blue-300" : "hover:-translate-y-1"}`}
    >
      <div className="mb-2 text-4xl">{game.emoji}</div>
      <h3 className="section-title text-2xl text-slate-800">{game.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{game.description}</p>
      <p className="mt-3 text-sm font-black text-blue-700">Mejor puntaje: {highScore ?? 0}</p>
    </button>
  );
}