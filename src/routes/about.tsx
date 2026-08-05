import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import portrait from "../assets/patience-portrait-cleaned.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Patience — Problem Solver & Tool Builder | PatienceR" },
      {
        name: "description",
        content:
          "I build simple tools that save people time. The story behind PatienceR: solving problems, turning ideas into working systems, and small tools with big impact.",
      },
      { property: "og:title", content: "About Patience | PatienceR" },
      {
        property: "og:description",
        content: "A problem solver who turns ideas into practical tools that save people time.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const beliefs = [
  {
    no: "01",
    title: "Problems first",
    body: "Every tool here started as something that annoyed someone — a form filled in twice, a quote that took an hour, books nobody wanted to open.",
  },
  {
    no: "02",
    title: "Small tools, big effect",
    body: "One well-made checklist or automation can change a whole week. Scale isn't what makes a tool useful.",
  },
  {
    no: "03",
    title: "Built, then shared",
    body: "Nothing goes out that hasn't been used first. If it doesn't hold up in real life, it doesn't ship.",
  },
];

function About() {
  return (
    <>
      <PageHeader eyebrow="About" title="I build tools that" scriptWord="save time.">
        PatienceR is a small studio with a simple job: take the things that make business
        harder than it needs to be, and turn them into something practical you can use.
      </PageHeader>

      <section className="bg-cream py-24 text-ink sm:py-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <div className="overflow-hidden">
              <img
                src={portrait.url}
                alt="Patience R."
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl">
              I love <span className="script text-gold">solving problems.</span>
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink/75">
              <p>
                I'm Patience. Give me a process that's clumsy, repetitive or held together with
                notes on a phone, and I'll want to rebuild it properly. That instinct is the
                whole business.
              </p>
              <p>
                Most of my work looks like this: someone explains what's slowing them down, and I
                turn it into something concrete — a system, a site, a set of files, an assistant
                that handles the part nobody enjoys. Practical over impressive, every time.
              </p>
              <p>
                Some of it becomes client work in the Studio. Some becomes a business kit or a
                download anyone can pick up. The belief underneath it is the same: small tools,
                done well, quietly change how people work.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                to="/studio"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-all duration-500 hover:gap-3.5"
              >
                Work With Me <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link
                to="/library"
                className="inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-sm text-ink/80 transition-colors hover:border-gold hover:text-gold"
              >
                Explore the Library
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-cream sm:py-32">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.45em] text-gold">HOW I WORK</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.5rem]">
              Three things I hold <span className="script text-gold">to</span>.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-cream/10 bg-cream/10 sm:grid-cols-3">
            {beliefs.map((b) => (
              <div key={b.title} className="bg-ink p-9 sm:p-10">
                <p className="font-serif text-xl text-gold">{b.no}</p>
                <h3 className="mt-6 font-serif text-2xl leading-snug">{b.title}</h3>
                <p className="mt-4 text-sm leading-[1.85] text-cream/60">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
