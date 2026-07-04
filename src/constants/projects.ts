export const WORK_EYEBROW = "Featured Projects";

export const WORK_HEADING = "Open-source tools and products I've shipped.";

export const LATTICE_UI_LANDING_URL = "https://lattice-ui-web.vercel.app/";
export const LATTICE_UI_GITHUB_URL = "https://github.com/punesh12/lattice-ui";

export interface ProjectEntry {
  title: string;
  description: string;
  url: string;
  githubUrl: string;
  imageUrl: string;
  tags: string[];
}

export const PROJECT_ENTRIES: ProjectEntry[] = [
  {
    title: "Lattice UI",
    description:
      "Open-source React design system — 50+ accessible primitives on Radix UI, Tailwind CSS v4 tokens, Next.js docs site, Storybook catalog, and Vitest. Published as @punesh12/lattice-ui on npm.",
    url: LATTICE_UI_LANDING_URL,
    githubUrl: LATTICE_UI_GITHUB_URL,
    imageUrl: "/projects/lattice-ui.webp",
    tags: ["React", "TypeScript", "Radix UI", "Tailwind CSS", "Storybook", "Turborepo"],
  },
  {
    title: "BharatLinks",
    description:
      "Smart link management platform for Indian businesses with link shortening, analytics, team collaboration, and UPI Express links.",
    url: "https://bharatlinks.vercel.app/",
    githubUrl: "https://github.com/punesh12/bharatlinks",
    imageUrl: "/projects/bharatlinks.webp",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Clerk", "Tailwind CSS"],
  },
  {
    title: "stellar-galaxy",
    description:
      "A cosmic-inspired VS Code theme with soothing dark tones, sharp syntax highlighting, and a beautifully immersive coding experience.",
    url: "https://marketplace.visualstudio.com/items?itemName=PuneshBorkar.stellar-galaxy",
    githubUrl: "https://github.com/punesh12/stellar-galaxy",
    imageUrl: "/projects/Stellar-galaxy-cover.png",
    tags: ["VS Code", "Theme", "Dark Mode"],
  },
  {
    title: "mockhub",
    description:
      "A modern, developer-friendly dashboard to create, mock, and test APIs built with Next.js, TypeScript & Supabase.",
    url: "https://mockhubapp.vercel.app/",
    githubUrl: "https://github.com/punesh12/mockhub",
    imageUrl: "/projects/mockhub.webp",
    tags: ["Next.js", "TypeScript", "Supabase", "API"],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website featuring smooth scroll animations, dynamic navbar visibility, dark mode support, and an elegant bento grid layout. Built with Next.js and TypeScript for optimal performance and type safety.",
    url: "https://puneshborkar.vercel.app/",
    githubUrl: "https://github.com/punesh12/portfolio-2.0",
    imageUrl: "/projects/portfolio.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];
