import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationModalProvider } from "@/components/home/application-modal";
import { Header } from "@/components/home/header";
import { ScrollObserver } from "@/components/home/scroll-observer";
import {
  CostComparisonSection,
  Footer,
  MobileActionBar,
  PricingFaqsSection,
  PricingSection,
} from "@/components/home/sections";

export const metadata: Metadata = {
  title: "Pricing — Island Internship",
  description:
    "Simple, transparent pricing for your internship abroad. Free to apply — no commitment until you're matched.",
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
          <div className="pricing-page-bar">
            <div className="container">
              <Link href="/" className="pricing-back-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to home
              </Link>
            </div>
          </div>
          <PricingSection />
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
