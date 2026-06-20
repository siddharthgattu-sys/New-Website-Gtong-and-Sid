import type { Metadata } from "next";
import { Archivo, Space_Grotesk, Nunito, Syncopate, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SiteSpark — Websites That Grow Your Business",
  description:
    "SiteSpark designs fast, modern, conversion-focused websites for restaurants, contractors, dentists, real estate agents, startups, and small businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable} ${nunito.variable} ${syncopate.variable} ${roboto.variable} ${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col font-body antialiased text-ink-muted bg-page">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
