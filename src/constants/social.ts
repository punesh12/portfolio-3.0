import type { ComponentType, SVGProps } from "react";

import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export const SOCIAL_PROFILES = {
  github: "https://github.com/punesh12",
  linkedin: "https://www.linkedin.com/in/punesh-borkar/",
  email: "mailto:punesh12@gmail.com",
} as const;

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const HERO_SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: SOCIAL_PROFILES.github, icon: GitHubIcon },
  { label: "LinkedIn", href: SOCIAL_PROFILES.linkedin, icon: LinkedInIcon },
  { label: "Email", href: SOCIAL_PROFILES.email, icon: MailIcon },
];
