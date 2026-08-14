import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  metadataBase: new URL("https://pganeshkrishnareddy.vercel.app"),
  title: {
    default: "P Ganesh Krishna Reddy | Cybersecurity & Bug Bounty Researcher",
    template: "%s | P Ganesh Krishna Reddy",
  },
  description: "Security researcher, SOC/VAPT analyst and full-stack engineer. $400 USD HackerOne bug bounty; CompTIA Security+, CySA+, PenTest+, Network+ certified.",
  keywords: ["Cybersecurity", "Bug Bounty", "HackerOne", "SOC Analyst", "Penetration Testing", "VAPT", "Application Security", "Network Security", "Linux Hardening"],
  authors: [{ name: "P Ganesh Krishna Reddy", url: "https://github.com/ganeshkrishnareddy" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pganeshkrishnareddy.vercel.app",
    siteName: "P Ganesh Krishna Reddy",
    title: "P Ganesh Krishna Reddy | Cybersecurity & Bug Bounty Researcher",
    description: "Security researcher, SOC/VAPT analyst and full-stack engineer. $400 USD HackerOne bug bounty; seven certifications.",
    images: [{ url: "https://pganeshkrishnareddy.vercel.app/profile.jpeg", width: 512, height: 512, alt: "P Ganesh Krishna Reddy" }],
  },
  twitter: {
    card: "summary",
    title: "P Ganesh Krishna Reddy | Cybersecurity & Bug Bounty Researcher",
    description: "Security researcher, SOC/VAPT analyst and full-stack engineer. $400 USD HackerOne bug bounty.",
    creator: "@_this_is_ganesh",
  },
  robots: { index: true, follow: true },
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
              name: "P Ganesh Krishna Reddy",
              url: "https://pganeshkrishnareddy.vercel.app",
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
