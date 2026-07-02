import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, GraduationCap } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/teacher-tools")({
  head: () => ({
    meta: [
      { title: "Teacher Tools — Patience R." },
      {
        name: "description",
        content:
          "Resources, automations, and digital tools for teachers, educators, and school communities.",
      },
      { property: "og:title", content: "Teacher Tools — Patience R." },
      {
        property: "og:description",
        content: "Practical tools built for classrooms.",
      },
    ],
    links: [{ rel: "canonical", href: "/teacher-tools" }],
  }),
  component: TeacherTools,
});

function TeacherTools() {
  return (
    <>
      <PageHeader eyebrow="Teacher Tools" title="Built for classrooms," scriptWord="made with care.">
        Full library coming soon. Here's a live example of the kind of thing I
        build in this space.
      </PageHeader>

      <section className="bg-cream py-20 text-ink">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="rounded-2xl border border-ink/10 bg-cream p-10">
            <div className="flex items-start gap-5">
              <GraduationCap className="h-10 w-10 shrink-0 text-gold" strokeWidth={1.25} />
              <div className="min-w-0">
                <p className="text-xs tracking-[0.3em] text-ink/50">FEATURED EXAMPLE</p>
                <h3 className="mt-2 font-serif text-2xl">SJ Ratsela — Teacher Website</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  A clean, purpose-built site for a working educator — pairing
                  branding, resources, and simple automations that respect a
                  teacher's time.
                </p>
                <a
                  href="https://sjratsela.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-medium text-cream hover:bg-gold hover:text-ink"
                >
                  Visit the site <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="script text-3xl text-gold">More tools on the way.</p>
            <p className="mx-auto mt-4 max-w-xl text-sm text-ink/70">
              Building for a school or classroom? Let's talk about what would
              actually help.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink"
            >
              Start A Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
