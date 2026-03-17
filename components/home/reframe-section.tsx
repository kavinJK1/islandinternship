"use client";

import { useEffect, useRef } from "react";

const beats = [
  {
    line: "Every Dutch degree has a required internship semester.",
    em: null,
    sub: null,
  },
  {
    line: "Most students do it close to home.",
    em: null,
    sub: "Same city. Same rent. Same CV as everyone else from their cohort.",
  },
  {
    line: "Some go to Bali — and come back different.",
    em: null,
    sub: "Real startup exposure. International network. Lower monthly costs than Amsterdam.",
  },
  {
    line: null,
    em: "The semester is required.",
    sub: "What you do with it is not.",
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
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
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
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <span className="reframe-num">0{i + 1}</span>
            <div className="reframe-content">
              <p className="reframe-line">
                {beat.em ? <em>{beat.em}</em> : beat.line}
              </p>
              {beat.sub && <p className="reframe-sub">{beat.sub}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
