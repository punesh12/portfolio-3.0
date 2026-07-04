import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { PropList } from "./prop-tag";

interface VariantPreviewProps {
  children: ReactNode;
  props: Array<{ name: string; value: string | boolean | number }>;
  label?: string;
  className?: string;
}

export const VariantPreview = ({
  children,
  props,
  label,
  className,
}: VariantPreviewProps) => (
  <div
    className={cn(
      "border-border bg-card flex flex-col gap-3 rounded-[var(--radius-md)] border p-5",
      className,
    )}
  >
    {label && <span className="text-muted-foreground text-xs font-medium">{label}</span>}
    <div className="flex min-h-14 items-center">{children}</div>
    <PropList props={props} />
  </div>
);

interface VariantGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export const VariantGrid = ({ children, columns = 3, className }: VariantGridProps) => (
  <div
    className={cn(
      "grid gap-4",
      columns === 1 && "grid-cols-1",
      columns === 2 && "grid-cols-1 sm:grid-cols-2",
      columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      className,
    )}
  >
    {children}
  </div>
);
