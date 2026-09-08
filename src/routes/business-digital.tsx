import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Boxes, BriefcaseBusiness, ExternalLink, Laptop } from "lucide-react";
import businessImage from "../assets/patiencer-business-digital.jpg";

export const Route = createFileRoute("/business-digital")({
  head: () => ({ meta: [
    { title: "Business & Digital Solutions | PatienceR" },
    { name: "description", content: "Websites, AI, automation, business systems and practical tools for entrepreneurs, small businesses and creators." },
    { property: "og:title", content: "Business & Digital | PatienceR" },
    { property: "og:description", content: "Turn your idea into something that works." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: BusinessDigital });

const offers = [
  { icon: Laptop, title: "Websites & Branding", body: "A clear, credible digital presence shaped around your real business.", to: "/work" as const },
  { icon: Bot, title: "AI & Automation", body: "Simple systems that reduce repetitive work and keep opportunities moving.", to: "/automation" as const },
  { icon: Boxes, title: "Business Kits", body: "Launch-ready foundations with a website, forms, workflows and brand basics.", to: "/kits" as const },
  { icon: BriefcaseBusiness, title: "Studio Support", body: "Bookkeeping, digital strategy and practical implementation when you need it built with you.", to: "/studio" as const },
];

function BusinessDigital() { return <>
  <section className="bg-ink text-cream"><div className="mx-auto grid max-w-[1400px] lg:grid-cols-2"><div className="flex flex-col justify-center px-6 py-20 lg:px-16 lg:py-28"><p className="text-[0.62rem] tracking-[0.4em] text-gold">FOR BUSINESS & DIGITAL</p><h1 className="mt-6 font-serif text-5xl leading-tight sm:text-7xl">Turn your idea into something that <span className="script text-gold">works.</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-cream/68">Websites, AI, automation, digital systems and practical tools for entrepreneurs, small businesses and creators who want useful progress — not more complexity.</p></div><img src={businessImage} alt="A practical digital business workspace" width={1280} height={960} className="h-full min-h-[480px] w-full object-cover" /></div></section>
  <section className="bg-cream py-24 text-ink"><div className="mx-auto max-w-[1200px] px-6 lg:px-10"><div className="grid gap-px bg-ink/12 sm:grid-cols-2">{offers.map((offer) => <Link key={offer.title} to={offer.to} className="group flex min-h-72 flex-col bg-cream p-9 transition-colors hover:bg-card"><offer.icon className="h-8 w-8 text-gold" strokeWidth={1.25}/><h2 className="mt-7 font-serif text-3xl">{offer.title}</h2><p className="mt-4 flex-1 max-w-md text-sm leading-7 text-ink/64">{offer.body}</p><span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold group-hover:text-gold">Explore <ArrowRight className="h-3.5 w-3.5"/></span></Link>)}</div><div className="mt-16 grid gap-6 border-t border-ink/15 pt-10 md:grid-cols-2"><Link to="/spazakit" className="group flex items-center justify-between border border-ink/12 p-6"><div><p className="text-[0.58rem] tracking-[0.25em] text-gold">SUB-BRAND</p><h3 className="mt-2 font-serif text-2xl">SpazaKit</h3><p className="mt-2 text-sm text-ink/60">Resell-ready digital business systems built for South Africa.</p></div><ArrowRight className="h-5 w-5"/></Link><a href="https://petalandring.lovable.app/" target="_blank" rel="noreferrer" className="group flex items-center justify-between border border-ink/12 p-6"><div><p className="text-[0.58rem] tracking-[0.25em] text-gold">FEATURED WORK</p><h3 className="mt-2 font-serif text-2xl">Petal & Ring</h3><p className="mt-2 text-sm text-ink/60">Wedding branding, coordination and websites, done with heart.</p></div><ExternalLink className="h-5 w-5"/></a></div></div></section>
</>; }
