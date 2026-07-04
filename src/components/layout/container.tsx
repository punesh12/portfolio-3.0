import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export const Container = ({
  children,
  className,
  as: Component = "div",
}: ContainerProps) => (
  <Component className={cn("container-grid w-full", className)}>{children}</Component>
);
