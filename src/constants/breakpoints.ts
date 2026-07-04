import breakpoints from "../../tokens/breakpoints.json";

/** Design-token breakpoints (CSS length strings). */
export const BREAKPOINT = {
  mobile: breakpoints.mobile,
  tablet: breakpoints.tablet,
  desktop: breakpoints.desktop,
  wide: breakpoints.wide,
  max: breakpoints.max,
} as const;

/** Numeric px values for JS (e.g. matchMedia, image sizes). */
export const BREAKPOINT_PX = {
  mobile: Number.parseInt(breakpoints.mobile, 10),
  tablet: Number.parseInt(breakpoints.tablet, 10),
  desktop: Number.parseInt(breakpoints.desktop, 10),
  wide: Number.parseInt(breakpoints.wide, 10),
  max: Number.parseInt(breakpoints.max, 10),
} as const;

/** Shared `sizes` strings for next/image. */
export const IMAGE_SIZES = {
  aboutPortrait: `(max-width: ${BREAKPOINT.mobile}) 220px, (max-width: ${BREAKPOINT.desktop}) 280px, 33vw`,
  projectPreview: `(max-width: ${BREAKPOINT.tablet}) 100vw, (max-width: ${BREAKPOINT.desktop}) 50vw, 33vw`,
} as const;
