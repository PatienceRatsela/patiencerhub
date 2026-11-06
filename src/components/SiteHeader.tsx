import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "/#essentials", label: "Essentials" },
  { href: "/#registration", label: "Registration" },
  { href: "https://ratselaacademy.co.za", label: "Ratsela Academy", external: true },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30 bg-ink text-cream">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-6 lg:px-10">
        <Link to="/" className="flex flex-col leading-none">
          <span className="script text-3xl text-cream lg:text-4xl">Patience R.</span>
          <span className="mt-1 text-[0.6rem] tracking-[0.35em] text-cream/60">
            CREATE. SOLVE. AUTOMATE. INSPIRE.
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              {...("external" in n ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-sm text-cream/80 transition-colors hover:text-gold"
            >
              {n.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-2.5 text-sm text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </a>
        </nav>

        <button
          className="rounded-md border border-cream/20 p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-ink md:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                {...("external" in n ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="rounded-md px-2 py-3 text-sm text-cream/80 hover:bg-cream/5 hover:text-gold"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-5 py-3 text-sm"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
