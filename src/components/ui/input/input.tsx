import { forwardRef, useId } from "react";
import { AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";

import { InputShortcut } from "./input-shortcut";
import { inputVariants, inputWrapperVariants } from "./input.styles";
import type { InputFieldProps, InputProps } from "./input.types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      wrapperClassName,
      size,
      hasError,
      leftIcon,
      rightElement,
      type = "text",
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        className={cn(inputWrapperVariants({ hasError, size }), wrapperClassName)}
        data-disabled={disabled ? "" : undefined}
      >
        {leftIcon && (
          <span
            className={cn(
              "inline-flex shrink-0 [&>svg]:size-4",
              hasError ? "text-[var(--input-error)]" : "text-[var(--input-placeholder)]",
            )}
            aria-hidden="true"
          >
            {leftIcon}
          </span>
        )}
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          className={cn(inputVariants({ hasError }), className)}
          {...props}
        />
        {rightElement}
      </div>
    );
  },
);

Input.displayName = "Input";

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, hint, shortcut, id, hasError, rightElement, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;
    const isError = Boolean(error) || hasError;

    const trailing = shortcut ? <InputShortcut keys={shortcut} /> : rightElement;

    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className={cn(
            "mb-2 block font-mono text-xs font-medium tracking-wider uppercase",
            isError ? "text-[var(--input-error)]" : "text-[var(--input-label)]",
          )}
        >
          {label}
        </label>
        <Input
          ref={ref}
          id={inputId}
          hasError={isError}
          rightElement={trailing}
          aria-invalid={isError || undefined}
          aria-describedby={
            [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(" ") ||
            undefined
          }
          {...props}
        />
        {error && (
          <p
            id={errorId}
            role="alert"
            className="mt-2 flex items-center gap-1.5 text-xs text-[var(--input-error)]"
          >
            <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={hintId} className="text-muted-foreground mt-2 text-xs">
            {hint}
          </p>
        )}
      </div>
    );
  },
);

InputField.displayName = "InputField";
