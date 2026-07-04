export const EXPERTISE_EYEBROW = "Expertise";

export const EXPERTISE_HEADING = "Skills and technologies across the stack.";

export const SKILL_ICON_URLS: Record<string, string> = {
  React: "https://img.icons8.com/color/48/react-native.png",
  "Next.js": "https://img.icons8.com/color/48/nextjs.png",
  TypeScript: "https://img.icons8.com/color/48/typescript.png",
  JavaScript: "https://img.icons8.com/color/48/javascript.png",
  Redux: "https://img.icons8.com/color/48/redux.png",
  "HTML/CSS": "https://img.icons8.com/color/48/html-5.png",
  GraphQL: "https://img.icons8.com/color/48/graphql.png",
  "Node.js": "https://img.icons8.com/color/48/nodejs.png",
  Express: "https://img.icons8.com/color/48/express-js.png",
  Git: "https://img.icons8.com/color/48/git.png",
  Figma: "https://img.icons8.com/color/48/figma.png",
  Firebase: "https://img.icons8.com/color/48/firebase.png",
  Supabase: "https://img.icons8.com/color/48/supabase.png",
  Jira: "https://img.icons8.com/color/48/jira.png",
  Netlify: "https://img.icons8.com/color/48/netlify.png",
};

export const EXPERTISE_ROW_ONE = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Redux",
  "GraphQL",
  "Node.js",
  "Express",
  "HTML/CSS",
] as const;

export const EXPERTISE_ROW_TWO = [
  "Figma",
  "Git",
  "Firebase",
  "Supabase",
  "Jira",
  "Netlify",
] as const;

export const EXPERTISE_MARQUEE_REPEAT_COUNT = 3;

export type ExpertiseSkillName =
  (typeof EXPERTISE_ROW_ONE)[number] | (typeof EXPERTISE_ROW_TWO)[number];
