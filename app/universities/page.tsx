import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ApplicationModalProvider } from "@/components/home/application-modal";
import { Header } from "@/components/home/header";
import { ScrollObserver } from "@/components/home/scroll-observer";
import { Footer, MobileActionBar } from "@/components/home/sections";
import { Icon } from "@/components/home/icons";
import { UniversitiesContactForm } from "./UniversitiesContactForm";

export const metadata: Metadata = {
  title: "University Partners | Island Internship",
  description:
    "University partnership and study advisor information for Island Internship — structured, supervised internship placements in Bali and Sri Lanka. Full documentation provided for academic credit approval.",
};

const universities = [
  { name: "Maastricht University", logo: "/logos/universities/maastricht-university.svg", isImage: true },
  { name: "Universiteit van Amsterdam", logo: "/logos/universities/universiteit-van-amsterdam.svg", isImage: true },
  { name: "Erasmus University Rotterdam", logo: "/logos/universities/erasmus-university-rotterdam.svg", isImage: true },
  { name: "Tilburg University", logo: "/logos/universities/tilburg-university.svg", isImage: true },
  { name: "Vrije Universiteit Amsterdam", logo: "/logos/universities/vu-amsterdam.png", isImage: true },
  { name: "Hogeschool Rotterdam", logo: null, isImage: false },
];

const documentation = [
  "Official internship agreement (trilateral: student, host company, Island Internship)",
  "Named supervisor at host company with contact details",
  "Defined learning objectives aligned to degree requirements",
  "Mid-term evaluation report",
  "End-of-placement evaluation report",
  "Confirmation of hours completed",
  "Island Internship programme overview document for your international office",
];

const howItWorks = [
  {
    num: "01",
    title: "Student applies through Island Internship",
    body: "We screen, match, and place the student with a vetted host company in their field.",
  },
  {
    num: "02",
    title: "We prepare all documentation",
    body: "Before departure, we provide your international office with the full documentation package.",
  },
  {
    num: "03",
    title: "Ongoing reporting",
    body: "Mid-term and end-of-placement evaluations are completed and sent to the relevant coordinator.",
  },
];

const advisorQA = [
  {
    question: "Is Island Internship an accredited institution?",
    answer:
      "Island Internship is an internship placement and programme coordination provider, not an academic institution. We partner with universities on a placement basis and provide all documentation required by your institution's international office for credit approval. Final credit decisions rest with your university.",
  },
  {
    question: "Can students from any university use Island Internship?",
    answer:
      "Yes. While we have existing relationships with several Dutch universities, students from any European university are welcome to apply. We work with your international office to provide whatever documentation format is required.",
  },
  {
    question: "What supervision do students receive?",
    answer:
      "Every student has a named supervisor at their host company and access to Island Internship's support team throughout the placement. We conduct a mid-term check-in and provide a formal end-of-placement evaluation.",
  },
  {
    question: "How do you select host companies?",
    answer:
      "Host companies are vetted before being added to our partner network. We assess the quality of work offered, supervision capacity, and internship structure. Students are not placed with companies that cannot offer substantive, supervised work.",
  },
  {
    question: "How can our university become a formal partner?",
    answer:
      "We're actively building university partnerships. Contact us using the form below and we'll arrange a call with the relevant person at your institution.",
  },
];

export default function UniversitiesPage() {
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
              <span className="eyebrow">University partnerships &amp; study advisor information</span>
              <h1
                className="section-title"
                style={{ maxWidth: "860px", marginTop: "0.8rem" }}
              >
                University Partnership &amp; Study Advisor Information
              </h1>
              <p className="section-copy" style={{ maxWidth: "640px" }}>
                Island Internship provides structured, supervised internship placements in Bali and Sri Lanka for European university students. We provide all documentation required for academic credit approval.
              </p>
              <div style={{ marginTop: "2rem" }}>
                <a href="#contact" className="button button-primary">
                  Contact us directly
                </a>
              </div>
            </div>
          </section>

          {/* ── UNIVERSITY PARTNERS ──────────────────────────────── */}
          <section className="section" style={{ paddingTop: "3rem", paddingBottom: "3rem", background: "var(--bg-soft)" }}>
            <div className="container">
              <div className="section-intro section-intro-centered">
                <span className="eyebrow">Current partners</span>
                <h2 className="section-title">Recognised by leading Dutch universities</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "2.5rem 0",
                }}
              >
                {universities.map((uni) =>
                  uni.isImage && uni.logo ? (
                    <div
                      key={uni.name}
                      style={{
                        padding: "0.875rem 1.5rem",
                        background: "var(--bg)",
                        border: "1px solid var(--line)",
                        borderRadius: "var(--radius-sm)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "140px",
                      }}
                    >
                      <Image
                        src={uni.logo}
                        alt={uni.name}
                        width={0}
                        height={32}
                        style={{ width: "auto", height: "32px", objectFit: "contain" }}
                      />
                    </div>
                  ) : (
                    <div
                      key={uni.name}
                      style={{
                        padding: "0.875rem 1.5rem",
                        background: "var(--bg)",
                        border: "1px solid var(--line)",
                        borderRadius: "var(--radius-sm)",
                        fontWeight: 600,
                        fontSize: "0.88rem",
                        color: "var(--muted)",
                        minWidth: "140px",
                        textAlign: "center",
                      }}
                    >
                      {uni.name}
                    </div>
                  )
                )}
              </div>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  margin: 0,
                }}
              >
                Students from these institutions have completed credit-eligible placements through Island Internship.
              </p>
            </div>
          </section>

          {/* ── DOCUMENTATION ────────────────────────────────────── */}
          <section className="section">
            <div className="container" style={{ maxWidth: 860 }}>
              <div className="section-intro">
                <span className="eyebrow">Documentation provided</span>
                <h2 className="section-title">What we provide for every placement</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginTop: "2rem",
                }}
              >
                {documentation.map((item, i) => (
                  <div
                    key={i}
                    className="premium-card"
                    style={{
                      padding: "1.125rem 1.5rem",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: "1.5rem",
                        height: "1.5rem",
                        borderRadius: "50%",
                        background: "rgba(41, 90, 77, 0.1)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "0.05rem",
                      }}
                      aria-hidden="true"
                    >
                      <Icon name="check" className="icon" />
                    </span>
                    <span style={{ fontSize: "0.96rem", color: "var(--text)", lineHeight: 1.65 }}>{item}</span>
                  </div>
                ))}
              </div>
              <p
                style={{
                  marginTop: "1.75rem",
                  fontSize: "0.88rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                  padding: "1.25rem 1.5rem",
                  background: "var(--bg-sand)",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--bg-stone)",
                }}
              >
                All documents are provided in English. Dutch translations available on request.
              </p>
            </div>
          </section>

          {/* ── HOW IT WORKS FOR UNIVERSITIES ────────────────────── */}
          <section className="section" style={{ background: "var(--bg-soft)", paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
            <div className="container">
              <div className="section-intro section-intro-centered" style={{ maxWidth: 680 }}>
                <span className="eyebrow">The process</span>
                <h2 className="section-title">How it works for universities</h2>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.5rem",
                  marginTop: "2.5rem",
                  maxWidth: "900px",
                  margin: "2.5rem auto 0",
                }}
              >
                {howItWorks.map((step) => (
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

          {/* ── STUDY ADVISOR Q&A ─────────────────────────────────── */}
          <section className="section">
            <div className="container" style={{ maxWidth: 860 }}>
              <div className="section-intro">
                <span className="eyebrow">For study advisors</span>
                <h2 className="section-title">Common questions from study advisors</h2>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "2rem" }}
              >
                {advisorQA.map((item, i) => (
                  <details
                    key={i}
                    className="premium-card"
                    style={{ padding: "1.5rem", cursor: "pointer" }}
                    open={i === 0}
                  >
                    <summary
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        listStyle: "none",
                        fontWeight: 600,
                        fontSize: "0.96rem",
                        color: "var(--text)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span>{item.question}</span>
                      <Icon name="arrow-right" className="icon" />
                    </summary>
                    <p
                      style={{
                        marginTop: "1rem",
                        fontSize: "0.94rem",
                        color: "var(--muted)",
                        lineHeight: 1.75,
                        paddingTop: "1rem",
                        borderTop: "1px solid var(--line)",
                        marginBottom: 0,
                      }}
                    >
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* ── CONTACT FORM ─────────────────────────────────────── */}
          <UniversitiesContactForm />

        </main>
        <Footer />
        <MobileActionBar />
        <ScrollObserver />
      </div>
    </ApplicationModalProvider>
  );
}
