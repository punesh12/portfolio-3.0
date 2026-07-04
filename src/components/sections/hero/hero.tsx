"use client";

import { ArrowRight, Download } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button/button.styles";
import { SocialButton } from "@/components/ui/social-button";
import {
  HERO_DESCRIPTION,
  HERO_HEADING,
  HERO_HIGHLIGHT_WORD,
  HERO_ROLE,
} from "@/constants/hero";
import { RESUME_URL } from "@/constants/navigation";
import { HERO_SOCIAL_LINKS } from "@/constants/social";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/utils/scroll-to";

import { HeroGrid } from "./hero-grid";
import { HeroScrollIndicator } from "./hero-scroll-indicator";
import { HeroVisual } from "./hero-visual";

const renderHeading = () => {
  const parts = HERO_HEADING.split(HERO_HIGHLIGHT_WORD);

  return (
    <>
      {parts[0]}
      <span className="text-[var(--primary)] underline decoration-[var(--primary)] decoration-[3px] underline-offset-[6px]">
        {HERO_HIGHLIGHT_WORD}
      </span>
      {parts[1]}
    </>
  );
};

export const Hero = () => (
  <section
    aria-label="Hero"
    className="relative w-full overflow-hidden pt-4 pb-10 md:pt-8 md:pb-16"
  >
    <HeroGrid />

    <Container className="relative z-[1]">
      <div className="grid-12 items-center gap-8 md:gap-12 lg:gap-16">
        <div className="col-span-12 flex flex-col gap-5 md:gap-8 lg:col-span-6 lg:max-w-none">
          <span
            className={cn(
              "hero-enter hero-enter-delay-1 inline-flex w-fit rounded-full border border-[var(--badge-blue-border)]",
              "bg-[var(--badge-blue-bg)] px-3 py-1 md:px-4 md:py-1.5",
              "text-[11px] font-semibold tracking-wider text-[var(--badge-blue-fg)] uppercase md:text-xs",
            )}
          >
            {HERO_ROLE}
          </span>

          <h1 className="max-w-heading text-foreground text-[1.75rem] leading-[1.15] font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
            {renderHeading()}
          </h1>

          <p className="max-w-paragraph text-muted-foreground text-sm leading-relaxed md:text-base">
            {HERO_DESCRIPTION}
          </p>

          <div
            className={cn(
              "hero-enter hero-enter-delay-2 flex flex-col gap-3",
              "sm:flex-row sm:flex-wrap sm:items-center sm:gap-4",
            )}
          >
            <Button
              variant="primary"
              size="md"
              className="w-full sm:w-auto"
              rightIcon={<ArrowRight className="size-4" aria-hidden="true" />}
              onClick={() => scrollToSection("work")}
            >
              View My Work
            </Button>
            <a
              href={RESUME_URL}
              download
              className={cn(
                buttonVariants({ variant: "outline", size: "md" }),
                "w-full sm:w-auto",
              )}
            >
              Download Resume
              <Download className="size-4" aria-hidden="true" />
            </a>
          </div>

          <div className="hero-enter hero-enter-delay-3 flex flex-wrap items-center gap-3">
            <p className="text-muted-foreground font-mono text-[11px] font-medium tracking-wider uppercase md:text-xs">
              Let&apos;s connect:
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {HERO_SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <SocialButton key={link.label} href={link.href} label={link.label}>
                    <Icon aria-hidden="true" />
                  </SocialButton>
                );
              })}
            </div>
          </div>
        </div>

        <div className="col-span-6 hidden lg:block">
          <HeroVisual />
        </div>
      </div>
    </Container>

    <HeroScrollIndicator />
  </section>
);
