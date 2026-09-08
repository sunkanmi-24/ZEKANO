import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ZekanoLogo } from "@/components/site/ZekanoLogo";
import boardroomAsset from "@/assets/leadership-boardroom.jpg.asset.json";
import ceoAsset from "@/assets/leader-ceo.jpg.asset.json";
import cooAsset from "@/assets/leader-coo.jpg.asset.json";
import financeAsset from "@/assets/leader-finance.jpg.asset.json";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Experienced Leaders, Clear Vision | ZEKANO" },
      {
        name: "description",
        content:
          "Meet the ZEKANO leadership team — deep experience in mobility, operations, technology and finance, building systems that create sustainable value.",
      },
      { property: "og:title", content: "Leadership — Experienced Leaders. Clear Vision." },
      {
        property: "og:description",
        content:
          "The ZEKANO leadership team building Africa's most trusted structured mobility ecosystem.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/leadership" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: getImage("leadership", "hero", boardroomAsset.url) },
      { name: "twitter:image", content: getImage("leadership", "hero", boardroomAsset.url) },
    ],
    links: [{ rel: "canonical", href: "/leadership" }],
  }),
  component: LeadershipPage,
});

const ceo = {
  name: "A.A. Adekunle",
  role: "Founder & CEO",
  image: getImage("leadership", "leader-1", ceoAsset.url),
  bio: "Visionary leader with a passion for building systems that solve real-world problems. A.A. drives ZEKANO's strategy, partnerships, and long-term vision for transforming mobility across Africa.",
  points: [
    "Strategic Vision & Direction",
    "Business Development",
    "Stakeholder Partnerships",
    "Innovation & Growth",
  ],
};

const team = [
  {
    name: "BELLO WALIU LANRE",
    role: "Co-Founder & COO",
    image: getImage("leadership", "leader-2", cooAsset.url),
    bio: "Leads day-to-day operations with a focus on efficiency, compliance, and excellence. Ensures our systems run smoothly and deliver value.",
    points: ["Operations Management", "Process Excellence", "Team Leadership", "Compliance & Risk"],
  },
  {
    name: "Head of Finance",
    role: "",
    image: getImage("leadership", "leader-3", financeAsset.url),
    bio: "Responsible for financial strategy, planning, and controls. Ensures sustainability, transparency, and responsible growth.",
    points: ["Financial Planning", "Risk Management", "Reporting & Controls", "Investor Relations"],
  },
];

function Bullet({ label }: { label: string }) {
  return (
    <li className="leadership-point flex items-start gap-3">
      <CheckCircle2
        className="leadership-point-icon mt-0.5 h-4 w-4 shrink-0 text-brand-green"
        strokeWidth={2}
      />
      <span className="leadership-point-label min-w-0 text-sm text-brand-dark">{label}</span>
    </li>
  );
}

function LeadershipPage() {
  return (
    <div className="leadership-page min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* BREADCRUMBS */}
        <nav
          aria-label="Breadcrumb"
          className="leadership-breadcrumb mx-auto max-w-none w-full px-4 lg:px-8 pt-6"
        >
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-brand-green">
                Home
              </Link>
            </li>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <li>
              <Link to="/company" className="hover:text-brand-green">
                Company
              </Link>
            </li>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <li className="font-medium text-brand-dark">Leadership</li>
          </ol>
        </nav>

        {/* HERO */}
        <section className="leadership-hero mx-auto max-w-none w-full px-4 lg:px-8 py-8 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="min-w-0">
              <p className="leadership-eyebrow text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-brand-green">
                Leadership
              </p>
              <h1 className="leadership-title mt-4 text-3xl sm:text-4xl lg:text-[42px] font-bold text-brand-dark leading-[1.15]">
                Experienced Leaders.
                <br />
                <span className="text-brand-green">Clear Vision.</span>
              </h1>
              <p className="leadership-hero-desc mt-6 text-base text-muted-foreground leading-relaxed max-w-xl">
                Our leadership team brings together deep experience in mobility, operations,
                technology, and finance to build systems that create sustainable value for all
                stakeholders.
              </p>
            </div>

            <div className="leadership-hero-media overflow-hidden rounded-2xl">
              <img
                src={getImage("leadership", "hero", boardroomAsset.url)}
                alt="ZEKANO boardroom with branded wall and conference table"
                className="h-56 sm:h-72 lg:h-[340px] w-full object-cover"
                width={1280}
                height={720}
              />
            </div>
          </div>
        </section>

        {/* FEATURED LEADER */}
        <section className="leadership-featured mx-auto max-w-none w-full px-4 lg:px-8 pb-6">
          <article className="leadership-featured-card rounded-2xl border border-border bg-secondary/40 p-5 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-10">
              <img
                src={ceo.image}
                alt={`Portrait of ${ceo.name}, ${ceo.role}`}
                loading="lazy"
                className="leadership-featured-photo h-72 sm:h-96 lg:h-[420px] w-full rounded-xl object-cover"
                width={768}
                height={1024}
              />
              <div className="min-w-0 lg:py-2">
                <h2 className="leadership-featured-name text-2xl lg:text-3xl font-bold text-brand-dark">
                  {ceo.name}
                </h2>
                <p className="leadership-featured-role mt-2 text-base lg:text-lg font-semibold text-brand-green">
                  {ceo.role}
                </p>
                <p className="leadership-featured-bio mt-5 text-sm lg:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {ceo.bio}
                </p>
                <ul className="leadership-featured-points mt-6 grid gap-3">
                  {ceo.points.map((p) => (
                    <Bullet key={p} label={p} />
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </section>

        {/* TEAM GRID */}
        <section className="leadership-team mx-auto max-w-none w-full px-4 lg:px-8 pb-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {team.map((m) => (
              <article
                key={m.name}
                className="leadership-team-card rounded-2xl border border-border bg-secondary/40 p-5 lg:p-6"
              >
                <div className="grid gap-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <img
                    src={m.image}
                    alt={`Portrait of ${m.name}`}
                    loading="lazy"
                    className="leadership-team-photo h-64 sm:h-[260px] w-full rounded-xl object-cover"
                    width={768}
                    height={1024}
                  />
                  <div className="min-w-0">
                    <h2 className="leadership-team-name text-lg lg:text-xl font-bold text-brand-dark">
                      {m.name}
                    </h2>
                    {m.role && (
                      <p className="leadership-team-role mt-1.5 text-sm font-semibold text-brand-green">
                        {m.role}
                      </p>
                    )}
                    <p className="leadership-team-bio mt-3 text-sm text-muted-foreground leading-relaxed">
                      {m.bio}
                    </p>
                    <ul className="leadership-team-points mt-4 grid gap-2.5">
                      {m.points.map((p) => (
                        <Bullet key={p} label={p} />
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA BAND */}
        <section className="leadership-cta mx-auto max-w-none w-full px-4 lg:px-8 py-10 lg:py-14">
          <div className="leadership-cta-band rounded-2xl border border-border bg-secondary/40 px-5 py-7 lg:px-10 lg:py-9">
            <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8">
              <div className="leadership-cta-logo grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-full bg-white">
                <div className="scale-[0.6]">
                  <ZekanoLogo />
                </div>
              </div>
              <div className="min-w-0">
                <h2 className="leadership-cta-title text-xl lg:text-2xl font-bold text-brand-dark">
                  One Team. One Mission.
                </h2>
                <p className="leadership-cta-desc mt-2 text-sm lg:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  Building Africa's most trusted structured mobility ecosystem — together with
                  vehicle owners, drivers, and partners.
                </p>
              </div>
              <Link
                to="/contact"
                className="leadership-cta-btn inline-flex items-center justify-center gap-2 rounded-lg bg-brand-dark px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Join Our Journey
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
