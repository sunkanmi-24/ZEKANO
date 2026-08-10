import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  Car,
  Users,
  ShieldCheck,
  TrendingUp,
  Puzzle,
  Settings,
  BarChart3,
  Handshake,
  Leaf,
  Target,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroFallback from "@/assets/what-we-do-hero.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — Structured Mobility Systems | ZEKANO" },
      {
        name: "description",
        content:
          "ZEKANO builds and operates trusted mobility systems that connect assets with productive use, create opportunities, and deliver sustainable value.",
      },
      { property: "og:title", content: "What We Do — ZEKANO" },
      {
        property: "og:description",
        content: "Building systems. Creating value. How ZEKANO designs and operates structured mobility.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/what-we-do" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do" }],
  }),
  component: WhatWeDoPage,
});

const focus = [
  {
    icon: Car,
    title: "Access to Reliable Mobility",
    body: "We provide responsible drivers with access to well-maintained vehicles and the tools they need to earn sustainably.",
  },
  {
    icon: Users,
    title: "Professional Asset Management",
    body: "We help asset owners maximise the value of their vehicles through professional management, transparency, and consistent returns.",
  },
  {
    icon: ShieldCheck,
    title: "System Integrity & Excellence",
    body: "We build systems rooted in trust, accountability, and performance—designed to deliver long-term sustainable impact.",
  },
  {
    icon: TrendingUp,
    title: "Opportunities for Growth",
    body: "We create pathways for people to grow, thrive, and build better futures through mobility opportunities.",
  },
  {
    icon: Users,
    title: "Positive Community Impact",
    body: "We contribute to stronger communities by enabling mobility, empowering people, and driving economic progress.",
  },
];

const pillars = [
  {
    icon: Puzzle,
    title: "Intentional Design",
    body: "We design every system with a clear purpose and a deep understanding of the problems we aim to solve.",
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    body: "We maintain the highest standards in our operations to ensure reliability, safety, and exceptional experience.",
  },
  {
    icon: BarChart3,
    title: "Data & Technology",
    body: "We use data and technology to make smarter decisions, improve performance, and create transparency.",
  },
  {
    icon: Handshake,
    title: "Partnership & Trust",
    body: "We build strong relationships with our drivers, asset owners, partners, and stakeholders based on trust and respect.",
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    body: "We focus on long-term value—creating systems that benefit people, communities, and future generations.",
  },
];

function WhatWeDoPage() {
  return (
    <div className="zekano-what-we-do-page min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="zekano-wwd-hero relative isolate overflow-hidden bg-brand-dark">
        <img
          src={getImage("what-we-do", "hero", heroFallback)}
          alt="Vehicle on a highway at dusk with a city skyline"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover object-right opacity-60 lg:opacity-100"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/10"
        />
        <div className="relative px-5 pb-12 pt-5 sm:px-8 lg:px-12 lg:pb-20">
          <nav aria-label="Breadcrumb" className="zekano-wwd-breadcrumbs">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-white/70 sm:text-sm">
              <li>
                <Link to="/" className="hover:text-brand-accent">
                  Home
                </Link>
              </li>
              <ChevronRight className="h-3.5 w-3.5" />
              <li>
                <Link to="/company" className="hover:text-brand-accent">
                  Company
                </Link>
              </li>
              <ChevronRight className="h-3.5 w-3.5" />
              <li className="text-brand-accent">What We Do</li>
            </ol>
          </nav>

          <div className="mt-10 max-w-xl lg:mt-16">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-accent sm:text-sm">WHAT WE DO</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px]">
              What We Do
            </h1>
            <span aria-hidden className="mt-5 block h-[3px] w-16 bg-brand-accent" />
            <p className="mt-6 text-sm leading-relaxed text-white/80 sm:text-base">
              We build and operate trusted mobility systems that connect assets with productive use, create
              opportunities, and deliver sustainable value.
            </p>
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="zekano-wwd-focus px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-accent sm:text-sm">OUR FOCUS</p>
          <h2 className="mt-3 text-2xl font-bold text-brand-dark sm:text-3xl lg:text-[34px]">
            Building Systems. Creating Value.
          </h2>
          <span aria-hidden className="mx-auto mt-4 block h-[3px] w-16 bg-brand-accent" />
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            At ZEKANO, we design, operate, and continuously improve structured mobility systems that create value for
            our drivers, asset owners, partners, and the communities we serve.
          </p>
        </div>

        <div className="zekano-wwd-focus-grid mt-12 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {focus.map((item, i) => (
            <div
              key={item.title}
              className={`zekano-wwd-focus-item px-4 text-center sm:px-6 ${
                i > 0 ? "lg:border-l lg:border-border" : ""
              }`}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent/10">
                <item.icon className="h-7 w-7 text-brand-accent" />
              </div>
              <h3 className="mt-4 text-base font-bold leading-snug text-brand-dark">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Do It */}
      <section className="zekano-wwd-how px-5 pb-16 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-muted/50 p-6 sm:p-10 lg:p-14">
          <div className="text-center">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-accent sm:text-sm">HOW WE DO IT</p>
            <h2 className="mt-3 text-2xl font-bold text-brand-dark sm:text-3xl lg:text-[34px]">
              Structured. Purposeful. Sustainable.
            </h2>
            <span aria-hidden className="mx-auto mt-4 block h-[3px] w-16 bg-brand-accent" />
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Everything we do is guided by our philosophy and executed with discipline. Our systems are built on five
              pillars:
            </p>
          </div>

          <div className="zekano-wwd-pillars mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((p) => (
              <article
                key={p.title}
                className="zekano-wwd-pillar rounded-2xl border border-border bg-background p-6 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-dark">
                  <p.icon className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="mt-4 text-sm font-bold text-brand-dark sm:text-base">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>

          {/* Purpose in action */}
          <div className="zekano-wwd-purpose mt-10 grid gap-6 rounded-2xl bg-brand-dark p-6 sm:p-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-10 lg:p-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-brand-accent">
              <Target className="h-8 w-8 text-brand-accent" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold tracking-[0.2em] text-brand-accent">OUR PURPOSE IN ACTION</p>
              <h2 className="mt-2 text-lg font-bold text-white sm:text-xl">
                Creating Opportunity. Delivering Value.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                Through our systems, we connect people, assets, and opportunities to unlock greater value for everyone.
              </p>
            </div>
            <Link
              to="/our-systems"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md border-2 border-brand-accent px-5 py-3 text-sm font-semibold text-brand-accent transition hover:bg-brand-accent hover:text-white"
            >
              Explore Our Systems <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
