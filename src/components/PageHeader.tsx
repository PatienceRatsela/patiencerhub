import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  scriptWord,
  children,
}: {
  eyebrow?: string;
  title: string;
  scriptWord?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-ink py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        {eyebrow && (
          <p className="text-xs tracking-[0.4em] text-gold">{eyebrow.toUpperCase()}</p>
        )}
        <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          {title}{" "}
          {scriptWord && <span className="script text-gold">{scriptWord}</span>}
        </h1>
        <div className="mx-auto mt-6 h-px w-24 bg-gold" />
        {children && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/70">
            {children}
          </p>
        )}
      </div>
    </section>
  );
}
