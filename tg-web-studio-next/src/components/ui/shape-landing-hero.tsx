"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { MeshGradient } from "@paper-design/shaders-react";

export function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
    children,
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    children?: React.ReactNode;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        }),
    };

    return (
        <div className="relative w-full flex items-center justify-center overflow-hidden bg-[#121212] pt-32 pb-24 md:pt-44 md:pb-32">

            {/* Mesh gradient background */}
            <MeshGradient
                className="absolute inset-0 w-full h-full"
                colors={["#000000", "#0d0d0d", "#1a1a1a", "#2c2c2c", "#ffffff", "#111111"]}
                speed={0.65}
                distortion={0.6}
                swirl={0.4}
            />

            {/* Bottom + top fade to blend into page */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/50 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8 md:mb-10"
                    >
                        <Circle className="h-2 w-2 fill-cta-500/80 text-cta-500/80" />
                        <span className="text-sm text-white/60 tracking-wide">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-white/90 to-cta-500"
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-white/50 mb-10 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            SiteSpark designs fast, modern, conversion-focused websites for
                            restaurants, contractors, dentists, real estate agents, startups, and
                            small businesses ready to look as good online as they do in person.
                        </p>
                    </motion.div>

                    {children && (
                        <motion.div
                            custom={3}
                            variants={fadeUpVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {children}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
