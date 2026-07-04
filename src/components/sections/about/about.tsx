"use client";

import Image from "next/image";

import { revealFromLeftVariants, revealFromRightVariants } from "@/animations/reveal";
import { Container } from "@/components/layout/container";
import {
  ScrollReveal,
  ScrollRevealItem,
  ScrollRevealStagger,
} from "@/components/ui/scroll-reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import {
  ABOUT_EYEBROW,
  ABOUT_FOCUS_AREAS,
  ABOUT_HEADING,
  ABOUT_HIGHLIGHT,
  ABOUT_IMAGE,
  ABOUT_PARAGRAPHS,
} from "@/constants/about";
import { IMAGE_SIZES } from "@/constants/breakpoints";

import { AboutFocusItem } from "./about-focus-item";

const renderHeading = () => {
  const parts = ABOUT_HEADING.split(ABOUT_HIGHLIGHT);

  return (
    <>
      {parts[0]}
      <span className="text-[var(--primary)] italic">{ABOUT_HIGHLIGHT}</span>
      {parts[1]}
    </>
  );
};

export const About = () => (
  <section
    id="about"
    aria-label={ABOUT_EYEBROW}
    className="border-border bg-background w-full border-t py-12 md:py-20 lg:py-24"
  >
    <Container>
      <div className="grid-12 items-start gap-8 md:gap-10 lg:gap-12">
        <ScrollReveal
          className="col-span-12 lg:col-span-4"
          variants={revealFromLeftVariants}
        >
          <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-[var(--radius-2xl)] bg-[var(--background-secondary)] sm:max-w-[280px] lg:mx-0 lg:max-w-none">
            <Image
              src={ABOUT_IMAGE.src}
              alt={ABOUT_IMAGE.alt}
              fill
              className="object-cover"
              sizes={IMAGE_SIZES.aboutPortrait}
              quality={80}
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal
          className="col-span-12 flex flex-col gap-4 md:gap-6 lg:col-span-8"
          variants={revealFromRightVariants}
        >
          <SectionEyebrow>{ABOUT_EYEBROW}</SectionEyebrow>

          <h2 className="max-w-heading text-foreground text-2xl leading-tight font-semibold tracking-tight sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
            {renderHeading()}
          </h2>

          <div className="flex flex-col gap-3 md:gap-4">
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph}
                className="text-muted-foreground text-sm leading-relaxed md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <ScrollRevealStagger className="grid gap-4 pt-1 sm:grid-cols-2 sm:gap-6 md:pt-2">
            {ABOUT_FOCUS_AREAS.map((area) => (
              <ScrollRevealItem key={area.title}>
                <AboutFocusItem area={area} />
              </ScrollRevealItem>
            ))}
          </ScrollRevealStagger>
        </ScrollReveal>
      </div>
    </Container>
  </section>
);
