export const HeroGrid = () => (
  <div
    className="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden="true"
  >
    <div
      className="hero-grid-drift absolute inset-0 opacity-[0.45] dark:opacity-[0.2]"
      style={{
        backgroundImage: "radial-gradient(var(--grid) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    />
    <div className="from-background via-background/80 to-background absolute inset-0 bg-gradient-to-b" />
  </div>
);
