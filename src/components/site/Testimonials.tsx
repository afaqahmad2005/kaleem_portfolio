import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star } from "lucide-react";

const testimonials = [
  { name: "Sara A.", role: "Lost 14 kg in 5 months", quote: "Kaleem changed how I think about food and training. It never felt extreme — just consistent. I'm leaner, stronger, and finally enjoying the process." },
  { name: "Ahmed K.", role: "Gained 9 kg lean mass", quote: "I'd been stuck for years. The programming, the check-ins, the mindset work — everything connected. Best coaching investment of my life." },
  { name: "Layla M.", role: "Marathon finisher", quote: "Beyond fitness, Kaleem helped me build daily habits that improved my sleep, mood, and energy. He genuinely cares about your progress." },
  { name: "Hassan R.", role: "Postnatal strength rebuild", quote: "Patient, knowledgeable, and brutally honest in the best way. I trust his guidance completely. Worth every dinar." },
  { name: "Noor F.", role: "Body recomp client", quote: "The nutrition plan finally fit my actual life. Six months in I look and feel like a different person. I cannot recommend Fitness Link enough." },
];

export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 6000, stopOnInteraction: false })]
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", () => setSelected(embla.selectedScrollSnap()));
  }, [embla]);

  return (
    <section id="results" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px] -z-10" />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-5">
            <span className="w-8 h-px bg-primary" />
            Client Stories
            <span className="w-8 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Real people. <span className="text-ember">Real change.</span>
          </h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-[0_0_100%] md:flex-[0_0_70%] lg:flex-[0_0_55%] px-4">
                <div
                  className={`relative glass rounded-3xl p-8 md:p-12 transition-all duration-700 ${
                    selected === i ? "scale-100 opacity-100" : "scale-95 opacity-50"
                  }`}
                >
                  <Quote className="w-12 h-12 text-primary/30 mb-6" />
                  <p className="font-display text-xl md:text-2xl lg:text-3xl leading-snug mb-8">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-hairline">
                    <div>
                      <div className="font-display font-semibold text-lg">{t.name}</div>
                      <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => embla?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                selected === i ? "w-10 bg-ember" : "w-1.5 bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
