"use client";

import { useEffect, useState } from "react";

export function HeroPhrases({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, [phrases.length]);

  return <p className="hero-rotating-line">{phrases[index]}</p>;
}
