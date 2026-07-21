import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "./company";

export const Route = createFileRoute("/what-we-do")({
  head: () => ({
    meta: [
      { title: "What We Do — ZEKANO" },
      { name: "description", content: "How ZEKANO designs, operates, and improves structured mobility systems." },
      { property: "og:title", content: "What We Do — ZEKANO" },
      { property: "og:url", content: "/what-we-do" },
    ],
    links: [{ rel: "canonical", href: "/what-we-do" }],
  }),
  component: () => <PlaceholderPage title="What We Do" subtitle="Structured mobility systems designed for productive use." />,
});
