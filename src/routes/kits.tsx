import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/kits")({
  head: () => ({
    meta: [
      { title: "Business Kits — Launch-Ready Business Systems | PatienceR" },
      {
        name: "description",
        content:
          "Ready-built business systems for bookkeepers, cleaners, estate agents, salons and consultants — website, forms, AI assistant, workflows and branding foundations.",
      },
      { property: "og:title", content: "Business Kits | PatienceR" },
      {
        property: "og:description",
        content:
          "Not templates. Launch-ready business foundations you can open and start trading with.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KitsPage,
});

const included = [
  "A live website, written and structured for the trade",
  "Enquiry and intake forms wired to your inbox",
  "An AI assistant trained on the way the business works",
  "Workflows for quoting, onboarding and follow-up",
  "Branding foundations — logo direction, palette, type and voice",
];

const kits = [
  {
    name: "Bookkeeper Kit",
    body: "Client intake, engagement letters, monthly close checklists and a site that reads as qualified.",
  },
  {
    name: "Cleaning Business Kit",
    body: "Quote calculator, recurring booking flow, staff checklists and a site built for local search.",
  },
  {
    name: "Estate Agent Kit",
    body: "Listing pages, buyer enquiry capture, viewing scheduling and follow-up automation.",
  },
  {
    name: "Salon Kit",
    body: "Service menu, booking requests, deposit handling and reminders that reduce no-shows.",
  },
  {
    name: "Consultant Kit",
    body: "Positioning page, discovery form, proposal templates and a simple engagement pipeline.",
  },
];

function KitsPage() {
  return (
    <>
      <PageHeader eyebrow="Business Kits" title="Launch-ready, not" scriptWord="half-built.">
        These aren't templates. Each kit is a working business foundation — website, forms, AI
        assistant, workflows and branding — set up so your first day of trading is admin-light.
      </PageHeader>

      <section className="bg-cream py-24 text-ink sm:py-32">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <p className="text-[0.65rem] tracking-[0.45em] text-ink/45">EVERY KIT INCLUDES</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.4rem]">
              The whole <span className="script text-gold">foundation</span>.
            </h2>
            <ul className="mt-9 space-y-5">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-4">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                  <span className="text-sm leading-[1.85] text-ink/70">{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10">
              {kits.map((k) => (
                <div key={k.name} className="bg-cream p-8 sm:p-9">
                  <h3 className="font-serif text-2xl leading-snug">{k.name}</h3>
                  <p className="mt-3 text-sm leading-[1.85] text-ink/65">{k.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs leading-relaxed text-ink/55">
              New kits are added regularly. If your trade isn't listed yet, it can be built for you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-cream sm:py-32">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
          <p className="text-[0.65rem] tracking-[0.45em] text-gold">NEXT STEP</p>
          <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.5rem]">
            Tell me which kit you <span className="script text-gold">need</span>.
          </h2>
          <div className="mx-auto mt-7 h-px w-20 bg-gold" />
          <p className="mx-auto mt-7 text-sm leading-[1.9] text-cream/65">
            Kits can be handed over as they are, or adjusted to your pricing, area and way of
            working before you go live.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-medium text-ink transition-all duration-500 hover:gap-4"
            >
              Enquire About a Kit <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              to="/library"
              className="inline-flex items-center gap-2 border-b border-cream/25 pb-1 text-sm text-cream/90 transition-colors duration-500 hover:border-gold hover:text-gold"
            >
              Explore the Library
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
