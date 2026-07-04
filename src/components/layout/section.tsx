import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Container } from "./container";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabel?: string;
  /** When true, wraps children in a Container */
  contained?: boolean;
  /** Toggle default vertical section padding */
  padded?: boolean;
}

export const Section = ({
  children,
  className,
  id,
  ariaLabel,
  contained = false,
  padded = true,
}: SectionProps) => (
  <section
    id={id}
    aria-label={ariaLabel}
    className={cn("w-full", padded && "section-padding", className)}
  >
    {contained ? <Container>{children}</Container> : children}
  </section>
);
