import type { Metadata } from "next";
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
