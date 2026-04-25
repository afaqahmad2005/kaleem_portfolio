// Services.tsx - Option 1: Lift + Glow + Scale
import { Dumbbell, Salad, HeartPulse, Activity, Brain, Trophy, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  { icon: Dumbbell, title: "Personal Training", desc: "Structured 1:1 sessions for strength, conditioning, mobility, and sustainable physical progress.", tag: "01" },
  { icon: Salad, title: "Diet Planning", desc: "Practical nutrition designed around real routines, better energy, and realistic long-term habits.", tag: "02" },
  { icon: HeartPulse, title: "Wellness Coaching", desc: "Recovery, stress management, and lifestyle balance integrated into a holistic health approach.", tag: "03" },
  { icon: Activity, title: "Online Coaching", desc: "Programmed remote training with weekly check-ins, video reviews, and direct WhatsApp access.", tag: "04" },
  { icon: Brain, title: "Habit Coaching", desc: "Behaviour-change frameworks that turn small, consistent actions into lasting transformation.", tag: "05" },
  { icon: Trophy, title: "Body Recomposition", desc: "Build lean muscle, strip body fat, and rebuild confidence with measurable milestones.", tag: "06" },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title={<>Focused support for <span className="text-ember">training, nutrition,</span> and total wellbeing.</>}
          desc="Every service strengthens a different part of the same goal: feeling healthier, stronger, and more in control of your routine."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline rounded-3xl overflow-hidden border border-hairline">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, desc, align = "left" }) {
  const { ref, inView } = useReveal();
  return (
    <div ref={ref} className={`reveal ${inView ? "in-view" : ""} ${align === "center" ? "text-center mx-auto" : ""} max-w-3xl`}>
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-5">
        <span className="w-8 h-px bg-primary" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
        {title}
      </h2>
      {desc && <p className="mt-6 text-muted-foreground text-lg max-w-2xl">{desc}</p>}
    </div>
  );
}

function ServiceCard({ icon: Icon, title, desc, tag, index }) {
  const { ref, inView } = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} group relative bg-surface p-8 lg:p-10 transition-all duration-300 ease-out cursor-pointer overflow-hidden rounded-2xl border border-transparent hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-ember/25 hover:border-ember/40`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex justify-between items-start mb-12">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-ember group-hover:border-ember group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
        </div>
        <span className="text-xs font-display tracking-widest text-muted-foreground group-hover:text-ember transition-colors duration-300">{tag}</span>
      </div>
      <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-ember transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">{desc}</p>
      <div className="mt-8 flex items-center text-sm font-medium text-ember transition-all duration-300 group-hover:translate-x-2">
        Learn more <ArrowUpRight className="w-4 h-4 ml-1 transition-all duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
}