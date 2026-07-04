import { cn } from "@/lib/utils";

import { socialButtonVariants } from "./social-button.styles";
import type { SocialButtonProps } from "./social-button.types";

export const SocialButton = ({
  label,
  className,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: SocialButtonProps) => (
  <a
    {...props}
    aria-label={label}
    target={props.href?.startsWith("mailto:") ? undefined : target}
    rel={props.href?.startsWith("mailto:") ? undefined : rel}
    className={cn(socialButtonVariants(), className)}
  >
    <span className="flex size-5 items-center justify-center [&>svg]:size-5 [&>svg]:shrink-0">
      {children}
    </span>
  </a>
);
