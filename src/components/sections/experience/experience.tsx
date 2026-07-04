"use client";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Timeline } from "@/components/ui/timeline";
import {
  EXPERIENCE_ENTRIES,
  EXPERIENCE_EYEBROW,
  EXPERIENCE_HEADING,
} from "@/constants/experience";

import { ExperienceTimelineCard } from "./experience-timeline-card";

const timelineData = EXPERIENCE_ENTRIES.map((entry) => ({
  title: entry.yearRange,
  subtitle: entry.dateRange,
  content: <ExperienceTimelineCard entry={entry} />,
}));

export const Experience = () => (
  <section
    id="experience"
    aria-label={EXPERIENCE_EYEBROW}
    className="border-border bg-background w-full border-t py-12 md:py-20 lg:py-24"
  >
    <Container className="mb-8 md:mb-14">
      <ScrollReveal className="flex max-w-2xl flex-col gap-3 md:gap-4">
        <SectionEyebrow>{EXPERIENCE_EYEBROW}</SectionEyebrow>
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
          {EXPERIENCE_HEADING}
        </h2>
      </ScrollReveal>
    </Container>

    <Container>
      <Timeline data={timelineData} />
    </Container>
  </section>
);
