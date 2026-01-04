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
  title: "P Ganesh Krishna Reddy | Cybersecurity & InfoSec Portfolio",
  description: "Security Engineer specializing in Application Security, Network Defense, and Risk Assessment.",
  keywords: ["Cybersecurity", "InfoSec", "SOC Analyst", "Penetration Testing", "Network Security", "Linux Hardening"],
};

import { Navbar } from "@/components/Navbar";
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
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-text-primary overflow-x-hidden flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow pt-[56px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
