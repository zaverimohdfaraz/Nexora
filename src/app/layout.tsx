import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { BackToTop } from "@/components/BackToTop";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://nexorasolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nexora Solutions — Premium Software Development Agency",
    template: "%s | Nexora Solutions",
  },
  description:
    "Nexora Solutions designs and engineers premium web, SaaS, and AI products for ambitious teams. Full-stack development, UI/UX design, and cloud solutions.",
  keywords: [
    "software development company",
    "web development agency",
    "Next.js development",
    "SaaS development",
    "UI UX design agency",
    "AI solutions",
  ],
  authors: [{ name: "Nexora Solutions" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Nexora Solutions",
    title: "Nexora Solutions — Premium Software Development Agency",
    description:
      "We design and engineer premium digital products for ambitious teams — from first line of code to global scale.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nexora Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora Solutions — Premium Software Development Agency",
    description:
      "We design and engineer premium digital products for ambitious teams.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jakarta.variable} font-body`}>
        <ThemeProvider>
          <LoadingScreen />
          <Navbar />
          <main className="pt-[84px]">{children}</main>
          <Footer />
          <BackToTop />
          <StickyWhatsApp />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
