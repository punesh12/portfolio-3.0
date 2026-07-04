export const EXPERIENCE_EYEBROW = "Experience";

export const EXPERIENCE_HEADING = "Roles, products, and the teams behind the work.";

export const EXPERIENCE_PRODUCT_LINKS = {
  phynd: "https://phynd.games",
  arcadiax: "https://www.arcadiax.ai/",
  lnq: "https://www.forbes.com/sites/cassellferere/2022/10/20/tech-founder-iddris-sandu-launches-lnq-marketplace-where-fashion-accesses-the-blockchain/",
  amplifier: "https://amplifier.powercity.io/",
} as const;

export interface ExperienceEntry {
  role: string;
  company: string;
  yearRange: string;
  dateRange: string;
  location: string;
  highlights: string[];
  skills: string[];
}

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    role: "Lead Engineer — Frontend",
    company: "Rapid Innovation LLP",
    yearRange: "2023 – 2026",
    dateRange: "April 2023 – January 2026",
    location: "Remote",
    highlights: [
      "[PHYND](phynd) — Owned end-to-end frontend for a cloud gaming platform that raised a **$10M seed** and launched on **Samsung Gaming Hub (US)**; shipped game listings, profiles, gameplay integration, admin RBAC, and analytics with CSV/PDF export.",
      "Designed the **Samsung TV frontend architecture** from scratch — module structure, component system, **D-pad spatial navigation**, and state management for a console-free experience.",
      "[ArcadiaX](arcadiax) — Built create-and-manage meetings flows and a **chat-with-transcription** feature with real-time LLM-powered conversation and a streaming-aware chat UI.",
      "Led performance work via code splitting and lazy loading; architected reusable **React + TypeScript** component systems that reduced duplication and set patterns across workstreams.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Samsung Tizen",
      "Storybook",
      "Design Systems",
      "RBAC",
      "LLM Integration",
    ],
  },
  {
    role: "Software Engineer — Frontend",
    company: "Rapid Innovation LLP",
    yearRange: "2021 – 2023",
    dateRange: "June 2021 – April 2023",
    location: "Remote",
    highlights: [
      "[LNQ Marketplace](lnq) — Implemented the full checkout flow with **GraphQL**, product selection, payment steps, and on-chain purchase confirmation for a Forbes-featured Web3 fashion marketplace backed by Jay-Z's Marcy Ventures.",
      "Built a real-time chat system with **WebSocket**-driven message delivery across desktop and mobile.",
      "[PowerCity Amplifier](amplifier) — Resolved wallet connection issues across Web3 providers, fixed financial precision bugs, and improved lending UI performance through component-level optimisation.",
      "Introduced **Redux Toolkit** state management patterns adopted as the team-wide standard across multiple codebases.",
    ],
    skills: [
      "React",
      "TypeScript",
      "GraphQL",
      "WebSockets",
      "Redux Toolkit",
      "Web3",
      "ethers.js",
    ],
  },
  {
    role: "Frontend Developer (Contract)",
    company: "Alnitek Innovative Solutions",
    yearRange: "2021",
    dateRange: "April 2021 – May 2021",
    location: "Remote",
    highlights: [
      "Built a **drag-and-drop chatbot workflow builder** in React.js and Material UI, delivering a no-code interaction flow prototype within a one-month engagement.",
    ],
    skills: ["React", "Material UI", "Drag & Drop", "JavaScript"],
  },
];
