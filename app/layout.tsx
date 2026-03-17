import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://islandinternship.com";
const title = "Island Internship | University Internship in Bali or Sri Lanka";
const description =
  "Complete your required university internship semester in Bali or Sri Lanka. Credit-eligible placements with full logistics support — visa guidance, housing, airport pickup, and orientation. Apply free.";

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
        url: "/images/hero-placement.jpg",
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
    images: ["/images/hero-placement.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Island Internship",
  url: siteUrl,
  logo: `${siteUrl}/images/hero-placement.jpg`,
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@islandinternship.com",
    contactType: "customer support",
  },
  sameAs: [],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this specifically for students who need to complete a required internship for their degree?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — that is the primary use case. Most students who join Island Internship have a mandatory internship semester built into their degree, and the placement structure is designed around that requirement.",
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
      name: "Can this internship count for my university credits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Host companies provide an official internship agreement, a supervisor, and are willing to complete university assessment paperwork. We still recommend confirming with your study coordinator early.",
      },
    },
    {
      "@type": "Question",
      name: "Do I get help finding my internship placement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Finding a placement is our job, not yours. You tell us your background and field of interest, and we match you with a suitable company from the network.",
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
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
