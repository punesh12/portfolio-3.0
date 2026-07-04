import type { Variants } from "framer-motion";

import { MOTION_DURATION, MOTION_EASING } from "@/constants/motion";

export const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

export const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATION.scrollReveal,
      ease: MOTION_EASING.emphasized,
    },
  },
};

export const heroCtaVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATION.scrollReveal,
      ease: MOTION_EASING.emphasized,
      delay: 0.4,
    },
  },
};
