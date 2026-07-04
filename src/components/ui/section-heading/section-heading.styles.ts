import { cva } from "class-variance-authority";

export const sectionHeadingVariants = cva("flex flex-col gap-4", {
  variants: {
    align: {
      left: "items-start text-left",
      center: "items-center text-center",
    },
  },
  defaultVariants: {
    align: "left",
  },
});

export const sectionHeadingEyebrowVariants = cva([
  "font-mono text-xs font-medium uppercase tracking-wider",
  "text-[var(--primary)]",
]);

export const sectionHeadingTitleVariants = cva([
  "max-w-heading text-3xl font-semibold tracking-tight text-foreground",
  "md:text-4xl lg:text-[2.5rem] lg:leading-tight",
]);

export const sectionHeadingDescriptionVariants = cva(
  "max-w-paragraph text-base leading-relaxed text-muted-foreground md:text-lg",
);
