import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const syne = Syne({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  // Local preview fallback only; set the real origin when a deployment is authorized.
  metadataBase: new URL(process.env.PORTFOLIO_SITE_URL || "http://localhost:3000"),
  title: "Sreejith Madhavadas — AI Engineer & App Builder",
  description:
    "AI systems, useful apps, and the workflows between them. Sreejith Madhavadas, AI engineer and app builder with 3+ years of experience.",
  openGraph: {
    title: "Sreejith Madhavadas — AI Engineer & App Builder",
    description: "AI systems, useful apps, and the workflows between them. Explore MK1, my internal operations platform for MK Jewels.",
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <LenisProvider />
          {children}
        </body>
    </html>
  );
}
