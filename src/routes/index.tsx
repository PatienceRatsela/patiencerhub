import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Heart,
  Laptop,
  Lightbulb,
  ShoppingBag,
} from "lucide-react";
import heroDesk from "../assets/patiencer-hero-desk.jpg";
import educationImage from "../assets/patiencer-education.jpg";
import businessImage from "../assets/patiencer-business-digital.jpg";
import resourcesImage from "../assets/patiencer-resources-still-life.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PatienceR — Ideas, Education & Digital Solutions" },
      { name: "description", content: "Practical solutions for education, business and everyday digital life — built by PatienceR." },
      { property: "og:title", content: "PatienceR — Ideas, Education & Digital Solutions" },
      { property: "og:description", content: "Useful things for people who are trying to make something work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const pillars = [
  { icon: Bot, title: "AI + Automation", body: "Smart tools and systems that save time and increase productivity.", to: "/automation" as const },
  { icon: ShoppingBag, title: "Digital Products", body: "Templates, guides, resources and solutions you can actually use.", to: "/resources" as const },
  { icon: Laptop, title: "Branding + Websites", body: "Build your digital presence and tell your story with confidence.", to: "/work" as const },
  { icon: GraduationCap, title: "Education Tools", body: "Resources, teacher tools, learning support and school solutions.", to: "/education" as const },
  { icon: Heart, title: "Inspiration + Life", body: "Because a balanced mind builds better ideas and better tomorrows.", to: "/blog" as const },
];

const products = [
  { title: "FutureProof Kit", price: "For kids & learners", to: "/education" as const },
  { title: "Business Starter Tools", price: "For small businesses", to: "/resources" as const },
  { title: "SpazaKit", price: "Resell-ready systems", to: "/spazakit" as const },
  { title: "Business Kits", price: "Launch-ready foundations", to: "/kits" as const },
];

const journal = [
  { tag: "Education", title: "Helping young people build skills for the digital world", to: "/education" as const, image: educationImage },
  { tag: "Business", title: "The useful AI tools small businesses actually need", to: "/business-digital" as const, image: businessImage },
  { tag: "Resources", title: "Practical templates to help an idea move forward", to: "/resources" as const, image: resourcesImage },
];

function Home() {
  return (
    <>
      <section className="relative min-h-[680px] overflow-hidden bg-ink text-cream lg:min-h-[760px]">
        <img src={heroDesk} alt="A warm PatienceR workspace with a notebook, coffee and laptop" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--ink)_0%,color-mix(in_oklab,var(--ink)_90%,transparent)_35%,color-mix(in_oklab,var(--ink)_28%,transparent)_72%,color-mix(in_oklab,var(--ink)_10%,transparent)_100%)]" />
        <div className="relative mx-auto flex min-h-[680px] max-w-[1400px] items-center px-6 py-20 lg:min-h-[760px] lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] font-semibold tracking-[0.42em] text-gold">PATIENCER</p>
            <h1 className="mt-6 max-w-xl font-serif text-5xl leading-[0.98] sm:text-7xl lg:text-[5.6rem]">
              I help ideas<br /><span className="script text-gold">turn into impact.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-cream/78">
              Practical solutions for education, business and everyday digital life. From resources and learning support to digital systems, AI and business solutions — I build useful things for people who are trying to make something work.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/education" className="inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-transform duration-300 hover:-translate-y-0.5">Explore Education <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/business-digital" className="inline-flex items-center gap-3 rounded-full border border-cream/50 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:border-gold hover:text-gold">Explore Business & Digital <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-cream text-ink lg:grid-cols-2">
        <Pathway icon={GraduationCap} eyebrow="Schools · Teachers · Learners · Parents" title="For Education" body="Practical tools, resources and solutions that make education work better — in classrooms and at home." to="/education" image={educationImage} imageAlt="A learner working in a classroom" />
        <Pathway icon={Laptop} eyebrow="Entrepreneurs · Small Businesses · Creators" title="For Business & Digital" body="Turn your idea into something that works. Websites, AI, automation, digital systems and practical tools to help you build, grow and thrive." to="/business-digital" image={businessImage} imageAlt="A modern small business workspace" reverse />
      </section>

      <section className="bg-cream py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="text-center">
            <p className="text-[0.62rem] font-semibold tracking-[0.4em] text-gold">EXPLORE WHAT I BUILD</p>
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">Five pillars, <span className="script text-gold">one mission.</span></h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ink/62">Different tools. One purpose — to help people learn, grow and turn their ideas into something real.</p>
          </div>
          <div className="mt-16 grid gap-px bg-ink/12 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((pillar) => (
              <Link key={pillar.title} to={pillar.to} className="group flex min-h-72 flex-col items-center bg-cream px-7 py-10 text-center transition-colors hover:bg-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft/55"><pillar.icon className="h-5 w-5" strokeWidth={1.4} /></span>
                <h3 className="mt-6 text-[0.7rem] font-sans font-semibold tracking-[0.2em]">{pillar.title.toUpperCase()}</h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-ink/62">{pillar.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold group-hover:text-gold">Learn More <ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-card text-ink lg:grid-cols-[0.85fr_1.65fr]">
        <img src={resourcesImage} alt="PatienceR notebooks and practical guides" width={1280} height={960} loading="lazy" className="h-full min-h-[420px] w-full object-cover" />
        <div className="grid px-6 py-20 sm:px-12 lg:grid-cols-[1fr_0.85fr] lg:gap-14 lg:px-16">
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.4em] text-gold">FEATURED RESOURCES</p>
            <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight sm:text-5xl">Books, templates & tools for real life.</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-ink/65">From educational resources and workbooks to business templates and digital tools — everything here is designed to make your life easier and your goals closer.</p>
            <Link to="/resources" className="mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream">Browse all resources <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 divide-y divide-ink/12 border-y border-ink/12 lg:mt-0">
            {products.map((product) => (
              <Link key={product.title} to={product.to} className="group flex items-center gap-4 py-5">
                <span className="flex h-12 w-10 shrink-0 items-center justify-center bg-gold-soft/45"><BookOpen className="h-5 w-5" strokeWidth={1.3} /></span>
                <span className="min-w-0 flex-1"><strong className="block font-serif text-base font-normal">{product.title}</strong><span className="mt-1 block text-xs text-ink/50">{product.price}</span></span>
                <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-cream sm:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 lg:grid-cols-[0.72fr_2fr] lg:px-10">
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.4em] text-gold">THE PATIENCER JOURNAL</p>
            <h2 className="mt-6 max-w-sm font-serif text-3xl leading-tight sm:text-4xl">Ideas, resources and practical notes for learning, business and building in a digital world.</h2>
            <Link to="/blog" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-gold">READ THE JOURNAL <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {journal.map((story) => (
              <Link key={story.title} to={story.to} className="group border border-cream/15 bg-ink">
                <div className="aspect-[16/8] overflow-hidden"><img src={story.image} alt="" width={1280} height={960} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <div className="p-6"><p className="text-[0.58rem] tracking-[0.25em] text-gold">{story.tag.toUpperCase()}</p><h3 className="mt-3 font-serif text-lg leading-snug">{story.title}</h3><span className="mt-5 inline-flex items-center gap-2 text-xs text-gold">Read more <ArrowRight className="h-3.5 w-3.5" /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Pathway({ icon: Icon, eyebrow, title, body, to, image, imageAlt, reverse = false }: { icon: typeof Lightbulb; eyebrow: string; title: string; body: string; to: "/education" | "/business-digital"; image: string; imageAlt: string; reverse?: boolean }) {
  return (
    <article className="grid min-h-[430px] sm:grid-cols-2">
      <div className={`flex flex-col justify-center px-8 py-12 sm:px-10 lg:px-14 ${reverse ? "sm:order-2" : ""}`}>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft/50"><Icon className="h-6 w-6" strokeWidth={1.3} /></span>
        <h2 className="mt-6 font-serif text-3xl sm:text-4xl">{title}</h2>
        <p className="mt-3 text-[0.6rem] font-semibold tracking-[0.24em] text-ink/55">{eyebrow.toUpperCase()}</p>
        <p className="mt-5 text-sm leading-7 text-ink/65">{body}</p>
        <Link to={to} className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-semibold text-cream">Explore <ArrowRight className="h-3.5 w-3.5" /></Link>
      </div>
      <img src={image} alt={imageAlt} width={1280} height={960} loading="lazy" className={`h-full min-h-72 w-full object-cover ${reverse ? "sm:order-1" : ""}`} />
    </article>
  );
}
