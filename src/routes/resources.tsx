import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MailOpen } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import resourcesHero from "@/assets/resources-hero.jpg";
import heroCars from "@/assets/hero-cars.jpg.asset.json";
import driver from "@/assets/driver.png.asset.json";
import cityRoad from "@/assets/story-city-road.jpg";
import philosophyHero from "@/assets/philosophy-hero.jpg";
import holdingPhone from "@/assets/holdingphone.png.asset.json";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Knowledge, Insights, Better Decisions | ZEKANO" },
      {
        name: "description",
        content:
          "Guides, insights, news, downloads and videos from ZEKANO to keep you informed about mobility, our systems, and industry trends.",
      },
      { property: "og:title", content: "Resources — Knowledge. Insights. Better Decisions." },
      {
        property: "og:description",
        content: "Helpful guides, insights and updates on structured mobility from ZEKANO.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/resources" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const tabs = ["All Resources", "Guides", "Insights", "News", "Downloads", "Videos"] as const;

type Item = {
  tag: string;
  category: (typeof tabs)[number];
  title: string;
  body: string;
  cta: string;
  image: string;
};

const items: Item[] = [
  {
    tag: "GUIDE",
    category: "Guides",
    title: "A Guide for Vehicle Owners",
    body: "Everything you need to know about partnering with ZEKANO and maximizing your vehicle's income.",
    cta: "Read More",
    image: heroCars.url,
  },
  {
    tag: "GUIDE",
    category: "Guides",
    title: "A Guide for Mobility Professionals",
    body: "Learn how our systems support drivers to build sustainable income and grow.",
    cta: "Read More",
    image: driver.url,
  },
  {
    tag: "INSIGHT",
    category: "Insights",
    title: "The Future of Structured Mobility in Africa",
    body: "Key trends shaping the mobility industry and how structured solutions drive the future.",
    cta: "Read More",
    image: cityRoad,
  },
  {
    tag: "DOWNLOAD",
    category: "Downloads",
    title: "Operational Standards Overview",
    body: "Download our operational standards summary.",
    cta: "Download PDF",
    image: philosophyHero,
  },
  {
    tag: "NEWS",
    category: "News",
    title: "ZEKANO Milestones & Updates",
    body: "Stay up to date with our latest news and milestones.",
    cta: "Read More",
    image: holdingPhone.url,
  },
];

function ResourcesPage() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All Resources");
  const visible = active === "All Resources" ? items : items.filter((i) => i.category === active);

  return (
    <div className="zekano-resources min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="zekano-resources-hero relative border-b border-border bg-white">
          <div className="grid lg:grid-cols-2">
            <div className="zekano-resources-hero-content px-5 py-12 sm:px-8 lg:px-12 lg:py-20 flex flex-col justify-center">
              <p className="text-sm font-bold tracking-widest text-brand-green">RESOURCES</p>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-brand-dark">
                Knowledge. Insights.{" "}
                <span className="text-brand-green">Better Decisions.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base sm:text-lg text-muted-foreground">
                Access helpful resources, guides, and updates to keep you informed about mobility,
                our systems, and industry trends.
              </p>
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => setActive("All Resources")}
                  className="zekano-resources-hero-btn inline-flex items-center rounded-md bg-brand-green px-7 py-3.5 text-base font-semibold text-white hover:bg-brand-green-dark transition-colors"
                >
                  All Resources
                </button>
              </div>
            </div>
            <div className="zekano-resources-hero-image relative min-h-[240px] lg:min-h-[420px]">
              <img
                src={resourcesHero}
                alt="ZEKANO insights dashboard on a laptop beside a branded mug"
                width={1280}
                height={960}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="zekano-resources-tabs border-b border-border px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 py-4 lg:justify-center">
            {tabs.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={`zekano-resources-tab pb-2 text-base font-semibold transition-colors ${
                  active === t
                    ? "text-brand-green border-b-2 border-brand-green"
                    : "text-brand-dark hover:text-brand-green border-b-2 border-transparent"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </section>

        {/* Cards */}
        <section className="zekano-resources-list px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
          <div className="grid gap-5 lg:grid-cols-2">
            {visible.map((item) => (
              <article
                key={item.title}
                className="zekano-resource-card flex flex-col gap-4 rounded-xl border border-border bg-card p-3 shadow-sm sm:flex-row sm:items-start"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="zekano-resource-card-img h-44 w-full shrink-0 rounded-lg object-cover sm:h-40 sm:w-56"
                />
                <div className="flex flex-1 flex-col p-1 sm:py-2">
                  <span className="zekano-resource-card-tag inline-flex w-fit rounded-md border border-brand-green px-2.5 py-1 text-xs font-bold tracking-wide text-brand-green">
                    {item.tag}
                  </span>
                  <h2 className="mt-3 text-xl font-bold text-brand-dark">{item.title}</h2>
                  <p className="mt-2 text-base text-muted-foreground">{item.body}</p>
                  <a
                    href="#"
                    className="zekano-resource-card-link mt-3 inline-flex items-center gap-1.5 text-base font-semibold text-brand-green hover:text-brand-green-dark"
                  >
                    {item.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          {visible.length === 0 && (
            <p className="py-10 text-center text-muted-foreground">
              New {active.toLowerCase()} are coming soon.
            </p>
          )}
        </section>

        {/* Newsletter */}
        <section className="zekano-resources-newsletter px-5 pb-14 sm:px-8 lg:px-12">
          <div className="rounded-2xl bg-secondary p-6 sm:p-10">
            <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-5">
                <MailOpen className="h-12 w-12 shrink-0 text-brand-green" strokeWidth={1.5} />
                <div>
                  <h2 className="text-xl font-bold text-brand-dark sm:text-2xl">
                    Want the latest insights delivered to you?
                  </h2>
                  <p className="mt-1 text-base text-muted-foreground">
                    Subscribe to our newsletter and never miss an update.
                  </p>
                </div>
              </div>
              <a
                href="mailto:hello@zekano.co?subject=Newsletter%20Subscription"
                className="zekano-newsletter-btn inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-green px-8 py-3.5 text-base font-semibold text-white hover:bg-brand-green-dark transition-colors lg:w-auto"
              >
                Subscribe Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
