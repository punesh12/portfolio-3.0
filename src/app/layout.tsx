import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { AppShell } from "@/components/layout";
import { HERO_ROLE } from "@/constants/hero";
import { SITE_NAME } from "@/constants/navigation";
import { AppProviders } from "@/providers";
import "@/styles/globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_NAME} — ${HERO_ROLE}. Frontend architecture, design systems, and high-performance product experiences.`,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      suppressHydrationWarning
    >
      <AppProviders>
        <AppShell>{children}</AppShell>
      </AppProviders>
    </body>
  </html>
);

export default RootLayout;
