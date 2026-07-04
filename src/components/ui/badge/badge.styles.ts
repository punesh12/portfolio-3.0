import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  [
    "inline-flex items-center gap-1.5",
    "rounded-[6px] border",
    "font-mono text-xs font-medium",
    "whitespace-nowrap",
    "transition-[colors,transform] duration-[var(--duration-hover)] ease-[var(--easing-standard)]",
    "hover:-translate-y-px",
  ],
  {
    variants: {
      variant: {
        blue: [
          "border-[var(--badge-blue-border)] bg-[var(--badge-blue-bg)] text-[var(--badge-blue-fg)]",
          "[&_svg]:text-[var(--badge-blue-fg)]",
        ],
        purple: [
          "border-[var(--badge-purple-border)] bg-[var(--badge-purple-bg)] text-[var(--badge-purple-fg)]",
          "[&_svg]:text-[var(--badge-purple-fg)]",
        ],
        success: [
          "border-[var(--badge-success-border)] bg-[var(--badge-success-bg)] text-[var(--badge-success-fg)]",
          "[&_svg]:text-[var(--badge-success-fg)]",
        ],
      },
      size: {
        sm: "px-2 py-0.5 text-[11px]",
        md: "px-3 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "blue",
      size: "md",
    },
  },
);
