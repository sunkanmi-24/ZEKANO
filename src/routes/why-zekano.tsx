import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "./company";

export const Route = createFileRoute("/why-zekano")({
  head: () => ({
    meta: [
      { title: "Why ZEKANO" },
      { name: "description", content: "Structure, professionalism, technology and accountability — why ZEKANO." },
      { property: "og:title", content: "Why ZEKANO" },
      { property: "og:url", content: "/why-zekano" },
    ],
    links: [{ rel: "canonical", href: "/why-zekano" }],
  }),
  component: () => <PlaceholderPage title="Why ZEKANO" subtitle="Structure. Professionalism. Technology. Accountability." />,
});
