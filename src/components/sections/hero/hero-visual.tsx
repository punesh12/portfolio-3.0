import { cn } from "@/lib/utils";

import { HeroIllustration } from "./hero-illustration";

interface HeroVisualProps {
  className?: string;
}

/** Static visual — no opacity:0 so it can contribute to a fast LCP paint. */
export const HeroVisual = ({ className }: HeroVisualProps) => (
  <div
    className={cn(
      "relative mx-auto w-full max-w-md md:max-w-xl lg:max-w-none",
      className,
    )}
  >
    <div
      className={cn(
        "border-border bg-card relative overflow-hidden rounded-[var(--radius-xl)] border shadow-[var(--shadow-md)]",
        "md:rounded-[var(--radius-2xl)] md:shadow-[var(--shadow-lg)]",
        "md:rotate-2 lg:rotate-3",
      )}
    >
      <div className="relative aspect-[4/3] w-full">
        <HeroIllustration />
      </div>
    </div>
  </div>
);
