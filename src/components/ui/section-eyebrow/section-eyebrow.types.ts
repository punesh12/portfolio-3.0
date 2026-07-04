import type { HTMLAttributes } from "react";

import type { sectionEyebrowVariants } from "./section-eyebrow.styles";
import type { VariantProps } from "class-variance-authority";

export type SectionEyebrowAlign = NonNullable<
  VariantProps<typeof sectionEyebrowVariants>["align"]
>;

export interface SectionEyebrowProps
  extends
    HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof sectionEyebrowVariants> {}
