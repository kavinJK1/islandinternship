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
        </main>
        <Footer />
        <MobileActionBar />
        <ScrollObserver />
      </div>
    </ApplicationModalProvider>
  );
}
