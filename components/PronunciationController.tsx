"use client";

import { useEffect } from "react";

function speakText(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) {
    return;
  }

  const trimmed = text.replace(/\s+/g, " ").trim();

  if (!trimmed) {
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(trimmed);
  utterance.lang = "en-US";
  utterance.rate = 0.92;
  utterance.pitch = 1.05;
  window.speechSynthesis.speak(utterance);
}

export function PronunciationController() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const evaluable = target.closest(".evaluable-text");

      if (!evaluable) {
        return;
      }

      speakText(evaluable.textContent ?? "");
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
