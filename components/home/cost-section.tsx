"use client";

import { useEffect, useRef, useState } from "react";
import { costComparison, costTeaser } from "@/data/homepage";
import { Icon } from "@/components/home/icons";

const QUOTE =
  "What many students spend on rent alone in the Netherlands can be more than their total monthly living costs in Bali or Sri Lanka.";

function TypewriterQuote() {
  const [text, setText] = useState("");
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let i = 0;
    // Small delay so the expand animation finishes first
    const delay = setTimeout(() => {
      const tick = setInterval(() => {
        i++;
        setText(QUOTE.slice(0, i));
        if (i >= QUOTE.length) clearInterval(tick);
      }, 22);
      return () => clearInterval(tick);
    }, 200);
    return () => clearTimeout(delay);
  }, []);

  return (
    <p ref={ref} className="cost-breakdown-quote">
      {text}
      {text.length < QUOTE.length && <span className="cost-cursor">|</span>}
    </p>
  );
}

export function CostSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="cost-teaser-section">
      <div className="container">
        <div className="cost-teaser-layout">
          {/* Left */}
          <div className="cost-teaser-intro">
            <span className="eyebrow">{costTeaser.eyebrow}</span>
            <h2 className="cost-teaser-title">{costTeaser.title}</h2>
            <p className="cost-teaser-note">{costTeaser.note}</p>
            <button
              type="button"
              className="inline-link cost-expand-btn"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? "Hide breakdown" : costTeaser.cta}
              <Icon
                name="arrow-right"
                className={`icon cost-expand-icon ${expanded ? "is-rotated" : ""}`}
              />
            </button>
          </div>

          {/* Right pills */}
          <div className="cost-teaser-compare">
            <div className="cost-teaser-pill cost-teaser-pill--bali">
              <span>{costTeaser.bali.label}</span>
              <strong>{costTeaser.bali.value}</strong>
            </div>
            <div className="cost-teaser-pill cost-teaser-pill--nl">
              <span>{costTeaser.nl.label}</span>
              <strong>{costTeaser.nl.value}</strong>
            </div>
          </div>
        </div>

        {/* Expandable table */}
        {expanded && (
          <div className="cost-breakdown-expand">
            <TypewriterQuote key={String(expanded)} />
            <div className="cost-comparison-table-wrap">
              <table className="cost-comparison-table">
                <thead>
                  <tr>
                    <th className="col-item">Monthly expense</th>
                    <th className="col-bali">Bali</th>
                    <th className="col-nl">Netherlands</th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.rows.map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "row-even" : "row-odd"}>
                      <td className="col-item">{row.item}</td>
                      <td className="col-bali">{row.bali}</td>
                      <td className="col-nl">{row.nl}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="total-row">
                    <td className="col-item">{costComparison.total.item}</td>
                    <td className="col-bali">{costComparison.total.bali}</td>
                    <td className="col-nl">{costComparison.total.nl}</td>
                  </tr>
                </tfoot>
              </table>
              <p className="cost-comparison-callout">{costComparison.callout}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
