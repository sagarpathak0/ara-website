import type { Metadata } from "next";
import { Anton, Syne, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import DVDPlayer from "@/components/DVDPlayer";
import { ThemeProvider } from "@/components/ThemeContext";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-body",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
});

export const metadata: Metadata = {
  title: "AntiRapeAlliance",
  description: "Reclaiming safety through decentralization. Silent. Watchful. Immutable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${anton.variable} ${syne.variable} ${inter.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider>
          {/* Noise overlay */}
          <div className="fixed inset-0 bg-noise opacity-40 pointer-events-none z-50 mix-blend-overlay" />
          
          {children}
          
          <Navigation />
          <DVDPlayer />
        </ThemeProvider>
      </body>
    </html>
  );
}
