import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Opportunity Library — Business Ideas & Downloads | PatienceR" },
      {
        name: "description",
        content:
          "Business ideas, Business-in-a-Box downloads, templates, guides, checklists and prompt packs — everything you need to start something of your own.",
      },
      { property: "og:title", content: "Opportunity Library | PatienceR" },
      {
        property: "og:description",
        content:
          "Everything needed to start: ideas, downloads, templates, guides, checklists and prompt packs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LibraryPage,
});

const shelves = [
  {
    no: "01",
    title: "Business Ideas",
    body: "Vetted, practical ideas with the numbers, tools and first steps already worked out.",
  },
  {
    no: "02",
    title: "Business-in-a-Box Downloads",
    body: "A complete starting pack per idea — offer, pricing, admin and launch assets in one file.",
  },
  {
    no: "03",
    title: "Templates",
    body: "Quotes, invoices, contracts, trackers and client documents you can use the same day.",
  },
  {
    no: "04",
    title: "Guides",
    body: "Short, plain-language walkthroughs for the parts of business people usually get stuck on.",
  },
  {
    no: "05",
    title: "Checklists",
    body: "Registration, setup, launch and monthly admin — turned into steps you can tick off.",
  },
  {
    no: "06",
    title: "Prompt Packs",
    body: "Tested AI prompts for marketing, admin, pricing and customer replies. Copy, paste, adjust.",
  },
];

const collections = [
  {
    label: "SpazaKit",
    body: "Resell-ready digital business systems built for South African entrepreneurs.",
    to: "/spazakit" as const,
  },
  {
    label: "Templates & Printables",
    body: "The download shelf — practical files, priced to be used, not admired.",
    to: "/shop" as const,
  },
  {
    label: "Guides & Prompt Packs",
    body: "Starter workflows and AI prompts that remove real hours from your week.",
    to: "/resources" as const,
  },
];

function LibraryPage() {
  return (
    <>
      <PageHeader eyebrow="Opportunity Library" title="Everything you need to" scriptWord="start.">
        For people who want to build it themselves. Ideas, downloads, templates, guides,
        checklists and prompt packs — organised so you can move today instead of researching
        for another month.
      </PageHeader>

      <section className="bg-cream py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.45em] text-ink/45">WHAT'S INSIDE</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.5rem]">
              Six shelves, one <span className="script text-gold">purpose</span>.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {shelves.map((s) => (
              <div key={s.title} className="bg-cream p-9 sm:p-10">
                <p className="font-serif text-xl text-gold">{s.no}</p>
                <h3 className="mt-6 font-serif text-2xl leading-snug">{s.title}</h3>
                <p className="mt-4 text-sm leading-[1.85] text-ink/65">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-cream sm:py-32">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.45em] text-gold">START BROWSING</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.5rem]">
              Open a <span className="script text-gold">collection</span>.
            </h2>
          </div>

          <div className="mt-14 divide-y divide-cream/10 border-t border-cream/10">
            {collections.map((c) => (
              <Link
                key={c.label}
                to={c.to}
                className="group grid grid-cols-1 items-baseline gap-4 py-9 sm:grid-cols-[1fr_auto] sm:gap-10"
              >
                <div>
                  <h3 className="font-serif text-2xl leading-snug transition-colors duration-500 group-hover:text-gold sm:text-[1.8rem]">
                    {c.label}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-[1.85] text-cream/60">{c.body}</p>
                </div>
                <ArrowUpRight
                  className="hidden h-6 w-6 text-cream/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gold sm:block"
                  strokeWidth={1.25}
                />
              </Link>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/kits"
              className="inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-medium text-ink transition-all duration-500 hover:gap-4"
            >
              Browse Business Kits <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/studio"
              className="inline-flex items-center gap-2 border-b border-cream/25 pb-1 text-sm text-cream/90 transition-colors duration-500 hover:border-gold hover:text-gold"
            >
              Rather have it built for you?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
