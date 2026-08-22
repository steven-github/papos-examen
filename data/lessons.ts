import type { ExamSubject, Lesson } from "@/types";

export const lessonOrder: Lesson["slug"][] = [
  "science-pollution",
  "science-waste-recycling",
  "science-properties-matter",
  "science-changes-state",
  "grammar-present-simple",
  "grammar-good-at-vocabulary",
  "grammar-review-structures",
  "grammar-comparatives-superlatives",
];

export const subjectLabels: Record<ExamSubject, string> = {
  science: "Science",
  grammar: "Grammar",
};

export const subjectDescriptions: Record<ExamSubject, string> = {
  science: "Science Book pages 52-58, 60-66, 70-76 y 78-84.",
  grammar: "Grammar Friends Unit 6 pages 30-33 y 35; Family and Friends pages 48-49 y 55.",
};

export const lessons: Lesson[] = [
  {
    slug: "science-pollution",
    subject: "science",
    title: "Types of Pollution",
    emoji: "🌎",
    color: "from-sky-200 via-cyan-100 to-white",
    source: "Science Book pages 52 to 58",
    goal: "Identifica los diferentes types of pollution: air pollution, water pollution y soil pollution.",
    simpleExplanation:
      "Pollution ocurre cuando el environment se vuelve sucio o inseguro. Ian debe identificar air pollution, water pollution y soil pollution.",
    evaluablePhrases: ["pollution", "air pollution", "water pollution", "soil pollution", "environment"],
    audioText:
      "Tema de Science: Types of Pollution. Air pollution afecta el aire; water pollution afecta ríos, lagos u océanos; y soil pollution afecta el suelo.",
    sections: [
      {
        title: "Air pollution",
        emoji: "💨",
        body: "Air pollution ocurre cuando el humo, los gases o el aire sucio afectan el aire que respiramos.",
      },
      {
        title: "Water pollution",
        emoji: "💧",
        body: "Water pollution ocurre cuando la basura o sustancias dañinas ensucian el agua.",
      },
      {
        title: "Soil pollution",
        emoji: "🌱",
        body: "Soil pollution ocurre cuando el suelo se ensucia y puede afectar a las plantas, los animales o las personas.",
      },
    ],
    examples: [
      {
        sentence: "Smoke in the air is air pollution.",
        highlight: "air pollution",
        note: "El problema está en el air, es decir, en el aire.",
      },
      {
        sentence: "Trash in a river is water pollution.",
        highlight: "water pollution",
        note: "El problema está en el water, es decir, en el agua.",
      },
      {
        sentence: "Trash on the ground can cause soil pollution.",
        highlight: "soil pollution",
        note: "El problema está en el soil o ground, es decir, en el suelo.",
      },
    ],
    quickChecks: [
      {
        prompt: "Which type of pollution affects rivers or lakes?",
        choices: ["air pollution", "water pollution", "soil pollution"],
        correctAnswer: "water pollution",
        explanation: "Water pollution afecta el water de ríos y lagos.",
      },
      {
        prompt: "Which type of pollution affects the ground?",
        choices: ["soil pollution", "air pollution", "water pollution"],
        correctAnswer: "soil pollution",
        explanation: "Soil significa suelo o ground.",
      },
      {
        prompt: "Which type of pollution affects the air we breathe?",
        choices: ["water pollution", "soil pollution", "air pollution"],
        correctAnswer: "air pollution",
        explanation: "Air pollution afecta el air que respiramos.",
      },
    ],
    vocabulary: ["pollution", "air pollution", "water pollution", "soil pollution", "environment"],
  },
  {
    slug: "science-waste-recycling",
    subject: "science",
    title: "Waste and the 3 Rs",
    emoji: "♻️",
    color: "from-emerald-200 via-lime-100 to-white",
    source: "Science Book pages 60 to 66",
    goal: "Clasifica waste e identifica acciones que ayudan a proteger el environment.",
    simpleExplanation:
      "Waste significa desechos. Puede ser organic waste o inorganic waste, y también biodegradable o non-biodegradable. Las 3 Rs son reduce, reuse y recycle; estas acciones ayudan al sustainable consumption.",
    evaluablePhrases: [
      "waste",
      "organic waste",
      "inorganic waste",
      "biodegradable",
      "non-biodegradable",
      "reduce",
      "reuse",
      "recycle",
      "sustainable consumption",
    ],
    audioText:
      "Tema de Science: Waste. Clasifica organic waste, inorganic waste, biodegradable y non-biodegradable. Recuerda: reduce, reuse y recycle ayudan al sustainable consumption.",
    sections: [
      {
        title: "Organic waste",
        emoji: "🍎",
        body: "Organic waste viene de seres vivos, por ejemplo cáscaras de frutas o restos de comida.",
      },
      {
        title: "Inorganic waste",
        emoji: "🥫",
        body: "Inorganic waste no viene de seres vivos, por ejemplo latas, plástico o vidrio.",
      },
      {
        title: "Reduce, reuse, recycle",
        emoji: "🔁",
        body: "Reduce significa usar menos, reuse significa volver a usar y recycle significa transformar materiales para usarlos nuevamente.",
      },
    ],
    examples: [
      {
        sentence: "A banana peel is organic waste.",
        highlight: "organic waste",
        note: "Viene de un ser vivo, por eso es organic waste.",
      },
      {
        sentence: "A plastic bottle is inorganic waste.",
        highlight: "inorganic waste",
        note: "El plástico no viene de un ser vivo, por eso es inorganic waste.",
      },
      {
        sentence: "Using a bottle again is reuse.",
        highlight: "reuse",
        note: "Reuse significa usar algo otra vez.",
      },
    ],
    quickChecks: [
      {
        prompt: "What are the 3 Rs?",
        choices: ["reduce, reuse and recycle", "solid, liquid and gas", "color, texture and taste"],
        correctAnswer: "reduce, reuse and recycle",
        explanation: "Estas acciones ayudan a proteger el environment.",
      },
      {
        prompt: "Which one is organic waste?",
        choices: ["banana peel", "plastic bottle", "metal can"],
        correctAnswer: "banana peel",
        explanation: "Una banana peel viene de un ser vivo, por eso es organic waste.",
      },
      {
        prompt: "Which word means use less?",
        choices: ["recycle", "reuse", "reduce"],
        correctAnswer: "reduce",
        explanation: "Reduce significa usar menos.",
      },
    ],
    vocabulary: ["waste", "organic", "inorganic", "biodegradable", "non-biodegradable", "reduce", "reuse", "recycle"],
  },
  {
    slug: "science-properties-matter",
    subject: "science",
    title: "Properties of Matter",
    emoji: "🔎",
    color: "from-amber-200 via-yellow-100 to-white",
    source: "Science Book pages 70 to 76",
    goal: "Identifica las properties of matter: color, temperature, weight, texture y taste.",
    simpleExplanation:
      "Matter significa materia. Tiene properties que podemos observar. Ian debe reconocer color, temperature, weight, texture y taste.",
    evaluablePhrases: ["matter", "color", "temperature", "weight", "texture", "taste", "properties"],
    audioText:
      "Tema de Science: Properties of Matter. Las properties incluyen color, temperature, weight, texture y taste.",
    sections: [
      {
        title: "See it",
        emoji: "👀",
        body: "Color es una property of matter que podemos ver.",
      },
      {
        title: "Feel it",
        emoji: "🤲",
        body: "Temperature indica si algo está hot o cold. Texture indica si se siente smooth, rough, soft o hard.",
      },
      {
        title: "Measure or taste",
        emoji: "⚖️",
        body: "Weight indica qué tan pesado es algo. Taste indica si un alimento es sweet, salty, sour o bitter.",
      },
    ],
    examples: [
      {
        sentence: "The apple is red. Red is its color.",
        highlight: "color",
        note: "Color es una property of matter.",
      },
      {
        sentence: "Ice is cold. Cold describes temperature.",
        highlight: "temperature",
        note: "Temperature puede ser hot o cold.",
      },
      {
        sentence: "A rock can be heavy and rough.",
        highlight: "weight, texture",
        note: "Heavy describe el weight; rough describe la texture.",
      },
    ],
    quickChecks: [
      {
        prompt: "Which property tells if something is hot or cold?",
        choices: ["temperature", "color", "taste"],
        correctAnswer: "temperature",
        explanation: "Temperature indica si algo está hot o cold.",
      },
      {
        prompt: "Which property tells how heavy something is?",
        choices: ["texture", "weight", "color"],
        correctAnswer: "weight",
        explanation: "Weight indica qué tan heavy es algo.",
      },
      {
        prompt: "Which property can be smooth or rough?",
        choices: ["taste", "temperature", "texture"],
        correctAnswer: "texture",
        explanation: "Texture describe cómo se siente algo.",
      },
    ],
    vocabulary: ["matter", "properties", "color", "temperature", "weight", "texture", "taste"],
  },
  {
    slug: "science-changes-state",
    subject: "science",
    title: "States and Changes of State",
    emoji: "🧊",
    color: "from-blue-200 via-sky-100 to-white",
    source: "Science Book pages 70 to 76 and 78 to 84",
    goal: "Identifica los states of matter y sus cambios: solid, liquid, gas, melt, freeze, boil, evaporate, condense y steam.",
    simpleExplanation:
      "Matter puede estar en estado solid, liquid o gas. Puede cambiar de estado con melt, freeze, boil, evaporate o condense. Steam es agua en forma de gas.",
    evaluablePhrases: ["solid", "liquid", "gas", "melt", "freeze", "boil", "evaporate", "condense", "steam", "states of matter"],
    audioText:
      "Tema de Science: States of Matter and Changes of State. Los estados son solid, liquid y gas. Los cambios incluyen melt, freeze, boil, evaporate y condense. Steam es agua en forma de gas.",
    sections: [
      {
        title: "States",
        emoji: "🧪",
        body: "Los states of matter son solid, liquid y gas.",
      },
      {
        title: "Heat changes",
        emoji: "🔥",
        body: "Cuando matter se calienta puede melt, boil o evaporate.",
      },
      {
        title: "Cold changes",
        emoji: "❄️",
        body: "Cuando matter se enfría puede freeze o condense.",
      },
    ],
    examples: [
      {
        sentence: "Ice is a solid, water is a liquid, and steam is a gas.",
        highlight: "solid, liquid, gas, steam",
        note: "Estos son states of matter; steam es un ejemplo de gas.",
      },
      {
        sentence: "Ice can melt and become water.",
        highlight: "melt",
        note: "Melt significa cambiar de solid a liquid.",
      },
      {
        sentence: "Water can freeze and become ice.",
        highlight: "freeze",
        note: "Freeze significa cambiar de liquid a solid.",
      },
    ],
    quickChecks: [
      {
        prompt: "What are the three states of matter?",
        choices: ["solid, liquid and gas", "reduce, reuse and recycle", "color, texture and taste"],
        correctAnswer: "solid, liquid and gas",
        explanation: "La hoja de topics incluye solid, liquid y gas.",
      },
      {
        prompt: "What happens when ice becomes water?",
        choices: ["freeze", "melt", "condense"],
        correctAnswer: "melt",
        explanation: "El ice hace melt y se convierte en water.",
      },
      {
        prompt: "What is water as a gas called in the topic sheet?",
        choices: ["steam", "soil", "waste"],
        correctAnswer: "steam",
        explanation: "Steam es water en forma de gas.",
      },
    ],
    vocabulary: ["solid", "liquid", "gas", "melt", "freeze", "boil", "evaporate", "condense", "steam"],
  },
  {
    slug: "grammar-present-simple",
    subject: "grammar",
    title: "Present Simple",
    emoji: "📘",
    color: "from-orange-200 via-rose-100 to-white",
    source: "Grammar Friends Unit 6 pages 30 to 33 and Review 2 page 35",
    goal: "Usa Present Simple en oraciones affirmative, negative, questions y short answers, incluyendo have y has.",
    simpleExplanation:
      "Usamos Present Simple para hablar de habits, facts y opinions. Agrega s o es con he, she e it. Usa do not o does not para negar, y Do o Does para hacer preguntas.",
    evaluablePhrases: ["present simple", "do", "does", "don't", "doesn't", "have", "has", "habits", "facts", "opinions"],
    audioText:
      "Tema de Grammar: Present Simple. Escucha los cambios: I play, he plays. I don't play, he doesn't play. Do you like milk? Yes, I do. Does he have breakfast? Yes, he does.",
    sections: [
      {
        title: "Affirmative",
        emoji: "✅",
        body: "Con I, you, we y they usamos play. Con he, she e it usamos plays, studies o watches. Have cambia a has.",
      },
      {
        title: "Negative",
        emoji: "🚫",
        body: "Usa don't con I, you, we y they. Usa doesn't con he, she e it. Después de doesn't, el verbo queda en su forma base: he doesn't have.",
      },
      {
        title: "Questions",
        emoji: "❓",
        body: "Usa Do con I, you, we y they. Usa Does con he, she e it. En short answers decimos: Yes, I do. No, she doesn't.",
      },
    ],
    examples: [
      {
        sentence: "I get up at 7 o'clock.",
        highlight: "get up",
        note: "Esta oración habla de un habit, es decir, un hábito.",
      },
      {
        sentence: "Does Richard brush his teeth before school?",
        highlight: "Does, brush",
        note: "Después de Does usamos el verbo base brush, no brushes.",
      },
      {
        sentence: "She has breakfast, but she doesn't have cereal.",
        highlight: "has, doesn't have",
        note: "En affirmative, have cambia a has; después de doesn't usamos have.",
      },
    ],
    quickChecks: [
      {
        prompt: "Choose the correct sentence.",
        choices: ["He watches TV.", "He watch TV.", "He watchs TV."],
        correctAnswer: "He watches TV.",
        explanation: "Watch termina en ch, por eso agregamos es con he, she e it.",
      },
      {
        prompt: "Complete: She ___ have a bike.",
        choices: ["don't", "doesn't", "does"],
        correctAnswer: "doesn't",
        explanation: "Usamos doesn't con she en oraciones negative.",
      },
      {
        prompt: "Complete: ___ you have toast for breakfast?",
        choices: ["Do", "Does", "Has"],
        correctAnswer: "Do",
        explanation: "Usamos Do con you.",
      },
    ],
    vocabulary: ["get up", "get dressed", "brush teeth", "walk", "play", "have", "make", "stay", "eat"],
  },
  {
    slug: "grammar-good-at-vocabulary",
    subject: "grammar",
    title: "Good at and Unit 6 Vocabulary",
    emoji: "🎲",
    color: "from-fuchsia-200 via-pink-100 to-white",
    source: "Family and Friends page 55, exercises 4 and 5; Grammar Friends Unit 6 vocabulary",
    goal: "Responde preguntas con good at y usa correctamente el vocabulario de daily routine de Unit 6.",
    simpleExplanation:
      "Usamos good at para decir que alguien es bueno en una actividad: surfing, basketball, music, art, chess o snorkeling. Para hablar de la daily routine usamos verbos como gets, has, brushes, walks y plays.",
    evaluablePhrases: ["good at", "surfing", "basketball", "music", "art", "chess", "snorkeling", "gets", "has", "brushes", "walks", "plays"],
    audioText:
      "Tema de Grammar: good at y vocabulario de daily routine. Is Tom good at surfing? Yes, he is. Billy gets up, has a shower, brushes his teeth, walks to school and plays with friends.",
    sections: [
      {
        title: "Good at",
        emoji: "🏄",
        body: "Usa Is o Are con good at. Por ejemplo: Is Tom good at surfing? Yes, he is. Are your friends good at chess? Yes, they are.",
      },
      {
        title: "Daily routine",
        emoji: "🪥",
        body: "La daily routine de Billy incluye: gets up, has a shower, gets dressed, brushes his teeth, walks to school y plays with friends.",
      },
      {
        title: "Short answers",
        emoji: "💬",
        body: "En short answers usa Yes, he is; No, she isn't; Yes, they are o No, I'm not, según la persona de la pregunta.",
      },
    ],
    examples: [
      {
        sentence: "Is Maria good at music? Yes, she is.",
        highlight: "Yes, she is",
        note: "Maria es una niña, por eso usamos she is.",
      },
      {
        sentence: "Are your friends good at chess? Yes, they are.",
        highlight: "Yes, they are",
        note: "Friends es plural, por eso usamos they are.",
      },
      {
        sentence: "He brushes his teeth after breakfast.",
        highlight: "brushes",
        note: "Brush termina en sh, por eso agregamos es con he: brushes.",
      },
    ],
    quickChecks: [
      {
        prompt: "Answer: Is Tom good at surfing?",
        choices: ["Yes, he is.", "Yes, she is.", "Yes, they are."],
        correctAnswer: "Yes, he is.",
        explanation: "Para Tom usamos el pronombre he.",
      },
      {
        prompt: "Complete: He ___ his teeth after breakfast.",
        choices: ["brushes", "walks", "plays"],
        correctAnswer: "brushes",
        explanation: "La frase correcta es brushes his teeth: se cepilla los dientes.",
      },
      {
        prompt: "Complete: After school, he ___ with his friends.",
        choices: ["gets", "plays", "brushes"],
        correctAnswer: "plays",
        explanation: "He plays with his friends significa que él juega con sus amigos.",
      },
    ],
    vocabulary: ["surfing", "basketball", "music", "art", "chess", "snorkeling", "gets", "has", "brushes", "walks", "plays"],
  },
  {
    slug: "grammar-review-structures",
    subject: "grammar",
    title: "Review Structures",
    emoji: "🧩",
    color: "from-teal-200 via-cyan-100 to-white",
    source: "Family and Friends pages 48 and 49; page 55 phonics words aw, or, oy and oi",
    goal: "Usa adverbs of frequency, in/on/at, a/an/some, would like y palabras con aw, or, oy y oi.",
    simpleExplanation:
      "En Review 3, Ian debe colocar los adverbs correctamente, escoger in, on o at, usar a, an o some y completar una conversación con Would you like, Do you like, I'd like y No, thanks. La página 55 también repasa palabras con aw, or, oy y oi.",
    evaluablePhrases: ["never", "sometimes", "usually", "often", "always", "in", "on", "at", "a", "an", "some", "Would you like", "Do you like", "I'd like", "No, thanks", "aw", "or", "oy", "oi"],
    audioText:
      "Repaso de Grammar. Coloca los adverbs en el lugar correcto. Usa in para meses, on para días y at para horas. Practica a, an o some; Would you like, Do you like, I'd like y No, thanks. Las palabras incluyen paws, soil, fork, yawn, toy y oil.",
    sections: [
      {
        title: "Adverbs",
        emoji: "⏰",
        body: "Usa never, sometimes, usually, often y always para decir con qué frecuencia ocurre algo.",
      },
      {
        title: "In, on, at",
        emoji: "📅",
        body: "Usa in con meses, on con días y at con horas: in March, on Saturday, at 8 o'clock.",
      },
      {
        title: "Food and offers",
        emoji: "🍦",
        body: "Usa a, an o some con palabras de comida. Usa Would you like para ofrecer algo e I'd like para pedir algo con cortesía.",
      },
    ],
    examples: [
      {
        sentence: "I never play tennis.",
        highlight: "never",
        note: "El adverb never va antes del verbo de acción play.",
      },
      {
        sentence: "My birthday is in March, and the class starts at 9 o'clock.",
        highlight: "in March, at 9 o'clock",
        note: "Usamos in para los meses y at para las horas del reloj.",
      },
      {
        sentence: "Do you like ice cream? Yes, of course I do.",
        highlight: "Do you like",
        note: "Este ejemplo viene de la práctica de conversación.",
      },
    ],
    quickChecks: [
      {
        prompt: "Complete: My birthday is ___ March.",
        choices: ["in", "on", "at"],
        correctAnswer: "in",
        explanation: "Usamos in con los meses.",
      },
      {
        prompt: "Complete: There's a party ___ 8 o'clock.",
        choices: ["on", "at", "in"],
        correctAnswer: "at",
        explanation: "Usamos at con las horas.",
      },
      {
        prompt: "Complete: My favorite t___ is my new train.",
        choices: ["oy", "oi", "aw"],
        correctAnswer: "oy",
        explanation: "Completamos t + oy para formar toy, que significa juguete.",
      },
    ],
    vocabulary: ["rice", "dates", "orange", "grape", "spinach", "sandwich", "water", "coffee", "lemon", "lemonade", "asparagus", "tea", "aubergine", "paws", "soil", "fork", "yawn", "toy", "oil"],
  },
  {
    slug: "grammar-comparatives-superlatives",
    subject: "grammar",
    title: "Comparatives and Superlatives",
    emoji: "🏁",
    color: "from-red-200 via-orange-100 to-white",
    source: "Family and Friends page 49",
    goal: "Escribe oraciones con comparative y superlative adjectives: wide, big, fast, long y old.",
    simpleExplanation:
      "Usamos comparative adjectives para comparar dos cosas: wider than, bigger than, faster than, longer than y older than. Usamos superlatives para decir que algo es el que más destaca: the widest, the biggest, the fastest, the longest y the oldest.",
    evaluablePhrases: ["comparative", "superlative", "wide", "big", "fast", "long", "old", "wider than", "the widest", "bigger than", "the biggest", "faster than", "the fastest", "longer than", "the longest", "older than", "the oldest"],
    audioText:
      "Tema de Grammar: comparative y superlative adjectives. A is wider than B significa que A es más ancho que B. A is the widest significa que A es el más ancho. Practica wide, big, fast, long y old.",
    sections: [
      {
        title: "Compare two",
        emoji: "↔️",
        body: "Para comparar dos cosas usamos el adjective con er y than: wider than, bigger than, faster than, longer than y older than.",
      },
      {
        title: "The most",
        emoji: "⭐",
        body: "Para indicar que algo es el que más destaca usamos the y la terminación est: the widest, the biggest, the fastest, the longest y the oldest.",
      },
      {
        title: "Spelling",
        emoji: "✏️",
        body: "Con big duplicamos la g final: bigger y the biggest.",
      },
    ],
    examples: [
      {
        sentence: "A is wider than B. A is the widest.",
        highlight: "wider than, the widest",
        note: "Este es el ejemplo de la página de Review.",
      },
      {
        sentence: "A is bigger than B. A is the biggest.",
        highlight: "bigger than, the biggest",
        note: "Big duplica la g: bigger y biggest.",
      },
      {
        sentence: "A is faster than B. A is the fastest.",
        highlight: "faster than, the fastest",
        note: "Fast agrega er para comparar y est para el superlative.",
      },
    ],
    quickChecks: [
      {
        prompt: "Complete: A is ___ than B.",
        choices: ["bigger", "biggest", "the big"],
        correctAnswer: "bigger",
        explanation: "Usamos el comparative bigger seguido de than.",
      },
      {
        prompt: "Complete: A is ___ fastest.",
        choices: ["than", "the", "more"],
        correctAnswer: "the",
        explanation: "Los superlatives usan the.",
      },
      {
        prompt: "Which word is a superlative?",
        choices: ["longer than", "the longest", "long"],
        correctAnswer: "the longest",
        explanation: "The longest es un superlative y significa el más largo.",
      },
    ],
    vocabulary: ["wide", "big", "fast", "long", "old", "wider", "biggest", "fastest", "longer", "oldest"],
  },
];

export const lessonsBySubject = {
  science: lessons.filter((lesson) => lesson.subject === "science"),
  grammar: lessons.filter((lesson) => lesson.subject === "grammar"),
} satisfies Record<ExamSubject, Lesson[]>;

export const lessonMap = Object.fromEntries(lessons.map((lesson) => [lesson.slug, lesson])) as Record<
  Lesson["slug"],
  Lesson
>;
