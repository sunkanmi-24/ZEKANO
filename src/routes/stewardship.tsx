import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Settings, Sprout, Briefcase, Users, Award, HelpCircle } from "lucide-react";
import { PhilosophyGrid, PhilosophyLayout } from "@/components/site/PhilosophyPage";

export const Route = createFileRoute("/stewardship")({
  head: () => ({
    meta: [
      { title: "Stewardship — Leadership Gives Authority, Stewardship Gives Responsibility | ZEKANO" },
      {
        name: "description",
        content:
          "ZEKANO stewards trust, systems, opportunity, assets, people, and reputation — protecting and improving everything entrusted to us.",
      },
      { property: "og:title", content: "Stewardship — Leadership gives authority. Stewardship gives responsibility." },
      {
        property: "og:description",
        content: "What ZEKANO is a steward of, and the questions we ask before every significant decision.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/stewardship" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/stewardship" }],
  }),
  component: StewardshipPage,
});

const stewardOf = [
  { icon: ShieldCheck, title: "Trust", body: "Earned through consistency and protected through integrity." },
  {
    icon: Settings,
    title: "Systems",
    body: "Every system we inherit should become stronger because we managed it.",
  },
  {
    icon: Sprout,
    title: "Opportunity",
    body: "Every opportunity entrusted to us should create value for more than one person.",
  },
  { icon: Briefcase, title: "Assets", body: "We care for every asset entrusted to us as if it were our own." },
  { icon: Users, title: "People", body: "We invest in people because institutions are built by them." },
  {
    icon: Award,
    title: "Reputation",
    body: "Our reputation is built one decision at a time and protected by all.",
  },
];

const questions = [
  "Does this protect trust?",
  "Does this improve the system?",
  "Does this expand opportunity?",
  "Would I make the same decision if it were my own?",
  "Will those who come after me inherit something better?",
];

function StewardshipPage() {
  return (
    <PhilosophyLayout
      page="stewardship"
      current="Stewardship"
      title="Stewardship"
      tagline={["Leadership gives authority.", "Stewardship gives responsibility."]}
      body={[
        "We are called to faithfully protect, improve, and preserve everything entrusted to us for the benefit of those we serve today and those who will come after us.",
      ]}
    >
      <section className="px-5 pt-8 sm:px-8 lg:px-12">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
          <h2 className="text-lg font-bold text-brand-dark sm:text-xl">What We Are Stewards Of</h2>
          <div className="mt-6">
            <PhilosophyGrid items={stewardOf} columns={6} />
          </div>
        </div>
      </section>

      <section className="px-5 pt-6 sm:px-8 lg:px-12">
        <div className="rounded-2xl bg-brand-dark p-5 sm:p-7">
          <h2 className="text-lg font-bold text-white sm:text-xl">The Steward's Questions</h2>
          <p className="mt-1 text-sm text-white/70">Before making any significant decision, we ask:</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {questions.map((q) => (
              <li
                key={q}
                className="flex flex-col items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 sm:items-center sm:text-center"
              >
                <HelpCircle className="h-5 w-5 shrink-0 text-brand-accent" />
                <span className="text-sm font-semibold leading-snug text-white">{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PhilosophyLayout>
  );
}
