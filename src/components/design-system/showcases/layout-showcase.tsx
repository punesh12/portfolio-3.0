import {
  ComponentSection,
  SubSection,
} from "@/components/design-system/component-section";
import { VariantPreview } from "@/components/design-system/variant-preview";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export const LayoutShowcase = () => (
  <>
    <ComponentSection
      id="container"
      title="Container"
      description="Centers content with max-width 1280px and responsive gutters (16px → 32px → 80px)."
      importPath='import { Container } from "@/components/layout"'
    >
      <VariantPreview props={[{ name: "as", value: "div" }]}>
        <Container className="border-border bg-background-secondary text-muted-foreground rounded-[var(--radius-md)] border border-dashed py-8 text-center text-sm">
          1280px max-width · responsive padding
        </Container>
      </VariantPreview>
    </ComponentSection>

    <ComponentSection
      id="section"
      title="Section"
      description="Semantic section wrapper with optional padding and container nesting."
      importPath='import { Section } from "@/components/layout"'
    >
      <SubSection title="Props">
        <div className="space-y-4">
          <VariantPreview
            props={[
              { name: "padded", value: true },
              { name: "contained", value: false },
            ]}
          >
            <Section
              padded
              className="border-border bg-card w-full rounded-[var(--radius-md)] border border-dashed !py-8"
            >
              <p className="text-muted-foreground text-sm">
                padded=true · contained=false
              </p>
            </Section>
          </VariantPreview>

          <VariantPreview
            props={[
              { name: "padded", value: true },
              { name: "contained", value: true },
            ]}
          >
            <Section
              contained
              padded
              className="border-border bg-card w-full rounded-[var(--radius-md)] border border-dashed !py-8"
            >
              <p className="text-muted-foreground text-sm">
                padded=true · contained=true
              </p>
            </Section>
          </VariantPreview>

          <VariantPreview props={[{ name: "padded", value: false }]}>
            <Section
              padded={false}
              className="border-border bg-card w-full rounded-[var(--radius-md)] border border-dashed px-4 py-6"
            >
              <p className="text-muted-foreground text-sm">padded=false</p>
            </Section>
          </VariantPreview>
        </div>
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
                ["contained", "boolean", "false"],
                ["padded", "boolean", "true"],
                ["id", "string", "—"],
                ["ariaLabel", "string", "—"],
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
  </>
);
