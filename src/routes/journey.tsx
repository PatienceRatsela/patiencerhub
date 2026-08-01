import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { NewsletterForm } from "../components/NewsletterForm";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "The Journey — Building a Life With AI | Patience R." },
      {
        name: "description",
        content:
          "A housewife, educator and AI creator documenting the real work of building a meaningful life and business with AI — projects, lessons and resources.",
      },
      { property: "og:title", content: "The Journey — Patience R." },
      {
        property: "og:description",
        content: "Real projects, documented in public. Not content made for marketing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/journey" }],
  }),
  component: Journey,
});

const chapters = [
  {
    no: "01",
    title: "Housewife in the AI Era",
    body: "The honest record of running a home and building with AI at the same time. What works, what wastes time, and what actually changes a day.",
  },
  {
    no: "02",
    title: "PatienceR Academy",
    body: "Teaching what I learn as I learn it — practical AI, automation and digital skills for people who don't have a technical background.",
    to: "/resources" as const,
    cta: "Explore Learning",
  },
  {
    no: "03",
    title: "PatienceR Studio",
    body: "Brands, websites and automations built for real businesses. The client-facing side of the ecosystem.",
    to: "/work" as const,
    cta: "See The Work",
  },
  {
    no: "04",
    title: "PatienceR Books",
    body: "Women's fiction on identity, betrayal and self-reclamation, written as PKD Ratsela.",
    to: "/blog" as const,
    cta: "Read & Reflect",
  },
];

const building = [
  {
    label: "In progress",
    title: "SpazaKit",
    body: "Resell-ready digital business systems built for South African entrepreneurs.",
    to: "/spazakit" as const,
  },
  {
    label: "Live",
    title: "FutureProof Kit",
    body: "Four buildable skills for kids and teens growing up in a world that Googles everyone first.",
    href: "https://futureproofkit.lovable.app/",
  },
  {
    label: "Growing",
    title: "Teacher Tools",
    body: "Automations and classroom resources for educators and school communities.",
    to: "/teacher-tools" as const,
  },
  {
    label: "Ongoing",
    title: "Writing",
    body: "Essays and fiction — the reflective half of the work.",
    to: "/blog" as const,
  },
];

function Journey() {
  return (
    <>
      <PageHeader eyebrow="The Journey" title="Documented" scriptWord="in public.">
        I don't make content about work I haven't done. Everything here is a real project,
        shared while it's still being built.
      </PageHeader>

      <section className="bg-cream py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="divide-y divide-ink/10">
            {chapters.map((c) => (
              <div
                key={c.title}
                className="group grid grid-cols-1 gap-6 py-12 sm:grid-cols-[6rem_1fr]"
              >
                <p className="font-serif text-2xl text-gold">{c.no}</p>
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl">{c.title}</h2>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70">
                    {c.body}
                  </p>
                  {c.to && (
                    <Link
                      to={c.to}
                      className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-ink transition-colors hover:text-gold"
                    >
                      {c.cta?.toUpperCase()}
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-cream sm:py-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <p className="text-xs tracking-[0.4em] text-gold">RIGHT NOW</p>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
            What I'm building <span className="script text-gold">right now</span>.
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-cream/10 bg-cream/10 sm:grid-cols-2">
            {building.map((b) => {
              const inner = (
                <div className="flex h-full flex-col bg-ink p-8 transition-colors group-hover:bg-cream/[0.04]">
                  <p className="text-[0.65rem] tracking-[0.3em] text-gold">
                    {b.label.toUpperCase()}
                  </p>
                  <h3 className="mt-4 font-serif text-xl">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">{b.body}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-cream/80 group-hover:text-gold">
                    {b.href ? "VISIT" : "EXPLORE"}
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

          <div className="mx-auto mt-20 max-w-xl text-center">
            <h3 className="font-serif text-2xl">Join the journey</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/60">
              Weekly ideas, AI discoveries and behind-the-scenes projects — delivered with
              intention, not noise.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
