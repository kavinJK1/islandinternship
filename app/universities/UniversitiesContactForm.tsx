"use client";

import { useState } from "react";

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.875rem 1rem",
  background: "var(--bg-soft)",
  border: "1px solid var(--bg-stone)",
  borderRadius: "var(--radius-sm)",
  color: "var(--text)",
  fontSize: "0.92rem",
  fontFamily: "inherit",
  lineHeight: 1.5,
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.82rem",
  fontWeight: 600,
  color: "var(--muted)",
  marginBottom: "0.4rem",
  letterSpacing: "0.02em",
};

const groupStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0",
};

export function UniversitiesContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to a form backend (Formspree, API route, or Netlify Forms)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="contact" className="section" style={{ background: "var(--bg-soft)" }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <div
            className="premium-card"
            style={{ padding: "3rem 2.5rem", textAlign: "center" }}
          >
            <div
              style={{
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                background: "rgba(41, 90, 77, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
              }}
              aria-hidden="true"
            >
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path d="M2 8L7.5 13.5L18 2" stroke="var(--forest)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 400,
                color: "var(--text)",
                margin: "0 0 1rem",
              }}
            >
              Thanks — we&apos;ll be in touch within 24 hours.
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "0.96rem", lineHeight: 1.7, margin: 0 }}>
              We respond to all university and study advisor enquiries within 1 business day. Expect a direct reply from us to discuss documentation, partnerships, or any specific requirements your institution has.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container" style={{ maxWidth: 780 }}>
        <div className="section-intro">
          <span className="eyebrow">University &amp; study advisor enquiries</span>
          <h2 className="section-title">Get in touch</h2>
          <p className="section-copy">
            For university partnerships, documentation requests, or study advisor enquiries — contact us directly.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            <div style={groupStyle}>
              <label htmlFor="uni-name" style={labelStyle}>Your name *</label>
              <input id="uni-name" name="name" type="text" required placeholder="First and last name" style={fieldStyle} />
            </div>
            <div style={groupStyle}>
              <label htmlFor="institution" style={labelStyle}>University / institution *</label>
              <input id="institution" name="institution" type="text" required placeholder="e.g. Maastricht University" style={fieldStyle} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            <div style={groupStyle}>
              <label htmlFor="uni-role" style={labelStyle}>Role *</label>
              <input
                id="uni-role"
                name="role"
                type="text"
                required
                placeholder="e.g. Study Advisor, International Office"
                style={fieldStyle}
              />
            </div>
            <div style={groupStyle}>
              <label htmlFor="uni-email" style={labelStyle}>Email address *</label>
              <input id="uni-email" name="email" type="email" required placeholder="you@university.nl" style={fieldStyle} />
            </div>
          </div>

          <div style={groupStyle}>
            <label htmlFor="question" style={labelStyle}>Your question or request *</label>
            <textarea
              id="question"
              name="question"
              rows={5}
              required
              placeholder="What would you like to know, or what documentation does your institution need? We're happy to answer directly."
              style={{ ...fieldStyle, resize: "vertical", minHeight: "140px" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap", paddingTop: "0.5rem" }}>
            <button type="submit" className="button button-primary">
              Send your enquiry
            </button>
          </div>

          <p style={{ fontSize: "0.82rem", color: "var(--muted)", margin: "0.5rem 0 0" }}>
            We respond to all university enquiries within 1 business day.
          </p>
        </form>
      </div>
    </section>
  );
}
