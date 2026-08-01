import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import portrait from "../assets/patience-portrait-cleaned.jpg.asset.json";
import { NewsletterForm } from "../components/NewsletterForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Patience R. — Build a Better Future With AI" },
      {
        name: "description",
        content:
          "Housewife, educator and AI creator documenting the journey of building a meaningful life with AI — academy, studio, books and practical resources.",
      },
      { property: "og:title", content: "Patience R. — Build a Better Future With AI" },
      {
        property: "og:description",
        content:
          "A personal brand and creative ecosystem: AI, education, creativity and practical problem-solving.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const journeys = [
  {
    no: "01",
    title: "Housewife in the AI Era",
    body: "The honest documentation of running a home while building with AI — real days, real tools, real results.",
    cta: "Follow The Story",
    to: "/journey" as const,
  },
  {
    no: "02",
    title: "PatienceR Academy",
    body: "Practical AI, automation and digital skills taught plainly, for people without a technical background.",
    cta: "Start Learning",
    to: "/resources" as const,
  },
  {
    no: "03",
    title: "PatienceR Studio",
    body: "Brands, websites and automations built for businesses that want to show up and stand out.",
    cta: "See The Studio",
    to: "/work" as const,
  },
  {
    no: "04",
    title: "PatienceR Books",
    body: "Women's fiction on identity, betrayal and self-reclamation, written as PKD Ratsela.",
    cta: "Read & Reflect",
    to: "/blog" as const,
  },
];

const help = [
  {
    label: "AI & Automation",
    body: "Systems that quietly do the repetitive work, so your hours go where they matter.",
    to: "/automation" as const,
  },
  {
    label: "Digital Products",
    body: "Done-for-you templates, kits and printables — grab-and-go tools built to be used today.",
    to: "/shop" as const,
  },
  {
    label: "Branding & Websites",
    body: "A look, a voice and a site that make people trust you before you say a word.",
    to: "/work" as const,
  },
  {
    label: "Education & Training",
    body: "Resources and automations for teachers, learners and school communities.",
    to: "/teacher-tools" as const,
  },
  {
    label: "Purpose-driven Projects",
    body: "Work rooted in impact — writing, community tools and projects that outlive a launch.",
    to: "/journey" as const,
  },
];

const building = [
  {
    status: "In progress",
    title: "SpazaKit",
    body: "Resell-ready digital business systems built for South African entrepreneurs.",
    to: "/spazakit" as const,
  },
  {
    status: "Live",
    title: "FutureProof Kit",
    body: "Four buildable skills for kids growing up in a world that Googles everyone first.",
    href: "https://futureproofkit.lovable.app/",
  },
  {
    status: "Growing",
    title: "Teacher Tools",
    body: "Classroom automations and resources for educators and school communities.",
    to: "/teacher-tools" as const,
  },
];

const featured = [
  {
    kind: "Kit",
    title: "SpazaKit Boxes",
    body: "Eight resell-ready business systems, priced to move.",
    to: "/spazakit" as const,
  },
  {
    kind: "Library",
    title: "Templates & Printables",
    body: "Practical tools you can put to work the same afternoon.",
    to: "/shop" as const,
  },
  {
    kind: "Guides",
    title: "AI & Automation Guides",
    body: "Starter workflows that save real hours, not theoretical ones.",
    to: "/resources" as const,
  },
  {
    kind: "Books",
    title: "Fiction by PKD Ratsela",
    body: "Stories about identity, betrayal and coming back to yourself.",
    to: "/blog" as const,
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-14 px-6 pb-24 pt-14 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:pb-36 lg:pt-24">
          <div className="order-2 lg:order-1">
            <p className="text-[0.65rem] tracking-[0.45em] text-gold">
              CREATE. SOLVE. AUTOMATE. INSPIRE.
            </p>
            <h1 className="mt-8 font-serif text-[2.8rem] leading-[1.03] tracking-tight sm:text-6xl lg:text-[4.5rem]">
              Build a better
              <br />
              future with{" "}
              <span className="script text-gold">AI.</span>
            </h1>
            <div className="mt-9 h-px w-24 bg-gold/70" />
            <p className="mt-8 max-w-lg text-base leading-[1.85] text-cream/70">
              I'm Patience — a housewife, educator and AI creator documenting the journey of
              building a meaningful life with AI. Not hype, not theory. Real projects, shared
              while they're still being built.
            </p>
            <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                to="/journey"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-medium text-ink transition-all duration-500 hover:gap-4"
              >
                Explore the Journey
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 border-b border-cream/25 pb-1 text-sm text-cream/90 transition-colors duration-500 hover:border-gold hover:text-gold"
              >
                Work With Me
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden">
              <img
                src={portrait.url}
                alt="Editorial portrait of Patience R."
                width={1024}
                height={1280}
                className="h-full w-full object-cover grayscale transition-all duration-[1200ms] hover:grayscale-0"
              />
              <div className="pointer-events-none absolute inset-0 border border-cream/10" />
            </div>
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR JOURNEY */}
      <section id="choose-your-journey" className="bg-cream py-24 text-ink sm:py-36">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.45em] text-ink/45">
              CHOOSE YOUR JOURNEY
            </p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.75rem]">
              One brand, four <span className="script text-gold">doorways</span>.
            </h2>
            <p className="mt-6 text-sm leading-[1.9] text-ink/65">
              PatienceR is the umbrella. Whichever door you walk through, you're meeting a
              person first — the work follows.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {journeys.map((j) => (
              <Link
                key={j.title}
                to={j.to}
                className="group flex flex-col bg-cream p-9 transition-colors duration-500 hover:bg-[color-mix(in_oklab,var(--gold)_9%,var(--cream))] sm:p-12"
              >
                <p className="font-serif text-xl text-gold">{j.no}</p>
                <h3 className="mt-7 font-serif text-2xl leading-snug sm:text-[1.7rem]">
                  {j.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-[1.85] text-ink/65">{j.body}</p>
                <span className="mt-9 inline-flex items-center gap-2 text-[0.7rem] font-medium tracking-[0.25em] text-ink transition-all duration-500 group-hover:gap-3.5 group-hover:text-gold">
                  {j.cta.toUpperCase()}
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW I HELP */}
      <section className="bg-ink py-24 text-cream sm:py-36">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-[0.65rem] tracking-[0.45em] text-gold">HOW I HELP</p>
              <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.75rem]">
                Five ways ideas turn{" "}
                <span className="script text-gold">into impact</span>.
              </h2>
            </div>
            <Link
              to="/what-i-do"
              className="inline-flex shrink-0 items-center gap-2 border-b border-cream/20 pb-1 text-xs tracking-[0.2em] text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              SEE EVERYTHING
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="mt-16 divide-y divide-cream/10 border-t border-cream/10">
            {help.map((h, i) => (
              <Link
                key={h.label}
                to={h.to}
                className="group grid grid-cols-1 items-baseline gap-4 py-9 transition-colors duration-500 sm:grid-cols-[4rem_1fr_auto] sm:gap-10"
              >
                <span className="text-xs tracking-[0.25em] text-gold">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-2xl leading-snug transition-colors duration-500 group-hover:text-gold sm:text-[1.9rem]">
                    {h.label}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-[1.85] text-cream/60">
                    {h.body}
                  </p>
                </div>
                <ArrowUpRight
                  className="hidden h-6 w-6 text-cream/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gold sm:block"
                  strokeWidth={1.25}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BUILDING IN PUBLIC */}
      <section className="bg-cream py-24 text-ink sm:py-36">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.45em] text-ink/45">
              BUILDING IN PUBLIC
            </p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.75rem]">
              What I'm building{" "}
              <span className="script text-gold">right now</span>.
            </h2>
            <p className="mt-6 text-sm leading-[1.9] text-ink/65">
              I don't make content about work I haven't done. Every project below is real,
              in motion, and documented as it goes — the wins, the rewrites and the parts
              still unfinished.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {building.map((b) => {
              const inner = (
                <div className="flex h-full flex-col border border-ink/10 bg-cream p-9 transition-all duration-500 group-hover:border-gold">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span className="text-[0.65rem] tracking-[0.3em] text-ink/50">
                      {b.status.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="mt-7 font-serif text-2xl">{b.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-[1.85] text-ink/65">{b.body}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.25em] text-ink transition-all duration-500 group-hover:gap-3.5 group-hover:text-gold">
                    {b.href ? "VISIT PROJECT" : "EXPLORE"}
                    {b.href ? (
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                    ) : (
                      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                    )}
                  </span>
                </div>
              );
              return b.href ? (
                <a
                  key={b.title}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  {inner}
                </a>
              ) : (
                <Link key={b.title} to={b.to!} className="group">
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED RESOURCES */}
      <section id="featured-resources" className="bg-ink py-24 text-cream sm:py-36">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.45em] text-gold">
              FEATURED RESOURCES
            </p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.75rem]">
              From the <span className="script text-gold">catalogue</span>.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((f) => (
              <Link
                key={f.title}
                to={f.to}
                className="group flex h-full flex-col bg-ink p-9 transition-colors duration-500 hover:bg-cream/[0.04]"
              >
                <span className="text-[0.65rem] tracking-[0.3em] text-gold">
                  {f.kind.toUpperCase()}
                </span>
                <h3 className="mt-7 font-serif text-xl leading-snug">{f.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-[1.85] text-cream/60">{f.body}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[0.7rem] tracking-[0.25em] text-cream/80 transition-all duration-500 group-hover:gap-3.5 group-hover:text-gold">
                  VIEW
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-cream py-24 text-ink sm:py-36">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
          <p className="text-[0.65rem] tracking-[0.45em] text-ink/45">THE NEWSLETTER</p>
          <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.75rem]">
            Join the <span className="script text-gold">journey</span>.
          </h2>
          <div className="mx-auto mt-7 h-px w-20 bg-gold" />
          <p className="mx-auto mt-7 max-w-xl text-sm leading-[1.9] text-ink/65">
            Weekly ideas, AI discoveries, behind-the-scenes projects and practical
            inspiration delivered with intention—not noise.
          </p>
          <div className="mx-auto mt-9 max-w-md">
            <NewsletterForm variant="light" />
          </div>
        </div>
      </section>
    </>
  );
}
