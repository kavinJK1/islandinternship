"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  {
    index: "01",
    text: "Every Dutch degree has a required internship semester.",
    sub: null,
    tone: "neutral",
  },
  {
    index: "02",
    text: "Most students do it close to home.",
    sub: "Same city. Same rent. Same CV as everyone else from their cohort.",
    tone: "muted",
  },
  {
    index: "03",
    text: "Some go to Bali or Sri Lanka — and come back different.",
    sub: "Real startup exposure. International network. Lower monthly costs than Amsterdam.",
    tone: "vivid",
  },
  {
    index: "04",
    text: "The semester is required.",
    sub: "What you do with it is not.",
    tone: "bold",
  },
];

export function ReframeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = -rect.top;
      const sectionHeight = rect.height - window.innerHeight;
      if (sectionHeight <= 0) return;
      const progress = Math.max(0, Math.min(1, sectionTop / sectionHeight));
      const idx = Math.min(slides.length - 1, Math.floor(progress * slides.length));
      setActiveIdx(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="story-scroll-section">
      <div className="story-scroll-sticky">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`story-slide story-slide-${slide.tone} ${i === activeIdx ? "is-active" : ""}`}
          >
            <div className="story-slide-inner">
              <span className="story-index">{slide.index}</span>
              <p className="story-text">{slide.text}</p>
              {slide.sub && <p className="story-sub">{slide.sub}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
