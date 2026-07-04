import { metricCardIconVariants } from "@/components/ui/metric-card/metric-card.styles";
import type { AboutFocusArea } from "@/constants/about";
import { cn } from "@/lib/utils";

interface AboutFocusItemProps {
  area: AboutFocusArea;
  className?: string;
}

export const AboutFocusItem = ({ area, className }: AboutFocusItemProps) => {
  const Icon = area.icon;

  return (
    <article className={cn("flex gap-4", className)}>
      <div
        className={metricCardIconVariants({ iconTone: area.iconTone })}
        aria-hidden="true"
      >
        <Icon />
      </div>
      <div className="flex min-w-0 flex-col gap-1">
        <h3 className="text-foreground text-sm font-semibold">{area.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {area.description}
        </p>
      </div>
    </article>
  );
};
