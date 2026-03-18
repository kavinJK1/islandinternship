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
          <div className="page-back-bar">
            <div className="container">
              <Link href="/" className="page-back-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to home
              </Link>
            </div>
          </div>
          <FullStoriesSection />
        </main>
        <Footer />
        <MobileActionBar />
        <ScrollObserver />
      </div>
    </ApplicationModalProvider>
  );
}
