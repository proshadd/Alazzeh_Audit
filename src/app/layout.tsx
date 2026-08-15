import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActionButtons from "@/components/layout/FloatingActionButtons";

import { LanguageProvider } from "@/context/LanguageContext";

export const viewport: Viewport = {
  width: 1200,
  initialScale: 0.8,
};

export const metadata: Metadata = {
  title: "Alazzeh International - Audit & Consulting",
  description: "Your trusted partner for Audit & Consulting services in Jordan.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=1200, initial-scale=0.8" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col pt-20 min-w-[1200px]">
        <LanguageProvider>
          <Header />
          <main className="flex-grow flex flex-col min-w-[1200px]">
            {children}
          </main>
          <FloatingActionButtons />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
