import type { Lesson } from "@/types";

export const lessonOrder: Lesson["slug"][] = [
  "subject-pronouns",
  "possessive-adjectives",
  "can-cant",
  "present-progressive",
];

export const lessons: Lesson[] = [
  {
    slug: "subject-pronouns",
    title: "Subject Pronouns",
    emoji: "🧒",
    color: "from-sky-200 via-cyan-100 to-white",
    goal: "Use the right little word for a person, animal, or thing.",
    simpleExplanation:
      "Subject pronouns are short words we use instead of names. They help our sentences sound smooth and easy.",
    audioText:
      "Subject pronouns are I, you, he, she, it, we, and they. They go at the start of a sentence.",
    sections: [
      {
        title: "What is a pronoun?",
        emoji: "✨",
        body: "A pronoun takes the place of a name. Instead of saying Maria every time, we can say she.",
      },
      {
        title: "One or many",
        emoji: "🔍",
        body: "He, she, and it talk about one. We and they talk about more than one.",
      },
      {
        title: "Use the clue",
        emoji: "💡",
        body: "Think about who is doing the action. Is it me, you, one boy, one girl, one thing, or many people?",
      },
    ],
    examples: [
      {
        sentence: "I am ready for my exam.",
        highlight: "I",
        note: "Use I when you talk about yourself.",
      },
      {
        sentence: "She is reading a green book.",
        highlight: "She",
        note: "Use she for one girl or woman.",
      },
      {
        sentence: "They are carrying a school project.",
        highlight: "They",
        note: "Use they for more than one person or thing.",
      },
    ],
    quickChecks: [
      {
        prompt: "Maria is drawing. ___ is happy.",
        choices: ["He", "She", "They"],
        correctAnswer: "She",
        explanation: "Maria is one girl, so we say she.",
      },
      {
        prompt: "Tom and Sam are swimming. ___ are in the pool.",
        choices: ["He", "They", "It"],
        correctAnswer: "They",
        explanation: "Tom and Sam means more than one, so we use they.",
      },
      {
        prompt: "The camera is on the desk. ___ is black.",
        choices: ["It", "We", "You"],
        correctAnswer: "It",
        explanation: "A camera is one thing, so we use it.",
      },
    ],
    vocabulary: ["I", "you", "he", "she", "it", "we", "they"],
  },
  {
    slug: "possessive-adjectives",
    title: "Possessive Adjectives",
    emoji: "🎒",
    color: "from-amber-200 via-orange-100 to-white",
    goal: "Show who something belongs to.",
    simpleExplanation:
      "Possessive adjectives tell us about ownership. They come before a noun, like my book or their camera.",
    audioText:
      "My, your, his, her, its, our, and their tell us who owns something.",
    sections: [
      {
        title: "A helper before the noun",
        emoji: "🧩",
        body: "A possessive adjective comes before a thing word. We say my computer, not computer my.",
      },
      {
        title: "Match the owner",
        emoji: "👀",
        body: "I goes with my, he goes with his, and they goes with their. The owner tells you the right word.",
      },
      {
        title: "Look at the object",
        emoji: "📚",
        body: "You can use school words too: our school project, her camera, his MP3 player.",
      },
    ],
    examples: [
      {
        sentence: "This is my computer.",
        highlight: "my",
        note: "My belongs with I.",
      },
      {
        sentence: "He has his DVD player.",
        highlight: "his",
        note: "His belongs with he.",
      },
      {
        sentence: "They are doing their school project.",
        highlight: "their",
        note: "Their belongs with they.",
      },
    ],
    quickChecks: [
      {
        prompt: "We are reading ___ grammar book.",
        choices: ["our", "their", "her"],
        correctAnswer: "our",
        explanation: "We goes with our.",
      },
      {
        prompt: "The dog is eating ___ food.",
        choices: ["its", "my", "your"],
        correctAnswer: "its",
        explanation: "One animal or thing can use its.",
      },
      {
        prompt: "Ana has ___ camera.",
        choices: ["his", "her", "our"],
        correctAnswer: "her",
        explanation: "Ana is one girl, so we say her camera.",
      },
    ],
    vocabulary: ["my", "your", "his", "her", "its", "our", "their"],
  },
  {
    slug: "can-cant",
    title: "Can / Can't",
    emoji: "🏄",
    color: "from-lime-200 via-emerald-100 to-white",
    goal: "Talk about ability, permission, and polite requests.",
    simpleExplanation:
      "Can means able or allowed. Can't means not able or not allowed. We can also use can to ask questions.",
    audioText:
      "Use can for ability and permission. Use can't for negative sentences. Ask questions with Can plus a subject.",
    sections: [
      {
        title: "Ability",
        emoji: "💪",
        body: "Use can when someone knows how to do something. He can swim. She can't skateboard.",
      },
      {
        title: "Questions and short answers",
        emoji: "❓",
        body: "Start with Can. Then answer with Yes, I can or No, I can't.",
      },
      {
        title: "Permission and requests",
        emoji: "🙏",
        body: "Can I use the computer? Can you turn off the TV, please? This sounds polite and clear.",
      },
    ],
    examples: [
      {
        sentence: "He can swim.",
        highlight: "can",
        note: "Can shows ability.",
      },
      {
        sentence: "She can't skateboard.",
        highlight: "can't",
        note: "Can't shows a negative idea.",
      },
      {
        sentence: "Can I use the computer?",
        highlight: "Can I",
        note: "Use can to ask for permission.",
      },
    ],
    quickChecks: [
      {
        prompt: "Choose the best answer: ___ you turn off the radio, please?",
        choices: ["Can", "Can't", "Are"],
        correctAnswer: "Can",
        explanation: "We use can for polite requests.",
      },
      {
        prompt: "Lia can swim, but she ___ dive.",
        choices: ["can't", "can", "is"],
        correctAnswer: "can't",
        explanation: "The sentence needs a negative ability.",
      },
      {
        prompt: "Can they study here? Short answer: Yes, ___ can.",
        choices: ["we", "they", "she"],
        correctAnswer: "they",
        explanation: "The question asks about they, so the short answer uses they.",
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
    goal: "Describe what is happening right now.",
    simpleExplanation:
      "Use am, is, or are plus a verb with -ing to talk about actions happening now.",
    audioText:
      "Present progressive uses subject plus am, is, or are plus a verb ending in ing.",
    sections: [
      {
        title: "The structure",
        emoji: "🏗️",
        body: "We build it like this: subject + verb to be + verb-ing. Example: They are reading.",
      },
      {
        title: "Negative form",
        emoji: "🚫",
        body: "Add not to am, is, or are. He isn't sleeping. We aren't sailing.",
      },
      {
        title: "Verb spelling",
        emoji: "✍️",
        body: "Some verbs just add -ing. Some double a letter, like running and swimming.",
      },
    ],
    examples: [
      {
        sentence: "I am playing.",
        highlight: "am playing",
        note: "I uses am.",
      },
      {
        sentence: "She is reading.",
        highlight: "is reading",
        note: "She uses is.",
      },
      {
        sentence: "We aren't sailing.",
        highlight: "aren't sailing",
        note: "Negative form uses aren't.",
      },
    ],
    quickChecks: [
      {
        prompt: "They ___ swimming now.",
        choices: ["are", "is", "can"],
        correctAnswer: "are",
        explanation: "They goes with are.",
      },
      {
        prompt: "He isn't ___.",
        choices: ["sleeping", "sleep", "sleeps"],
        correctAnswer: "sleeping",
        explanation: "Present progressive needs the verb with -ing.",
      },
      {
        prompt: "I am ___ my homework.",
        choices: ["doing", "do", "did"],
        correctAnswer: "doing",
        explanation: "Am plus a verb needs the -ing form.",
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