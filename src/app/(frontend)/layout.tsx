import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import RecaptchaProvider from "@/providers/recaptcha-provider";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { ScrollThread } from "@/components/motion/scroll-thread";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import { JsonLdScript, organizationJsonLd, SITE_NAME, SITE_URL } from "@/utils/seo";

import "lenis/dist/lenis.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Byldd | Product Development for Founders",
    template: "%s | Byldd",
  },
  description:
    "Byldd is a venture studio for early-stage founders. We take founders from idea to a revenue-generating product, built on pre-built modules.",
  openGraph: { siteName: SITE_NAME, type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="bg-background text-foreground flex min-h-full flex-col"
        suppressHydrationWarning
      >
        <JsonLdScript data={organizationJsonLd()} />
        <AnalyticsScripts />
        <RecaptchaProvider>
        <SmoothScroll>
          <ScrollThread />
          <Header />

          {children}
          <Footer />
        </SmoothScroll>
        <Toaster />
        </RecaptchaProvider>
      </body>
    </html>
      
  );
}
