import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "./company";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ZEKANO" },
      { name: "description", content: "Get in touch with ZEKANO to join the structured mobility ecosystem." },
      { property: "og:title", content: "Contact ZEKANO" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => <PlaceholderPage title="Contact Us" subtitle="Let's build structured mobility together." />,
});
