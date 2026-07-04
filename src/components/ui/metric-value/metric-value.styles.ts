import { cva } from "class-variance-authority";

export const metricValueVariants = cva([
  "min-h-[var(--metric-card-value-min-height)]",
  "text-[length:var(--metric-card-value-size)] font-black leading-tight tracking-tight",
  "whitespace-normal break-words text-[var(--metric-card-value)] md:whitespace-nowrap",
]);

export const metricValueArrowVariants = cva(
  "mx-1 inline-block font-normal text-[var(--metric-card-value-muted)] transition-transform duration-[var(--duration-hover)] group-hover/metric:translate-x-0.5",
);
