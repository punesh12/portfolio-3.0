import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "group/button inline-flex items-center justify-center gap-2",
    "cursor-pointer font-semibold whitespace-nowrap",
    "rounded-[var(--radius-sm)]",
    "border border-transparent",
    "transition-[background-color,color,border-color,box-shadow,transform]",
    "duration-[var(--duration-hover)] ease-[var(--easing-standard)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:cursor-not-allowed",
    "select-none",
    "active:scale-[0.98]",
    "motion-safe:hover:-translate-y-px",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-fg)]",
          "hover:bg-[var(--btn-primary-hover)]",
          "hover:shadow-[var(--btn-active-shadow)]",
          "disabled:bg-[var(--btn-disabled-bg)] disabled:text-[var(--btn-disabled-fg)] disabled:shadow-none",
        ],
        secondary: [
          "bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-fg)]",
          "hover:bg-[var(--btn-secondary-hover)]",
          "disabled:bg-[var(--btn-disabled-bg)] disabled:text-[var(--btn-disabled-fg)] disabled:shadow-none",
        ],
        outline: [
          "border-[var(--btn-outline-border)] bg-transparent text-[var(--btn-outline-fg)]",
          "hover:bg-[var(--btn-outline-hover-bg)]",
          "disabled:border-[var(--btn-disabled-border)] disabled:bg-[var(--btn-disabled-bg)] disabled:text-[var(--btn-disabled-fg)]",
        ],
        ghost: [
          "bg-transparent text-[var(--btn-ghost-fg)]",
          "hover:bg-[var(--btn-ghost-hover-bg)]",
          "disabled:bg-transparent disabled:text-[var(--btn-disabled-fg)]",
        ],
        icon: [
          "bg-transparent text-[var(--btn-ghost-fg)]",
          "hover:bg-[var(--btn-ghost-hover-bg)]",
          "disabled:bg-transparent disabled:text-[var(--btn-disabled-fg)]",
          "p-0",
        ],
      },
      size: {
        sm: "h-9 min-w-9 px-4 text-sm",
        md: "h-11 min-w-11 px-6 text-sm",
        lg: "h-14 min-w-14 px-8 text-base",
        icon: "h-11 w-11 min-w-11 p-0",
      },
      isActive: {
        true: [
          "bg-[var(--btn-active-bg)] text-[var(--btn-active-fg)]",
          "shadow-[var(--btn-active-shadow)]",
          "border-transparent",
          "hover:bg-[var(--btn-active-bg)]",
        ],
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      isActive: false,
    },
  },
);
