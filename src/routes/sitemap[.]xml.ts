import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/company", priority: "0.8" },
          { path: "/our-story", priority: "0.8" },
          { path: "/leadership", priority: "0.8" },
          { path: "/what-we-do", priority: "0.8" },
          { path: "/our-systems", priority: "0.8" },
          { path: "/why-zekano", priority: "0.8" },
          { path: "/zeklease", priority: "0.8" },
          { path: "/zekmanage", priority: "0.8" },
          { path: "/resources", priority: "0.7" },
          { path: "/contact", priority: "0.7" },
        ];
        const urls = entries.map((e) =>
          `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
