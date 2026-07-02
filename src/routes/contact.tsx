import { createFileRoute } from "@tanstack/react-router";
import { Mail, Send } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "../components/PageHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Patience R." },
      {
        name: "description",
        content: "Say hello, share an idea, or start a project with Patience R.",
      },
      { property: "og:title", content: "Contact — Patience R." },
      { property: "og:description", content: "Let's connect." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader eyebrow="Contact" title="Let's" scriptWord="connect.">
        Have a question, an idea, or a project? Drop me a note — I read
        everything myself.
      </PageHeader>

      <section className="bg-cream py-20 text-ink">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-6 lg:grid-cols-5 lg:px-10">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl">Prefer email?</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              You can reach me directly. I usually reply within 2 business days.
            </p>
            <a
              href="mailto:hello@patiencer.com"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-gold"
            >
              <Mail className="h-4 w-4 text-gold" strokeWidth={1.5} />
              hello@patiencer.com
            </a>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-ink/10 bg-cream p-8 lg:col-span-3"
          >
            {sent ? (
              <div className="py-8 text-center">
                <p className="script text-4xl text-gold">Thank you.</p>
                <p className="mt-3 text-sm text-ink/70">
                  Your message is in. I'll be in touch soon.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <Field label="Your name">
                  <input required type="text" className={inputClass} />
                </Field>
                <Field label="Your email">
                  <input required type="email" className={inputClass} />
                </Field>
                <Field label="What's on your mind?">
                  <textarea required rows={5} className={inputClass} />
                </Field>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink"
                >
                  Send Message <Send className="h-4 w-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

const inputClass =
  "w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium tracking-wide text-ink/70">
        {label}
      </span>
      {children}
    </label>
  );
}
