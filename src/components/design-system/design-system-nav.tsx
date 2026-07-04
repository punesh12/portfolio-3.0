import { cn } from "@/lib/utils";

export interface DesignSystemNavItem {
  id: string;
  label: string;
  group: "tokens" | "components" | "layout";
}

export const DESIGN_SYSTEM_NAV: DesignSystemNavItem[] = [
  { id: "colors", label: "Colors", group: "tokens" },
  { id: "typography", label: "Typography", group: "tokens" },
  { id: "spacing", label: "Spacing", group: "tokens" },
  { id: "radius-shadows", label: "Radius & Shadows", group: "tokens" },
  { id: "button", label: "Button", group: "components" },
  { id: "input", label: "Input", group: "components" },
  { id: "badge", label: "Badge", group: "components" },
  { id: "card", label: "Card", group: "components" },
  { id: "section-heading", label: "Section Heading", group: "components" },
  { id: "metric-card", label: "Metric Card", group: "components" },
  { id: "container", label: "Container", group: "layout" },
  { id: "section", label: "Section", group: "layout" },
];

const GROUP_LABELS: Record<DesignSystemNavItem["group"], string> = {
  tokens: "Tokens",
  components: "Components",
  layout: "Layout",
};

interface DesignSystemNavProps {
  className?: string;
}

export const DesignSystemNav = ({ className }: DesignSystemNavProps) => {
  const groups = ["tokens", "components", "layout"] as const;

  return (
    <nav aria-label="Design system sections" className={cn("space-y-6", className)}>
      {groups.map((group) => {
        const items = DESIGN_SYSTEM_NAV.filter((item) => item.group === group);
        if (items.length === 0) return null;

        return (
          <div key={group} className="space-y-2">
            <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
              {GROUP_LABELS[group]}
            </p>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-muted-foreground hover:bg-card hover:text-foreground block rounded-[var(--radius-sm)] px-3 py-2 text-sm transition-colors duration-[var(--duration-hover)]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </nav>
  );
};
