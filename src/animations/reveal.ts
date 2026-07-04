import type { Variants } from "framer-motion";

import { MOTION_DURATION, MOTION_EASING } from "@/constants/motion";

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATION.scrollReveal,
      ease: MOTION_EASING.emphasized,
    },
  },
};

export const revealFromLeftVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: MOTION_DURATION.scrollReveal,
      ease: MOTION_EASING.emphasized,
    },
  },
};

export const revealFromRightVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: MOTION_DURATION.scrollReveal,
      ease: MOTION_EASING.emphasized,
    },
  },
};
