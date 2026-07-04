import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import type { sectionHeadingVariants } from "./section-heading.styles";

export type SectionHeadingAlign = NonNullable<
  VariantProps<typeof sectionHeadingVariants>["align"]
>;

export interface SectionHeadingProps extends VariantProps<typeof sectionHeadingVariants> {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  id?: string;
}
