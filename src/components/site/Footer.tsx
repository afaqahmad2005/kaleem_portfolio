import { Dumbbell, Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-surface/40 py-14">
      <div className="container">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-full bg-ember flex items-center justify-center shadow-ember">
                <Dumbbell className="w-4.5 h-4.5 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <div className="leading-none">
                <div className="font-display font-bold text-lg">FITNESS<span className="text-ember">.</span>LINK</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Coaching by Kaleem</div>
              </div>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Premium personal training, diet planning, and wellness coaching based in Manama, Bahrain.
              Coaching that connects movement, nutrition, and recovery.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Navigate</div>
            <ul className="space-y-2.5 text-sm">
              {["Services", "Programs", "About", "Pricing", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Connect</div>
            <div className="flex items-center gap-3">
              {[
                { icon: MessageCircle, href: "https://wa.me/97336929286", label: "WhatsApp" },
                { icon: Mail, href: "mailto:Kaleem9286@gmail.com", label: "Email" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-ember hover:border-transparent transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-hairline flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Fitness Link Coaching. All rights reserved.</div>
          <div>Designed and forged in Manama, Bahrain.</div>
        </div>
      </div>
    </footer>
  );
}
