"use client";

import { motion } from "framer-motion";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export const HeroGrid = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 opacity-[0.45] dark:opacity-[0.2]"
        style={{
          backgroundImage: "radial-gradient(var(--grid) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                backgroundPosition: ["0px 0px", "24px 24px"],
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 18,
                ease: "linear",
                repeat: Infinity,
              }
        }
      />
      <div className="from-background via-background/80 to-background absolute inset-0 bg-gradient-to-b" />
    </div>
  );
};
