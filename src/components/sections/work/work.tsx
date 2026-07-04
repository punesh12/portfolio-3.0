"use client";

import { Container } from "@/components/layout/container";
import {
  ScrollReveal,
  ScrollRevealItem,
  ScrollRevealStagger,
} from "@/components/ui/scroll-reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { PROJECT_ENTRIES, WORK_EYEBROW, WORK_HEADING } from "@/constants/projects";

import { ProjectCard } from "./project-card";

export const Work = () => (
  <section
    id="work"
    aria-label={WORK_EYEBROW}
    className="border-border bg-background w-full border-t py-12 md:py-20 lg:py-24"
  >
    <Container>
      <ScrollReveal className="mb-8 flex max-w-2xl flex-col gap-3 md:mb-14 md:gap-4">
        <SectionEyebrow>{WORK_EYEBROW}</SectionEyebrow>
        <h2 className="text-foreground text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
          {WORK_HEADING}
        </h2>
      </ScrollReveal>

      <ScrollRevealStagger className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {PROJECT_ENTRIES.map((project) => (
          <ScrollRevealItem key={project.title}>
            <ProjectCard project={project} />
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>
    </Container>
  </section>
);
