"use client";

import { ChevronDown } from "lucide-react";

import { scrollToSection } from "@/utils/scroll-to";

export const HeroScrollIndicator = () => (
  <button
    type="button"
    className="hero-enter hero-enter-delay-4 absolute bottom-4 left-1/2 z-[1] hidden -translate-x-1/2 cursor-pointer flex-col items-center gap-2 text-[var(--primary)] transition-colors duration-[var(--duration-hover)] hover:text-[var(--primary-hover)] md:bottom-8 md:flex"
    onClick={() => scrollToSection("about")}
    aria-label="Scroll to about section"
  >
    <span className="font-mono text-[10px] font-semibold tracking-widest uppercase">
      Scroll
    </span>
    <span className="hero-scroll-bounce">
      <ChevronDown className="size-5" strokeWidth={2.5} aria-hidden="true" />
    </span>
  </button>
);
