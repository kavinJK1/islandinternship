import { ApplicationModalProvider } from "@/components/home/application-modal";
import { DestinationExplorer } from "@/components/home/destination-explorer";
import { Header } from "@/components/home/header";
import { PhotoStrip } from "@/components/home/photo-strip";
import { ReframeSection } from "@/components/home/reframe-section";
import { ScrollObserver } from "@/components/home/scroll-observer";
import {
  CommunitySection,
  CompaniesSection,
  CostsSection,
  FaqSection,
  FinalCtaSection,
  Footer,
  HeroSection,
  IncludedHighlightsSection,
  MidPageCta,
  MobileActionBar,
  OutcomesSection,
  ProcessSection,
  ResourcesSection,
  SafeguardsSection,
  TestimonialsSection,
  TracksSection,
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
          <IncludedHighlightsSection />
          <ProcessSection />
          <DestinationExplorer />
          <TracksSection />
          <MidPageCta />
          <PhotoStrip />
          <OutcomesSection />
          <CommunitySection />
          <TestimonialsSection />
          <CostsSection />
          <SafeguardsSection />
          <ResourcesSection />
          <FaqSection />
          <FinalCtaSection />
          <CompaniesSection />
        </main>
        <Footer />
        <MobileActionBar />
        <ScrollObserver />
      </div>
    </ApplicationModalProvider>
  );
}
