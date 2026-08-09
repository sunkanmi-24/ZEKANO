import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, Sprout, Users, Cpu, ShieldCheck, Star, Home, Hand } from "lucide-react";
import { GuidingPurpose, PhilosophyGrid, PhilosophyLayout } from "@/components/site/PhilosophyPage";

export const Route = createFileRoute("/our-philosophy")({
  head: () => ({
    meta: [
      { title: "Our Philosophy — The Beliefs That Shape Everything | ZEKANO" },
      {
        name: "description",
        content:
          "ZEKANO's philosophy defines how we think, decide, and act — structure creates trust, every asset has potential, and purpose comes before profit.",
      },
      { property: "og:title", content: "Our Philosophy — The beliefs that shape everything we do" },
      {
        property: "og:description",
        content: "The beliefs that guide ZEKANO's systems, culture, and every decision we make.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-philosophy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/our-philosophy" }],
  }),
  component: OurPhilosophyPage,
});

const beliefs = [
  {
    icon: BarChart3,
    title: "Structure Creates Trust",
    body: "Sustainable businesses are built on systems, not improvisation.",
  },
  {
    icon: Sprout,
    title: "Every Asset Has Potential",
    body: "Every asset, system, and resource can create lasting value when responsibly stewarded.",
  },
  {
    icon: Users,
    title: "People Deserve Trusted Systems",
    body: "Communities deserve order, trust, and opportunity, not uncertainty and broken systems.",
  },
  {
    icon: Cpu,
    title: "Technology Strengthens Relationships",
    body: "We use technology to improve transparency, accountability, and efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline Builds Long-Term Value",
    body: "We create long-term value through discipline, not shortcuts.",
  },
  {
    icon: Star,
    title: "We Measure Impact, Not Just Growth",
    body: "Our success is measured by the lives we positively impact, not just numbers.",
  },
  {
    icon: Home,
    title: "Opportunity Through Responsible Stewardship",
    body: "We create opportunity by stewarding assets, people, and systems responsibly.",
  },
  {
    icon: Hand,
    title: "Purpose Over Profit",
    body: "Money is an outcome of doing the right things consistently and faithfully.",
  },
];

function OurPhilosophyPage() {
  return (
    <PhilosophyLayout
      current="Our Philosophy"
      title="Our Philosophy"
      tagline={["The beliefs that shape everything we do."]}
      body={[
        "Our philosophy defines how we think, decide, and act. These beliefs guide our systems, shape our culture, and influence every decision we make.",
      ]}
    >
      <GuidingPurpose />
      <section className="px-5 pt-8 sm:px-8 lg:px-12">
        <PhilosophyGrid items={beliefs} columns={4} />
      </section>
    </PhilosophyLayout>
  );
}
