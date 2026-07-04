import { cn } from "@/lib/utils";

import {
  sectionHeadingDescriptionVariants,
  sectionHeadingEyebrowVariants,
  sectionHeadingTitleVariants,
  sectionHeadingVariants,
} from "./section-heading.styles";
import type { SectionHeadingProps } from "./section-heading.types";

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  action,
  align,
  className,
  id,
}: SectionHeadingProps) => (
  <header
    id={id}
    className={cn(
      "flex w-full flex-col gap-6",
      action && align !== "center" && "md:flex-row md:items-end md:justify-between",
      className,
    )}
  >
    <div className={cn(sectionHeadingVariants({ align }), "min-w-0 flex-1 gap-4")}>
      {eyebrow && <p className={sectionHeadingEyebrowVariants()}>{eyebrow}</p>}
      <h2 className={sectionHeadingTitleVariants()}>{title}</h2>
      {description && (
        <p className={sectionHeadingDescriptionVariants()}>{description}</p>
      )}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </header>
);
