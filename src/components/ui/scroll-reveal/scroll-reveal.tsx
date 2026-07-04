"use client";

import { motion } from "framer-motion";

import { revealVariants } from "@/animations/reveal";
import { staggerContainerVariants, staggerItemVariants } from "@/animations/stagger";
import { SCROLL_REVEAL_VIEWPORT } from "@/constants/scroll-reveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

import type {
  ScrollRevealItemProps,
  ScrollRevealProps,
  ScrollRevealStaggerProps,
} from "./scroll-reveal.types";

export const ScrollReveal = ({
  children,
  className,
  variants = revealVariants,
  delay = 0,
}: ScrollRevealProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={SCROLL_REVEAL_VIEWPORT}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export const ScrollRevealStagger = ({
  children,
  className,
  stagger = 0.08,
  delayChildren = 0.1,
}: ScrollRevealStaggerProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={SCROLL_REVEAL_VIEWPORT}
      variants={{
        ...staggerContainerVariants,
        visible: {
          opacity: 1,
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const ScrollRevealItem = ({
  children,
  className,
  variants = staggerItemVariants,
}: ScrollRevealItemProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div className={cn(className)} variants={variants}>
      {children}
    </motion.div>
  );
};
