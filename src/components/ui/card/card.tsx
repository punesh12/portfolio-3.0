import { cn } from "@/lib/utils";

import {
  cardContentVariants,
  cardDescriptionVariants,
  cardFooterVariants,
  cardHeaderVariants,
  cardTitleVariants,
  cardVariants,
} from "./card.styles";
import type {
  CardContentProps,
  CardDescriptionProps,
  CardFooterProps,
  CardHeaderProps,
  CardProps,
  CardTitleProps,
} from "./card.types";

export const Card = ({ className, variant, padding, children, ...props }: CardProps) => (
  <div className={cn(cardVariants({ variant, padding }), className)} {...props}>
    {children}
  </div>
);

export const CardHeader = ({ className, children, ...props }: CardHeaderProps) => (
  <div className={cn(cardHeaderVariants(), className)} {...props}>
    {children}
  </div>
);

export const CardTitle = ({
  className,
  children,
  as: Component = "h3",
  ...props
}: CardTitleProps) => (
  <Component className={cn(cardTitleVariants(), className)} {...props}>
    {children}
  </Component>
);

export const CardDescription = ({
  className,
  children,
  ...props
}: CardDescriptionProps) => (
  <p className={cn(cardDescriptionVariants(), className)} {...props}>
    {children}
  </p>
);

export const CardContent = ({ className, children, ...props }: CardContentProps) => (
  <div className={cn(cardContentVariants(), className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ className, children, ...props }: CardFooterProps) => (
  <div className={cn(cardFooterVariants(), className)} {...props}>
    {children}
  </div>
);
