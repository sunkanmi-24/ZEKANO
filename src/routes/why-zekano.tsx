import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Settings,
  UserRound,
  MonitorSmartphone,
  ShieldCheck,
  LineChart,
  HeartHandshake,
  Target,
  Award,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/why-zekano")({
  head: () => ({
    meta: [
      { title: "Why ZEKANO — More Than Mobility" },
      {
        name: "description",
        content:
          "ZEKANO combines structured operations, professional management and technology to help mobility assets and mobility professionals succeed together.",
      },
      { property: "og:title", content: "Why ZEKANO — More Than Mobility" },
      {
        property: "og:description",
        content:
          "Structure, people and technology: the unique combination that sets ZEKANO apart in structured mobility.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/why-zekano" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/why-zekano" }],
  }),
  component: WhyZekanoPage,
});

const reasons = [
  {
    icon: Settings,
    title: "Structured Operations",
    desc: "Every vehicle operates under documented standards, policies, and procedures.",
  },
  {
    icon: UserRound,
    title: "Professional Management",
    desc: "Assets are managed by trained professionals with a focus on performance and accountability.",
  },
  {
    icon: MonitorSmartphone,
    title: "Technology & Transparency",
    desc: "Real-time data, dashboards, and reporting keep owners informed and in control.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Compliance",
    desc: "Strict vetting, compliance, and monitoring ensure safety and reliability.",
  },
  {
    icon: LineChart,
    title: "Scalable & Sustainable",
    desc: "Our systems are built to grow without compromising operational excellence.",
  },
  {
    icon: HeartHandshake,
    title: "People-Centered",
    desc: "We empower mobility professionals and create opportunities that transform lives.",
  },
];

const commitments = [
  { icon: ShieldCheck, value: "100%", label: "Commitment to Integrity" },
  { icon: UserRound, value: "100%", label: "Focus on Accountability" },
  { icon: Settings, value: "100%", label: "Dedication to Excellence" },
  { icon: Target, value: "100%", label: "Driven by Purpose" },
];

function WhyZekanoPage() {
  return (
    <div className="zekano-why-page min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="zekano-why-hero mx-auto max-w-none w-full px-4 lg:px-8 py-12 lg:py-16">
          <div className="zekano-why-grid grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] lg:gap-14 items-start">
            {/* Left column */}
            <div className="zekano-why-intro min-w-0">
              <p className="zekano-why-eyebrow text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">
                Why ZEKANO
              </p>
              <h1 className="zekano-why-title mt-4 text-3xl sm:text-4xl lg:text-[44px] font-bold text-brand-dark leading-[1.15]">
                More Than Mobility.
                <br />
                It&apos;s <span className="text-brand-green">How</span> We Do It.
              </h1>
              <div className="zekano-why-rule mt-6 h-0.5 w-24 bg-brand-green" />
              <p className="zekano-why-desc mt-6 text-base text-muted-foreground leading-relaxed">
                ZEKANO is not just about vehicles. It&apos;s about building a better way for mobility assets and
                mobility professionals to succeed together.
              </p>
              <p className="zekano-why-desc mt-5 text-base text-muted-foreground leading-relaxed">
                Our unique combination of structure, people, and technology is what sets us apart.
              </p>

              <div className="zekano-why-buttons mt-8 flex flex-col gap-3 sm:max-w-sm">
                <Link
                  to="/contact"
                  className="zekano-why-btn-primary inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-dark transition"
                >
                  Become an Asset Owner <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="zekano-why-btn-secondary inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
                >
                  Become a Mobility Professional
                </Link>
              </div>
            </div>

            {/* Right cards */}
            <div className="zekano-why-cards grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {reasons.map((r) => (
                <article
                  key={r.title}
                  className="zekano-why-card rounded-xl border border-border bg-white p-6 text-center flex flex-col items-center hover:shadow-lg transition"
                >
                  <r.icon className="zekano-why-card-icon h-9 w-9 text-brand-green" strokeWidth={1.75} />
                  <h2 className="zekano-why-card-title mt-4 text-base lg:text-lg font-bold text-brand-dark">
                    {r.title}
                  </h2>
                  <p className="zekano-why-card-desc mt-3 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment band */}
        <section className="zekano-why-commit mx-auto max-w-none w-full px-4 lg:px-8 pb-16">
          <div className="zekano-why-commit-band rounded-2xl bg-brand-dark px-6 py-8 lg:px-10">
            <div className="zekano-why-commit-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-white/10 sm:divide-x">
              {commitments.map((c) => (
                <div
                  key={c.label}
                  className="zekano-why-commit-item flex items-center gap-4 px-0 py-5 sm:py-2 sm:px-6 first:sm:pl-0 last:sm:pr-0"
                >
                  <div className="zekano-why-commit-icon grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20">
                    <c.icon className="h-5 w-5 text-brand-green" />
                  </div>
                  <div className="min-w-0">
                    <div className="zekano-why-commit-value text-2xl lg:text-3xl font-bold text-brand-green">
                      {c.value}
                    </div>
                    <div className="zekano-why-commit-label text-sm text-white/80 leading-tight">{c.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="zekano-why-cta mx-auto max-w-none w-full px-4 lg:px-8 pb-20">
          <div className="zekano-why-cta-inner rounded-2xl border border-border bg-secondary px-6 py-10 lg:px-12 text-center">
            <Award className="mx-auto h-10 w-10 text-brand-green" strokeWidth={1.75} />
            <h2 className="mt-4 text-2xl lg:text-3xl font-bold text-brand-dark">
              Structure. People. Technology.
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
              Discover how our systems bring order to mobility and create lasting value for everyone involved.
            </p>
            <Link
              to="/our-systems"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-dark transition"
            >
              Explore Our Systems <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
