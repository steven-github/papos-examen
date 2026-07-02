import type { Lesson } from "@/types";

export const lessonOrder: Lesson["slug"][] = [
  "zoo-animals",
  "present-progressive-questions",
  "present-progressive-gerunds",
];

export const lessons: Lesson[] = [
  {
    slug: "zoo-animals",
    title: "Zoo Animals",
    emoji: "🦁",
    color: "from-yellow-200 via-orange-100 to-white",
    goal: "Aprender el vocabulario de animales del zoológico.",
    simpleExplanation:
      "Los nombres de animales del zoológico son sustantivos en inglés. Por ejemplo: penguin, zebra, monkey, kangaroo, camel, lizard, flamingo y crocodile.",
    evaluablePhrases: [
      "penguin",
      "zebra",
      "monkey",
      "kangaroo",
      "camel",
      "lizard",
      "flamingo",
      "crocodile",
      "zoo animals",
      "I like the penguins",
      "the monkeys",
    ],
    audioText:
      "En el zoológico hay muchos animales: penguin, zebra, monkey, kangaroo, camel, lizard, flamingo y crocodile.",
    sections: [
      {
        title: "Animales del Zoológico",
        emoji: "🦓",
        body: "Aprende a identificar y nombrar los diferentes animales del zoológico. Por ejemplo: penguin (pingüino), zebra (cebra), monkey (mono).",
      },
      {
        title: "Descripción con la estructura",
        emoji: "👀",
        body: "Puedes decir 'I like the penguins' o 'They're funny!' para describir lo que ves en el zoológico.",
      },
      {
        title: "Actividades en el zoológico",
        emoji: "🏞️",
        body: "Los animales hacen diferentes cosas: 'The monkey is eating the sandwich' o 'They're climbing'.",
      },
    ],
    examples: [
      {
        sentence: "I like the penguins.",
        highlight: "penguins",
        note: "Penguin es un animal del zoológico.",
      },
      {
        sentence: "The monkey is funny.",
        highlight: "monkey",
        note: "Monkey es otro animal del zoológico.",
      },
      {
        sentence: "They're watching the crocodile.",
        highlight: "crocodile",
        note: "Crocodile es un reptil del zoológico.",
      },
    ],
    quickChecks: [
      {
        prompt: "¿Cuál es el animal que camina en rayas blancas y negras?",
        choices: ["monkey", "zebra", "penguin"],
        correctAnswer: "zebra",
        explanation: "Zebra tiene rayas blancas y negras.",
      },
      {
        prompt: "¿Cuál animal salta muy alto?",
        choices: ["kangaroo", "lizard", "flamingo"],
        correctAnswer: "kangaroo",
        explanation: "Kangaroo salta muy alto.",
      },
      {
        prompt: "¿Cuál animal vive en el agua fría?",
        choices: ["camel", "penguin", "crocodile"],
        correctAnswer: "penguin",
        explanation: "Penguin es un ave acuática que vive en lugares fríos.",
      },
    ],
    vocabulary: ["penguin", "zebra", "monkey", "kangaroo", "camel", "lizard", "flamingo", "crocodile"],
  },
  {
    slug: "present-progressive-questions",
    title: "Present Progressive - Preguntas y Respuestas",
    emoji: "❓",
    color: "from-blue-200 via-cyan-100 to-white",
    goal: "Hacer y responder preguntas en presente progresivo.",
    simpleExplanation:
      "Para hacer preguntas con present progressive, invierte el orden: Are/Is + sujeto + verbo-ing. Las respuestas cortas usan: Yes/No + pronombre + am/is/are.",
    evaluablePhrases: [
      "Are you reading?",
      "Is he sleeping?",
      "Yes, I am",
      "No, I'm not",
      "Yes, it is",
      "No, it isn't",
      "Yes, they are",
      "No, they aren't",
      "Is the monkey eating?",
      "Are the penguins swimming?",
    ],
    audioText:
      "Para preguntas: Are/Is/Am + sujeto + verbo-ing. Responde con Yes/No + pronombre + am/is/are.",
    sections: [
      {
        title: "Estructura de Preguntas",
        emoji: "🏗️",
        body: "Invierte el verbo to be y el sujeto: 'Are you reading?' 'Is the monkey eating?' 'Are the penguins swimming?'",
      },
      {
        title: "Respuestas Cortas Afirmativas",
        emoji: "✅",
        body: "Responde con Yes + pronombre + am/is/are. Ejemplo: Yes, I am. Yes, it is. Yes, they are.",
      },
      {
        title: "Respuestas Cortas Negativas",
        emoji: "❌",
        body: "Responde con No + pronombre + negación. Ejemplo: No, I'm not. No, it isn't. No, they aren't.",
      },
    ],
    examples: [
      {
        sentence: "Is the boy reading?",
        highlight: "Is",
        note: "La pregunta empieza con Is para una persona singular.",
      },
      {
        sentence: "Yes, he is.",
        highlight: "he is",
        note: "La respuesta corta usa el pronombre y el verbo to be.",
      },
      {
        sentence: "Are the monkeys playing?",
        highlight: "Are",
        note: "La pregunta usa Are para plural.",
      },
    ],
    quickChecks: [
      {
        prompt: "Completa: Is the lion ___? Yes, it is.",
        choices: ["sleeping", "sleep", "sleeps"],
        correctAnswer: "sleeping",
        explanation: "Después de 'is' usamos el verbo con -ing.",
      },
      {
        prompt: "¿Cuál es la respuesta corta? Are they studying? ___.",
        choices: ["Yes, they are", "Yes, they is", "Yes, they be"],
        correctAnswer: "Yes, they are",
        explanation: "Para 'they' usamos 'are'.",
      },
      {
        prompt: "Completa la pregunta: ___ you playing games?",
        choices: ["Are", "Is", "Am"],
        correctAnswer: "Are",
        explanation: "Para 'you' usamos 'Are'.",
      },
    ],
    vocabulary: [
      "reading",
      "writing",
      "eating",
      "sleeping",
      "playing",
      "swimming",
      "climbing",
      "flying",
    ],
  },
  {
    slug: "present-progressive-gerunds",
    title: "Present Progressive - Gerundios y Acciones",
    emoji: "🏃",
    color: "from-green-200 via-emerald-100 to-white",
    goal: "Describir acciones en progreso usando gerundios (-ing).",
    simpleExplanation:
      "Los gerundios son verbos terminados en -ing que muestran una acción en progreso. Ejemplo: eating, playing, swimming. Se usan con am/is/are para formar el present progressive.",
    evaluablePhrases: [
      "eating",
      "sleeping",
      "playing",
      "swimming",
      "climbing",
      "flying",
      "hanging",
      "running",
      "The monkey is eating",
      "They are swimming",
      "He is taking the sandwich",
    ],
    audioText:
      "Los gerundios terminan en -ing. Usa am/is/are + gerundio para describir acciones que ocurren ahora: eating, playing, swimming.",
    sections: [
      {
        title: "Formación de Gerundios",
        emoji: "✍️",
        body: "Agrega -ing al verbo base: eat → eating, play → playing. Con algunos verbos, duplica la última letra: run → running, swim → swimming.",
      },
      {
        title: "Acciones en el Zoológico",
        emoji: "🦁",
        body: "Describe lo que hacen los animales: 'The monkey is eating the sandwich.' 'The penguins are swimming.' 'They're climbing the tree.'",
      },
      {
        title: "Formas Afirmativa y Negativa",
        emoji: "✅❌",
        body: "Afirmativa: 'He is sleeping.' Negativa: 'He isn't sleeping.' Puedes negar la acción sin cambiar el gerundio.",
      },
    ],
    examples: [
      {
        sentence: "The monkey is eating the sandwich.",
        highlight: "eating",
        note: "Eating es el gerundio que describe la acción actual.",
      },
      {
        sentence: "They're climbing the tree.",
        highlight: "climbing",
        note: "Climbing describe lo que hacen ahora.",
      },
      {
        sentence: "The penguins are swimming.",
        highlight: "swimming",
        note: "Swimming es el gerundio con are para plural.",
      },
    ],
    quickChecks: [
      {
        prompt: "¿Cuál es el gerundio de 'run'?",
        choices: ["runing", "running", "runnig"],
        correctAnswer: "running",
        explanation: "Cuando un verbo termina en consonante simple, duplica la última letra: run → running.",
      },
      {
        prompt: "Completa: The lizard is ___ on the rock.",
        choices: ["sit", "sitting", "sits"],
        correctAnswer: "sitting",
        explanation: "Después de 'is' usamos el gerundio (verbo con -ing).",
      },
      {
        prompt: "¿Cuál es la negación? 'He is taking your sandwich.'",
        choices: ["He is not taking", "He isn't taking", "Both are correct"],
        correctAnswer: "Both are correct",
        explanation: "Ambas formas son correctas: 'is not' o 'isn't'.",
      },
    ],
    vocabulary: [
      "eating",
      "sleeping",
      "playing",
      "swimming",
      "running",
      "climbing",
      "flying",
      "hanging",
      "writing",
      "reading",
      "dancing",
    ],
  },
];

export const lessonMap = Object.fromEntries(
  lessons.map((lesson) => [lesson.slug, lesson]),
) as Record<Lesson["slug"], Lesson>;