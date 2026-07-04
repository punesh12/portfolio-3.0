import {
  BadgeShowcase,
  ButtonShowcase,
  CardShowcase,
  DesignSystemNav,
  InputShowcase,
  LayoutShowcase,
  SectionHeadingShowcase,
  MetricCardShowcase,
  TokensShowcase,
} from "@/components/design-system";

const DesignSystemPage = () => (
  <div className="bg-background min-h-screen">
    <div className="container-grid py-16">
      <header className="border-border mb-16 space-y-4 border-b pb-10">
        <p className="text-muted-foreground text-sm font-medium">Portfolio 3.0</p>
        <h1 className="text-foreground text-4xl font-semibold tracking-tight md:text-5xl">
          Design System
        </h1>
        <p className="max-w-paragraph text-muted-foreground text-lg">
          Living documentation for tokens and components. Each preview shows the rendered
          output with its prop values. Toggle the theme in the navbar to verify light and
          dark modes.
        </p>
      </header>

      <div className="grid gap-16 lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <DesignSystemNav />
          </div>
        </aside>

        <div className="min-w-0 space-y-24">
          <TokensShowcase />
          <ButtonShowcase />
          <InputShowcase />
          <BadgeShowcase />
          <CardShowcase />
          <SectionHeadingShowcase />
          <MetricCardShowcase />
          <LayoutShowcase />

          <section className="border-border bg-card rounded-[var(--radius-md)] border border-dashed p-8 text-center">
            <p className="text-muted-foreground text-sm font-medium">Coming soon</p>
            <p className="text-foreground mt-2">Chip · Social Button</p>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default DesignSystemPage;
