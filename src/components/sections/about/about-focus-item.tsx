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
    <article
      className={cn(
        "group/focus -m-2 flex gap-4 rounded-[var(--radius-md)] p-2",
        "transition-colors duration-[var(--duration-hover)]",
        "hover:bg-[var(--background-secondary)]",
        className,
      )}
    >
      <div
        className={cn(
          metricCardIconVariants({ iconTone: area.iconTone }),
          "transition-transform duration-[var(--duration-hover)] ease-[var(--easing-standard)]",
          "group-hover/focus:scale-110",
        )}
        aria-hidden="true"
      >
        <Icon />
      </div>
      <div className="flex min-w-0 flex-col gap-1">
        <h3 className="text-foreground text-sm font-semibold transition-colors duration-[var(--duration-hover)] group-hover/focus:text-[var(--primary)]">
          {area.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {area.description}
        </p>
      </div>
    </article>
  );
};
