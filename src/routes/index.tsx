import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const EMAIL = "pmolokomme@gmail.com";
const ACADEMY_URL = "https://ratselaacademy.co.za";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Patience R. — Start Your Business the Right Way" },
      {
        name: "description",
        content:
          "Practical business foundations, digital tools and intelligent automation to help you turn a business idea into a functioning business. CIPC business registration available.",
      },
      { property: "og:title", content: "Patience R. — Start Your Business the Right Way" },
      {
        property: "og:description",
        content:
          "Practical business foundations, digital tools and intelligent automation to help you turn an idea into a functioning business.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Home,
});

const essentials = [
  {
    title: "Business documentation",
    body: "The essential documents and templates needed to establish and organise your business.",
  },
  {
    title: "Business processes",
    body: "Practical, ready-to-use operating procedures and guides to help you manage everyday activities.",
  },
  {
    title: "Your business website",
    body: "A professional online presence to introduce your business and its offerings.",
  },
  {
    title: "Your business dashboard",
    body: "A practical digital space to organise and manage important business information.",
  },
  {
    title: "Business registration",
    body: "Guidance and support to take the necessary steps towards formal business registration.",
  },
];

function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-ink lg:max-w-none">
      {failed ? (
        <div className="flex h-full w-full flex-col items-center justify-center border border-cream/15 bg-cream/[0.03] text-center">
          <span className="script text-6xl text-gold">Patience R.</span>
          <span className="mt-4 text-[0.6rem] tracking-[0.4em] text-cream/50">
            CREATE. SOLVE. AUTOMATE. INSPIRE.
          </span>
        </div>
      ) : (
        <img
          src="/images/patience-r.jpg"
          alt="Portrait of Patience R."
          width={1072}
          height={1390}
          loading="eager"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-[50%_20%]"
        />
      )}
      <div className="pointer-events-none absolute inset-0 border border-cream/10" />
    </div>
  );
}

function Home() {
  return (
    <>
      {/* HERO */}
      <section id="top" className="bg-ink text-cream">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-10 lg:pb-28 lg:pt-16">
          <div className="order-2 lg:order-1">
            <p className="text-[0.65rem] tracking-[0.45em] text-gold">
              CREATE. SOLVE. AUTOMATE. INSPIRE.
            </p>
            <h1 className="mt-7 font-serif text-[2.8rem] leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Start your business
              <br />
              <span className="script text-gold">the right way.</span>
            </h1>
            <div className="mt-8 h-px w-24 bg-gold/70" />
            <p className="mt-8 max-w-lg text-base leading-[1.85] text-cream/70">
              Practical business foundations, digital tools and intelligent automation, to help
              you turn an idea into a functioning business.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#essentials"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-medium text-ink transition-all duration-500 hover:gap-4"
              >
                See the business essentials
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href={`mailto:${EMAIL}?subject=Business%20enquiry`}
                className="group inline-flex items-center gap-2 border-b border-cream/25 pb-1 text-sm text-cream/90 transition-colors duration-500 hover:border-gold hover:text-gold"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Portrait />
          </div>
        </div>
      </section>

      {/* BUSINESS ESSENTIALS */}
      <section id="essentials" className="bg-cream py-20 text-ink sm:py-28">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
          <div className="lg:sticky lg:top-10 lg:self-start">
            <p className="text-[0.65rem] tracking-[0.45em] text-ink/45">THE BUSINESS ESSENTIALS</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.75rem]">
              From idea to a business that{" "}
              <span className="script text-gold">works</span>.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-[1.9] text-ink/65">
              The practical foundations most new businesses need, explained plainly.
            </p>
          </div>

          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {essentials.map((e, i) => (
              <div
                key={e.title}
                className="grid grid-cols-[3rem_1fr] items-baseline gap-4 py-7 sm:grid-cols-[4rem_1fr] sm:gap-8"
              >
                <span className="text-xs tracking-[0.25em] text-gold">0{i + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl leading-snug">{e.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-[1.85] text-ink/65">{e.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAKE IT OFFICIAL */}
      <section id="registration" className="bg-ink py-20 text-cream sm:py-28">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-end gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-10">
          <div>
            <p className="text-[0.65rem] tracking-[0.45em] text-gold">CIPC BUSINESS REGISTRATION</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.75rem]">
              Make it <span className="script text-gold">official</span>.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-[1.9] text-cream/65">
              Once your foundations are in place and you're ready to formalise, I can take care of
              your CIPC registration for you. It's a separate service, offered on its own.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <a
              href={`mailto:${EMAIL}?subject=CIPC%20registration`}
              className="group inline-flex items-center gap-2.5 rounded-full border border-cream/30 px-7 py-3.5 text-sm text-cream transition-all duration-500 hover:gap-4 hover:border-gold hover:text-gold"
            >
              Ask about registration
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      {/* RATSELA ACADEMY */}
      <section id="academy" className="bg-cream py-20 text-ink sm:py-24">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-6 px-6 sm:flex-row sm:items-end sm:justify-between lg:px-10">
          <div className="max-w-xl">
            <p className="text-[0.65rem] tracking-[0.45em] text-ink/45">ALSO FROM ME</p>
            <h2 className="mt-5 font-serif text-2xl leading-tight sm:text-[2rem]">
              Ratsela <span className="script text-gold">Academy</span>
            </h2>
            <p className="mt-4 text-sm leading-[1.9] text-ink/65">
              Study packs and digital learning support.
            </p>
          </div>
          <a
            href={ACADEMY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 border-b border-ink/30 pb-1 text-sm text-ink transition-colors duration-500 hover:border-gold hover:text-gold"
          >
            Visit ratselaacademy.co.za
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-ink py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-10">
          <p className="text-[0.65rem] tracking-[0.45em] text-gold">GET IN TOUCH</p>
          <h2 className="mt-6 max-w-2xl font-serif text-3xl leading-tight sm:text-[2.75rem]">
            Got a business idea? Let's make it{" "}
            <span className="script text-gold">real</span>.
          </h2>
          <div className="mt-7 h-px w-20 bg-gold/70" />
          <p className="mt-7 max-w-xl text-sm leading-[1.9] text-cream/65">
            Send me a short email about what you want to start and I'll come back to you.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-medium text-ink"
          >
            {EMAIL}
          </a>
        </div>
      </section>
    </>
  );
}
