import type { ContactMethod } from "@/constants/contact";
import { cn } from "@/lib/utils";

interface ContactLinkProps {
  method: ContactMethod;
  className?: string;
}

export const ContactLink = ({ method, className }: ContactLinkProps) => {
  const Icon = method.icon;

  return (
    <a
      href={method.href}
      target={method.external ? "_blank" : undefined}
      rel={method.external ? "noopener noreferrer" : undefined}
      className={cn(
        "group text-foreground inline-flex items-center gap-2.5",
        "transition-colors duration-[var(--duration-hover)] hover:text-[var(--primary)]",
        "focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:outline-none",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex size-9 items-center justify-center rounded-[var(--radius-sm)]",
          "border border-transparent bg-transparent",
          "transition-[transform,background-color,border-color] duration-[var(--duration-hover)]",
          "group-hover:border-border group-hover:-translate-y-0.5 group-hover:bg-[var(--card)]",
        )}
      >
        <Icon
          className="size-5 shrink-0 transition-colors duration-[var(--duration-hover)] group-hover:text-[var(--primary)]"
          aria-hidden="true"
        />
      </span>
      <span className="relative text-sm font-medium">
        {method.label}
        <span
          className={cn(
            "absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[var(--primary)]",
            "transition-transform duration-[var(--duration-hover)] ease-[var(--easing-standard)]",
            "group-hover:scale-x-100",
          )}
          aria-hidden="true"
        />
      </span>
    </a>
  );
};
