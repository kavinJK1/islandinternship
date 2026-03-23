import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-nav",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.islandinternship.com";
const title = "Internship in Bali or Sri Lanka for University Students | Island Internship";
const description =
  "Structured 3–6 month internships in Bali and Sri Lanka for European university students. Placement matching, university credit support, shared housing, and a student community. Free to apply.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Island Internship",
    images: [
      {
        url: "https://www.islandinternship.com/images/community-group-2.jpg",
        width: 1200,
        height: 630,
        alt: "Students doing their university internship in Bali through Island Internship",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://www.islandinternship.com/images/community-group-2.jpg"],
  },
  alternates: {
    canonical: "https://www.islandinternship.com/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "EducationalOrganization"],
  name: "Island Internship",
  url: "https://www.islandinternship.com",
  foundingDate: "2024",
  logo: {
    "@type": "ImageObject",
    url: "https://www.islandinternship.com/images/logo.png",
    width: 200,
    height: 60,
  },
  description:
    "Island Internship organises structured 3–6 month credit-eligible internships in Bali and Sri Lanka for European university students. Services include placement matching, visa guidance, shared housing coordination, airport pickup, orientation week, and on-the-ground support throughout the placement.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@islandinternship.com",
    telephone: "+31683660360",
    contactType: "customer support",
    availableLanguage: ["English", "Dutch"],
  },
  areaServed: ["NL", "BE", "DE", "GB"],
  serviceArea: {
    "@type": "Place",
    name: "Bali, Indonesia and Sri Lanka",
  },
  sameAs: [
    "https://www.instagram.com/islandinternship",
    "https://www.linkedin.com/company/islandinternship",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Island Internship",
  url: "https://www.islandinternship.com",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this specifically for students who need to complete a required internship?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — that is the primary use case. Most students who join Island Internship have a mandatory internship semester built into their degree, and the placement structure is designed around that requirement.",
      },
    },
    {
      "@type": "Question",
      name: "Can this internship count for my university credits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Host companies provide an official internship agreement, a named supervisor, and the documentation universities require to approve the placement. We recommend confirming with your coordinator early, and we can help you prepare the paperwork.",
      },
    },
    {
      "@type": "Question",
      name: "Is doing my internship abroad more expensive than staying in the Netherlands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most students, it is cheaper. Monthly living costs in Bali run €440–€630, which is typically lower than renting a room and covering expenses in Amsterdam, Rotterdam, or Utrecht.",
      },
    },
    {
      "@type": "Question",
      name: "What does the program fee cover — and how much is it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The program fee covers placement matching, visa guidance, airport pickup, orientation week, and on-the-ground support throughout your stay. The exact fee depends on your destination and timing, and is discussed on your intro call after applying. There is no cost to apply.",
      },
    },
    {
      "@type": "Question",
      name: "Do I get help finding my internship placement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Finding a placement is our job, not yours. You tell us your background and field of interest, and we match you with a suitable company from the network — no cold emailing required.",
      },
    },
    {
      "@type": "Question",
      name: "Is housing included in the program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Housing is arranged as part of the program guidance. You get a private room in shared housing in a central, safe area. The housing cost is paid separately in-destination and is factored into the monthly living estimate.",
      },
    },
    {
      "@type": "Question",
      name: "Are the internships paid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — internships are normally unpaid. The value is in the placement itself: practical work experience, university credit, and real deliverables for your CV.",
      },
    },
    {
      "@type": "Question",
      name: "Is Bali safe to live in as a student?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bali is a well-established destination for students, remote workers, and international communities. The most common challenges are practical rather than dramatic — and students are prepared properly before departure.",
      },
    },
    {
      "@type": "Question",
      name: "How long are the internships?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most internships run for 3 to 6 months, which aligns with standard university internship requirements. The minimum is usually 10 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a visa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The exact route depends on your passport and length of stay. We guide students through the right visa option and timeline before departure.",
      },
    },
    {
      "@type": "Question",
      name: "What if something goes wrong during my stay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You have a local support contact and clear emergency guidance before you arrive. If there is a problem with the placement, housing, or anything else, we help you work through the next step — you are not dealing with it alone.",
      },
    },
  ],
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "VideoObject",
      position: 1,
      name: "A typical day at Ex Venture — Island Internship Bali",
      description:
        "See how an internship can look inside one of our partner company environments in Bali.",
      contentUrl: "https://www.islandinternship.com/videos/testimonial-story-1.mp4",
      thumbnailUrl: "https://www.islandinternship.com/images/community-group-2.jpg",
      uploadDate: "2026-01-01",
    },
    {
      "@type": "VideoObject",
      position: 2,
      name: "Inside the Ex Venture workday — Island Internship",
      description:
        "A student perspective on the daily rhythm, team setting, and internship experience in Bali.",
      contentUrl: "https://www.islandinternship.com/videos/testimonial-story-2.mp4",
      thumbnailUrl: "https://www.islandinternship.com/images/community-working-2.jpg",
      uploadDate: "2026-01-01",
    },
    {
      "@type": "VideoObject",
      position: 3,
      name: "Life inside the Island Internship program",
      description:
        "A closer look at what the internship experience looks and feels like from the inside.",
      contentUrl: "https://www.islandinternship.com/videos/testimonial-story-3.mp4",
      thumbnailUrl: "https://www.islandinternship.com/images/community-group-pool.jpg",
      uploadDate: "2026-01-01",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${cormorant.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
