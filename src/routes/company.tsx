import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — ZEKANO" },
      { name: "description", content: "Learn about ZEKANO — our story, mission, leadership and careers in structured mobility." },
      { property: "og:title", content: "Company — ZEKANO" },
      { property: "og:description", content: "Our story, mission, leadership and careers." },
      { property: "og:url", content: "/company" },
    ],
    links: [{ rel: "canonical", href: "/company" }],
  }),
  component: () => <PlaceholderPage title="Company" subtitle="Our story, mission and leadership." />,
});

export function PlaceholderPage({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="zekano-placeholder-page min-h-screen bg-white flex flex-col">
      <Header />
      <main className="zekano-placeholder-main flex-1 mx-auto max-w-none w-full px-4 lg:px-8 py-20">
        <h1 className="zekano-placeholder-title text-4xl lg:text-5xl font-bold text-brand-dark">{title}</h1>
        <p className="zekano-placeholder-subtitle mt-4 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
        <p className="zekano-placeholder-note mt-8 text-sm text-muted-foreground">This page is coming soon.</p>
      </main>
      <Footer />
    </div>
  );
}
