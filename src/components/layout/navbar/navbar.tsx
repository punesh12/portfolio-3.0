"use client";

import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button/button.styles";
import { NAV_LINKS, RESUME_URL } from "@/constants/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrolled } from "@/hooks/use-scrolled";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/utils/scroll-to";

import { NavbarLogo } from "./navbar-logo";
import {
  mobileNavLinkStyles,
  navLinkStyles,
  navLinkUnderlineStyles,
} from "./navbar.styles";
import type { NavbarProps } from "./navbar.types";

const getSectionId = (href: string): string => href.replace("#", "");

export const Navbar = ({ links = NAV_LINKS }: NavbarProps) => {
  const scrolled = useScrolled();
  const scrollProgress = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);

  const sectionIds = useMemo(
    () =>
      links
        .filter((link) => link.href.startsWith("#"))
        .map((link) => getSectionId(link.href)),
    [links],
  );

  const activeSection = useActiveSection(sectionIds);

  const isLinkActive = useCallback(
    (href: string) => {
      if (!href.startsWith("#")) return false;
      return getSectionId(href) === activeSection;
    },
    [activeSection],
  );

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);

    if (!href.startsWith("#")) return;

    scrollToSection(href);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[var(--z-sticky)]",
          "border-b backdrop-blur-md transition-[border-color,background-color,box-shadow,backdrop-filter]",
          "duration-[var(--duration-hover)] ease-[var(--easing-standard)]",
          scrolled
            ? "border-border bg-[var(--surface-primary)]/95 shadow-[var(--shadow-xs)]"
            : "border-transparent bg-transparent backdrop-blur-none",
        )}
      >
        <div
          className="absolute inset-x-0 top-0 h-[2px] origin-left bg-[var(--nav-underline)]"
          style={{ transform: `scaleX(${scrollProgress})` }}
          aria-hidden="true"
        />

        <Container
          as="nav"
          aria-label="Main navigation"
          className="h-[var(--navbar-height)]"
        >
          <div className="grid h-full grid-cols-[auto_1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
            <NavbarLogo className="justify-self-start" />

            <ul className="hidden items-center justify-center gap-6 lg:flex xl:gap-8">
              {links.map((link) => {
                const active = isLinkActive(link.href);

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(event) => {
                        if (link.href.startsWith("#")) {
                          event.preventDefault();
                          handleNavClick(link.href);
                        }
                      }}
                      className={navLinkStyles({ active })}
                      aria-current={active ? "true" : undefined}
                    >
                      {link.label}
                      {active && (
                        <span className={navLinkUnderlineStyles()} aria-hidden="true" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center justify-end gap-3">
              <ThemeToggle />
              <a
                href={RESUME_URL}
                download
                className={cn(
                  buttonVariants({ variant: "primary", size: "md" }),
                  "hidden sm:inline-flex",
                )}
              >
                Download Resume
                <Download className="size-4" aria-hidden="true" />
              </a>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMobileOpen((open) => !open)}
              >
                {mobileOpen ? (
                  <X className="size-4" aria-hidden="true" />
                ) : (
                  <Menu className="size-4" aria-hidden="true" />
                )}
              </Button>
            </div>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            className="border-border fixed inset-x-0 top-[var(--navbar-height)] z-[var(--z-dropdown)] border-b bg-[var(--nav-bg)]/98 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Container className="py-4">
              <ul className="space-y-1">
                {links.map((link) => {
                  const active = isLinkActive(link.href);

                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(event) => {
                          if (link.href.startsWith("#")) {
                            event.preventDefault();
                            handleNavClick(link.href);
                          }
                        }}
                        className={mobileNavLinkStyles({ active })}
                        aria-current={active ? "true" : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="border-border mt-4 border-t pt-4 sm:hidden">
                <a
                  href={RESUME_URL}
                  download
                  className={cn(
                    buttonVariants({ variant: "primary", size: "md" }),
                    "w-full",
                  )}
                >
                  Download Resume
                  <Download className="size-4" aria-hidden="true" />
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
