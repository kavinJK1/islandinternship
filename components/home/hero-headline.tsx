"use client";

import { DoItTypewriter } from "@/components/home/do-it-typewriter";

const LOCATIONS = ["Bali.", "Sri Lanka.", "somewhere that matters."];

export function HeroHeadline() {
  return (
    <h1 className="hero-headline">
      <span className="hero-line hero-line-1">You need to do your</span>
      <span className="hero-line hero-line-2">internship anyway.</span>
      <DoItTypewriter
        className="hero-line hero-typewriter-line"
        cursorClassName="hero-type-cursor"
        phrases={LOCATIONS}
        textClassName="hero-type-text"
      />
    </h1>
  );
}
