import { Badge } from "@/components/ui/badge";
import type { BadgeVariant } from "@/components/ui/badge/badge.types";
import type { ProjectEntry } from "@/constants/projects";
import { cn } from "@/lib/utils";

import { ProjectPreview } from "./project-preview";

const TAG_BADGE_VARIANTS: BadgeVariant[] = ["blue", "purple", "success"];

interface ProjectCardProps {
  project: ProjectEntry;
  className?: string;
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => (
  <article
    className={cn(
      "group flex flex-col gap-4 rounded-[var(--radius-xl)] border border-[var(--card-border)]",
      "bg-[var(--card)] p-4 shadow-[var(--card-shadow)]",
      "transition-[border-color,box-shadow,transform] duration-[var(--duration-hover)] ease-[var(--easing-standard)]",
      "hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[var(--card-shadow-hover)]",
      className,
    )}
  >
    <ProjectPreview
      imageUrl={project.imageUrl}
      title={project.title}
      url={project.url}
      githubUrl={project.githubUrl}
    />

    <div className="flex min-h-0 flex-1 flex-col gap-3">
      {project.tags.length > 0 && (
        <div className="scrollbar-hide flex flex-nowrap gap-1.5 overflow-x-auto">
          {project.tags.map((tag, index) => (
            <Badge
              key={tag}
              variant={TAG_BADGE_VARIANTS[index % TAG_BADGE_VARIANTS.length]}
              size="sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}

      <h3 className="text-foreground truncate text-base font-semibold tracking-tight">
        {project.title}
      </h3>

      <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
        {project.description}
      </p>
    </div>
  </article>
);
