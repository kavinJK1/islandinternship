"use client";

import { useEffect, useRef, useState } from "react";

const TYPING_MS = 52;
const DELETING_MS = 28;
const PAUSE_AFTER_TYPE = 1900;
const PAUSE_AFTER_DELETE = 320;

export function HeroPhrases({ phrases }: { phrases: string[] }) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const target = phrases[phraseIdx];

    const tick = () => {
      if (isTyping) {
        if (displayed.length < target.length) {
          setDisplayed(target.slice(0, displayed.length + 1));
          timeout.current = setTimeout(tick, TYPING_MS);
        } else {
          timeout.current = setTimeout(() => setIsTyping(false), PAUSE_AFTER_TYPE);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed((d) => d.slice(0, -1));
          timeout.current = setTimeout(tick, DELETING_MS);
        } else {
          timeout.current = setTimeout(() => {
            setPhraseIdx((i) => (i + 1) % phrases.length);
            setIsTyping(true);
          }, PAUSE_AFTER_DELETE);
        }
      }
    };

    timeout.current = setTimeout(tick, isTyping ? TYPING_MS : DELETING_MS);
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayed, isTyping, phraseIdx]);

  return (
    <p className="hero-rotating-line" aria-live="polite">
      {displayed}
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </p>
  );
}
