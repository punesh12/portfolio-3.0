import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const TOKENS_DIR = join(ROOT, "tokens");
const OUTPUT_PATH = join(ROOT, "src/styles/tokens.css");

const readToken = (name) => JSON.parse(readFileSync(join(TOKENS_DIR, name), "utf8"));

const toKebab = (value) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();

const declare = (entries) =>
  entries.map(([name, value]) => `  ${name}: ${value};`).join("\n");

const colors = readToken("colors.json");
const spacing = readToken("spacing.json");
const radius = readToken("radius.json");
const shadows = readToken("shadows.json");
const motion = readToken("motion.json");
const layout = readToken("layout.json");
const typography = readToken("typography.json");
const zIndex = readToken("z-index.json");
const breakpoints = readToken("breakpoints.json");

const buildThemeColors = (theme, brandPrimary, brandPrimaryHover) => {
  const palette = colors[theme];

  return [
    ["--background-primary", palette.background.primary],
    ["--background-secondary", palette.background.secondary],
    ["--background-tertiary", palette.background.tertiary],
    ["--surface-primary", palette.surface.primary],
    ["--surface-secondary", palette.surface.secondary],
    ["--surface-elevated", palette.surface.elevated],
    ["--card", palette.card.DEFAULT],
    ["--card-hover", palette.card.hover],
    ["--card-active", palette.card.active],
    ["--border", palette.border.DEFAULT],
    ["--border-subtle", palette.border.subtle],
    ["--border-strong", palette.border.strong],
    ["--text-primary", palette.text.primary],
    ["--text-secondary", palette.text.secondary],
    ["--text-muted", palette.text.muted],
    ["--text-placeholder", palette.text.placeholder],
    ["--text-disabled", palette.text.disabled],
    ["--text-inverse", palette.text.inverse],
    ["--primary", brandPrimary],
    ["--primary-hover", brandPrimaryHover],
    ["--secondary", palette.secondary.DEFAULT],
    ["--secondary-hover", palette.secondary.hover],
    ["--accent", palette.accent.DEFAULT],
    ["--accent-hover", palette.accent.hover],
    ["--success", palette.success.DEFAULT],
    ["--success-surface", palette.success.surface],
    ["--warning", palette.warning.DEFAULT],
    ["--warning-surface", palette.warning.surface],
    ["--danger", palette.danger.DEFAULT],
    ["--danger-surface", palette.danger.surface],
    ["--info", palette.info.DEFAULT],
    ["--info-surface", palette.info.surface],
    ["--focus", palette.focus],
    ["--selection", palette.selection],
    ["--timeline", palette.timeline],
    ["--grid", palette.grid],
    ["--code-background", palette.code.background],
    ["--code-border", palette.code.border],
    ["--primary-50", palette.primary["50"]],
    ["--primary-100", palette.primary["100"]],
    ["--primary-200", palette.primary["200"]],
    ["--primary-300", palette.primary["300"]],
    ["--primary-400", palette.primary["400"]],
    ["--primary-500", palette.primary["500"]],
    ["--primary-600", palette.primary["600"]],
    ["--primary-700", palette.primary["700"]],
    ["--primary-800", palette.primary["800"]],
    ["--primary-900", palette.primary["900"]],
  ];
};

const layoutEntries = Object.entries(layout).map(([key, value]) => {
  const name = key === "navbarHeight" ? "--navbar-height-desktop" : `--${toKebab(key)}`;
  return [name, String(value)];
});

const sharedTokens = [
  ...layoutEntries,
  ...Object.entries(motion.duration).map(([key, value]) => [
    `--duration-${toKebab(key)}`,
    value,
  ]),
  ...Object.entries(motion.easing).map(([key, value]) => [
    `--easing-${toKebab(key)}`,
    value,
  ]),
  ...Object.entries(radius)
    .filter(([key]) => key !== "borderWidth")
    .map(([key, value]) => [`--radius-${key}`, value]),
  ...Object.entries(shadows).map(([key, value]) => [`--shadow-${key}`, value]),
  ...Object.entries(spacing).map(([key, value]) => [`--spacing-${key}`, value]),
  ...Object.entries(typography.fontSize).map(([key, value]) => [
    `--font-size-${key}`,
    value,
  ]),
  ...Object.entries(typography.fontWeight).map(([key, value]) => [
    `--font-weight-${key}`,
    String(value),
  ]),
  ["--font-weight-black", "900"],
  ...Object.entries(typography.lineHeight).map(([key, value]) => [
    `--line-height-${key}`,
    String(value),
  ]),
  ...Object.entries(typography.letterSpacing).map(([key, value]) => [
    `--letter-spacing-${key}`,
    value,
  ]),
  ...Object.entries(zIndex).map(([key, value]) => [`--z-${key}`, String(value)]),
  ...Object.entries(breakpoints).map(([key, value]) => [`--breakpoint-${key}`, value]),
];

const aliases = [
  ["--background", "var(--background-primary)"],
  ["--foreground", "var(--text-primary)"],
  ["--muted", "var(--background-secondary)"],
  ["--muted-foreground", "var(--text-muted)"],
  ["--popover", "var(--surface-primary)"],
  ["--popover-foreground", "var(--text-primary)"],
  ["--card-foreground", "var(--text-primary)"],
  ["--primary-foreground", "var(--text-inverse)"],
  ["--secondary-foreground", "var(--text-inverse)"],
  ["--accent-foreground", "var(--text-inverse)"],
  ["--destructive", "var(--danger)"],
  ["--input", "var(--border)"],
  ["--ring", "var(--focus)"],
  ["--radius", "var(--radius-md)"],
  ["--scrollbar-size", "6px"],
  ["--scrollbar-track", "transparent"],
  ["--scrollbar-thumb", "color-mix(in srgb, var(--text-muted) 38%, transparent)"],
  ["--scrollbar-thumb-hover", "color-mix(in srgb, var(--primary) 62%, transparent)"],
  ["--scrollbar-thumb-active", "color-mix(in srgb, var(--primary) 82%, transparent)"],
];

const lightColors = buildThemeColors(
  "light",
  colors.light.primary["600"],
  colors.light.primary["700"],
);

const darkColors = buildThemeColors(
  "dark",
  colors.dark.primary["500"],
  colors.dark.primary["400"],
);

const darkOnly = [
  ["--scrollbar-thumb", "color-mix(in srgb, var(--text-muted) 32%, transparent)"],
  ["--scrollbar-thumb-hover", "color-mix(in srgb, var(--primary) 58%, transparent)"],
  ["--scrollbar-thumb-active", "color-mix(in srgb, var(--primary) 78%, transparent)"],
  ["--shadow-xs", "0 1px 2px rgba(0, 0, 0, 0.2)"],
  ["--shadow-sm", "0 4px 8px rgba(0, 0, 0, 0.25)"],
  ["--shadow-md", "0 8px 20px rgba(0, 0, 0, 0.3)"],
  ["--shadow-lg", "0 16px 40px rgba(0, 0, 0, 0.35)"],
  ["--shadow-xl", "0 24px 64px rgba(0, 0, 0, 0.4)"],
];

/** Tailwind prefixes mapped from semantic breakpoint tokens. */
const tailwindBreakpoints = [
  ["--breakpoint-sm", breakpoints.mobile],
  ["--breakpoint-md", breakpoints.tablet],
  ["--breakpoint-lg", breakpoints.desktop],
  ["--breakpoint-xl", breakpoints.wide],
  ["--breakpoint-2xl", breakpoints.max],
];

const css = `/* AUTO-GENERATED FILE — do not edit by hand.
 * Source: tokens/*.json
 * Regenerate: npm run tokens
 */

:root {
${declare([...lightColors, ...sharedTokens, ...aliases])}
}

.dark {
${declare([...darkColors, ...darkOnly])}
}

/* Tailwind breakpoint scale — edit tokens/breakpoints.json only */
@theme {
${declare(tailwindBreakpoints)}
}

/* Responsive layout overrides — values from tokens/breakpoints.json */
@media (width >= ${breakpoints.tablet}) {
  :root {
    --navbar-height: var(--navbar-height-desktop);
    --metric-card-radius: var(--radius-2xl);
    --metric-card-padding: var(--spacing-8);
    --metric-card-value-size: 32px;
    --metric-card-value-min-height: 2.5rem;
    --metric-card-description-size: 10px;
    --metric-card-description-min-height: 2.75rem;
    --metric-card-min-height: 220px;
  }
}
`;

writeFileSync(OUTPUT_PATH, css);
console.log(`Generated ${OUTPUT_PATH}`);
