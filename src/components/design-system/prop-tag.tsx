import { cn } from "@/lib/utils";

interface PropTagProps {
  name: string;
  value: string | boolean | number;
  className?: string;
}

export const PropTag = ({ name, value, className }: PropTagProps) => (
  <code
    className={cn(
      "bg-background-secondary inline-flex items-center rounded-[var(--radius-sm)] px-2 py-0.5",
      "text-muted-foreground font-mono text-xs",
      className,
    )}
  >
    {name}=&quot;{String(value)}&quot;
  </code>
);

interface PropListProps {
  props: Array<{ name: string; value: string | boolean | number }>;
  className?: string;
}

export const PropList = ({ props, className }: PropListProps) => (
  <div className={cn("flex flex-wrap gap-1.5", className)}>
    {props.map((prop) => (
      <PropTag key={`${prop.name}-${prop.value}`} name={prop.name} value={prop.value} />
    ))}
  </div>
);
