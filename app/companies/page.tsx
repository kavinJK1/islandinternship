import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationModalProvider } from "@/components/home/application-modal";
import { Header } from "@/components/home/header";
import { ScrollObserver } from "@/components/home/scroll-observer";
import { Footer, MobileActionBar } from "@/components/home/sections";
import { Icon } from "@/components/home/icons";
import { CompaniesContactForm } from "./CompaniesContactForm";

export const metadata: Metadata = {
  title: "Partner With Us | Island Internship",
  description:
    "Become a host company for Dutch university interns in Bali or Sri Lanka. Free for companies — we handle all admin, matching, and documentation. Register as a founding partner.",
};

const steps = [
  {
    num: "01",
    title: "Register your company",
    body: "Fill in the form below. We review your company and the kind of work you can offer.",
  },
  {
    num: "02",
    title: "We match your opening",
    body: "When we have a student who fits your field, size, and work style, we make the introduction.",
  },
  {
    num: "03",
    title: "You meet the student",
    body: "A short interview call to confirm fit. You decide — no pressure, no obligation.",
  },
  {
    num: "04",
    title: "They start. We stay in touch.",
    body: "Placement begins. We handle documentation and stay available throughout.",
  },
];

const commitments = [
  "A real role with defined responsibilities",
  "A named supervisor available for weekly check-ins",
  "A 3–6 month placement duration",
  "Honest mid-term and end-of-placement feedback",
];

export default function CompaniesPage() {
  return (
    <ApplicationModalProvider>
      <div className="site-shell">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content">

          <Link href="/" className="back-button app-back-button">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 11.5L4.5 7 9 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>

          {/* ── HERO ─────────────────────────────────────────────── */}
          <section className="section" style={{ paddingBottom: "3.5rem" }}>
            <div className="container">
              <span className="eyebrow">For host companies · Bali &amp; Sri Lanka</span>
              <h1
                className="section-title"
                style={{ maxWidth: "820px", marginTop: "0.8rem" }}
              >
                Become a Founding Partner Company
              </h1>
              <p className="section-copy" style={{ maxWidth: "620px" }}>
                We place pre-screened Dutch university students in 3–6 month internships with companies in Bali and Sri Lanka. No placement fee. No paperwork burden. Just good interns.
              </p>
              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="#register" className="button button-primary">
                  Register your company
                </a>
                <a href="#how-it-works" className="button button-secondary">
                  How it works
                </a>
              </div>
            </div>
          </section>

          {/* ── TRUST BAND ───────────────────────────────────────── */}
          <div style={{ background: "var(--bg-sand)", padding: "2.75rem 0" }}>
            <div className="container">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "2.5rem",
                  alignItems: "start",
                }}
              >
                {[
                  {
                    value: "6 Dutch Universities",
                    label: "Students referred directly from Maastricht, UvA, Erasmus, Tilburg, VU & Hogeschool Rotterdam",
                  },
                  {
                    value: "Pre-screened",
                    label: "Every student is interviewed and matched to your field before introduction",
                  },
                  {
                    value: "All admin handled",
                    label: "Contracts, university documents, visa coordination — we manage it",
                  },
                ].map((stat) => (
                  <div key={stat.value} style={{ textAlign: "center" }}>
                    <strong
                      style={{
                        display: "block",
                        fontSize: "1.15rem",
                        color: "var(--forest)",
                        fontWeight: 700,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {stat.value}
                    </strong>
                    <p
                      style={{
                        fontSize: "0.86rem",
                        color: "var(--muted)",
                        margin: 0,
                        lineHeight: 1.65,
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── WHAT YOU GET ─────────────────────────────────────── */}
          <section className="section">
            <div className="container">
              <div className="section-intro">
                <span className="eyebrow">What you get</span>
                <h2 className="section-title">Good interns. Zero admin.</h2>
              </div>
              <div className="feature-grid">
                <article className="premium-card feature-card">
                  <div className="card-icon">
                    <Icon name="users" className="icon" />
                  </div>
                  <h3>Motivated interns</h3>
                  <p>
                    Students choose Bali deliberately. They&apos;re not defaulting to convenience — they&apos;re investing in the experience. That shows up in how they work.
                  </p>
                </article>
                <article className="premium-card feature-card">
                  <div className="card-icon">
                    <Icon name="file" className="icon" />
                  </div>
                  <h3>Zero admin burden</h3>
                  <p>
                    We prepare all internship agreements, university contracts, supervisor documentation, mid-term evaluations, and end-of-placement reports. You sign. We handle the rest.
                  </p>
                </article>
                <article className="premium-card feature-card">
                  <div className="card-icon">
                    <Icon name="phone" className="icon" />
                  </div>
                  <h3>Ongoing support</h3>
                  <p>
                    If something isn&apos;t working — the fit, the project scope, the timeline — we&apos;re the first call, not you. We stay involved throughout the placement.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* ── WHAT WE ASK ──────────────────────────────────────── */}
          <section className="section" style={{ background: "var(--bg-soft)", paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
            <div className="container" style={{ maxWidth: 800 }}>
              <div className="section-intro">
                <span className="eyebrow">Host company commitments</span>
                <h2 className="section-title">What a host company commits to</h2>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: "0 0 2rem",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {commitments.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      padding: "1.125rem 1.5rem",
                      background: "var(--bg)",
                      border: "1px solid var(--line)",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: "1.25rem",
                        height: "1.25rem",
                        borderRadius: "50%",
                        background: "var(--forest)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "0.1rem",
                      }}
                      aria-hidden="true"
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ fontSize: "1rem", color: "var(--text)", lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  borderTop: "1px solid var(--line)",
                  paddingTop: "1.5rem",
                }}
              >
                That&apos;s it. No placement fee. No recruitment cost. No obligation beyond the placement itself.
              </p>
            </div>
          </section>

          {/* ── HOW IT WORKS ─────────────────────────────────────── */}
          <section id="how-it-works" className="section">
            <div className="container">
              <div className="section-intro section-intro-centered" style={{ maxWidth: 680 }}>
                <span className="eyebrow">The process</span>
                <h2 className="section-title">How it works</h2>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1.5rem",
                  marginTop: "2.5rem",
                }}
              >
                {steps.map((step) => (
                  <div
                    key={step.num}
                    className="premium-card"
                    style={{ padding: "1.75rem 1.5rem" }}
                  >
                    <div
                      style={{
                        width: "2.25rem",
                        height: "2.25rem",
                        borderRadius: "50%",
                        background: "var(--forest)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        marginBottom: "1.25rem",
                      }}
                      aria-hidden="true"
                    >
                      {step.num}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.96rem",
                        fontWeight: 600,
                        margin: "0 0 0.6rem",
                        color: "var(--text)",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FOUNDING PARTNER ─────────────────────────────────── */}
          <section
            style={{
              background: "var(--forest)",
              color: "#fff",
              padding: "clamp(3.5rem, 7vw, 6rem) 0",
            }}
          >
            <div className="container" style={{ maxWidth: 820 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "1.5rem",
                }}
              >
                <span style={{ display: "inline-block", width: "30px", height: "1px", background: "currentColor" }} />
                Early access
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: "#fff",
                  margin: "0 0 1.5rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Why join as a founding partner?
              </h2>
              <p
                style={{
                  fontSize: "1.02rem",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.8)",
                  maxWidth: "640px",
                  marginBottom: "2.5rem",
                }}
              >
                Island Internship is building its first cohort of host companies in Bali and Sri Lanka. Founding partners get first access to each new intake of students, direct input on the type of profiles we recruit, and recognition on our website as a partner company. We&apos;re onboarding a small number of companies intentionally — quality over volume.
              </p>
              <a
                href="#register"
                className="button"
                style={{
                  background: "#fff",
                  color: "var(--forest)",
                  borderColor: "transparent",
                  fontWeight: 700,
                }}
              >
                Register as a founding partner
              </a>
            </div>
          </section>

          {/* ── CONTACT FORM ─────────────────────────────────────── */}
          <CompaniesContactForm />

        </main>
        <Footer />
        <MobileActionBar />
        <ScrollObserver />
      </div>
    </ApplicationModalProvider>
  );
}
