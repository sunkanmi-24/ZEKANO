import siteImages from "@/data/site-images.json";

type ImageMap = Record<string, Record<string, string> | string>;

/**
 * Resolve an image by page + position from src/data/site-images.json.
 * If the JSON entry is empty/missing, the bundled fallback is used.
 *
 * Example: getImage("home", "hero", heroCarsFallback)
 */
export function getImage(page: string, position: string, fallback: string): string {
  const pageEntry = (siteImages as ImageMap)[page];
  if (pageEntry && typeof pageEntry === "object") {
    const url = pageEntry[position];
    if (typeof url === "string" && url.trim().length > 0) return url.trim();
  }
  return fallback;
}
