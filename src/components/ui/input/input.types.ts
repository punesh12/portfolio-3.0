import type { InputHTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import type { inputVariants, inputWrapperVariants } from "./input.styles";

export type InputSize = NonNullable<VariantProps<typeof inputWrapperVariants>["size"]>;

export interface InputProps
  extends
    Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  size?: InputSize;
  leftIcon?: ReactNode;
  rightElement?: ReactNode;
  wrapperClassName?: string;
}

export interface InputFieldProps extends InputProps {
  label: string;
  error?: string;
  hint?: string;
  /** Keyboard shortcut keys displayed inside the field (e.g. ["⌘", "K"]) */
  shortcut?: string[];
}
