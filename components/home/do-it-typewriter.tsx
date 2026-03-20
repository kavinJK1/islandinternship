"use client";

import { useEffect, useState } from "react";

type DoItTypewriterProps = {
  className?: string;
  cursorClassName?: string;
  phrases: string[];
  prefix?: string;
  textClassName?: string;
};

export function DoItTypewriter({
  className,
  cursorClassName,
  phrases,
  prefix = "Do it in ",
  textClassName,
}: DoItTypewriterProps) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[idx];

    if (!deleting && text.length < phrase.length) {
      const timer = setTimeout(() => setText(phrase.slice(0, text.length + 1)), 75);
      return () => clearTimeout(timer);
    }

    if (!deleting && text.length === phrase.length) {
      const timer = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(timer);
    }

    if (deleting && text.length > 0) {
      const timer = setTimeout(() => setText((current) => current.slice(0, -1)), 40);
      return () => clearTimeout(timer);
    }

    if (deleting && text.length === 0) {
      setDeleting(false);
      setIdx((current) => (current + 1) % phrases.length);
    }
  }, [deleting, idx, phrases, text]);

  return (
    <span className={className}>
      {prefix}
      <span className={textClassName}>{text}</span>
      <span className={cursorClassName} aria-hidden="true" />
    </span>
  );
}
