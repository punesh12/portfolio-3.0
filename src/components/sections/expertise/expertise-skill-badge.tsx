import Image from "next/image";

import { SKILL_ICON_URLS, type ExpertiseSkillName } from "@/constants/expertise";
import { cn } from "@/lib/utils";

interface ExpertiseSkillBadgeProps {
  name: ExpertiseSkillName;
  className?: string;
}

export const ExpertiseSkillBadge = ({ name, className }: ExpertiseSkillBadgeProps) => {
  const iconUrl = SKILL_ICON_URLS[name];

  return (
    <div
      className={cn(
        "inline-flex shrink-0 items-center gap-3 rounded-[var(--radius-md)] border border-[var(--card-border)]",
        "bg-[var(--card)] px-4 py-3 shadow-[var(--shadow-xs)]",
        className,
      )}
    >
      <span className="inline-flex size-8 shrink-0 items-center justify-center">
        {iconUrl ? (
          <Image
            src={iconUrl}
            alt=""
            width={32}
            height={32}
            className="size-8 object-contain"
            unoptimized
            aria-hidden
          />
        ) : (
          <span className="size-8 rounded-[var(--radius-sm)] bg-[var(--background-secondary)]" />
        )}
      </span>
      <span className="text-foreground text-sm font-medium whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};
