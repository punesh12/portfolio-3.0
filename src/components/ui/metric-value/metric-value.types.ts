import type { HTMLAttributes } from "react";

export interface MetricValueProps extends HTMLAttributes<HTMLParagraphElement> {
  value: string;
}
