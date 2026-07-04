import type { LucideIcon } from "lucide-react";
import { Code2, Hexagon, Sparkles, Users } from "lucide-react";

import type { MetricCardIconTone } from "@/components/ui/metric-card/metric-card.styles";

export const ABOUT_EYEBROW = "About Me";

export const ABOUT_HEADING =
  "I build systems that help teams ship faster—not just features.";

export const ABOUT_HIGHLIGHT = "ship faster";

export const ABOUT_PARAGRAPHS = [
  "I specialize in frontend architecture, design systems, performance engineering, and AI-powered user experiences.",
  "Over the years, I've worked across cloud gaming, AI, Web3, and SaaS products, taking ownership from architecture to production.",
  "I love turning complex problems into simple, maintainable solutions that scale with the product and the team.",
] as const;

export const ABOUT_IMAGE = {
  src: "/about/profile.webp",
  alt: "Punesh Borkar, Senior Frontend Engineer",
};

export interface AboutFocusArea {
  title: string;
  description: string;
  icon: LucideIcon;
  iconTone: MetricCardIconTone;
}

export const ABOUT_FOCUS_AREAS: AboutFocusArea[] = [
  {
    title: "Frontend Architecture",
    description: "Designing scalable systems and reusable component libraries.",
    icon: Code2,
    iconTone: "blue",
  },
  {
    title: "Performance First",
    description: "Core Web Vitals, code splitting, optimization and best practices.",
    icon: Hexagon,
    iconTone: "blue",
  },
  {
    title: "AI-Powered Experiences",
    description: "Building LLM integrations, streaming UI and intelligent workflows.",
    icon: Sparkles,
    iconTone: "emerald",
  },
  {
    title: "Mentorship",
    description: "Mentoring engineers and improving engineering culture.",
    icon: Users,
    iconTone: "amber",
  },
];
