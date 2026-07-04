import Link from "next/link";

import { SITE_INITIALS, SITE_NAME } from "@/constants/navigation";
import { cn } from "@/lib/utils";

interface NavbarLogoProps {
  className?: string;
}

export const NavbarLogo = ({ className }: NavbarLogoProps) => (
  <Link
    href="/"
    className={cn("group flex items-center gap-3", className)}
    aria-label={`${SITE_NAME} home`}
  >
    <span
      className={cn(
        "relative flex size-10 shrink-0 items-center justify-center overflow-hidden",
        "rounded-[var(--radius-sm)] bg-[var(--badge-blue-bg)]",
        "font-mono text-sm font-bold text-[var(--nav-logo-fg)]",
        "transition-transform duration-[var(--duration-hover)] group-hover:scale-105",
      )}
      aria-hidden="true"
    >
      {SITE_INITIALS}
    </span>
    <span className="text-foreground hidden font-semibold tracking-tight sm:inline">
      {SITE_NAME}
    </span>
  </Link>
);
