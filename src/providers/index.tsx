import type { ReactNode } from "react";

import { SmoothScrollLoader } from "@/providers/smooth-scroll-loader";
import { ThemeProvider } from "@/providers/theme-provider";

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider>
    <SmoothScrollLoader>{children}</SmoothScrollLoader>
  </ThemeProvider>
);
