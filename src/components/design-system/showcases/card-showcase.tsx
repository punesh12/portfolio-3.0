import { ArrowUpRight } from "lucide-react";

import {
  ComponentSection,
  SubSection,
} from "@/components/design-system/component-section";
import { VariantGrid, VariantPreview } from "@/components/design-system/variant-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CardVariant } from "@/components/ui/card";

const CARD_VARIANTS: CardVariant[] = ["default", "elevated", "outline", "interactive"];

export const CardShowcase = () => (
  <ComponentSection
    id="card"
    title="Card"
    description="Composable surface for projects, metrics, and content blocks. Consistent padding, radius, and elevation."
    importPath='import { Card, CardHeader, CardTitle, ... } from "@/components/ui/card"'
  >
    <SubSection title="Variants">
      <VariantGrid columns={2}>
        {CARD_VARIANTS.map((variant) => (
          <VariantPreview
            key={variant}
            label={variant}
            props={[{ name: "variant", value: variant }]}
          >
            <Card variant={variant} className="w-full">
              <CardHeader>
                <CardTitle>Project Title</CardTitle>
                <CardDescription>
                  A short description of the project and its impact.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="blue">React.js</Badge>
                  <Badge variant="purple">OpenAI API</Badge>
                </div>
              </CardContent>
            </Card>
          </VariantPreview>
        ))}
      </VariantGrid>
    </SubSection>

    <SubSection title="Full Composition">
      <VariantPreview
        props={[{ name: "variant", value: "interactive" }]}
        className="!block"
      >
        <Card variant="interactive" className="max-w-md">
          <CardHeader>
            <CardTitle>FinTech Dashboard</CardTitle>
            <CardDescription>
              Real-time analytics platform with sub-200ms interactions and 99 Lighthouse
              score.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="blue">TypeScript</Badge>
              <Badge variant="success">99 Lighthouse</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="ghost"
              size="sm"
              rightIcon={<ArrowUpRight className="size-4" />}
            >
              View case study
            </Button>
          </CardFooter>
        </Card>
      </VariantPreview>
    </SubSection>

    <SubSection title="Props API">
      <div className="border-border overflow-x-auto rounded-[var(--radius-md)] border">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="border-border bg-background-secondary border-b">
            <tr>
              <th className="text-foreground px-4 py-3 font-semibold">Prop</th>
              <th className="text-foreground px-4 py-3 font-semibold">Type</th>
              <th className="text-foreground px-4 py-3 font-semibold">Default</th>
            </tr>
          </thead>
          <tbody className="divide-border divide-y">
            {[
              [
                "variant",
                '"default" | "elevated" | "outline" | "interactive"',
                '"default"',
              ],
              ["padding", '"none" | "md" | "lg"', '"md"'],
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
