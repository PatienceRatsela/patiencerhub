import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  ShoppingBag,
  Palette,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/what-i-do")({
  head: () => ({
    meta: [
      { title: "What I Do — Patience R." },
      {
        name: "description",
        content:
          "Five pillars: AI + Automation, Digital Products, Branding + Websites, Teacher Tools, and Inspiration + Life.",
      },
      { property: "og:title", content: "What I Do — Patience R." },
      { property: "og:description", content: "The five ways I help ideas turn into impact." },
    ],
    links: [{ rel: "canonical", href: "/what-i-do" }],
  }),
  component: WhatIDo,
});

const pillars = [
  {
    icon: Bot,
    title: "AI + Automation",
    body: "Automations, AI assistants, and workflows that free up your time. From simple no-code automations to full AI-powered tools built for how you actually work.",
    cta: "Discover Solutions",
    to: "/automation" as const,
  },
  {
    icon: ShoppingBag,
    title: "Digital Products",
    body: "Grab-and-go templates, printables, and business kits designed to save you hours. Everything is battle-tested in my own work first.",
    cta: "Browse Shop",
    to: "/shop" as const,
  },
  {
    icon: Palette,
    title: "Branding + Websites",
    body: "Clean, elegant brands and websites for solo entrepreneurs and small teams. Built to convert, easy to maintain, unmistakably you.",
    cta: "View My Work",
    to: "/work" as const,
  },
  {
    icon: GraduationCap,
    title: "Teacher Tools",
    body: "Resources, automations, and digital tools for teachers, educators, and school communities — because good tools change classrooms.",
    cta: "Explore Tools",
    to: "/teacher-tools" as const,
  },
  {
    icon: BookOpen,
    title: "Inspiration + Life",
    body: "Real talk on purpose, balance, and personal growth. Essays, notes, and books for anyone building a life that feels like their own.",
    cta: "Read The Blog",
    to: "/blog" as const,
  },
];

function WhatIDo() {
  return (
    <>
      <PageHeader eyebrow="What I Do" title="Five pillars," scriptWord="one mission.">
        Every project I take on falls into one of these five lanes. Different
        skills, same north star: help ideas turn into impact.
      </PageHeader>

      <section className="bg-cream py-20 text-ink">
        <div className="mx-auto max-w-5xl space-y-16 px-6 lg:px-10">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-4">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-ink/15 bg-cream">
                  <p.icon className="h-9 w-9 text-ink" strokeWidth={1.25} />
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-xs tracking-[0.3em] text-ink/50">
                  0{i + 1}
                </p>
                <h2 className="mt-2 font-serif text-3xl">{p.title}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/70">{p.body}</p>
                <Link
                  to={p.to}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-ink"
                >
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
