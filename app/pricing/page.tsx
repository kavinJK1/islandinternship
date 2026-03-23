import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationModalProvider } from "@/components/home/application-modal";
import { Header } from "@/components/home/header";
import { ScrollObserver } from "@/components/home/scroll-observer";
import {
  CostComparisonSection,
  Footer,
  MobileActionBar,
  PlacementReassuranceSection,
  PricingFaqsSection,
  PricingSection,
} from "@/components/home/sections";

export const metadata: Metadata = {
  title: "Bali & Sri Lanka Internship Program Pricing 2026 | Island Internship",
  description:
    "Transparent pricing for your internship in Bali or Sri Lanka. Free to apply. One-time program fee covers placement, visa guidance, housing support, and arrival coordination. Monthly living costs from €440 in Bali.",
};

export default function PricingPage() {
  return (
    <ApplicationModalProvider>
      <div className="site-shell">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          <Link href="/" className="back-button app-back-button">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M9 11.5L4.5 7 9 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>

          <PricingSection />
          <PlacementReassuranceSection />
          <CostComparisonSection />
          <PricingFaqsSection />
          <section style={{ padding: "3rem 1.5rem", maxWidth: "960px", margin: "0 auto" }}>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--forest)", fontWeight: 600, marginBottom: "1rem" }}>Before you decide</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
              {[
                { href: "/blog-bali-internship-cost.html", title: "Full Cost Breakdown", desc: "Program fee, monthly living, and one-off expenses explained" },
                { href: "/bali-housing-guide.html", title: "Bali Housing Guide", desc: "Where interns live and what accommodation costs" },
                { href: "/blog-bali-visa-guide.html", title: "Bali Visa Guide", desc: "Which visa you need and what Island Internship helps with" },
                { href: "/for-parents.html", title: "For Parents", desc: "Safety, support, cost, and university compatibility" },
                { href: "/university-credit.html", title: "University Credit Guide", desc: "How Dutch universities approve this placement" },
                { href: "/career-outcomes.html", title: "Student Outcomes", desc: "What students actually leave with — CV proof and results" },
              ].map((item) => (
                <a key={item.href} href={item.href} style={{ display: "block", padding: "0.875rem 1rem", background: "var(--bg-soft)", border: "1px solid var(--bg-stone)", borderRadius: "var(--radius-sm)", textDecoration: "none", transition: "box-shadow 0.2s" }}>
                  <strong style={{ display: "block", fontSize: "0.88rem", color: "var(--text)", marginBottom: "0.25rem" }}>{item.title}</strong>
                  <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{item.desc}</span>
                </a>
              ))}
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
