import type { Variants } from "framer-motion";

import { MOTION_DURATION, MOTION_EASING } from "@/constants/motion";

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATION.scrollReveal,
      ease: MOTION_EASING.emphasized,
    },
  },
};
