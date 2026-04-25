const items = [
  "Personal Training", "Diet Planning", "Wellness Coaching", "Strength & Conditioning",
  "Online Coaching", "Mobility", "Recovery", "Habit Building", "Body Recomposition",
];

export function Marquee() {
  return (
    <div className="relative py-8 border-y border-hairline overflow-hidden bg-surface/40">
      <div className="flex marquee whitespace-nowrap gap-12 w-max">
        {[...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-12 font-display text-2xl md:text-3xl uppercase tracking-tight text-muted-foreground">
            <span className="hover:text-ember transition-colors">{t}</span>
            <span className="text-primary">✦</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
}
