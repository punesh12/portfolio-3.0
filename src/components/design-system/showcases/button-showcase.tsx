import { Settings } from "lucide-react";

import {
  ComponentSection,
  SubSection,
} from "@/components/design-system/component-section";
import { VariantGrid, VariantPreview } from "@/components/design-system/variant-preview";
import { Button } from "@/components/ui/button";
import type { ButtonSize, ButtonVariant } from "@/components/ui/button";

const VARIANTS: ButtonVariant[] = ["primary", "secondary", "outline", "ghost"];
const SIZES: ButtonSize[] = ["lg", "md", "sm"];

const SIZE_LABELS: Record<ButtonSize, string> = {
  lg: "Large Action",
  md: "Medium Action",
  sm: "Small Action",
  icon: "Icon",
};

export const ButtonShowcase = () => (
  <ComponentSection
    id="button"
    title="Button"
    description="Action button with variant, size, active, disabled, and icon support. Theme-aware via CSS variables."
    importPath='import { Button } from "@/components/ui/button"'
  >
    <SubSection title="Variants × Sizes">
      <VariantGrid columns={4}>
        {VARIANTS.map((variant) => (
          <div key={variant} className="space-y-3">
            <p className="text-foreground text-sm font-semibold capitalize">{variant}</p>
            <div className="space-y-3">
              {SIZES.map((size) => (
                <VariantPreview
                  key={`${variant}-${size}`}
                  props={[
                    { name: "variant", value: variant },
                    { name: "size", value: size },
                  ]}
                >
                  <Button variant={variant} size={size}>
                    {SIZE_LABELS[size]}
                  </Button>
                </VariantPreview>
              ))}
            </div>
          </div>
        ))}
      </VariantGrid>
    </SubSection>

    <SubSection title="States">
      <VariantGrid columns={3}>
        <VariantPreview
          label="Ghost with icon"
          props={[
            { name: "variant", value: "ghost" },
            { name: "size", value: "md" },
            { name: "leftIcon", value: "<Settings />" },
          ]}
        >
          <Button variant="ghost" size="md" leftIcon={<Settings />}>
            Ghost Hover
          </Button>
        </VariantPreview>

        <VariantPreview
          label="Disabled"
          props={[
            { name: "variant", value: "primary" },
            { name: "size", value: "md" },
            { name: "disabled", value: true },
          ]}
        >
          <Button size="md" disabled>
            Disabled
          </Button>
        </VariantPreview>

        <VariantPreview
          label="Active"
          props={[
            { name: "variant", value: "primary" },
            { name: "size", value: "md" },
            { name: "isActive", value: true },
          ]}
        >
          <Button size="md" isActive>
            Active
          </Button>
        </VariantPreview>

        <VariantPreview
          label="Loading"
          props={[
            { name: "variant", value: "primary" },
            { name: "size", value: "md" },
            { name: "isLoading", value: true },
          ]}
        >
          <Button size="md" isLoading>
            Loading
          </Button>
        </VariantPreview>

        <VariantPreview
          label="Icon only"
          props={[
            { name: "variant", value: "icon" },
            { name: "size", value: "icon" },
          ]}
        >
          <Button variant="icon" size="icon" aria-label="Settings">
            <Settings className="size-4" />
          </Button>
        </VariantPreview>
      </VariantGrid>
    </SubSection>

    <SubSection title="Props API">
      <div className="border-border overflow-x-auto rounded-[var(--radius-md)] border">
        <table className="w-full min-w-[540px] text-left text-sm">
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
                '"primary" | "secondary" | "outline" | "ghost" | "icon"',
                '"primary"',
              ],
              ["size", '"sm" | "md" | "lg" | "icon"', '"md"'],
              ["isActive", "boolean", "false"],
              ["isLoading", "boolean", "false"],
              ["disabled", "boolean", "false"],
              ["leftIcon", "ReactNode", "—"],
              ["rightIcon", "ReactNode", "—"],
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
