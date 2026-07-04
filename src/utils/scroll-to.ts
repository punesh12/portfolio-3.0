import { getLenis } from "@/lib/lenis";

/** Offset for fixed navbar when scrolling to in-page sections */
export const SCROLL_SECTION_OFFSET = -80;

export const scrollToTop = (): void => {
  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(0);
    return;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const scrollToSection = (
  sectionId: string,
  offset = SCROLL_SECTION_OFFSET,
): void => {
  const target = document.getElementById(sectionId.replace("#", ""));
  if (!target) return;

  const lenis = getLenis();

  if (lenis) {
    lenis.scrollTo(target, { offset });
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
};
