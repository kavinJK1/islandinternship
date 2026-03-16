import { ApplicationModalProvider } from "@/components/home/application-modal";
import { DestinationExplorer } from "@/components/home/destination-explorer";
import { Header } from "@/components/home/header";
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
          <CostsSection />
          <IncludedHighlightsSection />
          <ProcessSection />
          <DestinationExplorer />
          <TracksSection />
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
      </div>
    </ApplicationModalProvider>
  );
}
