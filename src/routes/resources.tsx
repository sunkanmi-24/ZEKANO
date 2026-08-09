import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, MailOpen, Search, ChevronDown } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import resourcesHero from "@/assets/resources-hero.jpg";
import heroCars from "@/assets/hero-cars.jpg.asset.json";
import driver from "@/assets/driver.png.asset.json";
import cityRoad from "@/assets/story-city-road.jpg";
import philosophyHero from "@/assets/philosophy-hero.jpg";
import holdingPhone from "@/assets/holdingphone.png.asset.json";
import { getImage } from "@/lib/site-images";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Knowledge, Insights, Better Decisions | ZEKANO" },
      {
        name: "description",
        content:
          "Search, filter and sort guides, insights, news, downloads and videos from ZEKANO to keep you informed about mobility, our systems, and industry trends.",
      },
      { property: "og:title", content: "Resources — Knowledge. Insights. Better Decisions." },
      {
        property: "og:description",
        content: "Search, filter and sort helpful guides, insights and updates on structured mobility from ZEKANO.",
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
const sortOptions = ["Newest", "A–Z", "Z–A"] as const;

type Item = {
  tag: string;
  category: (typeof tabs)[number];
  title: string;
  body: string;
  cta: string;
  image: string;
  order: number;
};

const items: Item[] = [
  {
    tag: "GUIDE",
    category: "Guides",
    title: "A Guide for Vehicle Owners",
    body: "Everything you need to know about partnering with ZEKANO and maximizing your vehicle's income.",
    cta: "Read More",
    image: getImage("resources", "card-1", heroCars.url),
    order: 1,
  },
  {
    tag: "GUIDE",
    category: "Guides",
    title: "A Guide for Mobility Professionals",
    body: "Learn how our systems support drivers to build sustainable income and grow.",
    cta: "Read More",
    image: getImage("resources", "card-2", driver.url),
    order: 2,
  },
  {
    tag: "INSIGHT",
    category: "Insights",
    title: "The Future of Structured Mobility in Africa",
    body: "Key trends shaping the mobility industry and how structured solutions drive the future.",
    cta: "Read More",
    image: getImage("resources", "card-3", cityRoad),
    order: 3,
  },
  {
    tag: "DOWNLOAD",
    category: "Downloads",
    title: "Operational Standards Overview",
    body: "Download our operational standards summary.",
    cta: "Download PDF",
    image: getImage("resources", "card-4", philosophyHero),
    order: 4,
  },
  {
    tag: "NEWS",
    category: "News",
    title: "ZEKANO Milestones & Updates",
    body: "Stay up to date with our latest news and milestones.",
    cta: "Read More",
    image: getImage("resources", "card-5", holdingPhone.url),
    order: 5,
  },
];

function ResourcesPage() {
  const [active, setActive] = useState<(typeof tabs)[number]>("All Resources");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<(typeof sortOptions)[number]>("Newest");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = items.filter((i) => {
      const inCategory = active === "All Resources" || i.category === active;
      const inQuery =
        q === "" ||
        i.title.toLowerCase().includes(q) ||
        i.body.toLowerCase().includes(q) ||
        i.tag.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
    if (sort === "A–Z") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === "Z–A") list = [...list].sort((a, b) => b.title.localeCompare(a.title));
    else list = [...list].sort((a, b) => a.order - b.order);
    return list;
  }, [active, query, sort]);

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
                src={getImage("resources", "hero", resourcesHero)}
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

        {/* Search & Sort */}
        <section className="zekano-resources-controls px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="zekano-resources-search relative w-full sm:max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search resources by keyword…"
                aria-label="Search resources"
                className="w-full rounded-md border border-border bg-white py-2.5 pl-10 pr-4 text-base text-brand-dark placeholder:text-muted-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30"
              />
            </div>
            <div className="zekano-resources-sort relative w-full sm:w-auto">
              <label htmlFor="sort-select" className="sr-only">Sort resources</label>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <select
                id="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value as (typeof sortOptions)[number])}
                aria-label="Sort resources"
                className="w-full appearance-none rounded-md border border-border bg-white py-2.5 pl-4 pr-10 text-base font-semibold text-brand-dark focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30 sm:w-44"
              >
                {sortOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="zekano-resources-list px-5 py-2 sm:px-8 lg:px-12 lg:py-6">
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
              No resources found{query.trim() ? ` for "${query.trim()}"` : ` in ${active.toLowerCase()}`}. Try a different keyword or filter.
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
