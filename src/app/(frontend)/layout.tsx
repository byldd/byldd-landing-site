import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import RecaptchaProvider from "@/providers/recaptcha-provider";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { ScrollThread } from "@/components/motion/scroll-thread";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

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
  title: "Byldd",
  description: "Byldd landing site",
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
