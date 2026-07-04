"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useMemo, useRef } from "react";

import {
  EXPERTISE_MARQUEE_REPEAT_COUNT,
  EXPERTISE_ROW_ONE,
  EXPERTISE_ROW_TWO,
  type ExpertiseSkillName,
} from "@/constants/expertise";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

import { ExpertiseSkillBadge } from "./expertise-skill-badge";

const buildMarqueeSkills = (skills: readonly ExpertiseSkillName[]) =>
  Array.from({ length: EXPERTISE_MARQUEE_REPEAT_COUNT }, () => skills).flat();

interface ExpertiseMarqueeTrackProps {
  skills: readonly ExpertiseSkillName[];
  x: MotionValue<string>;
  className?: string;
}

const ExpertiseMarqueeTrack = ({ skills, x, className }: ExpertiseMarqueeTrackProps) => {
  const marqueeSkills = useMemo(() => buildMarqueeSkills(skills), [skills]);

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div className="flex w-max gap-6" style={{ x }}>
        {marqueeSkills.map((skill, index) => (
          <ExpertiseSkillBadge key={`${skill}-${index}`} name={skill} />
        ))}
      </motion.div>
    </div>
  );
};

export const ExpertiseMarquees = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const maxTravel = `${100 - 100 / EXPERTISE_MARQUEE_REPEAT_COUNT}%`;

  const rowOneX = useTransform(scrollYProgress, [0, 1], ["0%", `-${maxTravel}`]);
  const rowTwoX = useTransform(scrollYProgress, [0, 1], [`-${maxTravel}`, "0%"]);

  const staticRowOne = useMemo(() => buildMarqueeSkills(EXPERTISE_ROW_ONE), []);
  const staticRowTwo = useMemo(() => buildMarqueeSkills(EXPERTISE_ROW_TWO), []);

  return (
    <div ref={containerRef} className="flex flex-col gap-6">
      {prefersReducedMotion ? (
        <>
          <div className="overflow-hidden">
            <div className="flex w-max gap-6">
              {staticRowOne.map((skill, index) => (
                <ExpertiseSkillBadge key={`${skill}-${index}`} name={skill} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex w-max gap-6">
              {staticRowTwo.map((skill, index) => (
                <ExpertiseSkillBadge key={`${skill}-${index}`} name={skill} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <ExpertiseMarqueeTrack skills={EXPERTISE_ROW_ONE} x={rowOneX} />
          <ExpertiseMarqueeTrack skills={EXPERTISE_ROW_TWO} x={rowTwoX} />
        </>
      )}
    </div>
  );
};
