import type { Metadata } from "next";
import { Geist, Space_Grotesk, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import Header from "@/components/layout/Header";
import SmoothScroll from "@/components/ui/SmoothScroll";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Samuel Felipe — Developer & Designer",
    template: "%s | Samuel Felipe",
  },
  description:
    "Portfólio de Samuel Felipe. Desenvolvimento de interfaces, experiências digitais e soluções criativas com código e design.",
  applicationName: "Samuel Felipe Portfolio",
  openGraph: {
    title: "Samuel Felipe — Developer & Designer",
    description:
      "Transformando ideias em experiências digitais através de código e design.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geist.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-white font-sans text-neutral-950 selection:bg-neutral-950 selection:text-white">
        <SmoothScroll />
        <Header />
        {children}
      </body>
    </html>
  );
}
