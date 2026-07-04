import motionTokens from "../../tokens/motion.json";

const parseMs = (value: string): number => parseFloat(value) / 1000;

const EMPHASIZED_EASE = [0.22, 1, 0.36, 1] as const;

export const MOTION_DURATION = {
  fast: parseMs(motionTokens.duration.fast),
  normal: parseMs(motionTokens.duration.normal),
  slow: parseMs(motionTokens.duration.slow),
  page: parseMs(motionTokens.duration.page),
  hover: parseMs(motionTokens.duration.hover),
  theme: parseMs(motionTokens.duration.theme),
  scrollReveal: parseMs(motionTokens.duration.scrollReveal),
} as const;

export const MOTION_EASING = {
  standard: "easeOut" as const,
  emphasized: EMPHASIZED_EASE,
} as const;
