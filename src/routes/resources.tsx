import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "./company";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — ZEKANO" },
      { name: "description", content: "Guides, insights, news and FAQs from ZEKANO." },
      { property: "og:title", content: "Resources — ZEKANO" },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: () => <PlaceholderPage title="Resources" subtitle="Guides, insights, news and FAQs." />,
});
