import type { ReactNode } from "react";

import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/providers/theme-provider";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider>
    <SmoothScrollProvider>{children}</SmoothScrollProvider>
  </ThemeProvider>
);
