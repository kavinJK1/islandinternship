import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ApplicationModalProvider } from "@/components/home/application-modal";
import { Header } from "@/components/home/header";
import { ScrollObserver } from "@/components/home/scroll-observer";
import { Footer, MobileActionBar } from "@/components/home/sections";
import { Icon } from "@/components/home/icons";

export const metadata: Metadata = {
  title: "For Parents | Island Internship",
  description:
    "Everything parents need to know about Island Internship — what it is, who supervises students, housing arrangements, emergency contacts, and university recognition.",
};

const universities = [
  { name: "Maastricht University", logo: "/logos/universities/maastricht-university.svg" },
  { name: "Universiteit van Amsterdam", logo: "/logos/universities/universiteit-van-amsterdam.svg" },
  { name: "Erasmus University Rotterdam", logo: "/logos/universities/erasmus-university-rotterdam.svg" },
  { name: "Tilburg University", logo: "/logos/universities/tilburg-university.svg" },
  { name: "Vrije Universiteit Amsterdam", logo: "/logos/universities/vu-amsterdam.png" },
];

const whatsapp = "https://wa.me/31683660360";

export default function ForParentsPage() {
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
              <span className="eyebrow">For parents &amp; family</span>
              <h1
                className="section-title"
                style={{ maxWidth: "780px", marginTop: "0.8rem" }}
              >
                Everything you need to know before saying yes
              </h1>
              <p className="section-copy" style={{ maxWidth: "600px" }}>
                Your son or daughter has found Island Internship. Here&apos;s what we are, what we do, and what happens if something goes wrong.
              </p>
              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href={`mailto:hello@islandinternship.com`} className="button button-primary">
                  Email us a question
                </a>
                <a href={whatsapp} target="_blank" rel="noreferrer" className="button button-secondary">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* ── WHAT IS ISLAND INTERNSHIP ────────────────────────── */}
          <section className="section" style={{ paddingTop: "3rem", paddingBottom: "3rem", background: "var(--bg-soft)" }}>
            <div className="container" style={{ maxWidth: 860 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "start" }}>
                <div>
                  <span className="eyebrow">What we are</span>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                      fontWeight: 400,
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                      color: "var(--text)",
                      margin: "0.7rem 0 1.25rem",
                    }}
                  >
                    What Island Internship is
                  </h2>
                  <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", margin: "0 0 1rem" }}>
                    Island Internship is a structured internship placement and support program. We match Dutch and European university students with established businesses in Bali (Indonesia) and Sri Lanka for 3–6 month placements that count toward their university credit requirements.
                  </p>
                  <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", margin: 0 }}>
                    We are not a travel company, and this is not a gap year program. Students do credited, supervised work inside vetted companies, with full documentation provided to their university for academic credit approval. We handle placement matching, paperwork, visa guidance, housing coordination, and on-the-ground support throughout the stay.
                  </p>
                </div>
                <div
                  style={{
                    padding: "1.75rem",
                    background: "var(--bg)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-md)",
                    minWidth: "220px",
                    maxWidth: "260px",
                  }}
                  aria-hidden="true"
                >
                  <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--forest)", margin: "0 0 1rem" }}>At a glance</p>
                  {[
                    ["Program type", "Internship placement"],
                    ["Destinations", "Bali, Indonesia & Sri Lanka"],
                    ["Duration", "3–6 months"],
                    ["Credit eligible", "Yes, for most Dutch universities"],
                    ["Internships", "Unpaid — the value is the placement"],
                  ].map(([label, val]) => (
                    <div key={label} style={{ marginBottom: "0.875rem" }}>
                      <span style={{ display: "block", fontSize: "0.76rem", color: "var(--soft-text)", marginBottom: "0.2rem" }}>{label}</span>
                      <span style={{ display: "block", fontSize: "0.88rem", fontWeight: 600, color: "var(--text)" }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── SUPERVISION ──────────────────────────────────────── */}
          <section className="section">
            <div className="container" style={{ maxWidth: 860 }}>
              <span className="eyebrow">Support structure</span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  margin: "0.7rem 0 2rem",
                  maxWidth: "640px",
                }}
              >
                Who supervises them
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                <article className="premium-card feature-card">
                  <div className="card-icon">
                    <Icon name="briefcase" className="icon" />
                  </div>
                  <h3>Named company supervisor</h3>
                  <p>
                    Every student is placed with a named supervisor at their host company — not a generic manager, but a specific person responsible for their week-to-week work. That person&apos;s name and contact details are shared with the student and are part of the official internship agreement.
                  </p>
                </article>
                <article className="premium-card feature-card">
                  <div className="card-icon">
                    <Icon name="phone" className="icon" />
                  </div>
                  <h3>Island Internship support team</h3>
                  <p>
                    Our team is reachable via WhatsApp throughout the entire placement — not just during business hours. If your son or daughter has a concern, a problem at the placement, a question about housing, or needs anything practical, they have a direct line to us. We are not managing this from a European office — our in-destination team is present in Bali and Sri Lanka during the placement season.
                  </p>
                </article>
                <article className="premium-card feature-card">
                  <div className="card-icon">
                    <Icon name="file" className="icon" />
                  </div>
                  <h3>Formal mid-term and final evaluation</h3>
                  <p>
                    The host company supervisor completes a formal mid-term check-in and a final end-of-placement evaluation. Both are submitted to the student&apos;s university as part of the academic credit documentation. This means supervision is not informal — it is built into the structure of the program.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* ── HOUSING ──────────────────────────────────────────── */}
          <section className="section" style={{ background: "var(--bg-soft)", paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
            <div className="container" style={{ maxWidth: 860 }}>
              <span className="eyebrow">Accommodation</span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  margin: "0.7rem 0 1.25rem",
                  maxWidth: "640px",
                }}
              >
                Housing and where they live
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "start" }}>
                <div>
                  <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", margin: "0 0 1rem" }}>
                    Students live in private rooms in shared houses in safe, central areas near other interns and the internship location. The accommodation is arranged and vetted before arrival — students receive the address and local information well in advance of departure.
                  </p>
                  <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", margin: "0 0 1.25rem" }}>
                    In the Full Support program, housing is arranged directly as part of the program. In the Essentials program, students receive guidance on suitable options and can arrange housing themselves. In both cases, the housing meets the same standards — students are not dropped into unfamiliar accommodation without preparation.
                  </p>
                  <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", margin: 0 }}>
                    Monthly rent is paid directly in-destination by the student, not through Island Internship. Typical Bali accommodation costs start from €180 per month for a private room — typically lower than renting in the Netherlands.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { icon: "home" as const, label: "Private room", text: "Not shared sleeping, not a hostel — a private room in shared housing" },
                    { icon: "map-pin" as const, label: "Central, vetted area", text: "Close to other interns, the internship, and local amenities" },
                    { icon: "shield" as const, label: "Address confirmed before departure", text: "Students know where they are going before they fly" },
                    { icon: "users" as const, label: "Community around them", text: "Other students from Dutch universities in the same or nearby housing" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                        padding: "1rem 1.25rem",
                        background: "var(--bg)",
                        border: "1px solid var(--line)",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      <div className="card-icon" style={{ flexShrink: 0, width: "2.2rem", height: "2.2rem" }}>
                        <Icon name={item.icon} className="icon" />
                      </div>
                      <div>
                        <strong style={{ display: "block", fontSize: "0.88rem", color: "var(--text)", marginBottom: "0.2rem" }}>{item.label}</strong>
                        <span style={{ fontSize: "0.84rem", color: "var(--muted)", lineHeight: 1.6 }}>{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── EMERGENCY / WHAT IF ──────────────────────────────── */}
          <section className="section">
            <div className="container" style={{ maxWidth: 860 }}>
              <span className="eyebrow">If something goes wrong</span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  margin: "0.7rem 0 1.25rem",
                  maxWidth: "640px",
                }}
              >
                What to do in an emergency
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", maxWidth: "640px", margin: "0 0 2rem" }}>
                Island Internship provides every student with an emergency contact number before departure. This is a direct line to our in-destination team. Not a voicemail, not a call centre. If something happens, students have a named person to contact immediately.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem" }}>
                <div
                  className="premium-card"
                  style={{ padding: "1.75rem" }}
                >
                  <div className="card-icon">
                    <Icon name="phone" className="icon" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 600, margin: "1rem 0 0.5rem", color: "var(--text)" }}>24/7 WhatsApp contact</h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
                    Students can reach our team any time via WhatsApp for placement concerns, housing issues, health questions, or anything unexpected. We respond, and we follow up.
                  </p>
                </div>
                <div
                  className="premium-card"
                  style={{ padding: "1.75rem" }}
                >
                  <div className="card-icon">
                    <Icon name="map-pin" className="icon" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 600, margin: "1rem 0 0.5rem", color: "var(--text)" }}>Local team on the ground</h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
                    Our in-destination team is physically present in Bali and Sri Lanka during the placement season — not remote-managing from Europe. For serious situations, there is someone to go to directly.
                  </p>
                </div>
                <div
                  className="premium-card"
                  style={{ padding: "1.75rem" }}
                >
                  <div className="card-icon">
                    <Icon name="shield" className="icon" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", fontWeight: 600, margin: "1rem 0 0.5rem", color: "var(--text)" }}>Pre-departure safety briefing</h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
                    Every student receives a pre-departure guide before flying, covering local safety, insurance requirements, scooter safety, banking, SIM card setup, emergency contacts, and what to do in their first week if something feels wrong.
                  </p>
                </div>
              </div>
              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.25rem 1.5rem",
                  background: "var(--bg-sand)",
                  border: "1px solid var(--bg-stone)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  lineHeight: 1.7,
                }}
              >
                <strong style={{ color: "var(--text)" }}>We also recommend students purchase comprehensive travel insurance</strong> before departure — covering medical, repatriation, and personal liability. This is a standard recommendation for any international placement, and we include insurance guidance in the pre-departure brief.
              </div>
            </div>
          </section>

          {/* ── UNIVERSITY RECOGNITION ───────────────────────────── */}
          <section className="section" style={{ background: "var(--bg-soft)", paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
            <div className="container" style={{ maxWidth: 860 }}>
              <span className="eyebrow">Academic recognition</span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  margin: "0.7rem 0 1.25rem",
                  maxWidth: "640px",
                }}
              >
                University documentation and credit
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", maxWidth: "640px", margin: "0 0 2rem" }}>
                Island Internship provides all documentation required by Dutch universities for academic credit approval. This includes the official internship agreement, learning objectives, supervisor details, mid-term evaluation, and final evaluation report. Students from the following universities have completed credit-eligible placements through Island Internship:
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                  alignItems: "center",
                  marginBottom: "1.75rem",
                }}
              >
                {universities.map((uni) => (
                  <div
                    key={uni.name}
                    style={{
                      padding: "0.75rem 1.25rem",
                      background: "var(--bg)",
                      border: "1px solid var(--line)",
                      borderRadius: "var(--radius-sm)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={uni.logo}
                      alt={uni.name}
                      width={0}
                      height={28}
                      style={{ width: "auto", height: "28px", objectFit: "contain" }}
                    />
                  </div>
                ))}
                <div
                  style={{
                    padding: "0.75rem 1.25rem",
                    background: "var(--bg)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--radius-sm)",
                    fontWeight: 600,
                    fontSize: "0.84rem",
                    color: "var(--muted)",
                  }}
                >
                  Hogeschool Rotterdam
                </div>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7, margin: "0 0 0.5rem" }}>
                If your son or daughter studies at a different institution, we work with their study coordinator to provide whatever documentation format their university requires. Final credit decisions always rest with the university, and we recommend confirming approval with the relevant study advisor early in the process.
              </p>
              <Link href="/universities" className="inline-link" style={{ fontSize: "0.9rem" }}>
                Read the university partnership page →
              </Link>
            </div>
          </section>

          {/* ── CTA ──────────────────────────────────────────────── */}
          <section className="section" style={{ paddingTop: "3.5rem", paddingBottom: "4rem" }}>
            <div className="container" style={{ maxWidth: 700, textAlign: "center" }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>Still have questions?</span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  margin: "0.7rem 0 1.25rem",
                }}
              >
                Every question gets a direct answer.
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--muted)", margin: "0 0 2.5rem" }}>
                Email us or send a WhatsApp message — from a parent, from a student, or from both together. No commitment required. We reply within 1–2 business days.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="mailto:hello@islandinternship.com" className="button button-primary">
                  Email us a question
                </a>
                <a href={whatsapp} target="_blank" rel="noreferrer" className="button button-secondary">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </section>

        </main>
        <Footer />
        <MobileActionBar />
        <ScrollObserver />
      </div>
    </ApplicationModalProvider>
  );
}
