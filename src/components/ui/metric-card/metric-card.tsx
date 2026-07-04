import { MetricValue } from "@/components/ui/metric-value";
import { cn } from "@/lib/utils";

import { MetricCardDecor } from "./metric-card-decor";
import {
  metricCardDescriptionVariants,
  metricCardGridVariants,
  metricCardIconVariants,
  metricCardVariants,
} from "./metric-card.styles";
import type { MetricCardGridProps, MetricCardProps } from "./metric-card.types";

export const MetricCard = ({
  icon,
  value,
  description,
  iconTone = "blue",
  className,
  ...props
}: MetricCardProps) => (
  <article className={cn(metricCardVariants(), className)} {...props}>
    <MetricCardDecor iconTone={iconTone} />
    <div className="relative z-[1] flex h-full flex-col">
      <div className={metricCardIconVariants({ iconTone })} aria-hidden="true">
        {icon}
      </div>
      <div className="mt-3 flex flex-1 flex-col gap-2 md:mt-6 md:gap-3">
        <MetricValue value={value} />
        <p className={metricCardDescriptionVariants()}>{description}</p>
      </div>
    </div>
  </article>
);

export const MetricCardGrid = ({
  children,
  className,
  ...props
}: MetricCardGridProps) => (
  <div className={cn(metricCardGridVariants(), className)} {...props}>
    {children}
  </div>
);
