import type { Lesson } from "@/types";

export const lessonOrder: Lesson["slug"][] = [
  "ow-ou-blends",
  "ld-lt-endings",
  "nd-nt-mp-endings",
];

export const lessons: Lesson[] = [
  {
    slug: "ow-ou-blends",
    title: "OW y OU Spellings",
    emoji: "🌼",
    color: "from-cyan-200 via-sky-100 to-white",
    goal: "Identificar, clasificar y completar palabras con los sonidos ow y ou.",
    simpleExplanation:
      "En phonics, las letras ow y ou pueden formar sonidos parecidos. Debes reconocer en qué palabras aparece cada patrón para leer y escribir correctamente.",
    evaluablePhrases: [
      "cow",
      "clown",
      "flower",
      "house",
      "round",
      "mouse",
      "brown",
      "out",
      "down",
      "shout",
      "cloud",
      "ow",
      "ou",
    ],
    audioText:
      "Palabras clave del tema: cow, clown, flower con ow; house, round, mouse con ou. Tambien practica brown, out, down, shout y cloud.",
    sections: [
      {
        title: "Patron OW",
        emoji: "🟦",
        body: "Ejemplos de ow: cow, clown, flower, brown, down. Observa en qué parte de la palabra aparece el patron.",
      },
      {
        title: "Patron OU",
        emoji: "🟩",
        body: "Ejemplos de ou: house, round, mouse, out, shout, cloud. Clasifica las palabras por patron para evitar errores.",
      },
      {
        title: "Practica en contexto",
        emoji: "📖",
        body: "Lee frases cortas y detecta qué palabras usan ow y cuáles usan ou.",
      },
    ],
    examples: [
      {
        sentence: "The clown has flowers, red and blue.",
        highlight: "clown, flowers",
        note: "Ambas palabras llevan el patron ow.",
      },
      {
        sentence: "He has a round nose, but only one shoe.",
        highlight: "round",
        note: "Round usa el patron ou.",
      },
      {
        sentence: "I can see a cloud above the house.",
        highlight: "cloud, house",
        note: "Cloud y house pertenecen al grupo ou.",
      },
    ],
    quickChecks: [
      {
        prompt: "¿Qué palabra pertenece al grupo ow?",
        choices: ["mouse", "flower", "house"],
        correctAnswer: "flower",
        explanation: "Flower contiene ow.",
      },
      {
        prompt: "¿Qué palabra pertenece al grupo ou?",
        choices: ["brown", "clown", "round"],
        correctAnswer: "round",
        explanation: "Round contiene ou.",
      },
      {
        prompt: "Completa: The ___ is in the house.",
        choices: ["mouse", "flower", "cow"],
        correctAnswer: "mouse",
        explanation: "Mouse combina semantica y patron ou.",
      },
    ],
    vocabulary: ["cow", "clown", "flower", "house", "round", "mouse", "brown", "out", "down", "shout", "cloud"],
  },
  {
    slug: "ld-lt-endings",
    title: "LD y LT Endings",
    emoji: "🛡️",
    color: "from-violet-200 via-indigo-100 to-white",
    goal: "Identificar y completar palabras con terminaciones ld y lt.",
    simpleExplanation:
      "Las terminaciones ld y lt cambian la palabra final. Debes escoger la terminacion correcta segun la imagen o la oracion.",
    evaluablePhrases: [
      "child",
      "shield",
      "field",
      "belt",
      "quilt",
      "adult",
      "ld",
      "lt",
    ],
    audioText:
      "Palabras clave del tema: child, shield, field con ld; belt, quilt, adult con lt.",
    sections: [
      {
        title: "Grupo LD",
        emoji: "🧒",
        body: "Practica child, shield y field. Todas cierran con ld.",
      },
      {
        title: "Grupo LT",
        emoji: "🧵",
        body: "Practica belt, quilt y adult. Todas cierran con lt.",
      },
      {
        title: "Relacion imagen-palabra",
        emoji: "🧩",
        body: "Mira la imagen y elige el final correcto: ld o lt para formar una palabra completa.",
      },
    ],
    examples: [
      {
        sentence: "A child and an adult are standing in a field.",
        highlight: "child, adult, field",
        note: "En una misma frase aparecen terminaciones ld y lt.",
      },
      {
        sentence: "The adult has a quilt. The child has a shield.",
        highlight: "quilt, shield",
        note: "Quilt termina en lt y shield en ld.",
      },
      {
        sentence: "The quilt is red, the shield is gray.",
        highlight: "quilt, shield",
        note: "Reconocer terminaciones ayuda a escribir la palabra correcta.",
      },
    ],
    quickChecks: [
      {
        prompt: "¿Cuál palabra termina en ld?",
        choices: ["belt", "child", "quilt"],
        correctAnswer: "child",
        explanation: "Child pertenece al patron ld.",
      },
      {
        prompt: "Completa: be___",
        choices: ["lt", "ld", "nd"],
        correctAnswer: "lt",
        explanation: "be + lt = belt.",
      },
      {
        prompt: "Completa: shie___",
        choices: ["ld", "lt", "mp"],
        correctAnswer: "ld",
        explanation: "shie + ld = shield.",
      },
    ],
    vocabulary: ["child", "shield", "field", "belt", "quilt", "adult"],
  },
  {
    slug: "nd-nt-mp-endings",
    title: "ND, NT y MP Endings",
    emoji: "🔤",
    color: "from-emerald-200 via-lime-100 to-white",
    goal: "Completar palabras usando las terminaciones nd, nt y mp.",
    simpleExplanation:
      "En este tema completas palabras observando la pista visual y el final correcto: nd, nt o mp.",
    evaluablePhrases: [
      "nd",
      "nt",
      "mp",
      "hand",
      "tent",
      "camp",
      "plant",
      "plants",
      "pond",
      "lamp",
      "wind",
      "aunt",
    ],
    audioText:
      "Practica las terminaciones nd, nt y mp con palabras como hand, pond, plant, tent, lamp y camp. En el chant tambien aparecen wind y aunt.",
    sections: [
      {
        title: "Final ND",
        emoji: "🧠",
        body: "Ejemplos: hand, pond y wind.",
      },
      {
        title: "Final NT",
        emoji: "🌱",
        body: "Ejemplos: plant, plants, tent y aunt.",
      },
      {
        title: "Final MP",
        emoji: "💡",
        body: "Ejemplos: lamp y camp.",
      },
    ],
    examples: [
      {
        sentence: "There are lots of fish in the pond.",
        highlight: "pond",
        note: "Pond termina en nd.",
      },
      {
        sentence: "In my yard, there are flowers, trees and plants.",
        highlight: "plants",
        note: "Plants viene de plant y mantiene nt.",
      },
      {
        sentence: "We put up the tent at the big camp.",
        highlight: "tent, camp",
        note: "Tent termina en nt y camp en mp.",
      },
    ],
    quickChecks: [
      {
        prompt: "Completa: po___",
        choices: ["nd", "nt", "mp"],
        correctAnswer: "nd",
        explanation: "po + nd = pond.",
      },
      {
        prompt: "Completa: pla___",
        choices: ["nd", "nt", "mp"],
        correctAnswer: "nt",
        explanation: "pla + nt = plant.",
      },
      {
        prompt: "Completa: la___",
        choices: ["mp", "nt", "ld"],
        correctAnswer: "mp",
        explanation: "la + mp = lamp.",
      },
      {
        prompt: "¿Qué palabra termina en nd?",
        choices: ["camp", "hand", "tent"],
        correctAnswer: "hand",
        explanation: "hand termina en nd.",
      },
    ],
    vocabulary: ["hand", "pond", "plant", "plants", "tent", "lamp", "camp", "wind", "aunt"],
  },
];

export const lessonMap = Object.fromEntries(
  lessons.map((lesson) => [lesson.slug, lesson]),
) as Record<Lesson["slug"], Lesson>;
