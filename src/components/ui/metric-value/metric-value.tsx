import { cn } from "@/lib/utils";

import { metricValueArrowVariants, metricValueVariants } from "./metric-value.styles";
import type { MetricValueProps } from "./metric-value.types";

const ARROW_PATTERN = /\s*→\s*/;

const renderValue = (value: string) => {
  const parts = value.split(ARROW_PATTERN);

  if (parts.length !== 2) {
    return value;
  }

  return (
    <>
      {parts[0]}
      <span className={metricValueArrowVariants()} aria-hidden="true">
        →
      </span>
      {parts[1]}
    </>
  );
};

export const MetricValue = ({ value, className, ...props }: MetricValueProps) => (
  <p className={cn(metricValueVariants(), className)} {...props}>
    {renderValue(value)}
  </p>
);
