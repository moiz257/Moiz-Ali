import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import CustomCursor from "@/components/cursor";
import Preloader from "@/components/preloader";
import SmoothScroll from "@/components/smoothScroll";
import CommandPalette from "@/components/commandPalette";
import SoundProvider from "@/components/soundProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moiz Ali — Digital Product Engineer",
  description:
    "Moiz Ali is a full-stack engineer and product designer specializing in web apps, mobile apps, AI integrations, and smart automation solutions.",
  keywords: ["Moiz Ali", "Web Developer", "React", "Next.js", "Full Stack", "Pakistan"],
  authors: [{ name: "Moiz Ali" }],
  openGraph: {
    title: "Moiz Ali — Digital Product Engineer",
    description: "Crafting bold digital experiences across web, mobile, and automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon-32x32.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
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
