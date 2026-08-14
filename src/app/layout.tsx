import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SITE_URL, SITE_NAME, SITE_IMAGE } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Cybersecurity & Bug Bounty Researcher`,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Security researcher, SOC/VAPT analyst and full-stack engineer. $400 USD HackerOne bug bounty; CompTIA Security+, CySA+, PenTest+, Network+ certified.",
  keywords: ["Cybersecurity", "Bug Bounty", "HackerOne", "SOC Analyst", "Penetration Testing", "VAPT", "Application Security", "Network Security", "Linux Hardening"],
  authors: [{ name: SITE_NAME, url: "https://github.com/ganeshkrishnareddy" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Cybersecurity & Bug Bounty Researcher`,
    description: "Security researcher, SOC/VAPT analyst and full-stack engineer. $400 USD HackerOne bug bounty; seven certifications.",
    images: [{ url: SITE_IMAGE, width: 512, height: 512, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} | Cybersecurity & Bug Bounty Researcher`,
    description: "Security researcher, SOC/VAPT analyst and full-stack engineer. $400 USD HackerOne bug bounty.",
    creator: "@_this_is_ganesh",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <BreadcrumbSchema />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: SITE_NAME,
              url: SITE_URL,
              jobTitle: "Cyber Security Researcher",
              email: "mailto:pganeshkrishnareddy@gmail.com",
              sameAs: [
                "https://github.com/ganeshkrishnareddy",
                "https://www.linkedin.com/in/pganeshkrishnareddy",
                "https://hackerone.com/pganeshkrishnareddy",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
              description:
                "Cybersecurity & bug bounty researcher, SOC/VAPT analyst and full-stack engineer. $400 USD HackerOne bounty; CompTIA Security+, CySA+, PenTest+, Network+ certified.",
              inLanguage: "en",
              publisher: { "@type": "Person", name: SITE_NAME },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-text-primary overflow-x-hidden flex flex-col min-h-screen`}
      >
        <Navbar />
        <CustomCursor />
        <main className="flex-grow pt-[56px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
