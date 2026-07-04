"use client";

import { forwardRef } from "react";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

import { buttonVariants } from "./button.styles";
import type { ButtonProps } from "./button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      children,
      leftIcon,
      rightIcon,
      isLoading = false,
      isActive = false,
      disabled,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || isLoading;
    const isIconOnly = size === "icon" && !children;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, isActive }), className)}
        disabled={isDisabled}
        aria-busy={isLoading}
        aria-pressed={isActive || undefined}
        data-active={isActive ? "" : undefined}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="size-4 shrink-0 animate-spin" aria-hidden="true" />
            {!isIconOnly && <span className="sr-only">Loading</span>}
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="inline-flex shrink-0 [&>svg]:size-4" aria-hidden="true">
                {leftIcon}
              </span>
            )}
            {children}
            {rightIcon && (
              <span className="inline-flex shrink-0 [&>svg]:size-4" aria-hidden="true">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
