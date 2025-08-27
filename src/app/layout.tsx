import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkyAero Studio | AI-First Prototypes in 2-4 Weeks",
  description: "AI-first studio that ships investor-ready prototypes in 2-4 weeks. Transparent tiers, clear SLAs, proven case studies.",
  keywords: "AI prototypes, MVP development, startup development, Next.js, React, TypeScript, web development, mobile apps",
  authors: [{ name: "SkyAero Studio" }],
  creator: "SkyAero Studio",
  publisher: "SkyAero Studio",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://skyaero.studio",
    title: "SkyAero Studio | AI-First Prototypes in 2-4 Weeks",
    description: "AI-first studio that ships investor-ready prototypes in 2-4 weeks. Transparent tiers, clear SLAs, proven case studies.",
    siteName: "SkyAero Studio",
    images: [
      {
        url: "/skyaero-og.png",
        width: 1200,
        height: 630,
        alt: "SkyAero Studio - AI-First Prototypes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyAero Studio | AI-First Prototypes in 2-4 Weeks",
    description: "AI-first studio that ships investor-ready prototypes in 2-4 weeks.",
    images: ["/skyaero-og.png"],
    creator: "@skyaerostudio",
  },
  alternates: {
    canonical: "https://skyaero.studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === 'production' && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "skyaero.studio"}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
