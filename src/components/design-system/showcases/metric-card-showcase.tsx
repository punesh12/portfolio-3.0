import { Braces, Bug, Gauge, GitBranch, Zap } from "lucide-react";

import {
  ComponentSection,
  SubSection,
} from "@/components/design-system/component-section";
import { VariantGrid, VariantPreview } from "@/components/design-system/variant-preview";
import { MetricCard, MetricCardGrid } from "@/components/ui/metric-card";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

const METRIC_ITEMS = [
  {
    icon: <Bug />,
    value: "45%",
    description: "Reduction in Production Bugs",
    iconTone: "rose" as const,
  },
  {
    icon: <Gauge />,
    value: "40%",
    description: "Improvement in Core Web Vitals (LCP)",
    iconTone: "amber" as const,
  },
  {
    icon: <Braces />,
    value: "35%",
    description: "Reduction in Initial Bundle Size",
    iconTone: "purple" as const,
  },
  {
    icon: <GitBranch />,
    value: "30%",
    description: "Faster PR Cycle & Merge Time",
    iconTone: "emerald" as const,
  },
  {
    icon: <Zap />,
    value: "2s → 0.5s",
    description: "Page Load Time on Samsung Tizen TVs",
    iconTone: "blue" as const,
  },
] as const;

export const MetricCardShowcase = () => (
  <ComponentSection
    id="metric-card"
    title="Metric Card"
    description="Impact metrics with icon, headline value, and supporting description. Decorative accents and hover border highlight."
    importPath='import { MetricCard, MetricCardGrid } from "@/components/ui/metric-card"'
  >
    <SubSection title="Impact Delivered">
      <div className="space-y-10">
        <SectionEyebrow align="center">Impact Delivered</SectionEyebrow>
        <MetricCardGrid>
          {METRIC_ITEMS.map((item) => (
            <MetricCard
              key={item.description}
              icon={item.icon}
              value={item.value}
              description={item.description}
              iconTone={item.iconTone}
            />
          ))}
        </MetricCardGrid>
      </div>
    </SubSection>

    <SubSection title="Single Card">
      <VariantGrid columns={1}>
        <VariantPreview
          props={[
            { name: "value", value: "45%" },
            { name: "description", value: "Reduction in Production Bugs" },
          ]}
          className="!block"
        >
          <MetricCard
            icon={<Bug />}
            value="45%"
            description="Reduction in Production Bugs"
            className="max-w-xs"
          />
        </VariantPreview>
      </VariantGrid>
    </SubSection>

    <SubSection title="Props API">
      <div className="border-border overflow-x-auto rounded-[var(--radius-md)] border">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead className="border-border bg-background-secondary border-b">
            <tr>
              <th className="text-foreground px-4 py-3 font-semibold">Prop</th>
              <th className="text-foreground px-4 py-3 font-semibold">Type</th>
              <th className="text-foreground px-4 py-3 font-semibold">Required</th>
            </tr>
          </thead>
          <tbody className="divide-border divide-y">
            {[
              ["icon", "ReactNode", "yes"],
              ["value", "string", "yes"],
              ["description", "string", "yes"],
            ].map(([prop, type, required]) => (
              <tr key={prop}>
                <td className="text-foreground px-4 py-3 font-mono">{prop}</td>
                <td className="text-muted-foreground px-4 py-3 font-mono text-xs">
                  {type}
                </td>
                <td className="text-muted-foreground px-4 py-3 font-mono">{required}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SubSection>
  </ComponentSection>
);
