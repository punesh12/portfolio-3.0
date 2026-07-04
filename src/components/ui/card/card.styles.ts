import { cva } from "class-variance-authority";

export const cardVariants = cva(
  [
    "rounded-[var(--card-radius)]",
    "text-[var(--text-primary)]",
    "transition-[background-color,box-shadow,border-color,transform]",
    "duration-[var(--duration-hover)] ease-[var(--easing-standard)]",
  ],
  {
    variants: {
      variant: {
        default: [
          "border border-[var(--card-border)] bg-[var(--card)]",
          "shadow-[var(--card-shadow)]",
        ],
        elevated: [
          "border border-[var(--border-subtle)] bg-[var(--surface-elevated)]",
          "shadow-[var(--shadow-md)]",
        ],
        outline: ["border border-[var(--card-border)] bg-transparent"],
        interactive: [
          "border border-[var(--card-border)] bg-[var(--card)]",
          "shadow-[var(--card-shadow)]",
          "hover:border-[var(--border-strong)] hover:bg-[var(--card-hover)]",
          "hover:shadow-[var(--card-shadow-hover)]",
          "hover:-translate-y-0.5",
        ],
      },
      padding: {
        none: "p-0",
        md: "p-[var(--card-padding)]",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  },
);

export const cardHeaderVariants = cva("flex flex-col gap-2");

export const cardTitleVariants = cva(
  "text-lg font-semibold leading-snug tracking-tight text-foreground",
);

export const cardDescriptionVariants = cva(
  "text-sm leading-relaxed text-muted-foreground",
);

export const cardContentVariants = cva("pt-4");

export const cardFooterVariants = cva("flex items-center gap-3 pt-4");
