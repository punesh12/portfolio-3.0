import type { LucideIcon } from "lucide-react";
import { Braces, Bug, Clock, RefreshCw, Zap } from "lucide-react";

import type { MetricCardIconTone } from "@/components/ui/metric-card/metric-card.styles";

export interface ImpactMetric {
  icon: LucideIcon;
  value: string;
  description: string;
  iconTone: MetricCardIconTone;
}

export const IMPACT_DELIVERED_EYEBROW = "Impact Delivered";

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    icon: Clock,
    value: "2s → 0.5s",
    description: "Page Load Time on Samsung Tizen TVs",
    iconTone: "blue",
  },
  {
    icon: Bug,
    value: "45%",
    description: "Reduction in Production Bugs",
    iconTone: "rose",
  },
  {
    icon: Zap,
    value: "40%",
    description: "Improvement in Core Web Vitals",
    iconTone: "amber",
  },
  {
    icon: Braces,
    value: "35%",
    description: "Reduction in Bundle Size",
    iconTone: "purple",
  },
  {
    icon: RefreshCw,
    value: "30%",
    description: "Faster PR Cycle Time",
    iconTone: "emerald",
  },
];
