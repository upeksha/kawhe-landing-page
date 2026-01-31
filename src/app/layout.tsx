import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kawhe - Digital Wallet Loyalty for Cafés",
  description: "The premium loyalty solution for modern cafés. Apple Wallet & Google Pay integration.",
};

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getNavLinks, type NavLink } from "@/lib/wordpress";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let navLinks: NavLink[] = [];
  try {
    navLinks = await getNavLinks();
  } catch (e) {
    console.warn("Could not fetch nav links from WordPress, using defaults.");
  }

  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-oat/20 text-espresso font-sans`}
      >
        <Navbar links={navLinks.length > 0 ? navLinks : undefined} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
