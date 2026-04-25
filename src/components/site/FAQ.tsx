import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How quickly will I see results?", a: "Most clients notice strength and energy improvements within 3–4 weeks. Visible body composition change typically appears between weeks 6 and 12 with consistent training and nutrition." },
  { q: "Do I need a gym membership?", a: "Not necessarily. Programs adapt to home, hotel, or full commercial gyms. We'll align programming to whatever equipment access you have." },
  { q: "Is online coaching as effective as in-person?", a: "For 90% of clients, yes — and often more. The structure, accountability, and check-ins matter far more than physical presence in a session." },
  { q: "Can I pause or cancel my plan?", a: "Yes. All plans are month-to-month with no lock-in. Pause anytime — your programming and history stay intact." },
  { q: "Do you handle medical conditions or injuries?", a: "I work alongside physiotherapists when needed and adapt programming around most injuries. Anything serious requires medical clearance first." },
  { q: "How do payments work?", a: "Secure monthly invoicing via bank transfer or BenefitPay. Elite 1:1 clients receive bespoke billing arrangements." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 md:py-36">
      <div className="container max-w-4xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-5">
            <span className="w-8 h-px bg-primary" />
            Questions
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Frequently <span className="text-ember">asked.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                open === i ? "border-primary/50 bg-surface-elevated shadow-ember" : "border-hairline bg-surface hover:border-primary/30"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-display text-lg md:text-xl font-medium">{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-500 ${
                    open === i ? "rotate-180 text-primary" : "text-muted-foreground"
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-500 ease-out ${
                  open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
