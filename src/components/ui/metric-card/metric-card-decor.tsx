import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

import { metricCardDecorVariants } from "./metric-card.styles";
import type { MetricCardIconTone } from "./metric-card.styles";

const DECOR_POSITIONS = [
  { className: "right-4 top-4 size-3 rotate-12" },
  { className: "right-10 top-10 size-2 -rotate-6" },
  { className: "bottom-6 left-6 size-2.5 rotate-45" },
  { className: "bottom-10 left-12 size-2 -rotate-12" },
] as const;

interface MetricCardDecorProps {
  iconTone?: MetricCardIconTone;
}

export const MetricCardDecor = ({ iconTone = "blue" }: MetricCardDecorProps) => (
  <div
    className="pointer-events-none absolute inset-0 hidden md:block"
    aria-hidden="true"
  >
    {DECOR_POSITIONS.map((item) => (
      <Plus
        key={item.className}
        className={cn("absolute", metricCardDecorVariants({ iconTone }), item.className)}
        strokeWidth={2.5}
      />
    ))}
  </div>
);
