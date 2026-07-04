import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ComponentSectionProps {
  id: string;
  title: string;
  description?: string;
  importPath?: string;
  children: ReactNode;
  className?: string;
}

export const ComponentSection = ({
  id,
  title,
  description,
  importPath,
  children,
  className,
}: ComponentSectionProps) => (
  <section id={id} className={cn("scroll-mt-28 space-y-8", className)}>
    <div className="border-border space-y-3 border-b pb-6">
      <h2 className="text-foreground text-2xl font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="max-w-paragraph text-muted-foreground">{description}</p>
      )}
      {importPath && (
        <code className="bg-background-secondary text-foreground inline-block rounded-[var(--radius-sm)] px-3 py-1.5 font-mono text-xs">
          {importPath}
        </code>
      )}
    </div>
    {children}
  </section>
);

interface SubSectionProps {
  title: string;
  children: ReactNode;
}

export const SubSection = ({ title, children }: SubSectionProps) => (
  <div className="space-y-4">
    <h3 className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
      {title}
    </h3>
    {children}
  </div>
);
