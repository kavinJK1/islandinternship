"use client";

import { useEffect, useRef } from "react";

const beats = [
  {
    line: "Every degree program has an internship semester.",
    em: null,
    sub: null,
  },
  {
    line: "Most students stay in the Netherlands.",
    em: null,
    sub: "Same city. Same rent. Same CV as everyone else.",
  },
  {
    line: "Some students chose differently.",
    em: null,
    sub: "They went to Bali — and paid less to do it.",
  },
  {
    line: null,
    em: "The semester is required.",
    sub: "The location is not.",
  },
];

export function ReframeSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>(".reframe-beat");
    if (!els?.length || !window.IntersectionObserver) {
      els?.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="reframe-section">
      <div className="container reframe-inner">
        {beats.map((beat, i) => (
          <div
            key={i}
            className="reframe-beat"
            style={{ transitionDelay: `${i * 0.06}s` }}
          >
            <p className="reframe-line">
              {beat.em ? <em>{beat.em}</em> : beat.line}
            </p>
            {beat.sub && <p className="reframe-sub">{beat.sub}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
