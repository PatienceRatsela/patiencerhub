import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Globe, Flower2, MessageCircle, Palette } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work With Me — Branding + Websites by Patience R." },
      {
        name: "description",
        content:
          "Business websites, wedding branding via Petal & Ring, WhatsApp chatbot setups, and full brand identity packages.",
      },
      { property: "og:title", content: "Work With Me — Patience R." },
      {
        property: "og:description",
        content: "Brands and sites built to help you show up and stand out.",
      },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: Work,
});

const services = [
  {
    icon: Globe,
    title: "Business websites & landing pages",
    body: "Clean, professional sites that convert visitors into customers.",
    example: { label: "See a live example", href: "https://sjratsela.lovable.app", external: true },
  },
  {
    icon: Flower2,
    title: "Petal & Ring",
    body: "Wedding branding, coordination, and websites — done with heart.",
    example: { label: "Visit Petal & Ring", href: "https://petalandring.lovable.app/", external: true },
  },
  {
    icon: MessageCircle,
    title: "WhatsApp chatbot setups",
    body: "Automated conversations that never sleep. Answer, book, and follow up on autopilot.",
  },
  {
    icon: Palette,
    title: "Brand identity packages",
    body: "A look and feel that's unmistakably you — logo, palette, type, and the small stuff.",
  },
];

function Work() {
  return (
    <>
      <PageHeader eyebrow="Branding + Websites" title="Brands and sites built to" scriptWord="help you show up.">
        A few of the ways I help people and businesses look — and feel — like the
        real thing.
      </PageHeader>

      <section className="bg-cream py-20 text-ink">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:px-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-2xl border border-ink/10 bg-cream p-8"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-ink/15">
                <s.icon className="h-7 w-7 text-ink" strokeWidth={1.25} />
              </div>
              <h3 className="mt-6 font-serif text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{s.body}</p>
              {s.example && (
                <a
                  href={s.example.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-xs font-medium text-ink hover:text-gold"
                >
                  {s.example.label} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-20 max-w-3xl px-6 text-center lg:px-10">
          <h3 className="font-serif text-3xl">
            Got a project <span className="script text-gold">in mind?</span>
          </h3>
          <p className="mt-4 text-ink/70">
            Tell me what you're building. I'll tell you honestly whether I'm the
            right person for it.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink"
          >
            Start The Conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
