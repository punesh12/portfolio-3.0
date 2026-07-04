"use client";

import { Container } from "@/components/layout/container";
import { MetricCard, MetricCardGrid } from "@/components/ui/metric-card";
import {
  ScrollReveal,
  ScrollRevealItem,
  ScrollRevealStagger,
} from "@/components/ui/scroll-reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { IMPACT_DELIVERED_EYEBROW, IMPACT_METRICS } from "@/constants/impact-metrics";

export const ImpactDelivered = () => (
  <section
    aria-label={IMPACT_DELIVERED_EYEBROW}
    className="border-border w-full border-t pt-8 pb-12 md:pt-14 md:pb-20"
  >
    <Container>
      <ScrollReveal className="mb-6 md:mb-12">
        <SectionEyebrow align="center">{IMPACT_DELIVERED_EYEBROW}</SectionEyebrow>
      </ScrollReveal>

      <ScrollRevealStagger>
        <MetricCardGrid>
          {IMPACT_METRICS.map((metric) => {
            const Icon = metric.icon;

            return (
              <ScrollRevealItem key={metric.description} className="h-full">
                <MetricCard
                  icon={<Icon />}
                  value={metric.value}
                  description={metric.description}
                  iconTone={metric.iconTone}
                />
              </ScrollRevealItem>
            );
          })}
        </MetricCardGrid>
      </ScrollRevealStagger>
    </Container>
  </section>
);
