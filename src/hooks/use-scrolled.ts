"use client";

import { useEffect, useState } from "react";

import { getLenis } from "@/lib/lenis";

const DEFAULT_THRESHOLD = 20;

export const useScrolled = (threshold = DEFAULT_THRESHOLD): boolean => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > threshold);
    };

    update();

    const lenis = getLenis();
    if (lenis) {
      lenis.on("scroll", update);
    }

    window.addEventListener("scroll", update, { passive: true });

    return () => {
      if (lenis) {
        lenis.off("scroll", update);
      }
      window.removeEventListener("scroll", update);
    };
  }, [threshold]);

  return scrolled;
};
