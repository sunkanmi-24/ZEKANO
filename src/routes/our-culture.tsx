import { createFileRoute } from "@tanstack/react-router";
import { Settings, ClipboardCheck, ShieldCheck, Sparkles, Clock, Users, Search, ArrowUpRight } from "lucide-react";
import { PhilosophyGrid, PhilosophyLayout } from "@/components/site/PhilosophyPage";

export const Route = createFileRoute("/our-culture")({
  head: () => ({
    meta: [
      { title: "Our Culture — The Invisible System Behind Every Action | ZEKANO" },
      {
        name: "description",
        content:
          "ZEKANO's culture turns philosophy into daily practice: we build systems, own problems completely, protect trust, and leave things better than we found them.",
      },
      { property: "og:title", content: "Our Culture — The invisible system that shapes every visible action" },
      {
        property: "og:description",
        content: "How ZEKANO thinks, decides, and acts every day.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-culture" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/our-culture" }],
  }),
  component: OurCulturePage,
});

const culture = [
  {
    icon: Settings,
    title: "We Build Systems, Not Dependence",
    body: "We build systems that enable people to deliver exceptional results consistently.",
  },
  {
    icon: ClipboardCheck,
    title: "We Own Problems Completely",
    body: "We take full responsibility and solve problems rather than pass them around.",
  },
  {
    icon: ShieldCheck,
    title: "We Protect Trust",
    body: "Trust is earned through thousands of consistent actions and protected with integrity.",
  },
  {
    icon: Sparkles,
    title: "We Improve Every Day",
    body: "Perfection isn't the goal. Continuous improvement is our daily standard.",
  },
  {
    icon: Clock,
    title: "We Think Long-Term",
    body: "We reject short-term wins that compromise long-term trust and value.",
  },
  {
    icon: Users,
    title: "We Respect Every Person",
    body: "We treat every person with dignity, honesty, and fairness.",
  },
  {
    icon: Search,
    title: "We Learn Before We Judge",
    body: "We seek to understand first, learn, and then improve the system.",
  },
  {
    icon: ArrowUpRight,
    title: "We Leave Things Better",
    body: "We aim to leave every system, relationship, and asset better than we found it.",
  },
];

function OurCulturePage() {
  return (
    <PhilosophyLayout
      page="our-culture"
      current="Our Culture"
      title="Our Culture"
      tagline={["The invisible system that shapes", "every visible action."]}
      body={[
        "Our culture is how we think, decide, and act every day. It turns our philosophy and principles into reality.",
      ]}
    >
      <section className="px-5 pt-8 sm:px-8 lg:px-12">
        <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-6">
          <PhilosophyGrid items={culture} columns={4} />
        </div>
      </section>
    </PhilosophyLayout>
  );
}
