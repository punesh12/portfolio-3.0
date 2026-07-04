import { cva } from "class-variance-authority";

export const inputWrapperVariants = cva(
  [
    "flex w-full items-center gap-2",
    "rounded-[var(--radius-sm)] border bg-[var(--input-bg)]",
    "transition-[border-color,box-shadow]",
    "duration-[var(--duration-hover)] ease-[var(--easing-standard)]",
    "has-[:focus-visible]:border-[var(--input-border-focus)]",
    "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[var(--focus)]/30",
  ],
  {
    variants: {
      hasError: {
        true: "border-[var(--input-error)] has-[:focus-visible]:border-[var(--input-error)] has-[:focus-visible]:ring-[var(--input-error)]/20",
        false: "border-[var(--input-border)] hover:border-[var(--input-border-hover)]",
      },
      size: {
        md: "h-11 px-3",
        lg: "h-12 px-4",
      },
    },
    defaultVariants: {
      hasError: false,
      size: "md",
    },
  },
);

export const inputVariants = cva(
  [
    "w-full min-w-0 flex-1 bg-transparent",
    "font-sans text-sm text-[var(--input-text)]",
    "placeholder:text-[var(--input-placeholder)]",
    "focus-visible:outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      hasError: {
        true: "text-[var(--input-error)] placeholder:text-[var(--input-error)]/60",
        false: "",
      },
    },
    defaultVariants: {
      hasError: false,
    },
  },
);

export const inputLabelVariants = cva(
  [
    "mb-2 block font-mono text-xs font-medium uppercase tracking-wider",
    "text-[var(--input-label)]",
  ],
  {
    variants: {
      hasError: {
        true: "text-[var(--input-error)]",
        false: "",
      },
    },
    defaultVariants: {
      hasError: false,
    },
  },
);

export const inputErrorVariants = cva(
  "mt-2 flex items-center gap-1.5 text-xs text-[var(--input-error)]",
);

export const kbdBadgeVariants = cva([
  "inline-flex h-5 min-w-5 items-center justify-center rounded-[4px]",
  "border border-[var(--input-kbd-border)] bg-[var(--input-kbd-bg)]",
  "px-1 font-mono text-[10px] font-medium text-[var(--input-kbd-text)]",
]);
