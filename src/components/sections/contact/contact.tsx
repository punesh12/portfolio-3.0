"use client";

import { Container } from "@/components/layout/container";
import {
  ScrollReveal,
  ScrollRevealItem,
  ScrollRevealStagger,
} from "@/components/ui/scroll-reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import {
  CONTACT_DESCRIPTION,
  CONTACT_EYEBROW,
  CONTACT_HEADING,
  CONTACT_METHODS,
} from "@/constants/contact";

import { ContactLink } from "./contact-link";

export const Contact = () => (
  <section
    id="contact"
    aria-label={CONTACT_EYEBROW}
    className="border-border bg-background w-full scroll-mt-[var(--navbar-height)] border-t py-12 md:py-20 lg:py-24"
  >
    <Container className="mx-auto max-w-3xl">
      <ScrollReveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <SectionEyebrow align="center">{CONTACT_EYEBROW}</SectionEyebrow>
        <h2 className="max-w-heading text-foreground text-3xl leading-tight font-black tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
          {CONTACT_HEADING}
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
          {CONTACT_DESCRIPTION}
        </p>
      </ScrollReveal>

      <ScrollRevealStagger
        className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-10 md:gap-14"
        stagger={0.12}
      >
        {CONTACT_METHODS.map((method) => (
          <ScrollRevealItem key={method.label}>
            <ContactLink method={method} />
          </ScrollRevealItem>
        ))}
      </ScrollRevealStagger>
    </Container>
  </section>
);
