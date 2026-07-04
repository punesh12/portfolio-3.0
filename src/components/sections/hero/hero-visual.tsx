"use client";

import { motion } from "framer-motion";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

import { HeroIllustration } from "./hero-illustration";

interface HeroVisualProps {
  className?: string;
}

export const HeroVisual = ({ className }: HeroVisualProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      className={cn(
        "relative mx-auto w-full max-w-md md:max-w-xl lg:max-w-none",
        className,
      )}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
    >
      <div
        className={cn(
          "border-border bg-card relative overflow-hidden rounded-[var(--radius-xl)] border shadow-[var(--shadow-md)]",
          "md:rounded-[var(--radius-2xl)] md:shadow-[var(--shadow-lg)]",
          "md:rotate-2 lg:rotate-3",
        )}
      >
        <div className="relative aspect-[4/3] w-full">
          <HeroIllustration />
        </div>
      </div>
    </motion.div>
  );
};
