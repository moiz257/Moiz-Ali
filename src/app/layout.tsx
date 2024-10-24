import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MOIZ-ALI",
  description: "Created By Moiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon Link */}
        <link rel="icon" href="/favicon-32x32.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} overflow-x-hidden bg-black antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
