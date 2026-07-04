import { Badge } from "@/components/ui/badge";
import type { BadgeVariant } from "@/components/ui/badge/badge.types";
import { EXPERIENCE_PRODUCT_LINKS, type ExperienceEntry } from "@/constants/experience";

const SKILL_BADGE_VARIANTS: BadgeVariant[] = ["blue", "purple", "success"];

type ProductLinkKey = keyof typeof EXPERIENCE_PRODUCT_LINKS;

interface ExperienceTimelineCardProps {
  entry: ExperienceEntry;
}

const isProductLinkKey = (value: string): value is ProductLinkKey =>
  value in EXPERIENCE_PRODUCT_LINKS;

const renderHighlightedText = (text: string) => {
  const parts = text.split(/(\[[^\]]+\]\([a-z]+\)|\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([a-z]+)\)$/);

    if (linkMatch) {
      const [, label, key] = linkMatch;

      if (isProductLinkKey(key)) {
        return (
          <a
            key={`${label}-${index}`}
            href={EXPERIENCE_PRODUCT_LINKS[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--primary)] underline decoration-[var(--primary)]/40 underline-offset-2 transition-colors duration-[var(--duration-hover)] hover:decoration-[var(--primary)]"
          >
            {label}
          </a>
        );
      }
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`bold-${index}`} className="text-foreground font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <span key={`text-${index}`}>{part}</span>;
  });
};

export const ExperienceTimelineCard = ({ entry }: ExperienceTimelineCardProps) => (
  <article className="max-w-2xl">
    <h3 className="text-foreground text-xl font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
      {entry.role}
    </h3>
    <p className="text-muted-foreground mt-1 text-sm italic sm:mt-2 sm:text-base md:text-lg">
      {entry.company} — {entry.location}
    </p>

    {entry.highlights.length > 0 && (
      <ul className="mt-4 flex flex-col gap-3 md:mt-6 md:gap-4">
        {entry.highlights.map((highlight) => (
          <li
            key={highlight}
            className="text-muted-foreground relative pl-4 text-sm leading-relaxed before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-[var(--primary)] md:pl-5 md:text-base"
          >
            {renderHighlightedText(highlight)}
          </li>
        ))}
      </ul>
    )}

    {entry.skills.length > 0 && (
      <div className="mt-4 flex flex-wrap gap-1.5 md:mt-6 md:gap-2">
        {entry.skills.map((skill, index) => (
          <Badge
            key={skill}
            variant={SKILL_BADGE_VARIANTS[index % SKILL_BADGE_VARIANTS.length]}
            size="sm"
          >
            {skill}
          </Badge>
        ))}
      </div>
    )}
  </article>
);
