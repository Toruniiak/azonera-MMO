import type { Metadata, Viewport } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  CURRENT_STATUS,
} from "@/config/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AZONERA MMO — Własny świat MMORPG w produkcji",
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Azonera MMO",
    "Azonera",
    "MMORPG",
    "MMORPG Polska",
    "polskie MMORPG",
    "Azonera testy",
    "Azonera download",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "AZONERA MMO — Własny świat MMORPG w produkcji",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/images/hero.jpg`,
        width: 1600,
        height: 900,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AZONERA MMO — Własny świat MMORPG w produkcji",
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/images/hero.jpg`],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0d10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${cinzel.variable} ${manrope.variable}`}>
      <body className="bg-abyss font-body text-bone antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ember focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-abyss"
        >
          Przejdź do treści
        </a>
        <Header />
        <main id="main" className="pt-16">
          {children}
        </main>
        <Footer />
        <span className="sr-only" aria-hidden>
          {CURRENT_STATUS.label}
        </span>
      </body>
    </html>
  );
}
