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
    goal: "Identify the different types of pollution: air pollution, water pollution and soil pollution.",
    simpleExplanation:
      "Pollution is when the environment gets dirty or unsafe. Ian must identify air pollution, water pollution and soil pollution.",
    evaluablePhrases: ["pollution", "air pollution", "water pollution", "soil pollution", "environment"],
    audioText:
      "Science topic: Types of Pollution. Air pollution affects the air, water pollution affects rivers, lakes or oceans, and soil pollution affects the ground.",
    sections: [
      {
        title: "Air pollution",
        emoji: "💨",
        body: "Air pollution happens when smoke, gases or dirty air affect the air we breathe.",
      },
      {
        title: "Water pollution",
        emoji: "💧",
        body: "Water pollution happens when trash or harmful substances make water dirty.",
      },
      {
        title: "Soil pollution",
        emoji: "🌱",
        body: "Soil pollution happens when the ground gets dirty and plants, animals or people can be affected.",
      },
    ],
    examples: [
      {
        sentence: "Smoke in the air is air pollution.",
        highlight: "air pollution",
        note: "The problem is in the air.",
      },
      {
        sentence: "Trash in a river is water pollution.",
        highlight: "water pollution",
        note: "The problem is in the water.",
      },
      {
        sentence: "Trash on the ground can cause soil pollution.",
        highlight: "soil pollution",
        note: "The problem is in the soil or ground.",
      },
    ],
    quickChecks: [
      {
        prompt: "Which type of pollution affects rivers or lakes?",
        choices: ["air pollution", "water pollution", "soil pollution"],
        correctAnswer: "water pollution",
        explanation: "Water pollution affects water.",
      },
      {
        prompt: "Which type of pollution affects the ground?",
        choices: ["soil pollution", "air pollution", "water pollution"],
        correctAnswer: "soil pollution",
        explanation: "Soil is the ground.",
      },
      {
        prompt: "Which type of pollution affects the air we breathe?",
        choices: ["water pollution", "soil pollution", "air pollution"],
        correctAnswer: "air pollution",
        explanation: "Air pollution affects the air.",
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
    goal: "Classify waste and identify actions that help protect the environment.",
    simpleExplanation:
      "Waste can be organic or inorganic, biodegradable or non-biodegradable. The 3 Rs are reduce, reuse and recycle, and they help sustainable consumption.",
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
      "Science topic: Waste. Classify organic waste, inorganic waste, biodegradable and non-biodegradable waste. Remember: reduce, reuse and recycle support sustainable consumption.",
    sections: [
      {
        title: "Organic waste",
        emoji: "🍎",
        body: "Organic waste comes from living things, like fruit peels or food scraps.",
      },
      {
        title: "Inorganic waste",
        emoji: "🥫",
        body: "Inorganic waste does not come from living things, like cans, plastic or glass.",
      },
      {
        title: "Reduce, reuse, recycle",
        emoji: "🔁",
        body: "Reduce means use less, reuse means use again, and recycle means make useful materials again.",
      },
    ],
    examples: [
      {
        sentence: "A banana peel is organic waste.",
        highlight: "organic waste",
        note: "It comes from a living thing.",
      },
      {
        sentence: "A plastic bottle is inorganic waste.",
        highlight: "inorganic waste",
        note: "Plastic is not from a living thing.",
      },
      {
        sentence: "Using a bottle again is reuse.",
        highlight: "reuse",
        note: "Reuse means use something again.",
      },
    ],
    quickChecks: [
      {
        prompt: "What are the 3 Rs?",
        choices: ["reduce, reuse and recycle", "solid, liquid and gas", "color, texture and taste"],
        correctAnswer: "reduce, reuse and recycle",
        explanation: "These actions help protect the environment.",
      },
      {
        prompt: "Which one is organic waste?",
        choices: ["banana peel", "plastic bottle", "metal can"],
        correctAnswer: "banana peel",
        explanation: "A banana peel comes from a living thing.",
      },
      {
        prompt: "Which word means use less?",
        choices: ["recycle", "reuse", "reduce"],
        correctAnswer: "reduce",
        explanation: "Reduce means use less.",
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
    goal: "Identify properties of matter: color, temperature, weight, texture and taste.",
    simpleExplanation:
      "Matter has properties we can observe. Ian must recognize color, temperature, weight, texture and taste.",
    evaluablePhrases: ["matter", "color", "temperature", "weight", "texture", "taste", "properties"],
    audioText:
      "Science topic: Properties of Matter. Properties include color, temperature, weight, texture and taste.",
    sections: [
      {
        title: "See it",
        emoji: "👀",
        body: "Color is a property of matter that we can see.",
      },
      {
        title: "Feel it",
        emoji: "🤲",
        body: "Temperature tells if something is hot or cold. Texture tells if something feels smooth, rough, soft or hard.",
      },
      {
        title: "Measure or taste",
        emoji: "⚖️",
        body: "Weight tells how heavy something is. Taste tells if food is sweet, salty, sour or bitter.",
      },
    ],
    examples: [
      {
        sentence: "The apple is red. Red is its color.",
        highlight: "color",
        note: "Color is a property of matter.",
      },
      {
        sentence: "Ice is cold. Cold describes temperature.",
        highlight: "temperature",
        note: "Temperature can be hot or cold.",
      },
      {
        sentence: "A rock can be heavy and rough.",
        highlight: "weight, texture",
        note: "Heavy describes weight; rough describes texture.",
      },
    ],
    quickChecks: [
      {
        prompt: "Which property tells if something is hot or cold?",
        choices: ["temperature", "color", "taste"],
        correctAnswer: "temperature",
        explanation: "Temperature tells hot or cold.",
      },
      {
        prompt: "Which property tells how heavy something is?",
        choices: ["texture", "weight", "color"],
        correctAnswer: "weight",
        explanation: "Weight tells how heavy something is.",
      },
      {
        prompt: "Which property can be smooth or rough?",
        choices: ["taste", "temperature", "texture"],
        correctAnswer: "texture",
        explanation: "Texture is how something feels.",
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
    goal: "Identify states of matter and changes of state: solid, liquid, gas, melt, freeze, boil, evaporate, condense and steam.",
    simpleExplanation:
      "Matter can be solid, liquid or gas. Matter can change state when it melts, freezes, boils, evaporates or condenses. Steam is water as a gas.",
    evaluablePhrases: ["solid", "liquid", "gas", "melt", "freeze", "boil", "evaporate", "condense", "steam", "states of matter"],
    audioText:
      "Science topic: States of Matter and Changes of State. States are solid, liquid and gas. Changes include melt, freeze, boil, evaporate and condense. Steam is water as a gas.",
    sections: [
      {
        title: "States",
        emoji: "🧪",
        body: "The states of matter are solid, liquid and gas.",
      },
      {
        title: "Heat changes",
        emoji: "🔥",
        body: "When matter gets warmer it can melt, boil or evaporate.",
      },
      {
        title: "Cold changes",
        emoji: "❄️",
        body: "When matter gets colder it can freeze or condense.",
      },
    ],
    examples: [
      {
        sentence: "Ice is a solid, water is a liquid, and steam is a gas.",
        highlight: "solid, liquid, gas, steam",
        note: "These are states of matter and an example of gas.",
      },
      {
        sentence: "Ice can melt and become water.",
        highlight: "melt",
        note: "Melt means change from solid to liquid.",
      },
      {
        sentence: "Water can freeze and become ice.",
        highlight: "freeze",
        note: "Freeze means change from liquid to solid.",
      },
    ],
    quickChecks: [
      {
        prompt: "What are the three states of matter?",
        choices: ["solid, liquid and gas", "reduce, reuse and recycle", "color, texture and taste"],
        correctAnswer: "solid, liquid and gas",
        explanation: "The topic sheet lists solid, liquid and gas.",
      },
      {
        prompt: "What happens when ice becomes water?",
        choices: ["freeze", "melt", "condense"],
        correctAnswer: "melt",
        explanation: "Ice melts into water.",
      },
      {
        prompt: "What is water as a gas called in the topic sheet?",
        choices: ["steam", "soil", "waste"],
        correctAnswer: "steam",
        explanation: "Steam is water as a gas.",
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
    goal: "Use Present Simple affirmative, negative, questions and short answers, including have/has.",
    simpleExplanation:
      "Use the present simple for habits, facts and opinions. Add s or es with he, she and it. Use do not or does not for negatives, and Do or Does for questions.",
    evaluablePhrases: ["present simple", "do", "does", "don't", "doesn't", "have", "has", "habits", "facts", "opinions"],
    audioText:
      "Grammar topic: Present Simple. I play, he plays. I don't play, he doesn't play. Do you like milk? Yes, I do. Does he have breakfast? Yes, he does.",
    sections: [
      {
        title: "Affirmative",
        emoji: "✅",
        body: "I play, you play, we play and they play. With he, she and it, use plays, studies or watches. Have changes to has.",
      },
      {
        title: "Negative",
        emoji: "🚫",
        body: "Use don't with I, you, we and they. Use doesn't with he, she and it. After doesn't, the verb stays in base form: he doesn't have.",
      },
      {
        title: "Questions",
        emoji: "❓",
        body: "Use Do with I, you, we and they. Use Does with he, she and it. Short answers: Yes, I do. No, she doesn't.",
      },
    ],
    examples: [
      {
        sentence: "I get up at 7 o'clock.",
        highlight: "get up",
        note: "This is a habit.",
      },
      {
        sentence: "Does Richard brush his teeth before school?",
        highlight: "Does, brush",
        note: "With Does, use the base verb brush, not brushes.",
      },
      {
        sentence: "She has breakfast, but she doesn't have cereal.",
        highlight: "has, doesn't have",
        note: "Have becomes has in affirmative; after doesn't, use have.",
      },
    ],
    quickChecks: [
      {
        prompt: "Choose the correct sentence.",
        choices: ["He watches TV.", "He watch TV.", "He watchs TV."],
        correctAnswer: "He watches TV.",
        explanation: "Watch ends in ch, so add es for he/she/it.",
      },
      {
        prompt: "Complete: She ___ have a bike.",
        choices: ["don't", "doesn't", "does"],
        correctAnswer: "doesn't",
        explanation: "Use doesn't with she in negative sentences.",
      },
      {
        prompt: "Complete: ___ you have toast for breakfast?",
        choices: ["Do", "Does", "Has"],
        correctAnswer: "Do",
        explanation: "Use Do with you.",
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
    goal: "Answer questions with good at and use Unit 6 daily routine vocabulary correctly.",
    simpleExplanation:
      "Use good at with activities: good at surfing, basketball, music, art, chess or snorkeling. Use daily routine verbs like gets, has, brushes, walks and plays.",
    evaluablePhrases: ["good at", "surfing", "basketball", "music", "art", "chess", "snorkeling", "gets", "has", "brushes", "walks", "plays"],
    audioText:
      "Grammar topic: good at and daily routine vocabulary. Is Tom good at surfing? Yes, he is. Billy gets up, has a shower, brushes his teeth, walks to school and plays with friends.",
    sections: [
      {
        title: "Good at",
        emoji: "🏄",
        body: "Use Is or Are with good at. Is Tom good at surfing? Yes, he is. Are your friends good at chess? Yes, they are.",
      },
      {
        title: "Daily routine",
        emoji: "🪥",
        body: "Billy gets up, has a shower, gets dressed, brushes his teeth, walks to school and plays with friends.",
      },
      {
        title: "Short answers",
        emoji: "💬",
        body: "Use Yes, he is; No, she isn't; Yes, they are; or No, I'm not, depending on the question.",
      },
    ],
    examples: [
      {
        sentence: "Is Maria good at music? Yes, she is.",
        highlight: "Yes, she is",
        note: "Maria is one girl, so use she is.",
      },
      {
        sentence: "Are your friends good at chess? Yes, they are.",
        highlight: "Yes, they are",
        note: "Friends is plural, so use they are.",
      },
      {
        sentence: "He brushes his teeth after breakfast.",
        highlight: "brushes",
        note: "Brush ends in sh, so add es with he.",
      },
    ],
    quickChecks: [
      {
        prompt: "Answer: Is Tom good at surfing?",
        choices: ["Yes, he is.", "Yes, she is.", "Yes, they are."],
        correctAnswer: "Yes, he is.",
        explanation: "Tom is he.",
      },
      {
        prompt: "Complete: He ___ his teeth after breakfast.",
        choices: ["brushes", "walks", "plays"],
        correctAnswer: "brushes",
        explanation: "The phrase is brushes his teeth.",
      },
      {
        prompt: "Complete: After school, he ___ with his friends.",
        choices: ["gets", "plays", "brushes"],
        correctAnswer: "plays",
        explanation: "He plays with his friends.",
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
    goal: "Use adverbs of frequency, in/on/at, a/an/some, would like and phonics words aw, or, oy and oi.",
    simpleExplanation:
      "Review 3 asks Ian to place adverbs correctly, choose in, on or at, use a, an or some, and complete a conversation with would you like, Do you like, I'd like and No, thanks. Page 55 also reviews aw, or, oy and oi words.",
    evaluablePhrases: ["never", "sometimes", "usually", "often", "always", "in", "on", "at", "a", "an", "some", "Would you like", "Do you like", "I'd like", "No, thanks", "aw", "or", "oy", "oi"],
    audioText:
      "Grammar review. Put adverbs in the correct place. Use in for months, on for days and at for times. Use a, an or some. Practice would you like, Do you like, I'd like and No, thanks. Phonics words include paws, soil, fork, yawn, toy and oil.",
    sections: [
      {
        title: "Adverbs",
        emoji: "⏰",
        body: "Use never, sometimes, usually, often and always to say how often something happens.",
      },
      {
        title: "In, on, at",
        emoji: "📅",
        body: "Use in with months, on with days, and at with times: in March, on Saturday, at 8 o'clock.",
      },
      {
        title: "Food and offers",
        emoji: "🍦",
        body: "Use a, an or some with food words. Use Would you like for offers and I'd like to ask politely.",
      },
    ],
    examples: [
      {
        sentence: "I never play tennis.",
        highlight: "never",
        note: "The adverb goes before the action verb play.",
      },
      {
        sentence: "My birthday is in March, and the class starts at 9 o'clock.",
        highlight: "in March, at 9 o'clock",
        note: "Use in for months and at for clock times.",
      },
      {
        sentence: "Do you like ice cream? Yes, of course I do.",
        highlight: "Do you like",
        note: "This is from the conversation practice.",
      },
    ],
    quickChecks: [
      {
        prompt: "Complete: My birthday is ___ March.",
        choices: ["in", "on", "at"],
        correctAnswer: "in",
        explanation: "Use in with months.",
      },
      {
        prompt: "Complete: There's a party ___ 8 o'clock.",
        choices: ["on", "at", "in"],
        correctAnswer: "at",
        explanation: "Use at with times.",
      },
      {
        prompt: "Complete: My favorite t___ is my new train.",
        choices: ["oy", "oi", "aw"],
        correctAnswer: "oy",
        explanation: "t + oy = toy.",
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
    goal: "Write sentences with comparative and superlative adjectives: wide, big, fast, long and old.",
    simpleExplanation:
      "Use comparative adjectives to compare two things: wider than, bigger than, faster than, longer than and older than. Use superlatives to say one is the most: the widest, the biggest, the fastest, the longest and the oldest.",
    evaluablePhrases: ["comparative", "superlative", "wide", "big", "fast", "long", "old", "wider than", "the widest", "bigger than", "the biggest", "faster than", "the fastest", "longer than", "the longest", "older than", "the oldest"],
    audioText:
      "Grammar topic: comparative and superlative adjectives. A is wider than B. A is the widest. Practice wide, big, fast, long and old.",
    sections: [
      {
        title: "Compare two",
        emoji: "↔️",
        body: "Use adjective plus er than: wider than, bigger than, faster than, longer than, older than.",
      },
      {
        title: "The most",
        emoji: "⭐",
        body: "Use the plus adjective ending: the widest, the biggest, the fastest, the longest, the oldest.",
      },
      {
        title: "Spelling",
        emoji: "✏️",
        body: "For big, double the final g: bigger and the biggest.",
      },
    ],
    examples: [
      {
        sentence: "A is wider than B. A is the widest.",
        highlight: "wider than, the widest",
        note: "This follows the example on the review page.",
      },
      {
        sentence: "A is bigger than B. A is the biggest.",
        highlight: "bigger than, the biggest",
        note: "Big doubles the g.",
      },
      {
        sentence: "A is faster than B. A is the fastest.",
        highlight: "faster than, the fastest",
        note: "Fast adds er and est.",
      },
    ],
    quickChecks: [
      {
        prompt: "Complete: A is ___ than B.",
        choices: ["bigger", "biggest", "the big"],
        correctAnswer: "bigger",
        explanation: "Use comparative + than.",
      },
      {
        prompt: "Complete: A is ___ fastest.",
        choices: ["than", "the", "more"],
        correctAnswer: "the",
        explanation: "Superlatives use the.",
      },
      {
        prompt: "Which word is a superlative?",
        choices: ["longer than", "the longest", "long"],
        correctAnswer: "the longest",
        explanation: "The longest is a superlative.",
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
