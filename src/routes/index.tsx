import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import portrait from "../assets/patience-portrait-cleaned.jpg.asset.json";
import { NewsletterForm } from "../components/NewsletterForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PatienceR — Building Simple Tools for Real Life" },
      {
        name: "description",
        content:
          "A business studio building practical tools for entrepreneurs and small businesses: an opportunity library, launch-ready business kits, and studio services.",
      },
      { property: "og:title", content: "PatienceR — Building Simple Tools for Real Life" },
      {
        property: "og:description",
        content:
          "Helping entrepreneurs start businesses, simplify work and build with confidence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    no: "01",
    title: "Opportunity Library",
    body: "For people building it themselves. Business ideas, Business-in-a-Box downloads, templates, guides, checklists and prompt packs — everything needed to start.",
    cta: "Explore the Library",
    to: "/library" as const,
  },
  {
    no: "02",
    title: "Business Kits",
    body: "Ready-built business systems, not templates. Each kit arrives with a website, forms, an AI assistant, workflows and branding foundations — launch-ready.",
    cta: "Browse Business Kits",
    to: "/kits" as const,
  },
  {
    no: "03",
    title: "Studio",
    body: "Bookkeeping in Xero, business websites, custom AI automations, systems, branding and digital strategy. Need something built? Let's build it together.",
    cta: "Work With Me",
    to: "/studio" as const,
  },
  {
    no: "04",
    title: "About Patience",
    body: "A problem solver who turns ideas into working tools. The belief behind everything here: small, well-made tools save real time and change how people work.",
    cta: "Read the Story",
    to: "/about" as const,
  },
];

const outcomes = [
  {
    label: "Start something",
    body: "A researched idea, the paperwork, the pricing and the first-week steps — in one place, ready to act on.",
    to: "/library" as const,
  },
  {
    label: "Launch faster",
    body: "Open a kit built for your trade instead of assembling a business from twelve disconnected tools.",
    to: "/kits" as const,
  },
  {
    label: "Get your books in order",
    body: "Xero set up, cleaned up or handled monthly, so the numbers stop being the thing you avoid.",
    to: "/studio" as const,
  },
  {
    label: "Automate the repetitive work",
    body: "Assistants and workflows that quietly handle quoting, follow-up and admin while you work.",
    to: "/studio" as const,
  },
  {
    label: "Be taken seriously",
    body: "A site, a brand and a way of responding that make people trust the business before they speak to you.",
    to: "/studio" as const,
  },
];

const building = [
  {
    status: "In progress",
    title: "SpazaKit",
    body: "Resell-ready digital business systems built for South African entrepreneurs.",
    to: "/spazakit" as const,
  },
  {
    status: "Live",
    title: "FutureProof Kit",
    body: "Four buildable skills for kids growing up in a world that Googles everyone first.",
    href: "https://futureproofkit.lovable.app/",
  },
  {
    status: "Growing",
    title: "Business Kits",
    body: "Launch-ready foundations for bookkeepers, cleaners, estate agents, salons and consultants.",
    to: "/kits" as const,
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-14 px-6 pb-24 pt-14 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:pb-36 lg:pt-24">
          <div className="order-2 lg:order-1">
            <p className="text-[0.65rem] tracking-[0.45em] text-gold">
              A BUSINESS STUDIO
            </p>
            <h1 className="mt-8 font-serif text-[2.8rem] leading-[1.03] tracking-tight sm:text-6xl lg:text-[4.5rem]">
              Building simple tools
              <br />
              for <span className="script text-gold">real life.</span>
            </h1>
            <div className="mt-9 h-px w-24 bg-gold/70" />
            <p className="mt-8 max-w-lg text-base leading-[1.85] text-cream/70">
              Helping entrepreneurs start businesses, simplify work and build with confidence —
              through practical tools, launch-ready systems and work done properly.
            </p>
            <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                to="/library"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-medium text-ink transition-all duration-500 hover:gap-4"
              >
                Explore the Tools
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link
                to="/studio"
                className="group inline-flex items-center gap-2 border-b border-cream/25 pb-1 text-sm text-cream/90 transition-colors duration-500 hover:border-gold hover:text-gold"
              >
                Work With Me
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden">
              <img
                src={portrait.url}
                alt="Editorial portrait of Patience R."
                width={1024}
                height={1280}
                className="h-full w-full object-cover grayscale transition-all duration-[1200ms] hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 border border-cream/10" />
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section id="the-tools" className="bg-cream py-24 text-ink sm:py-36">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.45em] text-ink/45">WHERE TO BEGIN</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.75rem]">
              Four ways in, one{" "}
              <span className="script text-gold">outcome</span>.
            </h2>
            <p className="mt-6 text-sm leading-[1.9] text-ink/65">
              Build it yourself, buy it ready-made, or have it built with you. Whichever route you
              take, the aim is the same: less friction, fewer moving parts, work that gets done.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {pillars.map((p) => (
              <Link
                key={p.title}
                to={p.to}
                className="group flex flex-col bg-cream p-9 transition-colors duration-500 hover:bg-[color-mix(in_oklab,var(--gold)_9%,var(--cream))] sm:p-12"
              >
                <p className="font-serif text-xl text-gold">{p.no}</p>
                <h3 className="mt-7 font-serif text-2xl leading-snug sm:text-[1.7rem]">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-sm flex-1 text-sm leading-[1.85] text-ink/65">{p.body}</p>
                <span className="mt-9 inline-flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.25em] text-ink transition-all duration-500 group-hover:gap-3.5 group-hover:text-gold">
                  {p.cta.toUpperCase()}
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS SOLVED */}
      <section className="bg-ink py-24 text-cream sm:py-36">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-[0.65rem] tracking-[0.45em] text-gold">PROBLEMS SOLVED</p>
              <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.75rem]">
                What people actually{" "}
                <span className="script text-gold">come here for</span>.
              </h2>
            </div>
            <Link
              to="/studio"
              className="inline-flex shrink-0 items-center gap-2 border-b border-cream/20 pb-1 text-xs tracking-[0.2em] text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              SEE THE STUDIO
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="mt-16 divide-y divide-cream/10 border-t border-cream/10">
            {outcomes.map((o, i) => (
              <Link
                key={o.label}
                to={o.to}
                className="group grid grid-cols-1 items-baseline gap-4 py-9 transition-colors duration-500 sm:grid-cols-[4rem_1fr_auto] sm:gap-10"
              >
                <span className="text-xs tracking-[0.25em] text-gold">0{i + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl leading-snug transition-colors duration-500 group-hover:text-gold sm:text-[1.9rem]">
                    {o.label}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-[1.85] text-cream/60">{o.body}</p>
                </div>
                <ArrowUpRight
                  className="hidden h-6 w-6 text-cream/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gold sm:block"
                  strokeWidth={1.25}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BUILDING IN PUBLIC */}
      <section className="bg-cream py-24 text-ink sm:py-36">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.45em] text-ink/45">IN THE WORKSHOP</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.75rem]">
              What's being built{" "}
              <span className="script text-gold">right now</span>.
            </h2>
            <p className="mt-6 text-sm leading-[1.9] text-ink/65">
              Nothing here is a mock-up. Every project below is real, in use or in progress, and
              documented as it goes.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {building.map((b) => {
              const inner = (
                <div className="flex h-full flex-col border border-ink/10 bg-cream p-9 transition-all duration-500 group-hover:border-gold">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span className="text-[0.65rem] tracking-[0.3em] text-ink/50">
                      {b.status.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="mt-7 font-serif text-2xl">{b.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-[1.85] text-ink/65">{b.body}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.25em] text-ink transition-all duration-500 group-hover:gap-3.5 group-hover:text-gold">
                    {b.href ? "VISIT PROJECT" : "EXPLORE"}
                    {b.href ? (
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                    ) : (
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                    )}
                  </span>
                </div>
              );
              return b.href ? (
                <a
                  key={b.title}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  {inner}
                </a>
              ) : (
                <Link key={b.title} to={b.to!} className="group">
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-ink py-24 text-cream sm:py-36">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
          <p className="text-[0.65rem] tracking-[0.45em] text-gold">THE NEWSLETTER</p>
          <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.75rem]">
            New tools, as they{" "}
            <span className="script text-gold">land</span>.
          </h2>
          <div className="mx-auto mt-7 h-px w-20 bg-gold" />
          <p className="mx-auto mt-7 max-w-xl text-sm leading-[1.9] text-cream/65">
            A short note when a new kit, download or automation is ready — plus the practical
            lessons from building them. No hype, no filler.
          </p>
          <div className="mx-auto mt-9 max-w-md">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
