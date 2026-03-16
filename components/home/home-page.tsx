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
        <Header />
        <main>
          <HeroSection />
          <TrustSection />
          <ReframeSection />
          <CostsSection />
          <IncludedHighlightsSection />
          <ProcessSection />
          <DestinationExplorer />
          <TracksSection />
          <PhotoStrip />
          <OutcomesSection />
          <TestimonialsSection />
          <CommunitySection />
          <ResourcesSection />
          <CompaniesSection />
          <SafeguardsSection />
          <FaqSection />
          <FinalCtaSection />
        </main>
        <Footer />
        <MobileActionBar />
        <ScrollObserver />
      </div>
    </ApplicationModalProvider>
  );
}
