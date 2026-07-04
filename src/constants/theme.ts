import type { Theme } from "@/types";

export const THEME_STORAGE_KEY = "portfolio-theme";

export const THEMES = ["light", "dark", "system"] as const satisfies readonly Theme[];

export const DEFAULT_THEME: Theme = "system";

/** Order used when cycling the theme toggle */
export const THEME_CYCLE: Theme[] = ["system", "light", "dark"];

export interface ThemeAppearance {
  label: string;
  iconClassName: string;
}

export const THEME_APPEARANCE: Record<Theme, ThemeAppearance> = {
  system: {
    label: "System theme",
    iconClassName: "text-[var(--primary)]",
  },
  light: {
    label: "Light theme",
    iconClassName: "text-[var(--warning)]",
  },
  dark: {
    label: "Dark theme",
    iconClassName: "text-[var(--accent)]",
  },
};

export const getNextTheme = (current: Theme): Theme => {
  const index = THEME_CYCLE.indexOf(current);
  return THEME_CYCLE[(index + 1) % THEME_CYCLE.length] ?? DEFAULT_THEME;
};
