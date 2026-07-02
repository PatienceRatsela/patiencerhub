import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Sparkles, Zap } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/automation")({
  head: () => ({
    meta: [
      { title: "AI + Automation — Patience R." },
      {
        name: "description",
        content:
          "AI-powered tools and automations that help you work smarter. New tools and case studies coming soon.",
      },
      { property: "og:title", content: "AI + Automation — Patience R." },
      { property: "og:description", content: "Work smarter with automation and AI." },
    ],
    links: [{ rel: "canonical", href: "/automation" }],
  }),
  component: Automation,
});

const items = [
  {
    icon: Zap,
    title: "Workflow automations",
    body: "Zapier, Make, n8n — connecting the tools you already use.",
  },
  {
    icon: Bot,
    title: "Custom AI assistants",
    body: "Chatbots and agents built around your business.",
  },
  {
    icon: Sparkles,
    title: "AI-powered products",
    body: "Like Umnotho — real tools solving real problems.",
  },
];

function Automation() {
  return (
    <>
      <PageHeader eyebrow="AI + Automation" title="Work smarter," scriptWord="not longer.">
        A deeper look at this pillar is on its way. In the meantime, here's a
        taste of what I'm building.
      </PageHeader>

      <section className="bg-cream py-20 text-ink">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {items.map((i) => (
              <div key={i.title} className="text-center">
                <i.icon className="mx-auto h-9 w-9 text-gold" strokeWidth={1.25} />
                <h3 className="mt-5 font-serif text-xl">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{i.body}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-ink/10 p-10 text-center">
            <p className="script text-3xl text-gold">More coming soon.</p>
            <p className="mt-4 text-sm text-ink/70">
              Want to be first in line when new automation tools drop? Join the
              newsletter or start a conversation.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink"
            >
              Get In Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
