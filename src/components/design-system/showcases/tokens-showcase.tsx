import type { ReactNode } from "react";

import {
  ComponentSection,
  SubSection,
} from "@/components/design-system/component-section";

interface SwatchProps {
  label: string;
  token: string;
  style?: React.CSSProperties;
}

const Swatch = ({ label, token, style }: SwatchProps) => (
  <div className="flex flex-col gap-2">
    <div
      className="border-border h-16 w-full rounded-[var(--radius-md)] border"
      style={style}
    />
    <span className="text-foreground text-xs font-medium">{label}</span>
    <code className="text-muted-foreground font-mono text-[10px]">{token}</code>
  </div>
);

const FONT_SIZES = [
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
] as const;

const SPACING_KEYS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "8",
  "10",
  "12",
  "16",
  "20",
  "24",
] as const;

interface TokensShowcaseProps {
  children?: ReactNode;
}

export const TokensShowcase = ({ children }: TokensShowcaseProps) => (
  <>
    <ComponentSection
      id="colors"
      title="Colors"
      description="Semantic color tokens. Values swap automatically between light and dark themes."
    >
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
        <Swatch
          label="Background"
          token="--background-primary"
          style={{ backgroundColor: "var(--background-primary)" }}
        />
        <Swatch
          label="Surface"
          token="--surface-primary"
          style={{ backgroundColor: "var(--surface-primary)" }}
        />
        <Swatch label="Card" token="--card" style={{ backgroundColor: "var(--card)" }} />
        <Swatch
          label="Primary"
          token="--primary"
          style={{ backgroundColor: "var(--primary)" }}
        />
        <Swatch
          label="Secondary"
          token="--secondary"
          style={{ backgroundColor: "var(--secondary)" }}
        />
        <Swatch
          label="Accent"
          token="--accent"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <Swatch
          label="Success"
          token="--success"
          style={{ backgroundColor: "var(--success)" }}
        />
        <Swatch
          label="Warning"
          token="--warning"
          style={{ backgroundColor: "var(--warning)" }}
        />
        <Swatch
          label="Danger"
          token="--danger"
          style={{ backgroundColor: "var(--danger)" }}
        />
        <Swatch label="Info" token="--info" style={{ backgroundColor: "var(--info)" }} />
        <Swatch
          label="Border"
          token="--border"
          style={{ backgroundColor: "var(--border)" }}
        />
        <Swatch label="Grid" token="--grid" style={{ backgroundColor: "var(--grid)" }} />
      </div>
      <SubSection title="Text">
        <div className="grid gap-3 md:grid-cols-2">
          <p className="text-foreground">--text-primary</p>
          <p className="text-muted-foreground">--text-secondary / muted</p>
          <p className="text-[var(--text-muted)]">--text-muted</p>
          <p className="text-[var(--text-placeholder)]">--text-placeholder</p>
        </div>
      </SubSection>
    </ComponentSection>

    <ComponentSection
      id="typography"
      title="Typography"
      description="Font scale and weight tokens."
    >
      <div className="space-y-4">
        {FONT_SIZES.map((size) => (
          <div
            key={size}
            className="border-border flex items-baseline gap-6 border-b pb-4"
          >
            <code className="text-muted-foreground w-12 shrink-0 font-mono text-xs">
              --font-size-{size}
            </code>
            <p
              className="text-foreground"
              style={{ fontSize: `var(--font-size-${size})` }}
            >
              Portfolio typography — {size}
            </p>
          </div>
        ))}
      </div>
    </ComponentSection>

    <ComponentSection id="spacing" title="Spacing" description="8pt spacing scale.">
      <div className="space-y-3">
        {SPACING_KEYS.map((key) => (
          <div key={key} className="flex items-center gap-4">
            <code className="text-muted-foreground w-28 shrink-0 font-mono text-xs">
              --spacing-{key}
            </code>
            <div
              className="bg-primary h-4 rounded-sm"
              style={{ width: `var(--spacing-${key})` }}
            />
          </div>
        ))}
      </div>
    </ComponentSection>

    <ComponentSection id="radius-shadows" title="Radius & Shadows">
      <SubSection title="Radius">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {(["sm", "md", "lg", "xl", "2xl"] as const).map((radius) => (
            <div
              key={radius}
              className="border-border bg-card text-foreground flex h-20 items-center justify-center border text-xs"
              style={{ borderRadius: `var(--radius-${radius})` }}
            >
              --radius-{radius}
            </div>
          ))}
        </div>
      </SubSection>
      <SubSection title="Shadows">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {(["xs", "sm", "md", "lg", "xl"] as const).map((shadow) => (
            <div
              key={shadow}
              className="bg-card text-foreground flex h-20 items-center justify-center rounded-[var(--radius-md)] text-xs"
              style={{ boxShadow: `var(--shadow-${shadow})` }}
            >
              --shadow-{shadow}
            </div>
          ))}
        </div>
      </SubSection>
    </ComponentSection>

    {children}
  </>
);
