import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Package, Bot, Wallet, FileText } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Digital Products by Patience R." },
      {
        name: "description",
        content:
          "Grab-and-go digital products: business kits, AI trading tools, income trackers, printables, and guides.",
      },
      { property: "og:title", content: "Shop — Digital Products by Patience R." },
      {
        property: "og:description",
        content: "Digital tools built to save you time — ready to use today.",
      },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

const products = [
  {
    icon: Package,
    title: "xoxasocial Biz-in-a-Box",
    body: "Grab-and-go business kits, ready to launch today.",
    href: "https://xoxasocial.com",
  },
  {
    icon: Bot,
    title: "Umnotho AI Bot & Skool Community",
    body: "Trade smarter with an AI-powered gold strategy tool.",
    href: "https://umnotho.com",
  },
  {
    icon: Wallet,
    title: "HustleLedger",
    body: "Track every income stream, SARS-ready, in one place.",
    href: "https://hustleledger.com",
  },
  {
    icon: FileText,
    title: "Printables & Guides",
    body: "Practical tools you can use immediately.",
    href: "#",
  },
];

function Shop() {
  return (
    <>
      <PageHeader eyebrow="Digital Products" title="Grab-and-go tools," scriptWord="built to save you time.">
        Each product below lives on its own site. Click through to see details,
        pricing, and grab your copy.
      </PageHeader>

      <section className="bg-cream py-20 text-ink">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-2 lg:px-10">
          {products.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-ink/10 bg-cream p-8 transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl border border-ink/15">
                  <p.icon className="h-8 w-8 text-ink" strokeWidth={1.25} />
                </div>
                <ExternalLink className="h-5 w-5 text-ink/40 group-hover:text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="mt-8 font-serif text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.body}</p>
              <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-medium text-cream group-hover:bg-gold group-hover:text-ink">
                Visit <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
