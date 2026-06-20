"use client";

import React from "react";
import { PixelHero } from "@/components/ui/pixel-perfect-hero";
import { KineticText } from "@/components/ui/kinetic-text";

// Navy-900 brand colors passed directly so the pixel canvas
// doesn't inherit white-mode CSS variables from document.body
const PIXEL_COLORS = ["#3558A4", "#3558A4", "#3558A4", "#3558A4", "#F5F0E9"];

export function Hero() {
  return (
    <div
      id="top"
      className="dark"
      style={
        {
          "--background": "#0D1428",
          "--foreground": "#F5F0E9",
          "--primary": "#F5F0E9",
          "--primary-foreground": "#0D1428",
          "--muted-foreground": "#3558A4",
          "--card": "#18223C",
          "--card-foreground": "#F5F0E9",
          "--border": "rgba(245, 240, 233, 0.15)",
        } as React.CSSProperties
      }
    >
      <PixelHero
        word1="Your"
        word2="Vision."
        description={
          <>
            <span>Modern, conversion focused websites for small businesses to</span>
            <KineticText
              text="Grow your brand."
              as="span"
              className="text-white text-2xl sm:text-3xl md:text-4xl tracking-tight justify-center"
            />
          </>
        }
        primaryCta="Request a Quote"
        primaryCtaMobile="Get a Quote"
        primaryHref="#contact"
        secondaryCta="See Our Work"
        secondaryCtaMobile="Our Work"
        secondaryHref="#work"
        marqueeLabel="Why Us"
        pixelColors={PIXEL_COLORS}
      />
    </div>
  );
}
