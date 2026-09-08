import { Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, Linkedin } from "lucide-react";

const links = [
  { to: "/", label: "Home" }, { to: "/education", label: "Education" }, { to: "/business-digital", label: "Business & Digital" },
  { to: "/resources", label: "Resources" }, { to: "/about", label: "About" }, { to: "/blog", label: "Blog" }, { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-cream/10 bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          <div><Link to="/" className="script text-4xl">Patience<span className="text-gold">R.</span></Link><p className="mt-2 text-[0.5rem] tracking-[0.28em] text-cream/45">IDEAS · EDUCATION · DIGITAL SOLUTIONS</p></div>
          <div className="text-center"><p className="script text-2xl text-gold">Let&apos;s build something good.</p><Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/70 px-5 py-2.5 text-xs">Get in Touch <ArrowRight className="h-3.5 w-3.5" /></Link></div>
          <div className="flex items-center gap-3 lg:justify-end"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-cream/60 hover:text-gold"><Instagram className="h-4 w-4" /></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-cream/60 hover:text-gold"><Linkedin className="h-4 w-4" /></a></div>
        </div>
        <div className="mt-12 flex flex-col gap-6 border-t border-cream/10 pt-7 lg:flex-row lg:items-center lg:justify-between"><p className="text-[0.65rem] text-cream/42">© 2026 PatienceR. All rights reserved.</p><nav className="flex flex-wrap gap-x-5 gap-y-3">{links.map((item) => <Link key={item.to} to={item.to} className="text-[0.65rem] text-cream/52 hover:text-gold">{item.label}</Link>)}</nav><p className="text-[0.65rem] text-cream/42">Designed with purpose. Built for impact.</p></div>
      </div>
    </footer>
  );
}
