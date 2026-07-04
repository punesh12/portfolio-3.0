import { cn } from "@/lib/utils";

import { badgeVariants } from "./badge.styles";
import type { BadgeProps } from "./badge.types";

export const Badge = ({
  className,
  variant,
  size,
  icon,
  children,
  ...props
}: BadgeProps) => (
  <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
    {icon && (
      <span className="inline-flex shrink-0 [&>svg]:size-3.5" aria-hidden="true">
        {icon}
      </span>
    )}
    {children}
  </span>
);
