import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Users, Eye, Quote } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import aboutHq from "@/assets/about-hq.jpg";
import founder from "@/assets/founder.jpg";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Building the Future of Structured Mobility | ZEKANO" },
      {
        name: "description",
        content:
          "ZEKANO is a structured mobility company that builds and operates integrated systems connecting mobility assets with qualified mobility professionals.",
      },
      { property: "og:title", content: "About Us — Building the Future of Structured Mobility" },
      {
        property: "og:description",
        content: "Our mission, vision and a message from our Founder & CEO, A.A. Adekunle.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about-us" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about-us" }],
  }),
  component: AboutUsPage,
});

const pillars = [
  {
    icon: Users,
    title: "Our Mission",
    body: "To build structured mobility systems that create trust, opportunity, and sustainable value.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "To be Africa's most trusted structured mobility ecosystem company.",
  },
];

function AboutUsPage() {
  return (
    <div className="zekano-about min-h-screen bg-background">
      <Header />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="zekano-about-breadcrumbs px-5 pt-6 sm:px-8 lg:px-12">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground sm:text-sm">
          <li>
            <Link to="/" className="hover:text-brand-green">
              Home
            </Link>
          </li>
          <ChevronRight className="h-3.5 w-3.5" />
          <li>
            <Link to="/company" className="hover:text-brand-green">
              Company
            </Link>
          </li>
          <ChevronRight className="h-3.5 w-3.5" />
          <li className="text-brand-dark">About Us</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="zekano-about-hero px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div className="zekano-about-intro">
            <p className="zekano-about-eyebrow text-xs font-bold tracking-[0.2em] text-brand-green sm:text-sm">ABOUT US</p>
            <h1 className="zekano-about-title mt-3 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[44px]">
              Building the Future
              <br />
              of <span className="zekano-about-title-accent text-brand-green">Structured Mobility.</span>
            </h1>
            <p className="zekano-about-desc mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              ZEKANO is a structured mobility company that builds and operates integrated systems connecting mobility
              assets with qualified mobility professionals to create sustainable value for everyone in the ecosystem.
            </p>

            <span aria-hidden className="mt-6 block h-[3px] w-10 bg-brand-green" />

            <div className="mt-6 space-y-5">
              {pillars.map((p) => (
                <div key={p.title} className="zekano-about-pillar flex gap-4">
                  <div className="zekano-about-pillar-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-dark">
                    <p.icon className="h-5 w-5 text-brand-green" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="zekano-about-pillar-title text-base font-bold text-brand-dark">{p.title}</h2>
                    <p className="zekano-about-pillar-body mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="zekano-about-hero-media overflow-hidden rounded-2xl">
            <img
              src={getImage("about-us", "hero", aboutHq)}
              alt="ZEKANO headquarters building with vehicles parked in front"
              width={1280}
              height={912}
              className="h-56 w-full object-cover sm:h-80 lg:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* Founder message */}
      <section className="zekano-about-founder px-5 pb-16 sm:px-8 lg:px-12">
        <div className="rounded-2xl bg-muted/50 p-6 sm:p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[380px_1fr] lg:gap-12">
            <div className="zekano-about-founder-photo overflow-hidden rounded-xl border border-border bg-background">
              <img
                src={getImage("about-us", "founder", founder)}
                alt="A.A. Adekunle, Founder & CEO of ZEKANO Mobility Limited"
                loading="lazy"
                className="h-80 w-full object-cover sm:h-[420px] lg:h-[440px]"
              />
            </div>

            <div>
              <div className="flex items-center gap-4">
                <div className="zekano-about-founder-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green">
                  <Quote className="h-5 w-5 text-primary-foreground" />
                </div>
                <h2 className="zekano-about-founder-title text-xl font-bold text-brand-dark sm:text-2xl">
                  A Message from Our <span className="text-brand-green">Founder</span>
                </h2>
              </div>

              <div className="zekano-about-founder-body mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  "At ZEKANO, we believe in building more than a company— we are building systems that create trust,
                  opportunity, and sustainable value.
                </p>
                <p>
                  We believe the future of mobility is not defined by who owns the most vehicles, but by who builds the
                  most trusted systems that connect mobility assets with qualified mobility professionals.
                </p>
                <p>
                  Every decision we make is guided by structure, accountability, and long-term thinking. Our work in
                  mobility is only the beginning of a broader vision to build systems that solve real-world challenges
                  and create lasting value for people, businesses, and communities.
                </p>
                <p>Thank you for trusting us to be part of your journey."</p>
              </div>

              <div className="zekano-about-founder-signoff mt-8">
                <p className="zekano-about-founder-signature text-3xl italic font-serif text-brand-dark">A.A. Adekunle</p>
                <span aria-hidden className="zekano-about-founder-rule mt-1 block h-px w-40 bg-border" />
                <p className="zekano-about-founder-name mt-3 text-sm font-bold text-brand-green">A.A. Adekunle</p>
                <p className="zekano-about-founder-role text-sm text-brand-dark">Founder &amp; CEO</p>
                <p className="zekano-about-founder-company text-sm text-brand-dark">ZEKANO Mobility Limited</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
