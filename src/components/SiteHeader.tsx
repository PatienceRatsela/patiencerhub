import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/library", label: "Opportunity Library" },
  { to: "/kits", label: "Business Kits" },
  { to: "/studio", label: "Studio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const moreLinks = [
  { to: "/spazakit", label: "SpazaKit" },
  { to: "/shop", label: "Downloads & Templates" },
  { to: "/resources", label: "Guides & Prompt Packs" },
  { to: "/work", label: "Past Work" },
  { to: "/journey", label: "Building in Public" },
] as const;


export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileJourneyOpen, setMobileJourneyOpen] = useState(false);

  return (
    <header className="relative z-30 bg-ink text-cream">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-6 lg:px-10">
        <Link to="/" className="flex flex-col leading-none">
          <span className="script text-3xl text-cream lg:text-4xl">Patience R.</span>
          <span className="mt-1 text-[0.6rem] tracking-[0.35em] text-cream/60">
            CREATE. SOLVE. AUTOMATE. INSPIRE.
          </span>
        </Link>

        <nav className="hidden items-center gap-8 xl:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-cream/80 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold [&]:font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div className="group relative">
            <button
              className="flex items-center gap-1 text-sm text-cream/80 transition-colors group-hover:text-gold"
              aria-haspopup="true"
            >
              More
              <ChevronDown
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
                strokeWidth={1.5}
              />
            </button>
            <div className="invisible absolute left-1/2 top-full mt-4 w-60 -translate-x-1/2 overflow-hidden rounded-lg border border-cream/10 bg-ink opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
              <div className="py-2">
                {moreLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-5 py-2.5 text-sm text-cream/80 transition-colors hover:bg-cream/5 hover:text-gold"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </nav>

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full border border-cream/30 px-5 py-2.5 text-sm text-cream transition-colors hover:border-gold hover:text-gold xl:inline-flex"
        >
          Let's Connect <ArrowRight className="h-4 w-4" />
        </Link>

        <button
          className="rounded-md border border-cream/20 p-2 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-ink xl:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm text-cream/80 hover:bg-cream/5 hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}

            {/* Mobile More accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setMobileJourneyOpen((v) => !v)}
                className="flex items-center justify-between rounded-md px-2 py-3 text-sm text-cream/80 hover:bg-cream/5 hover:text-gold"
                aria-expanded={mobileJourneyOpen}
              >
                <span>More</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${mobileJourneyOpen ? "rotate-180" : ""}`}
                  strokeWidth={1.5}
                />
              </button>
              {mobileJourneyOpen && (
                <div className="flex flex-col border-l border-cream/10 pl-4">
                  {moreLinks.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="rounded-md px-2 py-2.5 text-sm text-cream/70 transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>


            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-5 py-3 text-sm"
            >
              Let's Connect <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
