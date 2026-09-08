import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, GraduationCap, Home, School, Sparkles } from "lucide-react";
import educationImage from "../assets/patiencer-education.jpg";

export const Route = createFileRoute("/education")({
  head: () => ({ meta: [
    { title: "Education Tools & Learning Support | PatienceR" },
    { name: "description", content: "Practical resources for schools, teachers, learners and parents — built to make learning work better." },
    { property: "og:title", content: "For Education | PatienceR" },
    { property: "og:description", content: "Tools and support for classrooms and home learning." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] },), component: Education });

const paths = [
  { icon: GraduationCap, title: "FutureProof Kit", body: "Four buildable skills for young people: communicating, problem solving, presenting work and being found online.", external: "https://futureproofkit.lovable.app/" },
  { icon: School, title: "Teacher Tools", body: "Practical classroom resources, digital support and simple systems that give educators time back.", to: "/teacher-tools" as const },
  { icon: Home, title: "Learning at Home", body: "Clear, useful resources for parents who want to support confident, independent learners.", to: "/resources" as const },
];

function Education() { return <>
  <section className="bg-ink text-cream"><div className="mx-auto grid max-w-[1400px] lg:grid-cols-2"><div className="flex flex-col justify-center px-6 py-20 lg:px-16 lg:py-28"><p className="text-[0.62rem] tracking-[0.4em] text-gold">FOR EDUCATION</p><h1 className="mt-6 font-serif text-5xl leading-tight sm:text-7xl">Tools that help learning <span className="script text-gold">move forward.</span></h1><p className="mt-7 max-w-xl text-base leading-8 text-cream/68">Practical resources for schools, teachers, learners and parents — designed for real classrooms, real homes and the digital world young people are growing into.</p></div><img src={educationImage} alt="A learner studying in a classroom" width={1280} height={960} className="h-full min-h-[480px] w-full object-cover" /></div></section>
  <section className="bg-cream py-24 text-ink"><div className="mx-auto max-w-[1200px] px-6 lg:px-10"><div className="grid gap-px bg-ink/12 md:grid-cols-3">{paths.map((path) => { const body = <div className="group flex h-full flex-col bg-cream p-9 hover:bg-card"><path.icon className="h-8 w-8 text-gold" strokeWidth={1.25}/><h2 className="mt-7 font-serif text-2xl">{path.title}</h2><p className="mt-4 flex-1 text-sm leading-7 text-ink/64">{path.body}</p><span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold">Explore {path.external ? <ExternalLink className="h-3.5 w-3.5"/> : <ArrowRight className="h-3.5 w-3.5"/>}</span></div>; return path.external ? <a key={path.title} href={path.external} target="_blank" rel="noreferrer">{body}</a> : <Link key={path.title} to={path.to}>{body}</Link>; })}</div><div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-ink/15 pt-10 sm:flex-row sm:items-center"><div><Sparkles className="h-6 w-6 text-gold"/><h2 className="mt-4 font-serif text-3xl">Need something built for your school?</h2><p className="mt-2 text-sm text-ink/60">Let&apos;s shape a useful solution around the problem you are facing.</p></div><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-cream">Start a conversation <ArrowRight className="h-4 w-4"/></Link></div></div></section>
</>; }
