import { Container } from "@/components/layout/container";
import { FOOTER_BUILT_WITH } from "@/constants/footer";
import { SITE_NAME } from "@/constants/navigation";
import { cn } from "@/lib/utils";

import { FooterBackToTop } from "./footer-back-to-top";
import type { FooterProps } from "./footer.types";

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = ({ className }: FooterProps) => (
  <footer
    className={cn("border-border bg-background mt-20 w-full border-t", className)}
    aria-label="Site footer"
  >
    <Container className="flex flex-col items-center gap-4 py-8 text-center md:flex-row md:items-center md:justify-between md:gap-6 md:py-10 md:text-left">
      <p className="text-muted-foreground text-sm">
        © {CURRENT_YEAR} {SITE_NAME}. All rights reserved.
      </p>

      <p className="text-muted-foreground text-sm italic">{FOOTER_BUILT_WITH}</p>

      <FooterBackToTop className="md:shrink-0" />
    </Container>
  </footer>
);
