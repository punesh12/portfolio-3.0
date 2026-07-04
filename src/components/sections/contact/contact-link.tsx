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
      <Icon
        className="size-5 shrink-0 transition-colors duration-[var(--duration-hover)] group-hover:text-[var(--primary)]"
        aria-hidden="true"
      />
      <span className="text-sm font-medium">{method.label}</span>
    </a>
  );
};
