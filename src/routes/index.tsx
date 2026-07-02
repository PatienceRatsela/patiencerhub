import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Heart,
  Sparkles,
  Zap,
  Sun,
  Target,
  Lightbulb,
  BookOpen,
  ShoppingBag,
  GraduationCap,
  Palette,
  Bot,
} from "lucide-react";
import portrait from "../assets/patience-portrait-cleaned.jpg.asset.json";
import { NewsletterForm } from "../components/NewsletterForm";

export const Route = createFileRoute("/")({
  component: Home,
});

const tags = [
  { icon: Zap, label: "Automate" },
  { icon: Sparkles, label: "Create" },
  { icon: Sun, label: "Empower" },
  { icon: Heart, label: "Inspire" },
];

const trust = [
  { icon: Target, title: "Problem solver at heart" },
  { icon: Lightbulb, title: "Resource creator" },
  { icon: Sun, title: "Purpose driven" },
  { icon: Sparkles, title: "Always learning" },
];

const pillars = [
  {
    icon: Bot,
    title: "AI + Automation",
    body: "I help you work smarter with automations and AI-powered tools.",
    cta: "Discover Solutions",
    to: "/automation" as const,
  },
  {
    icon: ShoppingBag,
    title: "Digital Products",
    body: "Done-for-you templates, printables, and tools to make life and business easier.",
    cta: "Browse Shop",
    to: "/shop" as const,
  },
  {
    icon: Palette,
    title: "Branding + Websites",
    body: "Beautiful brands and websites that help you show up, stand out, and get seen.",
    cta: "View My Work",
    to: "/work" as const,
  },
  {
    icon: GraduationCap,
    title: "Teacher Tools",
    body: "Resources, automations, and tools for teachers, educators & school communities.",
    cta: "Explore Tools",
    to: "/teacher-tools" as const,
  },
  {
    icon: BookOpen,
    title: "Inspiration + Life",
    body: "Real talk, motivation, and resources for purpose, balance and personal growth.",
    cta: "Read The Blog",
    to: "/blog" as const,
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 pb-20 pt-12 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-28 lg:pt-16">
          {/* LEFT — copy */}
          <div className="lg:col-span-5 lg:pr-4">
            <h1 className="font-serif text-[2.75rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]">
              I help ideas
              <br />
              turn into{" "}
              <span className="script text-gold">
                impact.
              </span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-cream/70">
              I create smart solutions, digital tools, and resources that help people
              and businesses save time, grow, and thrive.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {tags.map((t) => (
                <span
                  key={t.label}
                  className="inline-flex items-center gap-2 text-sm text-cream/80"
                >
                  <t.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                  {t.label}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/what-i-do"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
              >
                Explore My World
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-sm text-cream/90 hover:text-gold"
              >
                Learn More About Me
                <Heart className="h-4 w-4 text-gold" strokeWidth={1.5} />
              </Link>
            </div>

            <div className="mt-14 h-px w-40 bg-gold/60" />
            <p className="mt-6 max-w-sm text-sm italic leading-relaxed text-cream/60">
              I'm passionate about helping people in different ways.
            </p>
          </div>

          {/* CENTER — portrait */}
          <div className="relative lg:col-span-4">
            <div className="absolute -left-6 top-8 text-gold/70">
              <Sparkles className="h-8 w-8" strokeWidth={1.25} />
            </div>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden">
              <img
                src={portrait.url}
                alt="Portrait of Patience R."
                width={1024}
                height={1280}
                className="h-full w-full object-cover grayscale"
              />
            </div>
          </div>

          {/* RIGHT — trust + newsletter */}
          <div className="lg:col-span-3">
            <h2 className="font-serif text-2xl leading-snug text-cream">
              Solutions for real life.
              <br />
              <span className="text-gold">Impact that lasts.</span>
            </h2>
            <div className="mt-4 h-px w-24 bg-gold/60" />

            <ul className="mt-6 space-y-5">
              {trust.map((t) => (
                <li key={t.title} className="flex items-start gap-3">
                  <t.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <span className="text-sm text-cream/85">{t.title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-cream/15 p-5">
              <p className="text-sm font-medium text-cream">
                Updates, tools & inspiration
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-cream/60">
                Straight to your inbox. Let's stay connected.
              </p>
              <div className="mt-4">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-cream py-24 text-ink">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="text-center">
            <p className="text-xs tracking-[0.4em] text-ink/50">HOW I CAN HELP YOU</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl sm:text-4xl">
              Five ways I turn ideas <span className="script text-gold">into impact</span>.
            </h2>
            <div className="mx-auto mt-5 h-px w-24 bg-gold" />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group flex flex-col items-center text-center lg:border-r lg:border-ink/10 lg:px-4 lg:last:border-r-0"
              >
                <p.icon className="h-9 w-9 text-ink" strokeWidth={1.25} />
                <p className="mt-6 text-xs font-semibold tracking-[0.25em] text-ink">
                  {p.title.toUpperCase()}
                </p>
                <p className="mt-4 max-w-[15rem] text-sm leading-relaxed text-ink/70">
                  {p.body}
                </p>
                <Link
                  to={p.to}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-xs font-medium text-ink transition-transform group-hover:scale-[1.03]"
                >
                  {p.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
