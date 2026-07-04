"use client";

import { useEffect, useState } from "react";

import { getLenis } from "@/lib/lenis";

const calculateProgress = (): number => {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollHeight <= 0) return 0;
  return Math.min(Math.max(window.scrollY / scrollHeight, 0), 1);
};

export const useScrollProgress = (): number => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let lenisCleanup: (() => void) | undefined;
    let nativeCleanup: (() => void) | undefined;
    let intervalId: number | undefined;

    const attachLenis = () => {
      const lenis = getLenis();
      if (!lenis) return false;

      const handleScroll = ({ progress: scrollProgress }: { progress: number }) => {
        setProgress(scrollProgress);
      };

      setProgress(lenis.progress);
      lenis.on("scroll", handleScroll);
      lenisCleanup = () => lenis.off("scroll", handleScroll);

      nativeCleanup?.();
      nativeCleanup = undefined;

      return true;
    };

    const attachNative = () => {
      const updateFromNative = () => setProgress(calculateProgress());
      updateFromNative();
      window.addEventListener("scroll", updateFromNative, { passive: true });
      window.addEventListener("resize", updateFromNative);
      nativeCleanup = () => {
        window.removeEventListener("scroll", updateFromNative);
        window.removeEventListener("resize", updateFromNative);
      };
    };

    if (!attachLenis()) {
      attachNative();
      intervalId = window.setInterval(() => {
        if (attachLenis() && intervalId) {
          window.clearInterval(intervalId);
        }
      }, 50);
    }

    return () => {
      if (intervalId) window.clearInterval(intervalId);
      lenisCleanup?.();
      nativeCleanup?.();
    };
  }, []);

  return progress;
};
