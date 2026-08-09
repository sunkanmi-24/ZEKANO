import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Handshake,
  Settings,
  BarChart3,
  Users,
  Sparkles,
  Clock,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";
import { GuidingPurpose, PhilosophyGrid, PhilosophyLayout } from "@/components/site/PhilosophyPage";

export const Route = createFileRoute("/our-principles")({
  head: () => ({
    meta: [
      { title: "Our Principles — The Architecture of Enduring Institutions | ZEKANO" },
      {
        name: "description",
        content:
          "Nine principles guide ZEKANO's decisions, culture, and systems — from philosophy before geography to stewardship and continuous learning.",
      },
      { property: "og:title", content: "Our Principles — The architecture of enduring institutions" },
      {
        property: "og:description",
        content: "The nine principles that guide how ZEKANO decides, builds, and serves.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-principles" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/our-principles" }],
  }),
  component: OurPrinciplesPage,
});

const principles = [
  {
    number: "01",
    icon: MapPin,
    title: "Philosophy Before Geography",
    body: "Our purpose is defined by the problems we solve, not the places we operate.",
  },
  {
    number: "02",
    icon: Handshake,
    title: "Trust Before Growth",
    body: "Growth without trust is unsustainable. Every decision must strengthen trust.",
  },
  {
    number: "03",
    icon: Settings,
    title: "System Over Shortcuts",
    body: "We build disciplined systems that produce consistent results, not temporary fixes.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Opportunity Through Structure",
    body: "Structure removes barriers and creates opportunity for more people.",
  },
  {
    number: "05",
    icon: Users,
    title: "People, Process, Then Technology",
    body: "We solve human problems first, support them with processes, and strengthen them with technology.",
  },
  {
    number: "06",
    icon: Sparkles,
    title: "Excellence Is Built Daily",
    body: "Consistent improvement in small things creates extraordinary outcomes.",
  },
  {
    number: "07",
    icon: Clock,
    title: "Long-Term Thinking",
    body: "We make decisions that strengthen ZEKANO for decades, not just for today.",
  },
  {
    number: "08",
    icon: ShieldCheck,
    title: "Stewardship",
    body: "We treat everything entrusted to us as our own and leave it better than we found it.",
  },
  {
    number: "09",
    icon: GraduationCap,
    title: "Continuous Learning",
    body: "Every challenge is an opportunity to learn, improve, and evolve.",
  },
];

function OurPrinciplesPage() {
  return (
    <PhilosophyLayout
      current="Our Principles"
      title="Our Principles"
      tagline={["Principles are the architecture of", "enduring institutions."]}
      body={[
        "Our principles guide our decisions, shape our culture, and influence our systems. They define how we serve the communities and stakeholders who place their trust in us.",
      ]}
    >
      <GuidingPurpose />
      <section className="px-5 pt-8 sm:px-8 lg:px-12">
        <PhilosophyGrid items={principles} columns={3} numbered />
      </section>
    </PhilosophyLayout>
  );
}
