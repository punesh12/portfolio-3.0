import type { ReactNode } from "react";
import type { Variants } from "framer-motion";

export interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export interface ScrollRevealStaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}

export interface ScrollRevealItemProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}
