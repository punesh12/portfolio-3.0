import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import { AppShell } from "@/components/layout";
import { HERO_ROLE } from "@/constants/hero";
import { SITE_LOGO_SRC, SITE_NAME } from "@/constants/navigation";
import { AppProviders } from "@/providers";
import "@/styles/globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_NAME} — ${HERO_ROLE}. Frontend architecture, design systems, and high-performance product experiences.`,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  icons: {
    icon: [{ url: SITE_LOGO_SRC, type: "image/svg+xml" }],
    apple: SITE_LOGO_SRC,
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={`${fontSans.variable} font-sans antialiased`}
      suppressHydrationWarning
    >
      <AppProviders>
        <AppShell>{children}</AppShell>
      </AppProviders>
      {gaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="lazyOnload"
          />
          <Script id="ga-init" strategy="lazyOnload">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
          </Script>
        </>
      ) : null}
    </body>
  </html>
);

export default RootLayout;
