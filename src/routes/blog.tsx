import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ExternalLink } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Inspiration + Life — Patience R." },
      {
        name: "description",
        content:
          "Essays on purpose, balance, and growth — plus women's fiction by PKD Ratsela.",
      },
      { property: "og:title", content: "Inspiration + Life — Patience R." },
      { property: "og:description", content: "Real talk. Real reads." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  {
    title: "Why 'small tools' change everything",
    excerpt:
      "The most useful thing I've built this year wasn't a product — it was a 20-line automation. Here's why small tools win.",
    date: "Coming soon",
  },
  {
    title: "One woman, five pillars: how I stay focused",
    excerpt:
      "How I split my time between AI, digital products, branding, teacher tools, and writing — without losing my mind.",
    date: "Coming soon",
  },
  {
    title: "Building in public, quietly",
    excerpt:
      "The version of 'building in public' that actually works for introverts.",
    date: "Coming soon",
  },
];

const books = [
  {
    title: "The Weight She Carried",
    body: "A novel about identity, betrayal, and choosing yourself.",
    href: "#",
  },
  {
    title: "Reclaimed",
    body: "Women's fiction on the quiet work of coming home to yourself.",
    href: "#",
  },
];

function Blog() {
  const [tab, setTab] = useState<"blog" | "books">("blog");
  return (
    <>
      <PageHeader eyebrow="Inspiration + Life" title="Real talk," scriptWord="real reads.">
        Essays on purpose, balance, and growth — plus women's fiction by PKD
        Ratsela.
      </PageHeader>

      <section className="bg-cream py-20 text-ink">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="flex justify-center gap-2 rounded-full border border-ink/15 p-1.5 [width:fit-content] mx-auto">
            {(["blog", "books"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  tab === t ? "bg-gold text-ink" : "text-ink/70 hover:text-ink"
                }`}
              >
                {t === "blog" ? "Blog" : "Books by PKD Ratsela"}
              </button>
            ))}
          </div>

          {tab === "blog" ? (
            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
              {posts.map((p) => (
                <article
                  key={p.title}
                  className="flex flex-col rounded-2xl border border-ink/10 p-7"
                >
                  <p className="text-xs tracking-[0.25em] text-ink/50">{p.date.toUpperCase()}</p>
                  <h3 className="mt-3 font-serif text-xl leading-snug">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                    {p.excerpt}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-ink/40">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
              {books.map((b) => (
                <a
                  key={b.title}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 rounded-2xl border border-ink/10 p-7 hover:border-gold"
                >
                  <BookOpen className="h-8 w-8 shrink-0 text-gold" strokeWidth={1.25} />
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{b.body}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-ink group-hover:text-gold">
                      Find on Amazon <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
