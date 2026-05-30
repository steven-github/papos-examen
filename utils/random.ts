export function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

export function pickRandomIndex(length: number, excluded: number[] = []): number | null {
  if (length <= 0) {
    return null;
  }

  const excludedSet = new Set(excluded);
  const available: number[] = [];

  for (let i = 0; i < length; i += 1) {
    if (!excludedSet.has(i)) {
      available.push(i);
    }
  }

  if (!available.length) {
    return null;
  }

  const index = Math.floor(Math.random() * available.length);
  return available[index] ?? null;
}

export function buildQuestionSession<T extends { id: string }>(questions: T[], total: number): T[] {
  if (!questions.length || total <= 0) {
    return [];
  }

  const uniquePool = shuffleArray(questions);
  const sessionSize = Math.min(total, uniquePool.length);

  return uniquePool.slice(0, sessionSize);
}
