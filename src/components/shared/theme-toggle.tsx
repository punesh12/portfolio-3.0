"use client";

import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useSyncExternalStore } from "react";

import { DEFAULT_THEME, THEME_APPEARANCE, getNextTheme } from "@/constants/theme";
import { cn } from "@/lib/utils";
import type { Theme } from "@/types";

const THEME_ICONS: Record<Theme, LucideIcon> = {
  system: Monitor,
  light: Sun,
  dark: Moon,
};

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const useMounted = () => useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  const activeTheme = (theme ?? DEFAULT_THEME) as Theme;
  const appearance = THEME_APPEARANCE[activeTheme];
  const Icon = THEME_ICONS[activeTheme];

  const handleToggle = useCallback(() => {
    setTheme(getNextTheme(activeTheme));
  }, [activeTheme, setTheme]);

  if (!mounted) {
    return (
      <div
        className="inline-flex size-9 items-center justify-center rounded-[var(--radius-sm)]"
        aria-hidden="true"
      >
        <div className="bg-muted-foreground/20 size-4 rounded-sm" />
      </div>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex size-9 cursor-pointer items-center justify-center rounded-[var(--radius-sm)]",
        "border border-transparent bg-transparent",
        "transition-[background-color,border-color,color,transform] duration-[var(--duration-hover)]",
        "hover:border-border hover:bg-[var(--card)]",
        "active:scale-90",
        "focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:outline-none",
      )}
      aria-label={`${appearance.label}. Click to switch theme.`}
      onClick={handleToggle}
    >
      <Icon className={cn("size-4", appearance.iconClassName)} aria-hidden="true" />
    </button>
  );
};
