import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

const tiers = [
  {
    name: "Starter",
    price: "BHD 10",
    period: "/ 1 session",
    desc: "Online programming for self-driven athletes ready to commit.",
    features: ["Custom monthly training plan", "Nutrition guidelines", "Weekly WhatsApp check-in", "Form video reviews"],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Signature",
    price: "BHD 48",
    period: "/ 6 sessions",
    desc: "The full Iron Forge experience — most popular for transformation clients.",
    features: ["Everything in Starter", "Custom macro & meal plan", "2× weekly 1:1 calls", "24/7 WhatsApp support", "Habit & wellness coaching", "Monthly progress audit"],
    cta: "Start Signature",
    featured: true,
  },
  {
    name: "Elite 1:1",
    price: "BHD 90",
    period: "/ 12 sessions",
    desc: "In-person training in Manama. Limited slots, hand-picked clients only.",
    features: ["3× weekly in-person sessions", "Full Signature plan included", "Bloodwork & body composition", "Recovery & mobility protocols", "Private session scheduling"],
    cta: "Apply now",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-36 bg-surface/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-5">
            <span className="w-8 h-px bg-primary" />
            Pricing
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Investment plans built for <span className="text-ember">every commitment level.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            All plans include direct access to Kaleem and a personalised onboarding call.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-4 max-w-6xl mx-auto">
          {tiers.map((t, i) => (
            <PricingCard key={t.name} tier={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ tier, index }: { tier: typeof tiers[0]; index: number }) {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} relative rounded-3xl p-8 lg:p-10 transition-all duration-500 ${
        tier.featured
          ? "bg-surface-elevated border-2 border-primary shadow-ember lg:scale-105 lg:-my-2"
          : "border border-hairline bg-surface hover:border-primary/40"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {tier.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-ember text-primary-foreground text-xs uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-ember">
          <Sparkles className="w-3 h-3" /> Most popular
        </div>
      )}

      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">{tier.name}</div>
      <div className="flex items-end gap-2 mb-4">
        <span className="font-display text-5xl font-bold tracking-tight">{tier.price}</span>
        <span className="text-muted-foreground mb-1.5">{tier.period}</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed min-h-[3rem]">{tier.desc}</p>

      <Button
        asChild
        variant={tier.featured ? "ember" : "glass"}
        className="w-full rounded-full mt-7"
      >
        <a href="https://wa.me/97336929286" target="_blank" rel="noopener noreferrer">{tier.cta}</a>
      </Button>

      <div className="mt-8 pt-8 border-t border-hairline space-y-3">
        {tier.features.map((f) => (
          <div key={f} className="flex items-start gap-3 text-sm">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${tier.featured ? "bg-ember" : "bg-primary/10"}`}>
              <Check className={`w-3 h-3 ${tier.featured ? "text-primary-foreground" : "text-primary"}`} strokeWidth={3} />
            </div>
            <span className="text-muted-foreground">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
