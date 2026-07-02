import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import portrait from "../assets/patience-portrait-cleaned.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me — Patience R." },
      {
        name: "description",
        content:
          "A one-woman operation building smart solutions, digital tools, and resources that help ideas turn into impact.",
      },
      { property: "og:title", content: "About Me — Patience R." },
      { property: "og:description", content: "The story behind Patience R." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="About Me" title="Hey, this is" scriptWord="me.">
        A one-woman operation on a mission to help ideas turn into impact — through
        smart solutions, digital tools, and honest resources.
      </PageHeader>

      <section className="bg-cream py-20 text-ink">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <div className="overflow-hidden">
              <img
                src={portrait}
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
              I build things that <span className="script text-gold">solve real problems.</span>
            </h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink/75">
              <p>
                I'm Patience — a solo creator, problem-solver, and quiet
                over-thinker who turns ideas into things you can actually use.
                No team, no agency polish. Just me, my laptop, and a lot of
                curiosity.
              </p>
              <p>
                I work across five pillars: AI + automation, digital products,
                branding & websites, teacher tools, and inspiration for real
                life. If it saves someone time, sparks an idea, or makes
                something easier — I'm probably building it.
              </p>
              <p>
                My work is rooted in one belief: small tools, done well, change
                how people live and work.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/what-i-do"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink"
              >
                See What I Do <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm text-ink/80 hover:text-gold"
              >
                Say Hello <Heart className="h-4 w-4 text-gold" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
