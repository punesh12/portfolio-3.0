import type { Variants } from "framer-motion";

import { MOTION_DURATION, MOTION_EASING } from "@/constants/motion";

export const timelineCardRevealVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATION.scrollReveal,
      ease: MOTION_EASING.emphasized,
    },
  },
};
