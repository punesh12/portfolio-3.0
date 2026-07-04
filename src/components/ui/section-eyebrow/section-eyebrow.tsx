import { cn } from "@/lib/utils";

import { sectionEyebrowVariants } from "./section-eyebrow.styles";
import type { SectionEyebrowProps } from "./section-eyebrow.types";

export const SectionEyebrow = ({
  align,
  className,
  children,
  ...props
}: SectionEyebrowProps) => (
  <p className={cn(sectionEyebrowVariants({ align }), className)} {...props}>
    {children}
  </p>
);
