import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import CustomCursor from "@/components/cursor";
import Preloader from "@/components/preloader";
import SmoothScroll from "@/components/smoothScroll";
import CommandPalette from "@/components/commandPalette";
import SoundProvider from "@/components/soundProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Moiz Ali — Full-Stack Developer & AI Automation Engineer",
  description: "Moiz Ali builds full-stack applications, AI-powered products, mobile apps, and business automation from idea to production.",
  keywords: ["Moiz Ali", "Full-Stack Developer", "AI Automation Engineer", "Next.js", "React", "Pakistan"],
  authors: [{ name: "Moiz Ali" }],
  openGraph: {
    title: "Moiz Ali — Full-Stack Developer & AI Automation Engineer",
    description: "Software that solves real business problems: full-stack products, AI, mobile, and automation.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon-32x32.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#080808" />
      </head>
      <body className={`${inter.className} overflow-x-hidden bg-black antialiased`}>
        <SoundProvider />
        <Preloader />
        <CustomCursor />
        <CommandPalette />
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
