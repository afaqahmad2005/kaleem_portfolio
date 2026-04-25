import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";
import strength from "@/assets/program-strength.jpg";
import nutrition from "@/assets/program-nutrition.jpg";
import wellness from "@/assets/program-wellness.jpg";
import hiit from "@/assets/program-hiit.jpg";

const programs = [
  { img: strength, title: "Strength & Power", duration: "12 Weeks", level: "Intermediate", desc: "Progressive overload programming designed to build raw strength, muscle density, and athletic confidence.", focus: ["Hypertrophy", "Compound lifts", "Periodization"] },
  { img: nutrition, title: "Nutrition Reset", duration: "8 Weeks", level: "All Levels", desc: "A practical, food-first plan that restores energy, manages cravings, and creates sustainable eating habits.", focus: ["Macros", "Meal prep", "Mindful eating"] },
  { img: wellness, title: "Wellness Reboot", duration: "6 Weeks", level: "All Levels", desc: "Recovery, mobility, and stress management to help you feel better in your body — not just look better.", focus: ["Mobility", "Sleep", "Breathwork"] },
  { img: hiit, title: "Athletic Conditioning", duration: "10 Weeks", level: "Advanced", desc: "Metabolic conditioning and HIIT-based training to torch fat and unlock next-level work capacity.", focus: ["HIIT", "Endurance", "Power"] },
];

export function Programs() {
  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const { ref, inView } = useReveal<HTMLDivElement>();

  useEffect(() => {
    if (!embla) return;
    setSnaps(embla.scrollSnapList());
    embla.on("select", () => setSelected(embla.selectedScrollSnap()));
  }, [embla]);

  return (
    <section id="programs" className="relative py-28 md:py-36 bg-surface/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] -z-0" />

      <div className="container relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div ref={ref} className={`reveal ${inView ? "in-view" : ""} max-w-2xl`}>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-5">
              <span className="w-8 h-px bg-primary" />
              Signature Programs
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
              Proven systems built for <span className="text-ember">real results.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => embla?.scrollPrev()}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-ember hover:border-transparent transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              aria-label="Next"
              onClick={() => embla?.scrollNext()}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-ember hover:border-transparent transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden -mx-6 px-6" ref={emblaRef}>
          <div className="flex gap-6">
            {programs.map((p) => (
              <div key={p.title} className="flex-[0_0_88%] sm:flex-[0_0_60%] lg:flex-[0_0_40%] xl:flex-[0_0_32%]">
                <article className="group relative h-[520px] rounded-3xl overflow-hidden border border-hairline">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1200}
                    height={1500}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="px-3 py-1.5 rounded-full glass text-xs flex items-center gap-1.5">
                      <Clock className="w-3 h-3" /> {p.duration}
                    </span>
                    <span className="px-3 py-1.5 rounded-full glass text-xs flex items-center gap-1.5">
                      <Flame className="w-3 h-3 text-primary" /> {p.level}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="font-display text-3xl font-bold mb-3">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.focus.map((f) => (
                        <span key={f} className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-hairline">
                          {f}
                        </span>
                      ))}
                    </div>
                    <Button asChild variant="ember" size="sm" className="rounded-full">
                      <a href="#contact">Enroll now</a>
                    </Button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-10">
          {snaps.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
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
