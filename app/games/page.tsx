"use client";

import { useMemo, useState } from "react";
import { Dice6, Play } from "lucide-react";

import { ChildHeader } from "@/components/ChildHeader";
import { GameCard } from "@/components/GameCard";
import { NavigationMenu } from "@/components/NavigationMenu";
import { games } from "@/data/games";
import { useProgress } from "@/hooks/useProgress";

export default function GamesPage() {
  const [activeGameId, setActiveGameId] = useState(games[0].id);
  const [roundScore, setRoundScore] = useState(0);
  const { progress, recordGameScore } = useProgress();

  const activeGame = useMemo(
    () => games.find((game) => game.id === activeGameId) ?? games[0],
    [activeGameId],
  );

  const playRound = () => {
    const score = Math.floor(Math.random() * 8) + 3;
    setRoundScore(score);
    recordGameScore(activeGame.id, score);
  };

  return (
    <div className="page-shell">
      <NavigationMenu />
      <main className="content-wrap mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8">
        <ChildHeader
          eyebrow="Mini Games"
          title="Play and Learn"
          subtitle="Choose a mini game, play a fast round, and collect stars while practicing grammar."
          rewardCount={progress.rewards}
        />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              active={activeGame.id === game.id}
              highScore={progress.gameHighScores[game.id]}
              onClick={() => setActiveGameId(game.id)}
            />
          ))}
        </section>

        <section className="glass-card rounded-4xl p-6">
          <h2 className="section-title text-3xl text-slate-800">{activeGame.emoji} {activeGame.title}</h2>
          <p className="mt-2 text-sm font-bold text-slate-600">{activeGame.description}</p>
          <p className="mt-3 text-sm font-black text-blue-700">{activeGame.rewardText}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={playRound}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white"
            >
              <Play className="h-4 w-4" /> Play quick round
            </button>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-slate-700 ring-1 ring-slate-200">
              <Dice6 className="h-4 w-4" /> Last score: {roundScore}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
