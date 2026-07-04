"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

import { metricValueArrowVariants, metricValueVariants } from "./metric-value.styles";
import type { MetricValueProps } from "./metric-value.types";

const ARROW_PATTERN = /\s*→\s*/;
const PERCENT_PATTERN = /^(\d+)%$/;
const COUNT_UP_DURATION_MS = 1200;

const easeOutCubic = (progress: number) => 1 - (1 - progress) ** 3;

const AnimatedPercent = ({ target }: { target: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;
    let frameId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / COUNT_UP_DURATION_MS, 1);
      setCount(Math.round(target * easeOutCubic(progress)));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, target]);

  return <span ref={ref}>{count}%</span>;
};

const PercentValue = ({ value }: { value: string }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const match = value.match(PERCENT_PATTERN);
  const target = match ? Number(match[1]) : 0;

  if (prefersReducedMotion) {
    return <span>{target}%</span>;
  }

  return <AnimatedPercent target={target} />;
};

const renderValue = (value: string) => {
  if (PERCENT_PATTERN.test(value)) {
    return <PercentValue value={value} />;
  }

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
