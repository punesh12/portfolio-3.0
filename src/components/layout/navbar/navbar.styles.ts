import { cva } from "class-variance-authority";

export const navLinkStyles = cva(
  [
    "relative inline-flex cursor-pointer items-center",
    "pb-3 font-mono text-sm font-semibold",
    "transition-colors duration-[var(--duration-hover)] ease-[var(--easing-standard)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2",
    "whitespace-nowrap",
  ],
  {
    variants: {
      active: {
        true: "text-[var(--nav-text-active)]",
        false: "text-[var(--nav-text-inactive)] hover:text-foreground",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

export const navLinkUnderlineStyles = cva(
  "absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-[var(--nav-underline)]",
);

export const mobileNavLinkStyles = cva(
  [
    "block w-full cursor-pointer rounded-[var(--radius-md)] px-4 py-3",
    "font-mono text-sm font-semibold",
    "transition-colors duration-[var(--duration-hover)] ease-[var(--easing-standard)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)]",
  ],
  {
    variants: {
      active: {
        true: "bg-[var(--badge-blue-bg)] text-[var(--nav-text-active)]",
        false: "text-[var(--nav-text-inactive)] hover:bg-card hover:text-foreground",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);
