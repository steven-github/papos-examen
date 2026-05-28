import type { Lesson } from "@/types";

export const lessonOrder: Lesson["slug"][] = [
  "possessive-adjectives",
  "can-cant",
  "present-progressive",
];

export const lessons: Lesson[] = [
  {
    slug: "possessive-adjectives",
    title: "Possessive Adjectives",
    emoji: "🎒",
    color: "from-amber-200 via-orange-100 to-white",
    goal: "Aprender a expresar a quien pertenece algo.",
    simpleExplanation:
      "Los possessive adjectives muestran pertenencia. Van antes de un sustantivo, como my book o their camera.",
    evaluablePhrases: [
      "possessive adjectives",
      "my book",
      "their camera",
      "my",
      "i",
      "your",
      "his",
      "he",
      "her",
      "its",
      "our",
      "their",
      "they",
    ],
    audioText:
      "My, your, his, her, its, our y their indican de quien es algo.",
    sections: [
      {
        title: "Antes del sustantivo",
        emoji: "🧩",
        body: "Un possessive adjective va antes del sustantivo. Decimos my computer, no computer my.",
      },
      {
        title: "Relaciona con el dueno",
        emoji: "👀",
        body: "I va con my, he con his y they con their. El dueno te indica la palabra correcta.",
      },
      {
        title: "Observa el objeto",
        emoji: "📚",
        body: "Tambien puedes usar vocabulario escolar: our school project, her camera, his MP3 player.",
      },
    ],
    examples: [
      {
        sentence: "This is my computer.",
        highlight: "my",
        note: "My se usa con I.",
      },
      {
        sentence: "He has his DVD player.",
        highlight: "his",
        note: "His se usa con he.",
      },
      {
        sentence: "They are doing their school project.",
        highlight: "their",
        note: "Their se usa con they.",
      },
    ],
    quickChecks: [
      {
        prompt: "We are reading ___ grammar book.",
        choices: ["our", "their", "her"],
        correctAnswer: "our",
        explanation: "We se completa con our.",
      },
      {
        prompt: "The dog is eating ___ food.",
        choices: ["its", "my", "your"],
        correctAnswer: "its",
        explanation: "Para un animal o cosa en singular usamos its.",
      },
      {
        prompt: "Ana has ___ camera.",
        choices: ["his", "her", "our"],
        correctAnswer: "her",
        explanation: "Ana es una nina, por eso decimos her camera.",
      },
    ],
    vocabulary: ["my", "your", "his", "her", "its", "our", "their"],
  },
  {
    slug: "can-cant",
    title: "Can / Can't",
    emoji: "🏄",
    color: "from-lime-200 via-emerald-100 to-white",
    goal: "Hablar sobre habilidad, permiso y solicitudes corteses.",
    simpleExplanation:
      "Can significa poder o permiso. Can't significa no poder. Tambien usamos can para hacer preguntas.",
    evaluablePhrases: [
      "Can",
      "Can't",
      "can",
      "can't",
      "Can I use the computer?",
      "Can you turn off the TV, please?",
      "Yes, I can",
      "No, I can't",
    ],
    audioText:
      "Usa can para habilidad y permiso. Usa can't para oraciones negativas. Haz preguntas con Can + sujeto.",
    sections: [
      {
        title: "Habilidad",
        emoji: "💪",
        body: "Usa can cuando alguien sabe hacer algo. He can swim. She can't skateboard.",
      },
      {
        title: "Preguntas y respuestas cortas",
        emoji: "❓",
        body: "Empieza con Can. Luego responde con Yes, I can o No, I can't.",
      },
      {
        title: "Permiso y solicitudes",
        emoji: "🙏",
        body: "Can I use the computer? Can you turn off the TV, please? Asi suena educado y claro.",
      },
    ],
    examples: [
      {
        sentence: "He can swim.",
        highlight: "can",
        note: "Can expresa habilidad.",
      },
      {
        sentence: "She can't skateboard.",
        highlight: "can't",
        note: "Can't expresa negacion.",
      },
      {
        sentence: "Can I use the computer?",
        highlight: "Can I",
        note: "Can se usa para pedir permiso.",
      },
    ],
    quickChecks: [
      {
        prompt: "Choose the best answer: ___ you turn off the radio, please?",
        choices: ["Can", "Can't", "Are"],
        correctAnswer: "Can",
        explanation: "Usamos can para solicitudes corteses.",
      },
      {
        prompt: "Lia can swim, but she ___ dive.",
        choices: ["can't", "can", "is"],
        correctAnswer: "can't",
        explanation: "La oracion necesita habilidad en negativo.",
      },
      {
        prompt: "Can they study here? Short answer: Yes, ___ can.",
        choices: ["we", "they", "she"],
        correctAnswer: "they",
        explanation: "La pregunta usa they, por eso la respuesta corta tambien usa they.",
      },
    ],
    vocabulary: [
      "turn on",
      "turn off",
      "swim",
      "dive",
      "skateboard",
      "windsurf",
      "kayak",
    ],
  },
  {
    slug: "present-progressive",
    title: "Present Progressive",
    emoji: "📖",
    color: "from-fuchsia-200 via-rose-100 to-white",
    goal: "Describir acciones que estan ocurriendo ahora.",
    simpleExplanation:
      "Usa am, is o are + verbo con -ing para hablar de acciones del momento.",
    evaluablePhrases: [
      "am",
      "is",
      "are",
      "-ing",
      "am, is o are + verbo con -ing",
      "subject + am/is/are + verb-ing",
      "They are reading",
    ],
    audioText:
      "El present progressive usa sujeto + am/is/are + verbo terminado en ing.",
    sections: [
      {
        title: "Estructura",
        emoji: "🏗️",
        body: "Se forma asi: sujeto + verb to be + verbo-ing. Ejemplo: They are reading.",
      },
      {
        title: "Forma negativa",
        emoji: "🚫",
        body: "Agrega not a am, is o are. He isn't sleeping. We aren't sailing.",
      },
      {
        title: "Ortografia del verbo",
        emoji: "✍️",
        body: "Algunos verbos solo agregan -ing. Otros duplican letra, como running y swimming.",
      },
    ],
    examples: [
      {
        sentence: "I am playing.",
        highlight: "am playing",
        note: "Con I usamos am.",
      },
      {
        sentence: "She is reading.",
        highlight: "is reading",
        note: "Con she usamos is.",
      },
      {
        sentence: "We aren't sailing.",
        highlight: "aren't sailing",
        note: "La forma negativa usa aren't.",
      },
    ],
    quickChecks: [
      {
        prompt: "They ___ swimming now.",
        choices: ["are", "is", "can"],
        correctAnswer: "are",
        explanation: "They se completa con are.",
      },
      {
        prompt: "He isn't ___.",
        choices: ["sleeping", "sleep", "sleeps"],
        correctAnswer: "sleeping",
        explanation: "El present progressive necesita verbo con -ing.",
      },
      {
        prompt: "I am ___ my homework.",
        choices: ["doing", "do", "did"],
        correctAnswer: "doing",
        explanation: "Am + verbo requiere la forma con -ing.",
      },
    ],
    vocabulary: [
      "reading",
      "dancing",
      "eating",
      "playing",
      "working",
      "studying",
      "sleeping",
      "swimming",
      "running",
      "writing",
      "riding",
    ],
  },
];

export const lessonMap = Object.fromEntries(
  lessons.map((lesson) => [lesson.slug, lesson]),
) as Record<Lesson["slug"], Lesson>;