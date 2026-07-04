import { cva } from "class-variance-authority";

export const socialButtonVariants = cva([
  "inline-flex size-10 shrink-0 cursor-pointer items-center justify-center md:size-11",
  "rounded-[var(--radius-sm)] border border-solid border-[var(--border-strong)]",
  "bg-[var(--background-primary)] text-[var(--text-secondary)]",
  "transition-[color,background-color,border-color,transform]",
  "duration-[var(--duration-hover)] ease-[var(--easing-standard)]",
  "hover:border-[var(--primary)] hover:bg-[var(--card-hover)] hover:text-[var(--primary)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2",
]);
