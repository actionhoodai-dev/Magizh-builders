import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Magizh Builders | Premium Residential & Villa Construction",
  description: "World-class architectural excellence in villa construction and residential projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased selection:bg-accent selection:text-white`}
      >
        {/* High-Level UI UX: Global Noise Overlay */}
        <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.015] mix-blend-overlay"
          style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }} />

        <Preloader />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
