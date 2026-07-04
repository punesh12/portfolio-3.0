const THEME_TRANSITION_MS = 600;

const setThemeOrigin = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  const root = document.documentElement;
  root.style.setProperty("--theme-transition-x", `${x}px`);
  root.style.setProperty("--theme-transition-y", `${y}px`);
  root.style.setProperty("--theme-transition-radius", `${endRadius}px`);
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const runThemeTransition = (
  origin: HTMLElement,
  updateTheme: () => void,
): void => {
  if (prefersReducedMotion() || typeof document.startViewTransition !== "function") {
    updateTheme();
    return;
  }

  setThemeOrigin(origin);
  document.documentElement.classList.add("theme-transitioning");

  const transition = document.startViewTransition(() => {
    updateTheme();
  });

  transition.finished.finally(() => {
    document.documentElement.classList.remove("theme-transitioning");
    window.setTimeout(() => {
      const root = document.documentElement;
      root.style.removeProperty("--theme-transition-x");
      root.style.removeProperty("--theme-transition-y");
      root.style.removeProperty("--theme-transition-radius");
    }, THEME_TRANSITION_MS);
  });
};
