import { cn } from "@/lib/utils";

import { kbdBadgeVariants } from "./input.styles";

interface KbdBadgeProps {
  children: string;
  className?: string;
}

export const KbdBadge = ({ children, className }: KbdBadgeProps) => (
  <kbd className={cn(kbdBadgeVariants(), className)}>{children}</kbd>
);

interface InputShortcutProps {
  keys: string[];
  className?: string;
}

export const InputShortcut = ({ keys, className }: InputShortcutProps) => (
  <span className={cn("flex shrink-0 items-center gap-1", className)} aria-hidden="true">
    {keys.map((key) => (
      <KbdBadge key={key}>{key}</KbdBadge>
    ))}
  </span>
);
