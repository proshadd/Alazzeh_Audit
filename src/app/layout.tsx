import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActionButtons from "@/components/layout/FloatingActionButtons";

import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Alazzeh International - Audit & Consulting",
  description: "Your trusted partner for Audit & Consulting services in Jordan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600;700&family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col pt-20">
        <LanguageProvider>
          <Header />
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          <FloatingActionButtons />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
