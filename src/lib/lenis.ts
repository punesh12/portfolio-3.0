"use client";

import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export interface LenisConfig {
  duration?: number;
  smoothWheel?: boolean;
}

export const createLenis = (config: LenisConfig = {}): Lenis => {
  if (lenisInstance) {
    return lenisInstance;
  }

  lenisInstance = new Lenis({
    duration: config.duration ?? 1.1,
    lerp: 0.09,
    smoothWheel: config.smoothWheel ?? true,
  });

  return lenisInstance;
};

export const getLenis = (): Lenis | null => lenisInstance;

export const destroyLenis = (): void => {
  lenisInstance?.destroy();
  lenisInstance = null;
};
