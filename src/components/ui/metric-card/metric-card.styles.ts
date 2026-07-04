import { cva } from "class-variance-authority";

export const metricCardIconTones = [
  "blue",
  "purple",
  "emerald",
  "amber",
  "rose",
] as const;

export type MetricCardIconTone = (typeof metricCardIconTones)[number];

export const metricCardVariants = cva([
  "relative h-full w-full min-h-[var(--metric-card-min-height)] overflow-hidden",
  "flex flex-col",
  "rounded-[var(--metric-card-radius)] border border-[var(--metric-card-border)]",
  "bg-[var(--metric-card-bg)] p-[var(--metric-card-padding)] shadow-[var(--metric-card-shadow)]",
  "transition-[border-color,box-shadow,transform]",
  "duration-[var(--duration-hover)] ease-[var(--easing-standard)]",
  "hover:shadow-[var(--card-shadow-hover)]",
]);

export const metricCardIconVariants = cva(
  [
    "inline-flex size-8 shrink-0 items-center justify-center md:size-10",
    "rounded-[var(--radius-sm)]",
    "[&_svg]:size-4 md:[&_svg]:size-5 [&_svg]:stroke-[1.75]",
  ],
  {
    variants: {
      iconTone: {
        blue: "bg-[var(--metric-icon-blue-bg)] text-[var(--metric-icon-blue-fg)]",
        purple: "bg-[var(--metric-icon-purple-bg)] text-[var(--metric-icon-purple-fg)]",
        emerald:
          "bg-[var(--metric-icon-emerald-bg)] text-[var(--metric-icon-emerald-fg)]",
        amber: "bg-[var(--metric-icon-amber-bg)] text-[var(--metric-icon-amber-fg)]",
        rose: "bg-[var(--metric-icon-rose-bg)] text-[var(--metric-icon-rose-fg)]",
      },
    },
    defaultVariants: {
      iconTone: "blue",
    },
  },
);

export const metricCardDecorVariants = cva("", {
  variants: {
    iconTone: {
      blue: "text-[var(--metric-icon-blue-decor)]",
      purple: "text-[var(--metric-icon-purple-decor)]",
      emerald: "text-[var(--metric-icon-emerald-decor)]",
      amber: "text-[var(--metric-icon-amber-decor)]",
      rose: "text-[var(--metric-icon-rose-decor)]",
    },
  },
  defaultVariants: {
    iconTone: "blue",
  },
});

export const metricCardDescriptionVariants = cva([
  "min-h-[var(--metric-card-description-min-height)]",
  "text-[length:var(--metric-card-description-size)] font-bold uppercase leading-snug",
  "tracking-wide text-[var(--metric-card-description)]",
]);

export const metricCardGridVariants = cva(
  "grid grid-cols-2 items-stretch gap-3 md:gap-4 lg:grid-cols-3 xl:grid-cols-5 [&>*]:h-full",
);
