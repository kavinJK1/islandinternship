"use client";

import { useEffect, useState } from "react";

const LINES = [
  "You need to do your",
  "internship anyway.",
  "Do it somewhere that",
  "changes your trajectory.",
];

export function HeroHeadline() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [lines, setLines] = useState(["", "", "", ""]);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (lineIdx >= LINES.length) {
      const t = setTimeout(() => setCursorVisible(false), 900);
      return () => clearTimeout(t);
    }

    const current = LINES[lineIdx];

    if (charIdx < current.length) {
      const t = setTimeout(() => {
        setLines((prev) => {
          const next = [...prev];
          next[lineIdx] = current.slice(0, charIdx + 1);
          return next;
        });
        setCharIdx((c) => c + 1);
      }, 30);
      return () => clearTimeout(t);
    }

    // Line finished — pause then move to next
    const t = setTimeout(() => {
      setLineIdx((l) => l + 1);
      setCharIdx(0);
    }, 180);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx]);

  const activeLine = Math.min(lineIdx, LINES.length - 1);

  return (
    <h1 className="hero-headline">
      {LINES.map((_, i) => (
        <span key={i} className="hero-line hero-typewriter-line">
          {lines[i]}
          {cursorVisible && i === activeLine && (
            <span className="hero-type-cursor" aria-hidden="true" />
          )}
          {/* keep line height while empty */}
          {lines[i] === "" && <span aria-hidden="true">&thinsp;</span>}
        </span>
      ))}
    </h1>
  );
}
