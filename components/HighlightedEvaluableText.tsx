interface HighlightedEvaluableTextProps {
  text: string;
  phrases?: string[];
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeToken(value: string) {
  return value
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function quoteAgnosticPattern(value: string) {
  return escapeRegExp(value).replace(/'/g, "['’]");
}

function buildPhrasePattern(value: string) {
  const escaped = quoteAgnosticPattern(value);

  if (value.startsWith("-") || value.endsWith("-")) {
    return escaped;
  }

  return `(?<![A-Za-z0-9])${escaped}(?![A-Za-z0-9])`;
}

export function HighlightedEvaluableText({ text, phrases = [] }: HighlightedEvaluableTextProps) {
  const normalized = Array.from(new Set(phrases.map((phrase) => phrase.trim()).filter(Boolean)));

  if (normalized.length === 0) {
    return <>{text}</>;
  }

  const sortedByLength = [...normalized].sort((a, b) => b.length - a.length);
  const phraseSet = new Set(sortedByLength.map((phrase) => normalizeToken(phrase)));
  const pattern = new RegExp(`(${sortedByLength.map((phrase) => buildPhrasePattern(phrase)).join("|")})`, "gi");

  const parts: Array<{ value: string; highlighted: boolean }> = [];
  let cursor = 0;
  let match = pattern.exec(text);

  while (match) {
    const matchedText = match[0];
    const start = match.index;
    const end = start + matchedText.length;

    if (start > cursor) {
      parts.push({ value: text.slice(cursor, start), highlighted: false });
    }

    parts.push({ value: matchedText, highlighted: phraseSet.has(normalizeToken(matchedText)) });
    cursor = end;
    match = pattern.exec(text);
  }

  if (cursor < text.length) {
    parts.push({ value: text.slice(cursor), highlighted: false });
  }

  if (parts.length === 0) {
    return <>{text}</>;
  }

  return (
    <>
      {parts.map((part, index) => {
        if (part.highlighted) {
          return (
            <span key={`${part.value}-${index}`} className="evaluable-text">
              {part.value}
            </span>
          );
        }

        return <span key={`${part.value}-${index}`}>{part.value}</span>;
      })}
    </>
  );
}
