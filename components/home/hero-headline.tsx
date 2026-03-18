"use client";

import { useEffect, useState } from "react";

const LOCATIONS = ["Bali.", "Sri Lanka.", "somewhere that matters."];

export function HeroHeadline() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = LOCATIONS[idx];

    if (!deleting && text.length < phrase.length) {
      const t = setTimeout(() => setText(phrase.slice(0, text.length + 1)), 75);
      return () => clearTimeout(t);
    }

    if (!deleting && text.length === phrase.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }

    if (deleting && text.length > 0) {
      const t = setTimeout(() => setText((s) => s.slice(0, -1)), 40);
      return () => clearTimeout(t);
    }

    if (deleting && text.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % LOCATIONS.length);
    }
  }, [text, deleting, idx]);

  return (
    <h1 className="hero-headline">
      <span className="hero-line hero-line-1">You need to do your</span>
      <span className="hero-line hero-line-2">internship anyway.</span>
      <span className="hero-line hero-typewriter-line">
        Do it in&nbsp;
        <span className="hero-type-text">{text}</span>
        <span className="hero-type-cursor" aria-hidden="true" />
      </span>
    </h1>
  );
}
