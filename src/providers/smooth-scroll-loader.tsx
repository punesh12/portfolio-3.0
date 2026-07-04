"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const SmoothScrollProvider = dynamic(
  () =>
    import("@/providers/smooth-scroll-provider").then(
      (module) => module.SmoothScrollProvider,
    ),
  { ssr: false },
);

interface SmoothScrollLoaderProps {
  children: ReactNode;
}

/** Defers Lenis + GSAP until after hydration to shrink the critical JS path. */
export const SmoothScrollLoader = ({ children }: SmoothScrollLoaderProps) => (
  <SmoothScrollProvider>{children}</SmoothScrollProvider>
);
