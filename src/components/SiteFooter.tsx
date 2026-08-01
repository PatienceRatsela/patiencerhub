import { Link } from "@tanstack/react-router";
import { Heart, Sparkles, Clock, Mail } from "lucide-react";

const strip = [
  { icon: Heart, title: "PASSIONATE", body: "About helping people in different ways." },
  { icon: Sparkles, title: "PURPOSE DRIVEN", body: "Everything I do is rooted in impact." },
  { icon: Clock, title: "EFFICIENCY FOCUSED", body: "Solutions that save you time and create freedom." },
  { icon: Mail, title: "LET'S CONNECT", body: "Have a question or idea? I'd love to hear from you." },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl leading-tight sm:text-[2.5rem]">
            Let's build something{" "}
            <span className="script text-gold">meaningful</span>.
          </h2>
          <div className="mt-6 h-px w-20 bg-gold/70" />
          <p className="mt-7 text-sm leading-[1.9] text-cream/65">
            Whether you're here to learn, work together, or simply follow the journey,
            welcome to PatienceR.
          </p>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-2.5 rounded-full border border-cream/25 px-7 py-3.5 text-sm text-cream transition-colors duration-500 hover:border-gold hover:text-gold"
          >
            Start a conversation <Mail className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-cream/10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {strip.map((s) => (
            <div key={s.title} className="flex items-start gap-4">
              <s.icon className="mt-1 h-6 w-6 shrink-0 text-gold" strokeWidth={1.25} />
              <div className="min-w-0">
                <p className="text-[0.65rem] tracking-[0.3em] text-cream/90">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-cream/55">{s.body}</p>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="script text-xl text-cream">Patience R.</span>
            <span>© {new Date().getFullYear()} — All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-gold">About</Link>
            <Link to="/shop" className="hover:text-gold">Shop</Link>
            <Link to="/contact" className="hover:text-gold">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
