import { ApplicationModalProvider } from "@/components/home/application-modal";
import { Header } from "@/components/home/header";
import { ReframeSection } from "@/components/home/reframe-section";
import { ScrollObserver } from "@/components/home/scroll-observer";
import {
  CostTeaser,
  DestinationTeaser,
  FaqTeaser,
  FinalCtaSection,
  Footer,
  HeroSection,
  MobileActionBar,
  OutcomesTeaser,
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
          <DestinationTeaser />
          <ProcessSection />
          <TracksTeaser />
          <TestimonialsTeaser />
          <OutcomesTeaser />
          <CostTeaser />
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
