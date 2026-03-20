import { ApplicationModalProvider } from "@/components/home/application-modal";
import { CostSection } from "@/components/home/cost-section";
import { DestinationExplorer } from "@/components/home/destination-explorer";
import { Header } from "@/components/home/header";
import { ReframeSection } from "@/components/home/reframe-section";
import { ScrollObserver } from "@/components/home/scroll-observer";
import {
  BlogTeaserSection,
  FaqTeaser,
  FinalCtaSection,
  Footer,
  HeroSection,
  MobileActionBar,
  OutcomesTeaser,
  PricingTeaserSection,
  ProcessSection,
  TestimonialsTeaser,
  TracksTeaser,
  TrustSection,
} from "@/components/home/sections";

export function HomePage() {
  return (
    <ApplicationModalProvider>
      <div className="site-shell">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content">
          <HeroSection />
          <TrustSection />
          <ReframeSection />
          <DestinationExplorer />
          <ProcessSection />
          <TracksTeaser />
          <TestimonialsTeaser />
          <OutcomesTeaser />
          <CostSection />
          <PricingTeaserSection />
          <BlogTeaserSection />
          <FaqTeaser />
          <FinalCtaSection />
        </main>
        <Footer />
        <MobileActionBar />
        <ScrollObserver />
      </div>
    </ApplicationModalProvider>
  );
}
