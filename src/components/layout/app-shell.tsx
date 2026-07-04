import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export interface AppShellProps {
  children: ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => (
  <div className="bg-background flex min-h-screen flex-col">
    <Navbar />
    <main id="main-content" className="flex-1 pt-[var(--navbar-height)]">
      {children}
    </main>
    <Footer />
  </div>
);
