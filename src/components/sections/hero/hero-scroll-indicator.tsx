"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { scrollToSection } from "@/utils/scroll-to";

export const HeroScrollIndicator = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.button
      type="button"
      className="text-muted-foreground hover:text-foreground absolute bottom-4 left-1/2 z-[1] hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-2 transition-colors md:bottom-8 md:flex"
      onClick={() => scrollToSection("work")}
      aria-label="Scroll to work section"
      initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.4 }}
    >
      <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
      <motion.span
        animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="size-5" aria-hidden="true" />
      </motion.span>
    </motion.button>
  );
};
