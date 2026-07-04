import { cva } from "class-variance-authority";

export const sectionEyebrowVariants = cva(
  ["font-mono text-xs font-black uppercase tracking-wider", "text-[var(--primary)]"],
  {
    variants: {
      align: {
        left: "text-left",
        center: "text-center",
      },
    },
    defaultVariants: {
      align: "left",
    },
  },
);
