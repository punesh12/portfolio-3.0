import Image from "next/image";
import Link from "next/link";

import { SITE_LOGO_SRC, SITE_NAME } from "@/constants/navigation";
import { cn } from "@/lib/utils";

interface NavbarLogoProps {
  className?: string;
}

export const NavbarLogo = ({ className }: NavbarLogoProps) => (
  <Link
    href="/"
    className={cn("flex items-center gap-3", className)}
    aria-label={`${SITE_NAME} home`}
  >
    <Image
      src={SITE_LOGO_SRC}
      alt=""
      width={40}
      height={35}
      className="h-10 w-auto shrink-0 object-contain"
      priority
      unoptimized
    />
    <span className="text-foreground hidden font-semibold tracking-tight md:inline">
      {SITE_NAME}
    </span>
  </Link>
);
