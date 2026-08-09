import { createFileRoute } from "@tanstack/react-router";
import { Heart, Settings, Eye, Briefcase, Sparkles, BarChart3, Handshake } from "lucide-react";
import { PhilosophyGrid, PhilosophyLayout } from "@/components/site/PhilosophyPage";

export const Route = createFileRoute("/our-commitment")({
  head: () => ({
    meta: [
      { title: "Our Commitment — A Promise Consistently Kept | ZEKANO" },
      {
        name: "description",
        content:
          "ZEKANO promises trust, order, transparency, stewardship, improvement, and impact in every system we build and every relationship we steward.",
      },
      { property: "og:title", content: "Our Commitment — A promise is only meaningful when it is consistently kept" },
      {
        property: "og:description",
        content: "The six promises behind every ZEKANO system, decision, and relationship.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-commitment" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/our-commitment" }],
  }),
  component: OurCommitmentPage,
});

const promises = [
  { icon: Heart, title: "We Promise Trust", body: "We earn trust through honesty, consistency, and accountability." },
  {
    icon: Settings,
    title: "We Promise Order",
    body: "We create clarity through strong systems, thoughtful processes, and responsible governance.",
  },
  {
    icon: Eye,
    title: "We Promise Transparency",
    body: "We communicate openly and ensure everyone understands how our systems work.",
  },
  {
    icon: Briefcase,
    title: "We Promise Stewardship",
    body: "We care for every responsibility entrusted to us with professionalism and diligence.",
  },
  {
    icon: Sparkles,
    title: "We Promise Improvement",
    body: "We constantly refine our systems so tomorrow's experience is better than today's.",
  },
  {
    icon: BarChart3,
    title: "We Promise Impact",
    body: "We measure our success by the positive impact we have on the lives and communities we serve.",
  },
];

function OurCommitmentPage() {
  return (
    <PhilosophyLayout
      current="Our Commitment"
      title="Our Commitment"
      tagline={["A promise is only meaningful", "when it is consistently kept."]}
      body={[
        "We promise to bring order, trust, and opportunity to the communities we serve through every system we build, every decision we make, and every relationship we steward.",
      ]}
    >
      <section className="px-5 pt-8 sm:px-8 lg:px-12">
        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
          <PhilosophyGrid items={promises} columns={6} />
        </div>
      </section>

      <section className="px-5 pt-6 sm:px-8 lg:px-12">
        <div className="flex items-start gap-4 rounded-xl border border-brand-accent/25 bg-brand-accent/5 p-5 sm:p-7">
          <Handshake className="h-6 w-6 shrink-0 text-brand-accent" />
          <div className="min-w-0">
            <h2 className="text-base font-bold text-brand-dark sm:text-lg">Our Institutional Promise</h2>
            <p className="mt-1 text-sm italic leading-relaxed text-muted-foreground sm:text-base">
              We promise to bring order, trust, and opportunity to the communities we serve through every system we
              build, every decision we make, and every relationship we steward.
            </p>
          </div>
        </div>
      </section>
    </PhilosophyLayout>
  );
}
