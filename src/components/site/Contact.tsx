import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

const contacts = [
  { icon: MapPin, label: "Studio", value: "Manama, Bahrain", href: "https://maps.app.goo.gl/ex2Mvg7cmhP2wmTo7" },
  { icon: Mail, label: "Email", value: "Kaleem9286@gmail.com", href: "mailto:Kaleem9286@gmail.com" },
  { icon: Phone, label: "WhatsApp", value: "+973 3692 9286", href: "https://wa.me/97336929286" },
];

export function Contact() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden grain">
      <div className="absolute inset-0 bg-radial-ember opacity-50 -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-ember opacity-10 blur-[150px] -z-10" />

      <div className="container">
        <div ref={ref} className={`reveal ${inView ? "in-view" : ""} max-w-4xl mx-auto text-center`}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-5">
            <span className="w-8 h-px bg-primary" />
            Begin
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
            Ready to begin a stronger,
            <br />
            <span className="text-ember">healthier routine?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Reach out directly to discuss your goals, ask about coaching, or start your next step with Iron Forge.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button asChild variant="ember" size="lg" className="rounded-full px-8 group">
              <a href="https://wa.me/97336929286" target="_blank" rel="noopener noreferrer">
                Message on WhatsApp
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="glass" size="lg" className="rounded-full px-8">
              <a href="mailto:Kaleem9286@gmail.com">Send email</a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mt-20 max-w-5xl mx-auto">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group glass rounded-3xl p-7 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-ember group-hover:border-transparent transition-all duration-500">
                  <c.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" strokeWidth={1.75} />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-500" />
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1.5">{c.label}</div>
              <div className="font-display text-lg font-medium">{c.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}