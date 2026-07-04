import { cn } from "@/lib/utils";

interface HeroIllustrationProps {
  className?: string;
}

export const HeroIllustration = ({ className }: HeroIllustrationProps) => (
  <svg
    viewBox="0 0 640 480"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-full w-full", className)}
    role="img"
    aria-label="Illustration of a scalable frontend interface with components, metrics, and system architecture"
  >
    <defs>
      <linearGradient
        id="hero-bg"
        x1="0"
        y1="0"
        x2="640"
        y2="480"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--badge-blue-bg)" />
        <stop offset="1" stopColor="var(--background-secondary)" />
      </linearGradient>
      <linearGradient
        id="hero-primary"
        x1="80"
        y1="80"
        x2="560"
        y2="400"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--primary)" stopOpacity="0.9" />
        <stop offset="1" stopColor="var(--secondary)" stopOpacity="0.75" />
      </linearGradient>
      <linearGradient
        id="hero-panel"
        x1="120"
        y1="90"
        x2="520"
        y2="360"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="var(--card)" />
        <stop offset="1" stopColor="var(--surface-secondary)" />
      </linearGradient>
      <filter id="hero-shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow
          dx="0"
          dy="18"
          stdDeviation="24"
          floodColor="var(--text-primary)"
          floodOpacity="0.08"
        />
      </filter>
    </defs>

    <rect width="640" height="480" rx="28" fill="url(#hero-bg)" />

    {/* Soft grid */}
    <g opacity="0.35" stroke="var(--grid)" strokeWidth="1">
      {Array.from({ length: 11 }, (_, index) => (
        <line
          key={`v-${index}`}
          x1={40 + index * 56}
          y1="24"
          x2={40 + index * 56}
          y2="456"
        />
      ))}
      {Array.from({ length: 8 }, (_, index) => (
        <line
          key={`h-${index}`}
          x1="24"
          y1={40 + index * 52}
          x2="616"
          y2={40 + index * 52}
        />
      ))}
    </g>

    {/* Back card */}
    <g filter="url(#hero-shadow)" opacity="0.7">
      <rect
        x="92"
        y="78"
        width="420"
        height="280"
        rx="22"
        fill="var(--card)"
        stroke="var(--border)"
      />
    </g>

    {/* Main browser window */}
    <g filter="url(#hero-shadow)">
      <rect
        x="72"
        y="96"
        width="420"
        height="300"
        rx="22"
        fill="url(#hero-panel)"
        stroke="var(--border)"
      />
      <rect
        x="72"
        y="96"
        width="420"
        height="44"
        rx="22"
        fill="var(--surface-secondary)"
      />
      <rect x="72" y="118" width="420" height="22" fill="var(--surface-secondary)" />

      {/* Window controls */}
      <circle cx="100" cy="118" r="6" fill="var(--danger)" fillOpacity="0.75" />
      <circle cx="120" cy="118" r="6" fill="var(--warning)" fillOpacity="0.8" />
      <circle cx="140" cy="118" r="6" fill="var(--success)" fillOpacity="0.8" />

      {/* Address bar */}
      <rect
        x="168"
        y="106"
        width="280"
        height="24"
        rx="12"
        fill="var(--background-primary)"
        stroke="var(--border)"
      />
      <circle cx="184" cy="118" r="4" fill="var(--primary)" />
      <rect
        x="198"
        y="114"
        width="96"
        height="8"
        rx="4"
        fill="var(--text-muted)"
        fillOpacity="0.35"
      />
    </g>

    {/* Sidebar */}
    <rect
      x="92"
      y="156"
      width="88"
      height="220"
      rx="14"
      fill="var(--background-primary)"
      stroke="var(--border)"
    />
    <rect x="106" y="174" width="60" height="10" rx="5" fill="url(#hero-primary)" />
    <rect
      x="106"
      y="198"
      width="48"
      height="8"
      rx="4"
      fill="var(--text-muted)"
      fillOpacity="0.28"
    />
    <rect
      x="106"
      y="216"
      width="54"
      height="8"
      rx="4"
      fill="var(--text-muted)"
      fillOpacity="0.22"
    />
    <rect
      x="106"
      y="234"
      width="42"
      height="8"
      rx="4"
      fill="var(--text-muted)"
      fillOpacity="0.22"
    />
    <rect
      x="106"
      y="252"
      width="50"
      height="8"
      rx="4"
      fill="var(--text-muted)"
      fillOpacity="0.22"
    />
    <rect
      x="106"
      y="292"
      width="60"
      height="28"
      rx="10"
      fill="var(--badge-blue-bg)"
      stroke="var(--badge-blue-border)"
    />

    {/* Main content cards */}
    <rect
      x="196"
      y="156"
      width="272"
      height="72"
      rx="14"
      fill="var(--background-primary)"
      stroke="var(--border)"
    />
    <rect
      x="212"
      y="172"
      width="120"
      height="12"
      rx="6"
      fill="var(--text-primary)"
      fillOpacity="0.78"
    />
    <rect
      x="212"
      y="194"
      width="180"
      height="8"
      rx="4"
      fill="var(--text-muted)"
      fillOpacity="0.28"
    />
    <rect
      x="212"
      y="208"
      width="148"
      height="8"
      rx="4"
      fill="var(--text-muted)"
      fillOpacity="0.2"
    />

    <rect
      x="196"
      y="242"
      width="128"
      height="118"
      rx="14"
      fill="var(--background-primary)"
      stroke="var(--border)"
    />
    <rect
      x="212"
      y="258"
      width="56"
      height="10"
      rx="5"
      fill="var(--primary)"
      fillOpacity="0.85"
    />
    <rect
      x="212"
      y="280"
      width="88"
      height="8"
      rx="4"
      fill="var(--text-muted)"
      fillOpacity="0.24"
    />
    <rect
      x="212"
      y="296"
      width="72"
      height="8"
      rx="4"
      fill="var(--text-muted)"
      fillOpacity="0.2"
    />
    <path
      d="M214 338 C230 318, 246 348, 262 328 C278 308, 294 336, 310 320"
      stroke="var(--primary)"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />

    <rect
      x="340"
      y="242"
      width="128"
      height="118"
      rx="14"
      fill="var(--background-primary)"
      stroke="var(--border)"
    />
    <rect
      x="356"
      y="258"
      width="48"
      height="10"
      rx="5"
      fill="var(--secondary)"
      fillOpacity="0.85"
    />
    <rect
      x="356"
      y="284"
      width="20"
      height="52"
      rx="6"
      fill="var(--primary)"
      fillOpacity="0.35"
    />
    <rect
      x="384"
      y="300"
      width="20"
      height="36"
      rx="6"
      fill="var(--primary)"
      fillOpacity="0.55"
    />
    <rect
      x="412"
      y="272"
      width="20"
      height="64"
      rx="6"
      fill="var(--primary)"
      fillOpacity="0.8"
    />

    {/* Floating component card */}
    <g filter="url(#hero-shadow)">
      <rect
        x="430"
        y="68"
        width="168"
        height="132"
        rx="18"
        fill="var(--card)"
        stroke="var(--border)"
      />
      <rect
        x="448"
        y="86"
        width="40"
        height="40"
        rx="12"
        fill="var(--badge-blue-bg)"
        stroke="var(--badge-blue-border)"
      />
      <path
        d="M460 106 L468 114 L480 98"
        stroke="var(--primary)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="500"
        y="92"
        width="78"
        height="10"
        rx="5"
        fill="var(--text-primary)"
        fillOpacity="0.8"
      />
      <rect
        x="500"
        y="110"
        width="58"
        height="8"
        rx="4"
        fill="var(--text-muted)"
        fillOpacity="0.28"
      />
      <rect
        x="448"
        y="144"
        width="132"
        height="10"
        rx="5"
        fill="var(--text-muted)"
        fillOpacity="0.18"
      />
      <rect
        x="448"
        y="164"
        width="96"
        height="10"
        rx="5"
        fill="var(--text-muted)"
        fillOpacity="0.14"
      />
    </g>

    {/* Floating metrics pill */}
    <g filter="url(#hero-shadow)">
      <rect
        x="456"
        y="320"
        width="148"
        height="72"
        rx="18"
        fill="var(--card)"
        stroke="var(--border)"
      />
      <rect x="474" y="338" width="36" height="36" rx="10" fill="url(#hero-primary)" />
      <path
        d="M484 356 H500 M492 348 V364"
        stroke="var(--text-inverse)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <rect
        x="522"
        y="342"
        width="62"
        height="10"
        rx="5"
        fill="var(--text-primary)"
        fillOpacity="0.82"
      />
      <rect
        x="522"
        y="360"
        width="48"
        height="8"
        rx="4"
        fill="var(--success)"
        fillOpacity="0.7"
      />
    </g>

    {/* Code chip */}
    <g filter="url(#hero-shadow)">
      <rect
        x="48"
        y="348"
        width="132"
        height="56"
        rx="16"
        fill="var(--card)"
        stroke="var(--border)"
      />
      <text
        x="68"
        y="382"
        fill="var(--primary)"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="18"
        fontWeight="700"
      >
        {"</>"}
      </text>
      <rect
        x="108"
        y="366"
        width="52"
        height="8"
        rx="4"
        fill="var(--text-muted)"
        fillOpacity="0.28"
      />
      <rect
        x="108"
        y="382"
        width="40"
        height="8"
        rx="4"
        fill="var(--text-muted)"
        fillOpacity="0.2"
      />
    </g>

    {/* Accent rings */}
    <circle
      cx="560"
      cy="250"
      r="42"
      stroke="var(--primary)"
      strokeOpacity="0.18"
      strokeWidth="2"
    />
    <circle
      cx="560"
      cy="250"
      r="28"
      stroke="var(--secondary)"
      strokeOpacity="0.22"
      strokeWidth="2"
    />
    <circle cx="560" cy="250" r="8" fill="var(--primary)" fillOpacity="0.7" />
  </svg>
);
