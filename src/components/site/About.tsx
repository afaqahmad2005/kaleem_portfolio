import { Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import about from "@/assets/about-trainer.jpeg";

const principles = [
  "Personalized coaching aligned with your current lifestyle",
  "Clear training structure with measurable milestones",
  "Balanced nutrition without unsustainable extremes",
  "Wellness-first accountability for lasting results",
];

export function About() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div ref={ref} className={`lg:col-span-5 reveal ${inView ? "in-view" : ""}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-ember opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-hairline shadow-deep">
                <img
                  src={about}
                  alt="Kaleem ur Rahman, founder of Iron Forge Coaching"
                  width={1200}
                  height={1550}
                  loading="lazy"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">Fitness & wellness Coach </div>
                  <div className="font-display text-2xl font-bold">Kaleem ur Rahman</div>
                  <div className="text-sm text-muted-foreground mt-1">Manama, Bahrain</div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-ember flex items-center justify-center text-center shadow-ember animate-float-slow">
                <div>
                  <div className="font-display text-3xl font-bold text-primary-foreground">10+</div>
                  <div className="text-[10px] uppercase tracking-widest text-primary-foreground/80">Years coaching</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
              <span className="w-8 h-px bg-primary" />
              About
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Coaching designed to feel <span className="text-ember">personal, honest,</span> and sustainable.
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Iron Forge is a refined coaching practice — not a loud gym brand. Built for people who want
              guidance they can actually follow: thoughtful training, intelligent food choices, and wellness
              habits that support day-to-day performance.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              From first contact to ongoing accountability, every step is designed to help you move better,
              eat better, and feel better.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {principles.map((p, i) => (
                <PrincipleItem key={p} text={p} delay={i * 100} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrincipleItem({ text, delay }: { text: string; delay: number }) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} flex items-start gap-3 p-4 rounded-xl border border-hairline bg-surface/50 hover:bg-surface-elevated hover:border-primary/40 transition-all duration-500`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-6 h-6 rounded-full bg-ember flex items-center justify-center flex-shrink-0 mt-0.5">
        <Check className="w-3.5 h-3.5 text-primary-foreground" strokeWidth={3} />
      </div>
      <span className="text-sm leading-relaxed">{text}</span>
    </div>
  );
}
