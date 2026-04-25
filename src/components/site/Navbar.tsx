import { useEffect, useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Services", href: "#services" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`container transition-all duration-500 ${scrolled ? "max-w-6xl" : ""}`}>
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-deep" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-ember flex items-center justify-center shadow-ember group-hover:scale-110 transition-transform duration-300">
                <Dumbbell className="w-4.5 h-4.5 text-primary-foreground" strokeWidth={2.5} />
              </div>
            </div>
            <div className="leading-none">
              <div className="font-display font-bold tracking-tight text-lg">FITNESS<span className="text-ember">.</span>LINK</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Coaching by Kaleem</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-ember scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex">
            <Button asChild variant="ember" size="sm" className="rounded-full px-5">
              <a href="https://wa.me/97336929286" target="_blank" rel="noopener noreferrer">Start on WhatsApp</a>
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full glass"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-3 glass rounded-3xl p-4 animate-fade-in">
            <div className="flex flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm border-b border-hairline last:border-0 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <Button asChild variant="ember" className="mt-3 rounded-full">
                <a href="https://wa.me/97336929286">Start on WhatsApp</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

