"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";

import { timelineCardRevealVariants } from "@/animations/timeline";
import { SCROLL_REVEAL_VIEWPORT } from "@/constants/scroll-reveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

export interface TimelineEntry {
  title: string;
  subtitle?: string;
  content: ReactNode;
}

export interface TimelineProps {
  data: TimelineEntry[];
  className?: string;
}

/** Pixels before/after dot center where highlight is allowed */
const DOT_NEAR_THRESHOLD = 8;

export const Timeline = ({ data, className }: TimelineProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [height, setHeight] = useState(0);
  const [dotOffsets, setDotOffsets] = useState<number[]>([]);
  const [beamHeight, setBeamHeight] = useState(0);

  const setItemRef = useCallback(
    (index: number) => (element: HTMLDivElement | null) => {
      itemRefs.current[index] = element;
    },
    [],
  );

  const setDotRef = useCallback(
    (index: number) => (element: HTMLDivElement | null) => {
      dotRefs.current[index] = element;
    },
    [],
  );

  const updateMeasurements = useCallback(() => {
    if (!ref.current) return;

    setHeight(ref.current.getBoundingClientRect().height);
    setDotOffsets(
      itemRefs.current.map((item, index) => {
        const dot = dotRefs.current[index];
        if (!item || !dot) return Number.POSITIVE_INFINITY;

        return item.offsetTop + dot.offsetTop + dot.offsetHeight / 2;
      }),
    );
  }, []);

  useEffect(() => {
    updateMeasurements();

    const handleResize = () => updateMeasurements();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [data, updateMeasurements]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 45%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useMotionValueEvent(heightTransform, "change", (latest) => {
    setBeamHeight(latest);
  });

  const isDotReached = (index: number) => {
    const dotY = dotOffsets[index];
    if (!Number.isFinite(dotY)) return false;

    return beamHeight >= dotY - DOT_NEAR_THRESHOLD;
  };

  return (
    <div ref={containerRef} className={cn("w-full font-sans", className)}>
      <div ref={ref} className="relative mx-auto w-full max-w-7xl pb-8 md:pb-20">
        {data.map((item, index) => {
          const isReached = isDotReached(index);

          return (
            <div
              key={`${item.title}-${index}`}
              ref={setItemRef(index)}
              className={cn("flex justify-start md:gap-10", index > 0 && "pt-8 md:pt-32")}
            >
              <div
                className="sticky top-24 flex max-w-xs flex-col items-center self-start md:top-40 md:w-full md:max-w-sm md:flex-row lg:max-w-md"
                style={{ zIndex: 40 + index }}
              >
                <div className="bg-background absolute left-0 flex size-8 items-center justify-center rounded-full md:left-3 md:size-10">
                  <motion.div
                    ref={setDotRef(index)}
                    animate={
                      prefersReducedMotion ? undefined : { scale: isReached ? 1.15 : 1 }
                    }
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "size-3 rounded-full border-2 transition-colors duration-300 md:size-4",
                      isReached
                        ? "border-[var(--primary)] bg-[var(--primary)]"
                        : "border-border bg-[var(--background-secondary)]",
                    )}
                  />
                </div>
                <div className="hidden md:block md:pl-20">
                  <h3
                    className={cn(
                      "text-3xl font-bold tracking-tight transition-colors duration-300 lg:text-4xl",
                      isReached ? "text-[var(--primary)]" : "text-muted-foreground",
                    )}
                  >
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-muted-foreground mt-2 text-sm md:text-base">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative w-full pr-0 pl-10 md:pr-4 md:pl-4">
                <div className="mb-4 md:mb-6 md:hidden">
                  <h3
                    className={cn(
                      "text-lg font-bold tracking-tight transition-colors duration-300 sm:text-xl",
                      isReached ? "text-[var(--primary)]" : "text-muted-foreground",
                    )}
                  >
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                      {item.subtitle}
                    </p>
                  )}
                </div>
                {prefersReducedMotion ? (
                  item.content
                ) : (
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={SCROLL_REVEAL_VIEWPORT}
                    variants={timelineCardRevealVariants}
                  >
                    {item.content}
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}

        <div
          style={{ height: `${height}px` }}
          className="via-border absolute top-0 left-[15px] w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-[var(--primary)]"
          />
        </div>
      </div>
    </div>
  );
};
