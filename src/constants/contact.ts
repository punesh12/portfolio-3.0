import type { ComponentType, SVGProps } from "react";

import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { SOCIAL_PROFILES } from "@/constants/social";

export const CONTACT_EYEBROW = "Available for Collaboration";

export const CONTACT_HEADING = "Let's build something technically ambitious.";

export const CONTACT_DESCRIPTION =
  "I'm currently available for new opportunities and exciting projects that push the boundaries of frontend engineering.";

export interface ContactMethod {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  external?: boolean;
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    label: "Send Email",
    href: SOCIAL_PROFILES.email,
    icon: MailIcon,
  },
  {
    label: "LinkedIn",
    href: SOCIAL_PROFILES.linkedin,
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    href: SOCIAL_PROFILES.github,
    icon: GitHubIcon,
    external: true,
  },
];
