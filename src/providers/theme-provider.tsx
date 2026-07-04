"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

import { DEFAULT_THEME, THEME_STORAGE_KEY, THEMES } from "@/constants/theme";

type ThemeProviderProps = ComponentProps<typeof NextThemesProvider>;

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => (
  <NextThemesProvider
    attribute="class"
    defaultTheme={DEFAULT_THEME}
    themes={[...THEMES]}
    storageKey={THEME_STORAGE_KEY}
    enableSystem
    enableColorScheme
    disableTransitionOnChange={false}
    {...props}
  >
    {children}
  </NextThemesProvider>
);
