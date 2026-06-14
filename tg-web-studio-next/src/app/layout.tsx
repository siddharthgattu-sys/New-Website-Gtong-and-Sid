import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

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

export const metadata: Metadata = {
  title: "TG Web Studio — Websites That Grow Your Business",
  description:
    "TG Web Studio designs fast, modern, conversion-focused websites for restaurants, contractors, dentists, real estate agents, startups, and small businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable} h-full`}>
      <body className="min-h-full flex flex-col font-body antialiased text-ink-muted bg-page">
        <SmoothScroll>
          <ScrollToTop />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
