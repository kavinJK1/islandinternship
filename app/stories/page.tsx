import type { Metadata } from "next";
import Link from "next/link";
import { ApplicationModalProvider } from "@/components/home/application-modal";
import { Header } from "@/components/home/header";
import { ScrollObserver } from "@/components/home/scroll-observer";
import { Footer, FullStoriesSection, MobileActionBar } from "@/components/home/sections";

export const metadata: Metadata = {
  title: "Student Stories — Island Internship",
  description:
    "Watch video testimonials and read stories from students who did their required internship in Bali and Sri Lanka through Island Internship.",
};

export default function StoriesPage() {
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
          <FullStoriesSection />
        </main>
        <Footer />
        <MobileActionBar />
        <ScrollObserver />
      </div>
    </ApplicationModalProvider>
  );
}
