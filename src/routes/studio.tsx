import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — Bookkeeping, Websites & AI Automations | PatienceR" },
      {
        name: "description",
        content:
          "Xero setup, cleanup and monthly bookkeeping, business websites, custom AI automations, business systems, branding and digital strategy — built with you.",
      },
      { property: "og:title", content: "Studio | PatienceR" },
      {
        property: "og:description",
        content: "Need something built? Let's build it together — practically, and properly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudioPage,
});

const groups = [
  {
    no: "01",
    heading: "Numbers in order",
    items: [
      { name: "Xero setup", body: "A clean chart of accounts, bank feeds and tax settings from day one." },
      { name: "Xero cleanup", body: "Untangling months of unreconciled transactions into books you can trust." },
      { name: "Monthly bookkeeping", body: "Reconciliation, reporting and deadlines handled quietly each month." },
    ],
  },
  {
    no: "02",
    heading: "Built and running",
    items: [
      { name: "Business websites", body: "Clear, fast sites that explain the offer and capture the enquiry." },
      { name: "Custom AI automations", body: "Assistants and workflows that absorb the repetitive work." },
      { name: "Business systems", body: "Quoting, onboarding, invoicing and follow-up joined into one flow." },
    ],
  },
  {
    no: "03",
    heading: "Seen and understood",
    items: [
      { name: "Branding", body: "A look, name treatment and voice that make the business easy to trust." },
      { name: "Digital strategy", body: "Deciding what to build first, and what to leave for later." },
    ],
  },
];

const process = [
  { step: "One", body: "A short conversation about the problem, not the package." },
  { step: "Two", body: "A written scope with what gets built, what it costs and when." },
  { step: "Three", body: "Build, review, adjust — you see it while it's being made." },
  { step: "Four", body: "Handover with the practical training to run it yourself." },
];

function StudioPage() {
  return (
    <>
      <PageHeader eyebrow="Studio" title="Need something built?" scriptWord="Let's build it.">
        This is where the work happens directly with me — books cleaned up, systems joined
        together, sites launched and the repetitive parts automated.
      </PageHeader>

      <section className="bg-cream py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-[1300px] space-y-20 px-6 lg:px-10">
          {groups.map((g) => (
            <div key={g.heading} className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-serif text-xl text-gold">{g.no}</p>
                <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-[2.2rem]">
                  {g.heading}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="divide-y divide-ink/10 border-t border-ink/10">
                  {g.items.map((i) => (
                    <div key={i.name} className="py-7">
                      <h3 className="font-serif text-xl">{i.name}</h3>
                      <p className="mt-2.5 max-w-xl text-sm leading-[1.85] text-ink/65">
                        {i.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 text-cream sm:py-32">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.45em] text-gold">HOW IT WORKS</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.5rem]">
              No mystery, no <span className="script text-gold">runaround</span>.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="bg-ink p-9">
                <p className="text-[0.65rem] tracking-[0.3em] text-gold">{p.step.toUpperCase()}</p>
                <p className="mt-6 text-sm leading-[1.85] text-cream/65">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-medium text-ink transition-all duration-500 hover:gap-4"
            >
              Work With Me <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 border-b border-cream/25 pb-1 text-sm text-cream/90 transition-colors duration-500 hover:border-gold hover:text-gold"
            >
              See past work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
