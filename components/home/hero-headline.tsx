"use client";

import { hero } from "@/data/homepage";
import { DoItTypewriter } from "@/components/home/do-it-typewriter";

export function HeroHeadline() {
  return (
    <h1 className="hero-headline">
      <span className="hero-line hero-line-1">You need to do your</span>
      <span className="hero-line hero-line-2">internship anyway.</span>
      <DoItTypewriter
        className="hero-line hero-line-3 hero-line-bali"
        phrases={hero.rotatingPhrases}
        prefix=""
        textClassName="hero-type-text"
        cursorClassName="hero-type-cursor"
      />
    </h1>
  );
}
