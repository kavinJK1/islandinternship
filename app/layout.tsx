import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://islandinternship.com"),
  title: "Island Internship | Required Internships in Bali or Sri Lanka",
  description:
    "Complete your required internship semester in Bali or Sri Lanka with placement matching, visa guidance, housing support, and a structured student community.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
