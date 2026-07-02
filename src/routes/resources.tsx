import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ShoppingBag, GraduationCap, Bot } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Patience R." },
      {
        name: "description",
        content:
          "Free and paid resources across AI, automation, digital products, teacher tools, and inspiration.",
      },
      { property: "og:title", content: "Resources — Patience R." },
      { property: "og:description", content: "Tools, templates, essays, and guides." },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

const groups = [
  {
    icon: ShoppingBag,
    title: "Templates & Printables",
    body: "Ready-to-use kits for life and business.",
    to: "/shop" as const,
  },
  {
    icon: Bot,
    title: "AI & Automation Guides",
    body: "How-tos and starter workflows to save real time.",
    to: "/automation" as const,
  },
  {
    icon: GraduationCap,
    title: "Teacher Tools",
    body: "Automations and resources built for the classroom.",
    to: "/teacher-tools" as const,
  },
  {
    icon: BookOpen,
    title: "Essays & Books",
    body: "Real talk on purpose, balance, and growth.",
    to: "/blog" as const,
  },
];

function Resources() {
  return (
    <>
      <PageHeader eyebrow="Resources" title="Everything in" scriptWord="one place.">
        A living library of the tools, templates, essays, and guides I've built.
        Start where you are.
      </PageHeader>

      <section className="bg-cream py-20 text-ink">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:px-10">
          {groups.map((g) => (
            <Link
              key={g.title}
              to={g.to}
              className="group flex items-start gap-5 rounded-2xl border border-ink/10 bg-cream p-8 transition-colors hover:border-gold"
            >
              <g.icon className="h-8 w-8 shrink-0 text-gold" strokeWidth={1.25} />
              <div className="min-w-0">
                <h3 className="font-serif text-xl">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{g.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-ink group-hover:text-gold">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
