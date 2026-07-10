import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ExternalLink,
  Globe,
  Star,
  Share2,
  Mail,
  User,
  Layers,
  MessageSquare,
  GraduationCap,
  Box,
  Sparkles,
} from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/spazakit")({
  head: () => ({
    meta: [
      { title: "SpazaKit — Done-for-You Business Systems by Patience R." },
      {
        name: "description",
        content:
          "SpazaKit is a library of complete, done-for-you business systems built for South Africa. Every box includes a full reseller licence.",
      },
      {
        property: "og:title",
        content: "SpazaKit — Done-for-You Business Systems",
      },
      {
        property: "og:description",
        content:
          "Resell-ready digital business systems built for South Africa. Full reseller licence included.",
      },
    ],
    links: [{ rel: "canonical", href: "/spazakit" }],
  }),
  component: SpazaKit,
});

const navy = "#0f1b2e";

const tracks = [
  {
    label: "TRACK A",
    title: "Local Business Growth",
    description:
      "Get found, get trusted, get seen, get remembered — a growth path for any local business.",
    cards: [
      {
        code: "A1",
        name: "Local Online Presence",
        description:
          "A complete system to get your local business visible, trusted, and chosen online.",
        icon: Globe,
        href: "#product-a1",
      },
      {
        code: "A2",
        name: "Review Growth Manager",
        description:
          "Turn happy customers into public proof with an automated review-generation system.",
        icon: Star,
        href: "#product-a2",
      },
      {
        code: "A3",
        name: "AI Social Media Manager",
        description:
          "Never run out of content — an AI-powered social posting system tailored for local businesses.",
        icon: Share2,
        href: "#product-a3",
      },
      {
        code: "A4",
        name: "Newsletter Content Studio",
        description:
          "Stay top-of-mind with a done-for-you email content system that builds loyalty.",
        icon: Mail,
        href: "#product-a4",
      },
    ],
  },
  {
    label: "TRACK B",
    title: "Personal Brand & Creator",
    description:
      "Get seen, get hired, package what you know, and keep monetizing it.",
    cards: [
      {
        code: "B1",
        name: "CV & LinkedIn Makeover",
        description:
          "A polished, modern personal brand package that gets you noticed by the right people.",
        icon: User,
        href: "#product-b1",
      },
      {
        code: "B2",
        name: "AI Digital Product Creator",
        description:
          "Turn your expertise into sellable digital products using AI-assisted creation workflows.",
        icon: Layers,
        href: "#product-b2",
      },
      {
        code: "B3",
        name: "SA Niche Prompt Pack Creator",
        description:
          "A specialised prompt library built for South African creators and service providers.",
        icon: MessageSquare,
        href: "#product-b3",
      },
    ],
  },
  {
    label: "TRACK C",
    title: "Teacher Resources",
    description:
      "CAPS-aligned resources, built once per topic, sold again and again.",
    cards: [
      {
        code: "C1",
        name: "AI Teacher Resource Creator",
        description:
          "Build CAPS-aligned teaching materials once, then sell them again and again.",
        icon: GraduationCap,
        href: "#product-c1",
      },
    ],
  },
];

function SpazaKit() {
  return (
    <>
      {/* HERO */}
      <section style={{ backgroundColor: navy }} className="py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-medium tracking-wide text-gold">
            <Box className="h-3.5 w-3.5" strokeWidth={1.5} />
            Digital Products
          </div>
          <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            SpazaKit
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-cream/80">
            Done-for-you, resell-ready digital business systems — built for South Africa.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/60">
            SpazaKit is a library of complete, done-for-you business systems. Every box
            includes a full reseller licence — use it to run your own service, or resell
            it under your own name.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm italic leading-relaxed text-cream/50">
            This page is a showcase only — no purchasing happens here. Every product links
            out to Gumroad for purchase.
          </p>
          <div className="mx-auto mt-8 h-px w-24 bg-gold" />
        </div>
      </section>

      {/* TRACKS */}
      {tracks.map((track) => (
        <section key={track.label} className="bg-cream py-20 text-ink">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="mb-12">
              <p
                className="text-xs font-semibold tracking-[0.35em]"
                style={{ color: navy }}
              >
                {track.label}
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">{track.title}</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/70">
                {track.description}
              </p>
              <div className="mt-5 h-px w-20 bg-gold" />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {track.cards.map((card) => (
                <div
                  key={card.code}
                  className="group flex flex-col rounded-2xl border border-ink/10 bg-cream p-6 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl border"
                      style={{ borderColor: `${navy}20` }}
                    >
                      <card.icon
                        className="h-6 w-6"
                        style={{ color: navy }}
                        strokeWidth={1.25}
                      />
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-wide text-cream"
                      style={{ backgroundColor: navy }}
                    >
                      R597
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-lg">
                    {card.code}: {card.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
                    {card.description}
                  </p>

                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-medium text-ink transition-transform group-hover:scale-[1.03]"
                  >
                    View on Gumroad
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FOOTER NOTE + BACK LINK */}
      <section style={{ backgroundColor: navy }} className="py-16 text-cream">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Sparkles className="mx-auto h-6 w-6 text-gold" strokeWidth={1.25} />
          <p className="mt-4 text-sm italic text-cream/60">
            New boxes are added regularly — check back for updates.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm text-cream transition-colors hover:border-gold hover:text-gold"
          >
            Back to Digital Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
