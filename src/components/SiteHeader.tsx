import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/business-digital", label: "Business & Digital" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-40 border-b border-cream/10 bg-ink text-cream">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-5 lg:px-10">
        <Link to="/" className="flex shrink-0 flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="script text-3xl text-cream">Patience<span className="text-gold">R.</span></span>
          <span className="mt-1.5 text-[0.48rem] font-semibold tracking-[0.28em] text-cream/52">IDEAS · EDUCATION · DIGITAL SOLUTIONS</span>
        </Link>
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Main navigation">
          {nav.map((item) => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="border-b border-transparent py-2 text-xs text-cream/72 transition-colors hover:text-gold" activeProps={{ className: "border-gold text-gold" }}>{item.label}</Link>)}
        </nav>
        <Link to="/contact" className="hidden items-center gap-2 rounded-full border border-gold/60 px-5 py-2.5 text-xs text-cream transition-colors hover:bg-gold hover:text-ink xl:inline-flex">Get in Touch <ArrowRight className="h-3.5 w-3.5" /></Link>
        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 xl:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {open && <nav className="border-t border-cream/10 px-6 py-5 xl:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-[1400px] flex-col">{nav.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="border-b border-cream/10 py-4 text-sm text-cream/78" activeProps={{ className: "text-gold" }}>{item.label}</Link>)}<Link to="/contact" onClick={() => setOpen(false)} className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink">Get in Touch <ArrowRight className="h-4 w-4" /></Link></div></nav>}
    </header>
  );
}
