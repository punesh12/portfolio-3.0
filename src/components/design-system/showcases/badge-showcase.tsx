import { Bot, Braces, Database, Gauge, Sparkles, Terminal } from "lucide-react";

import {
  ComponentSection,
  SubSection,
} from "@/components/design-system/component-section";
import { VariantGrid, VariantPreview } from "@/components/design-system/variant-preview";
import { Badge } from "@/components/ui/badge";
import type { BadgeVariant } from "@/components/ui/badge";

const VARIANT_EXAMPLES: Array<{
  variant: BadgeVariant;
  label: string;
  icon: React.ReactNode;
}> = [
  { variant: "blue", label: "React.js", icon: <Braces /> },
  { variant: "blue", label: "TypeScript", icon: <Terminal /> },
  { variant: "blue", label: "PostgreSQL", icon: <Database /> },
  { variant: "purple", label: "OpenAI API", icon: <Bot /> },
  { variant: "purple", label: "Neural Networks", icon: <Sparkles /> },
  { variant: "success", label: "99 Lighthouse", icon: <Gauge /> },
];

export const BadgeShowcase = () => (
  <ComponentSection
    id="badge"
    title="Badges"
    description="Skill and metric chips with icon support. Monospace labels with theme-aware color variants."
    importPath='import { Badge } from "@/components/ui/badge"'
  >
    <SubSection title="Portfolio Examples">
      <VariantPreview
        props={[{ name: "variant", value: "blue | purple | success" }]}
        className="!block"
      >
        <div className="flex flex-wrap gap-2">
          {VARIANT_EXAMPLES.map((item) => (
            <Badge key={item.label} variant={item.variant} icon={item.icon}>
              {item.label}
            </Badge>
          ))}
        </div>
      </VariantPreview>
    </SubSection>

    <SubSection title="Variants">
      <VariantGrid columns={3}>
        {(["blue", "purple", "success"] as const).map((variant) => (
          <VariantPreview
            key={variant}
            label={variant}
            props={[{ name: "variant", value: variant }]}
          >
            <Badge variant={variant} icon={<Braces />}>
              {variant === "blue" && "React.js"}
              {variant === "purple" && "OpenAI API"}
              {variant === "success" && "99 Lighthouse"}
            </Badge>
          </VariantPreview>
        ))}
      </VariantGrid>
    </SubSection>

    <SubSection title="Sizes">
      <VariantGrid columns={2}>
        <VariantPreview props={[{ name: "size", value: "sm" }]}>
          <Badge size="sm" variant="blue" icon={<Terminal />}>
            TypeScript
          </Badge>
        </VariantPreview>
        <VariantPreview props={[{ name: "size", value: "md" }]}>
          <Badge size="md" variant="blue" icon={<Terminal />}>
            TypeScript
          </Badge>
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
              <th className="text-foreground px-4 py-3 font-semibold">Default</th>
            </tr>
          </thead>
          <tbody className="divide-border divide-y">
            {[
              ["variant", '"blue" | "purple" | "success"', '"blue"'],
              ["size", '"sm" | "md"', '"md"'],
              ["icon", "ReactNode", "—"],
              ["children", "ReactNode", "—"],
            ].map(([prop, type, def]) => (
              <tr key={prop}>
                <td className="text-foreground px-4 py-3 font-mono">{prop}</td>
                <td className="text-muted-foreground px-4 py-3 font-mono text-xs">
                  {type}
                </td>
                <td className="text-muted-foreground px-4 py-3 font-mono">{def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SubSection>
  </ComponentSection>
);
