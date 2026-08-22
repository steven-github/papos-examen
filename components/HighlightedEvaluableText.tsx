interface HighlightedEvaluableTextProps {
  text: string;
  phrases?: string[];
}

const evaluableTranslations: Record<string, string> = {
  pollution: "Contaminación",
  "air pollution": "Contaminación del aire",
  "water pollution": "Contaminación del agua",
  "soil pollution": "Contaminación del suelo",
  environment: "Medio ambiente",
  waste: "Desechos",
  "organic waste": "Desechos orgánicos",
  "inorganic waste": "Desechos inorgánicos",
  biodegradable: "Biodegradable",
  "non-biodegradable": "No biodegradable",
  reduce: "Reducir",
  reuse: "Reutilizar",
  recycle: "Reciclar",
  "sustainable consumption": "Consumo sostenible",
  matter: "Materia",
  properties: "Propiedades",
  color: "Color",
  temperature: "Temperatura",
  weight: "Peso",
  texture: "Textura",
  taste: "Sabor",
  hot: "Caliente",
  cold: "Frío",
  smooth: "Liso",
  rough: "Áspero",
  soft: "Suave",
  hard: "Duro",
  sweet: "Dulce",
  salty: "Salado",
  sour: "Ácido",
  bitter: "Amargo",
  "states of matter": "Estados de la materia",
  solid: "Sólido",
  liquid: "Líquido",
  gas: "Gas",
  melt: "Derretirse",
  freeze: "Congelarse",
  boil: "Hervir",
  evaporate: "Evaporarse",
  condense: "Condensarse",
  steam: "Vapor",
  "present simple": "Presente simple",
  habits: "Hábitos",
  facts: "Hechos",
  opinions: "Opiniones",
  "do not": "No",
  "does not": "No",
  "don't": "No",
  "doesn't": "No",
  do: "Auxiliar para I, you, we y they",
  does: "Auxiliar para he, she e it",
  have: "Tener",
  has: "Tiene",
  he: "Él",
  she: "Ella",
  it: "Eso",
  "good at": "Ser bueno en",
  surfing: "Surfear",
  basketball: "Baloncesto",
  music: "Música",
  art: "Arte",
  chess: "Ajedrez",
  snorkeling: "Buceo con tubo",
  gets: "Obtiene o se pone, según la frase",
  brushes: "Cepilla",
  walks: "Camina",
  plays: "Juega",
  never: "Nunca",
  sometimes: "A veces",
  usually: "Usualmente",
  often: "A menudo",
  always: "Siempre",
  "would you like": "¿Te gustaría?",
  "do you like": "¿Te gusta?",
  "i'd like": "Me gustaría",
  "no, thanks": "No, gracias",
  "comparatives adjectives": "Adjetivos comparativos",
  "comparative adjectives": "Adjetivos comparativos",
  "superlatives adjectives": "Adjetivos superlativos",
  "superlative adjectives": "Adjetivos superlativos",
  comparative: "Comparativo",
  superlative: "Superlativo",
  wide: "Ancho",
  big: "Grande",
  fast: "Rápido",
  long: "Largo",
  old: "Viejo",
  "wider than": "Más ancho que",
  "the widest": "El más ancho",
  "bigger than": "Más grande que",
  "the biggest": "El más grande",
  "faster than": "Más rápido que",
  "the fastest": "El más rápido",
  "longer than": "Más largo que",
  "the longest": "El más largo",
  "older than": "Más viejo que",
  "the oldest": "El más viejo",
};

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

  const parts: Array<{ value: string; highlighted: boolean; translation?: string }> = [];
  let cursor = 0;
  let match = pattern.exec(text);

  while (match) {
    const matchedText = match[0];
    const start = match.index;
    const end = start + matchedText.length;

    if (start > cursor) {
      parts.push({ value: text.slice(cursor, start), highlighted: false });
    }

    const translation = evaluableTranslations[normalizeToken(matchedText)];
    const remainingText = text.slice(end);
    parts.push({
      value: matchedText,
      highlighted: phraseSet.has(normalizeToken(matchedText)),
      translation: /^\s*\(/.test(remainingText) ? undefined : translation,
    });
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
            <span key={`${part.value}-${index}`}>
              <span className="evaluable-text">{part.value}</span>
              {part.translation ? <span> ({part.translation})</span> : null}
            </span>
          );
        }

        return <span key={`${part.value}-${index}`}>{part.value}</span>;
      })}
    </>
  );
}
