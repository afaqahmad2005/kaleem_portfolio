import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-trainer.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden grain">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Personal trainer Kaleem ur Rahman in dark gym with ember lighting"
          className="w-full h-full object-cover object-[60%_center] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        <div className="absolute inset-0 bg-radial-ember opacity-60" />
      </div>

      {/* Floating ember orb */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-float-slow -z-10" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[calc(100vh-12rem)]">
          <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Fitness, Diet & Wellness Coaching</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter">
              Build a stronger
              <br />
              <span className="text-ember">body with a calmer, smarter routine.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Premium personal training, smart nutrition, and wellness coaching by{" "}
              <span className="text-foreground font-medium">Kaleem ur Rahman</span> — built around your real
              routine, not someone else's plan.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild variant="ember" size="lg" className="rounded-full text-base px-8 group">
                <a href="https://wa.me/97336929286" target="_blank" rel="noopener noreferrer">
                  Start your transformation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="glass" size="lg" className="rounded-full text-base px-8 group">
                <a href="#programs">
                  <Play className="w-4 h-4 mr-2 fill-foreground" />
                  Explore programs
                </a>
              </Button>
            </div>

            {/* Stats inline */}
            <div className="grid grid-cols-3 gap-6 pt-10 max-w-lg">
              {[
                { v: "1:1", l: "Coaching focus" },
                { v: "100+", l: "Lives changed" },
                { v: "10 yrs", l: "Experience" },
              ].map((s, i) => (
                <div
                  key={s.l}
                  className="border-l-2 border-primary/60 pl-4 animate-fade-in"
                  style={{ animationDelay: `${0.4 + i * 0.1}s`, animationFillMode: "both" }}
                >
                  <div className="font-display text-3xl md:text-4xl font-bold">{s.v}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right floating signature card */}
          <div className="lg:col-span-5 hidden lg:block animate-slide-in-right">
            <div className="relative ml-auto max-w-sm">
              <div className="glass rounded-3xl p-6 shadow-deep animate-float-slow">
                <div className="flex items-center justify-between mb-5">
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Signature Approach</div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                </div>
                <p className="font-display text-2xl leading-snug">
                  Coaching that connects <span className="text-ember">movement, nutrition,</span> and recovery
                  into one consistent rhythm.
                </p>
                <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-hairline">
                  {["Train", "Eat", "Recover"].map((t) => (
                    <div key={t} className="text-center text-xs uppercase tracking-widest">
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
