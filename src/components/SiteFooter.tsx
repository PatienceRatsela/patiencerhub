import { Link } from "@tanstack/react-router";
import { Wrench, Boxes, Clock, Mail } from "lucide-react";

const strip = [
  { icon: Wrench, title: "PROBLEM FIRST", body: "Every tool here started as someone's real bottleneck." },
  { icon: Boxes, title: "PRACTICAL BUILDS", body: "Systems you can open and use, not decks about strategy." },
  { icon: Clock, title: "TIME BACK", body: "The measure of good work: hours you stop spending on admin." },
  { icon: Mail, title: "LET'S TALK", body: "Got something that needs building? I'd like to hear about it." },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl leading-tight sm:text-[2.5rem]">
            Building simple tools for{" "}
            <span className="script text-gold">real life</span>.
          </h2>
          <div className="mt-6 h-px w-20 bg-gold/70" />
          <p className="mt-7 text-sm leading-[1.9] text-cream/65">
            Start it yourself with the Opportunity Library, launch faster with a Business Kit, or
            have it built with you in the Studio.
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
          <div className="flex flex-wrap gap-6">
            <Link to="/library" className="hover:text-gold">Library</Link>
            <Link to="/kits" className="hover:text-gold">Business Kits</Link>
            <Link to="/studio" className="hover:text-gold">Studio</Link>
            <Link to="/about" className="hover:text-gold">About</Link>
            <Link to="/contact" className="hover:text-gold">Contact</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
