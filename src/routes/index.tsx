import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

const EMAIL = "pmolokomme@gmail.com";
const ACADEMY_URL = "https://ratselaacademy.co.za";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Patience R. — Start Your Business the Right Way" },
      {
        name: "description",
        content:
          "Business registration and the Business Starter Pack: required documentation, SOPs, website code and dashboard code — a ready-to-run business, done for you.",
      },
      { property: "og:title", content: "Patience R. — Start Your Business the Right Way" },
      {
        property: "og:description",
        content:
          "Business registration and a done-for-you Business Starter Pack for people starting a new business or side hustle.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Home,
});

const pack = [
  {
    title: "Required documentation",
    body: "The paperwork a new business needs, ready to fill in and use.",
  },
  {
    title: "SOPs",
    body: "Standard operating procedures, so your business runs the same way every time.",
  },
  {
    title: "Website code",
    body: "Code for a website you can launch and make your own.",
  },
  {
    title: "Dashboard code",
    body: "Code for a dashboard to keep track of how your business is doing.",
  },
  {
    title: "Business registration",
    body: "Your business registered, so you can start trading properly.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section id="top" className="bg-ink text-cream">
        <div className="mx-auto max-w-[1100px] px-6 pb-24 pt-16 lg:px-10 lg:pb-36 lg:pt-28">
          <p className="text-[0.65rem] tracking-[0.45em] text-gold">
            BUSINESS REGISTRATION &amp; STARTER PACKS
          </p>
          <h1 className="mt-8 font-serif text-[2.8rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.5rem]">
            Start your business
            <br />
            <span className="script text-gold">the right way.</span>
          </h1>
          <div className="mt-9 h-px w-24 bg-gold/70" />
          <p className="mt-8 max-w-xl text-base leading-[1.85] text-cream/70">
            A new business or side hustle, without the guesswork. I register your business and
            give you the Business Starter Pack: the documents, the procedures, the website and
            the dashboard — a business on a silver platter.
          </p>
          <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={`mailto:${EMAIL}?subject=Business%20Starter%20Pack`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-medium text-ink transition-all duration-500 hover:gap-4"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href="#starter-pack"
              className="group inline-flex items-center gap-2 border-b border-cream/25 pb-1 text-sm text-cream/90 transition-colors duration-500 hover:border-gold hover:text-gold"
            >
              See what's inside
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      {/* STARTER PACK */}
      <section id="starter-pack" className="bg-cream py-24 text-ink sm:py-36">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.45em] text-ink/45">THE BUSINESS STARTER PACK</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.75rem]">
              Everything a new business needs,{" "}
              <span className="script text-gold">in one pack</span>.
            </h2>
            <p className="mt-6 text-sm leading-[1.9] text-ink/65">
              Instead of piecing it together from ten different places, you get the whole
              foundation in one go.
            </p>
          </div>

          <div className="mt-16 divide-y divide-ink/10 border-y border-ink/10">
            {pack.map((p, i) => (
              <div
                key={p.title}
                className="grid grid-cols-1 items-baseline gap-3 py-8 sm:grid-cols-[4rem_1fr] sm:gap-10"
              >
                <span className="text-xs tracking-[0.25em] text-gold">0{i + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl leading-snug">{p.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-[1.85] text-ink/65">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="registration" className="bg-ink py-24 text-cream sm:py-36">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.45em] text-gold">BUSINESS REGISTRATION</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.75rem]">
              Make it <span className="script text-gold">official</span>.
            </h2>
            <p className="mt-6 text-sm leading-[1.9] text-cream/65">
              Already have the idea and just need the registration done? I can do that on its own,
              without the full pack.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                Registration for new businesses
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                Available on its own or as part of the Starter Pack
              </li>
            </ul>
            <a
              href={`mailto:${EMAIL}?subject=Business%20Registration`}
              className="group mt-10 inline-flex items-center gap-2.5 rounded-full border border-cream/30 px-7 py-3.5 text-sm text-cream transition-all duration-500 hover:gap-4 hover:border-gold hover:text-gold"
            >
              Ask about registration
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      {/* RATSELA ACADEMY */}
      <section id="academy" className="bg-cream py-24 text-ink sm:py-36">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.45em] text-ink/45">ALSO FROM ME</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.75rem]">
              Ratsela <span className="script text-gold">Academy</span>.
            </h2>
            <p className="mt-6 text-sm leading-[1.9] text-ink/65">
              Study packs and digital learning support. Visit Ratsela Academy to see what's
              available.
            </p>
            <a
              href={ACADEMY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm text-ink transition-colors duration-500 hover:border-gold hover:text-gold"
            >
              Visit ratselaacademy.co.za
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-ink py-24 text-cream sm:py-36">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-[0.65rem] tracking-[0.45em] text-gold">GET IN TOUCH</p>
            <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-[2.75rem]">
              Ready to <span className="script text-gold">start</span>?
            </h2>
            <div className="mt-7 h-px w-20 bg-gold/70" />
            <p className="mt-7 text-sm leading-[1.9] text-cream/65">
              Send me a short email about the business you want to start and I'll come back to you.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 text-sm font-medium text-ink"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
