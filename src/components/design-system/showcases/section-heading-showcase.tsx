import {
  ComponentSection,
  SubSection,
} from "@/components/design-system/component-section";
import { VariantGrid, VariantPreview } from "@/components/design-system/variant-preview";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export const SectionHeadingShowcase = () => (
  <ComponentSection
    id="section-heading"
    title="Section Heading"
    description="Consistent section intros with eyebrow label, title, description, and optional action."
    importPath='import { SectionHeading } from "@/components/ui/section-heading"'
  >
    <SubSection title="Alignments">
      <VariantGrid columns={1}>
        <VariantPreview
          label="Left aligned"
          props={[
            { name: "align", value: "left" },
            { name: "eyebrow", value: "01 — Projects" },
          ]}
          className="!block"
        >
          <SectionHeading
            align="left"
            eyebrow="01 — Projects"
            title="Featured Work"
            description="A selection of recent projects focused on performance, accessibility, and polished user experience."
          />
        </VariantPreview>

        <VariantPreview
          label="Center aligned"
          props={[{ name: "align", value: "center" }]}
          className="!block"
        >
          <SectionHeading
            align="center"
            eyebrow="02 — Experience"
            title="Where I've Built"
            description="Timeline of roles and milestones across product engineering teams."
          />
        </VariantPreview>

        <VariantPreview
          label="With action"
          props={[
            { name: "align", value: "left" },
            { name: "action", value: "<Button />" },
          ]}
          className="!block"
        >
          <SectionHeading
            align="left"
            eyebrow="03 — Contact"
            title="Let's Work Together"
            description="Open to freelance, full-time, and collaboration on ambitious frontend products."
            action={<Button variant="outline">Get in touch</Button>}
          />
        </VariantPreview>
      </VariantGrid>
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
              ["title", "string", "—"],
              ["eyebrow", "string", "—"],
              ["description", "string", "—"],
              ["align", '"left" | "center"', '"left"'],
              ["action", "ReactNode", "—"],
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
