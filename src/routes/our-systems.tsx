import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "./company";

export const Route = createFileRoute("/our-systems")({
  head: () => ({
    meta: [
      { title: "Our Systems — ZEKANO" },
      { name: "description", content: "Explore ZEKMANAGE and ZEKLEASE — the systems powering structured mobility." },
      { property: "og:title", content: "Our Systems — ZEKANO" },
      { property: "og:url", content: "/our-systems" },
    ],
    links: [{ rel: "canonical", href: "/our-systems" }],
  }),
  component: () => <PlaceholderPage title="Our Systems" subtitle="ZEKMANAGE and ZEKLEASE — connected, structured, accountable." />,
});
