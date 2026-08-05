import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Search, Eye, Zap, Users } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ZekanoLogo } from "@/components/site/ZekanoLogo";
import cityRoad from "@/assets/story-city-road.jpg";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Built From a Real Problem | ZEKANO" },
      {
        name: "description",
        content:
          "ZEKANO was born out of a simple observation — mobility assets are underutilized and operations unstructured. Read the story behind our structured mobility systems.",
      },
      { property: "og:title", content: "Our Story — Built From a Real Problem. Driven by a Bigger Purpose." },
      {
        property: "og:description",
        content: "How ZEKANO began and why we build structured mobility systems across Africa.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-story" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/our-story" }],
  }),
  component: OurStoryPage,
});

const journey = [
  {
    icon: Search,
    title: "The Insight",
    body: "We identified the gaps in the mobility industry—fragmented operations, lack of transparency, and inefficient management of assets.",
  },
  {
    icon: Eye,
    title: "The Vision",
    body: "We envisioned a future where mobility assets are professionally managed, drivers are empowered, and communities benefit from reliable mobility.",
  },
  {
    icon: Zap,
    title: "The Action",
    body: "We designed ZEKMANAGE to manage assets with structure and accountability, and ZEKLEASE to connect those assets with qualified drivers.",
  },
  {
    icon: Users,
    title: "The Impact",
    body: "Today, we are building a trusted mobility ecosystem that creates sustainable value for vehicle owners, drivers, and communities across Africa.",
  },
];

function OurStoryPage() {
  return (
    <div className="zekano-our-story min-h-screen bg-background">
      <Header />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="zekano-story-breadcrumbs px-5 pt-6 sm:px-8 lg:px-12">
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
          <li className="text-brand-dark">Our Story</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="zekano-story-hero px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-brand-green sm:text-sm">OUR STORY</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight text-brand-dark sm:text-4xl lg:text-[44px]">
              Built From a Real Problem.
              <br />
              <span className="text-brand-green">Driven by a Bigger Purpose.</span>
            </h1>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                ZEKANO was born out of a simple observation—mobility assets are underutilized, operations are
                unstructured, and opportunities are lost because systems don't work for the people they should.
              </p>
              <p>
                We saw vehicle owners struggling with unpredictable returns, drivers struggling to access reliable
                vehicles, and communities missing out on the full potential of mobility. We knew there had to be a
                better way.
              </p>
              <p className="font-bold text-brand-dark">So we decided to build it.</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={cityRoad}
              alt="Highway leading into a modern city skyline"
              width={1280}
              height={1024}
              className="h-56 w-full object-cover sm:h-72 lg:h-[340px]"
            />
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="zekano-story-journey px-5 pb-12 sm:px-8 lg:px-12">
        <div className="rounded-2xl bg-muted/50 p-6 sm:p-8 lg:p-12">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-green sm:text-sm">OUR JOURNEY</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
            <ol className="relative space-y-8">
              <span
                aria-hidden
                className="absolute left-[19px] top-3 hidden h-[calc(100%-2rem)] border-l border-dashed border-border sm:block"
              />
              {journey.map((step) => (
                <li key={step.title} className="relative flex gap-4">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-dark">
                    <step.icon className="h-5 w-5 text-brand-green" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-base font-bold text-brand-dark sm:text-lg">{step.title}</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <aside className="zekano-story-card self-start rounded-2xl border border-border bg-background p-6 sm:p-8">
              <div className="w-[110px]"><ZekanoLogo /></div>
              <h2 className="mt-6 text-xl font-bold text-brand-dark sm:text-2xl">More Than a Company</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                ZEKANO is not just about mobility. We are building systems that create trust, opportunity, and lasting
                impact.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Our story is still being written—and the best chapters are ahead of us.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="zekano-story-promise px-5 pb-16 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start gap-6 rounded-2xl bg-brand-dark p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-10 lg:p-10">
          <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-background sm:flex">
            <div className="w-10"><ZekanoLogo /></div>
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold text-primary-foreground sm:text-xl">Our Promise</h2>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              We will continue to innovate, operate with integrity, and build systems that empower people and transform
              mobility across Africa.
            </p>
          </div>
          <Link
            to="/company"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-brand-green px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Learn More About Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
