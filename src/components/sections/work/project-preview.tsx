"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { GitHubIcon } from "@/components/icons/social-icons";
import { IMAGE_SIZES } from "@/constants/breakpoints";
import { cn } from "@/lib/utils";

interface ProjectPreviewProps {
  imageUrl: string;
  title: string;
  url: string;
  githubUrl: string;
  className?: string;
}

const ProjectPreviewFallback = () => (
  <div className="h-[200px] w-full rounded-[var(--radius-lg)] bg-[var(--background-secondary)]" />
);

export const ProjectPreview = ({
  imageUrl,
  title,
  url,
  githubUrl,
  className,
}: ProjectPreviewProps) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return <ProjectPreviewFallback />;
  }

  return (
    <div
      className={cn(
        "group/preview relative h-[200px] w-full overflow-hidden rounded-[var(--radius-lg)]",
        "border border-[var(--border)] bg-[var(--background-secondary)]",
        className,
      )}
    >
      <Image
        src={imageUrl}
        alt={`${title} preview`}
        fill
        className="object-cover transition-transform duration-500 ease-[var(--easing-emphasized)] group-hover/preview:scale-105"
        sizes={IMAGE_SIZES.projectPreview}
        onError={() => setImageError(true)}
      />

      <div className="absolute top-2 right-2 z-10 flex items-center gap-2">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex size-9 items-center justify-center rounded-[var(--radius-sm)]",
            "border border-white/30 bg-black/85 shadow-lg backdrop-blur-md",
            "opacity-90 transition-all duration-200",
            "hover:scale-110 hover:border-transparent hover:bg-black",
            "group-hover/preview:opacity-100",
          )}
          aria-label={`View ${title} on GitHub`}
        >
          <GitHubIcon className="size-4 text-white" />
        </a>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex size-9 items-center justify-center rounded-[var(--radius-sm)]",
            "border border-white/30 bg-black/85 shadow-lg backdrop-blur-md",
            "opacity-90 transition-all duration-200",
            "hover:scale-110 hover:border-transparent hover:bg-[var(--primary)]",
            "group-hover/preview:opacity-100",
          )}
          aria-label={`Visit ${title} live site`}
        >
          <ExternalLink className="size-4 text-white" strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
};
