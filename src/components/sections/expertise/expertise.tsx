"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { EXPERTISE_EYEBROW, EXPERTISE_HEADING } from "@/constants/expertise";

import { ExpertiseMarquees } from "./expertise-marquees";

export const Expertise = () => (
  <section
    id="expertise"
    aria-label={EXPERTISE_EYEBROW}
    className="border-border bg-background-secondary w-full scroll-mt-[var(--navbar-height)] border-t py-12 md:py-20 lg:py-24"
  >
    <Container className="mb-8 md:mb-14">
      <ScrollReveal className="flex max-w-2xl flex-col gap-3 md:gap-4">
        <SectionEyebrow>{EXPERTISE_EYEBROW}</SectionEyebrow>
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
          {EXPERTISE_HEADING}
        </h2>
      </ScrollReveal>
    </Container>

    <ExpertiseMarquees />
  </section>
);
