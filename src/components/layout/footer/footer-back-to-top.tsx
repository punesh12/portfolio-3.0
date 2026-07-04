"use client";

import { ArrowUp } from "lucide-react";

import { FOOTER_BACK_TO_TOP_LABEL } from "@/constants/footer";
import { cn } from "@/lib/utils";
import { scrollToTop } from "@/utils/scroll-to";

interface FooterBackToTopProps {
  className?: string;
}

export const FooterBackToTop = ({ className }: FooterBackToTopProps) => (
  <button
    type="button"
    onClick={scrollToTop}
    className={cn(
      "text-foreground inline-flex items-center gap-1 text-sm leading-none font-medium",
      "transition-colors duration-[var(--duration-hover)] hover:text-[var(--primary)]",
      className,
    )}
  >
    {FOOTER_BACK_TO_TOP_LABEL}
    <ArrowUp className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
  </button>
);
