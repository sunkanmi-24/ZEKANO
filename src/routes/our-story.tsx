import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/routes/company";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — ZEKANO" },
      {
        name: "description",
        content:
          "How ZEKANO began and why we build structured mobility systems that create dependable income and professionally managed vehicles.",
      },
      { property: "og:title", content: "Our Story — ZEKANO" },
      {
        property: "og:description",
        content: "How ZEKANO began and why we build structured mobility systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-story" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/our-story" }],
  }),
  component: () => (
    <PlaceholderPage
      title="Our Story"
      subtitle="From a simple idea to a structured mobility ecosystem built on integrity and accountability."
    />
  ),
});
