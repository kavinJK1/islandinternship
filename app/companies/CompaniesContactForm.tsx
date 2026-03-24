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
  appearance: "none",
  WebkitAppearance: "none",
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

export function CompaniesContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to a form backend (Formspree, API route, or Netlify Forms)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section id="register" className="section" style={{ background: "var(--bg-soft)" }}>
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
              We&apos;ve received your registration. Expect a reply from us directly to review your company and discuss the kind of student profile that would fit your team.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="section" style={{ background: "var(--bg-soft)" }}>
      <div className="container" style={{ maxWidth: 780 }}>
        <div className="section-intro">
          <span className="eyebrow">Get started</span>
          <h2 className="section-title">Register your company</h2>
          <p className="section-copy">Tell us about your business and what kind of intern would fit. We review every registration and follow up directly.</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            <div style={groupStyle}>
              <label htmlFor="company-name" style={labelStyle}>Company name *</label>
              <input id="company-name" name="company_name" type="text" required placeholder="Your company" style={fieldStyle} />
            </div>
            <div style={groupStyle}>
              <label htmlFor="contact-name" style={labelStyle}>Your name *</label>
              <input id="contact-name" name="contact_name" type="text" required placeholder="First and last name" style={fieldStyle} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            <div style={groupStyle}>
              <label htmlFor="role" style={labelStyle}>Role / title *</label>
              <input id="role" name="role" type="text" required placeholder="e.g. Founder, HR Manager" style={fieldStyle} />
            </div>
            <div style={groupStyle}>
              <label htmlFor="email" style={labelStyle}>Email address *</label>
              <input id="email" name="email" type="email" required placeholder="you@company.com" style={fieldStyle} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            <div style={groupStyle}>
              <label htmlFor="location" style={labelStyle}>Location *</label>
              <select id="location" name="location" required style={fieldStyle}>
                <option value="">Select a location</option>
                <option>Canggu</option>
                <option>Seminyak</option>
                <option>Ubud</option>
                <option>Colombo</option>
                <option>Other</option>
              </select>
            </div>
            <div style={groupStyle}>
              <label htmlFor="intern-type" style={labelStyle}>What kind of intern are you looking for? *</label>
              <select id="intern-type" name="intern_type" required style={fieldStyle}>
                <option value="">Select a field</option>
                <option>Marketing</option>
                <option>Business Development</option>
                <option>Tech &amp; AI</option>
                <option>Design</option>
                <option>Operations</option>
                <option>Hospitality</option>
                <option>Not sure yet</option>
              </select>
            </div>
          </div>

          <div style={groupStyle}>
            <label htmlFor="notes" style={labelStyle}>Anything else we should know? <span style={{ fontWeight: 400, color: "var(--soft-text)" }}>(optional)</span></label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Tell us about your team, the kind of projects you have, or any questions you have about the program."
              style={{ ...fieldStyle, resize: "vertical", minHeight: "120px" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap", paddingTop: "0.5rem" }}>
            <button type="submit" className="button button-primary">
              Send your registration
            </button>
            <a
              href="https://wa.me/31683660360"
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--forest)", fontWeight: 600, fontSize: "0.9rem" }}
            >
              Or reach us directly on WhatsApp →
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
