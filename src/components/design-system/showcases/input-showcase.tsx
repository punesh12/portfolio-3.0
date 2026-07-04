import { Search } from "lucide-react";

import {
  ComponentSection,
  SubSection,
} from "@/components/design-system/component-section";
import { VariantGrid, VariantPreview } from "@/components/design-system/variant-preview";
import { InputField } from "@/components/ui/input";

export const InputShowcase = () => (
  <ComponentSection
    id="input"
    title="Form Controls"
    description="Accessible, high-precision input fields for data entry."
    importPath='import { Input, InputField } from "@/components/ui/input"'
  >
    <SubSection title="Variants">
      <VariantGrid columns={3}>
        <VariantPreview
          label="Standard Input"
          props={[
            { name: "label", value: "Standard Input" },
            { name: "placeholder", value: "Enter username..." },
          ]}
        >
          <InputField label="Standard Input" placeholder="Enter username..." />
        </VariantPreview>

        <VariantPreview
          label="Search Field"
          props={[
            { name: "label", value: "Search Field" },
            { name: "leftIcon", value: "<Search />" },
            { name: "shortcut", value: "['⌘', 'K']" },
          ]}
        >
          <InputField
            label="Search Field"
            placeholder="Quick search..."
            leftIcon={<Search />}
            shortcut={["⌘", "K"]}
          />
        </VariantPreview>

        <VariantPreview
          label="Security Key (Error)"
          props={[
            { name: "label", value: "Security Key" },
            { name: "type", value: "password" },
            { name: "error", value: "Authentication failed..." },
          ]}
        >
          <InputField
            label="Security Key"
            type="password"
            defaultValue="password"
            error="Authentication failed. Please try again."
          />
        </VariantPreview>
      </VariantGrid>
    </SubSection>

    <SubSection title="States">
      <VariantGrid columns={3}>
        <VariantPreview props={[{ name: "disabled", value: true }]}>
          <InputField label="Disabled" placeholder="Not editable" disabled />
        </VariantPreview>

        <VariantPreview props={[{ name: "hint", value: "Optional helper text" }]}>
          <InputField
            label="With Hint"
            placeholder="your@email.com"
            hint="We'll never share your email."
          />
        </VariantPreview>

        <VariantPreview props={[{ name: "size", value: "lg" }]}>
          <InputField label="Large Size" placeholder="Large input" size="lg" />
        </VariantPreview>
      </VariantGrid>
    </SubSection>

    <SubSection title="Props API">
      <div className="border-border overflow-x-auto rounded-[var(--radius-md)] border">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead className="border-border bg-background-secondary border-b">
            <tr>
              <th className="text-foreground px-4 py-3 font-semibold">Prop</th>
              <th className="text-foreground px-4 py-3 font-semibold">Type</th>
              <th className="text-foreground px-4 py-3 font-semibold">Default</th>
            </tr>
          </thead>
          <tbody className="divide-border divide-y">
            {[
              ["label", "string", "—"],
              ["placeholder", "string", "—"],
              ["type", "string", '"text"'],
              ["size", '"md" | "lg"', '"md"'],
              ["error", "string", "—"],
              ["hint", "string", "—"],
              ["leftIcon", "ReactNode", "—"],
              ["shortcut", "string[]", "—"],
              ["rightElement", "ReactNode", "—"],
              ["disabled", "boolean", "false"],
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
