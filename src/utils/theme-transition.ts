import type { Theme } from "@/types";

const THEME_REVEAL_MS = 500;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Resolve whether the document should use the dark class for a theme preference. */
export const resolveThemeIsDark = (theme: Theme): boolean => {
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

/**
 * Apply the visual theme class immediately so View Transitions capture the
 * correct "new" snapshot without waiting on React / next-themes effects.
 */
export const applyThemeClass = (theme: Theme): void => {
  const isDark = resolveThemeIsDark(theme);
  const root = document.documentElement;
  root.classList.toggle("dark", isDark);
  root.style.colorScheme = isDark ? "dark" : "light";
};

/**
 * Circular theme reveal from a button.
 *
 * Important: do NOT call setTheme / flushSync inside the View Transition
 * callback — that re-renders the whole React tree and freezes the circle.
 * Only flip the `dark` class for the snapshot, animate with WAAPI after
 * `ready`, then sync React state once the reveal has started.
 */
export const runThemeTransition = (
  origin: HTMLElement,
  nextTheme: Theme,
  syncReactTheme: (theme: Theme) => void,
): void => {
  const commit = () => {
    applyThemeClass(nextTheme);
    syncReactTheme(nextTheme);
  };

  if (prefersReducedMotion() || typeof document.startViewTransition !== "function") {
    commit();
    return;
  }

  const nextIsDark = resolveThemeIsDark(nextTheme);
  const currentIsDark = document.documentElement.classList.contains("dark");

  // Preference changed but appearance did not (e.g. dark → system when OS is dark).
  if (nextIsDark === currentIsDark) {
    syncReactTheme(nextTheme);
    return;
  }

  const rect = origin.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

  const transition = document.startViewTransition(() => {
    applyThemeClass(nextTheme);
  });

  void transition.ready
    .then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: THEME_REVEAL_MS,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );

      // Sync next-themes after the first reveal frame so React work doesn't stall the snapshot.
      requestAnimationFrame(() => {
        syncReactTheme(nextTheme);
      });
    })
    .catch(() => {
      syncReactTheme(nextTheme);
    });
};
