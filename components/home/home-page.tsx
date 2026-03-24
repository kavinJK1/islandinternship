import { ApplicationModalProvider } from "@/components/home/application-modal";
import { DestinationExplorer } from "@/components/home/destination-explorer";
import { Header } from "@/components/home/header";
import { ReframeSection } from "@/components/home/reframe-section";
import { ScrollObserver } from "@/components/home/scroll-observer";
import {
  CommunitySection,
  FaqTeaser,
  FinalCtaSection,
  Footer,
  HeroSection,
  MobileActionBar,
  OutcomesTeaser,
  ParentTeaserBand,
  PricingTeaserSection,
  ProcessSection,
  SafeguardsSection,
  TeamSection,
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
          {/* 1. Aspiration */}
          <HeroSection />
          {/* 2. Credibility anchor */}
          <TrustSection />
          {/* 3. Reframe: routine vs the path that changes things */}
          <ReframeSection />
          {/* 4. Dream: what life there actually looks and feels like */}
          <CommunitySection />
          {/* 5. Transformation: what you come back with */}
          <OutcomesTeaser />
          {/* 6. How it works: actionable now that desire is built */}
          <ProcessSection />
          {/* 7. Why Island Internship: the team and local presence */}
          <TeamSection />
          {/* 8. Destinations: Bali or Sri Lanka — make it tangible */}
          <DestinationExplorer />
          {/* 9. Tracks: what work is actually available */}
          <TracksTeaser />
          {/* 10. Social proof: hear from students who did it */}
          <TestimonialsTeaser />
          {/* 11. Practical reassurance: structure, safety, documentation */}
          <SafeguardsSection />
          {/* 12. Pricing: only after value is built */}
          <PricingTeaserSection />
          {/* 13. For parents: reassure, not interrupt */}
          <ParentTeaserBand />
          {/* 14. FAQ */}
          <FaqTeaser />
          {/* 15. Final CTA */}
          <FinalCtaSection />
        </main>
        <Footer />
        <MobileActionBar />
        <ScrollObserver />
      </div>
    </ApplicationModalProvider>
  );
}
