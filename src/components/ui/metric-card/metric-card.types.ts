import type { HTMLAttributes, ReactNode } from "react";

import type { MetricCardIconTone } from "./metric-card.styles";

export interface MetricCardProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  value: string;
  description: string;
  iconTone?: MetricCardIconTone;
}

export interface MetricCardGridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
