import { useEffect, useRef, useState } from "react";

const stats = [
  { v: 100, suffix: "+", label: "Clients transformed" },
  { v: 10, suffix: "+", label: "Years of coaching" },
  { v: 10000, suffix: "+", label: "Sessions delivered" },
  { v: 93, suffix: "%", label: "Client retention" },
];

export function Stats() {
  return (
    <section className="relative py-20 border-y border-hairline bg-surface/40 overflow-hidden grain">
      <div className="absolute inset-0 bg-radial-ember opacity-40 -z-10" />
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((s, i) => (
            <Counter key={s.label} {...s} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ v, suffix, label, delay }: { v: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const start = performance.now();
        const dur = 1800;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.floor(eased * v));
          if (p < 1) requestAnimationFrame(tick);
        };
        setTimeout(() => requestAnimationFrame(tick), delay);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [v, delay]);

  return (
    <div ref={ref} className="text-center lg:text-left">
      <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
        <span className="text-ember">{n.toLocaleString()}</span>
        <span className="text-foreground">{suffix}</span>
      </div>
      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-3">{label}</div>
    </div>
  );
}
