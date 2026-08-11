# Deploy ZEKANO on Netlify

## Goal
Self-host the existing TanStack Start (Vite + Nitro) app on Netlify so it runs via Netlify Functions with SSR, instead of the default Cloudflare target the Lovable build uses.

## Background (verified)
- The app builds with `vite build`, which runs Nitro. Today Nitro defaults to the `cloudflare-module` preset (forced during Lovable's own builds).
- `@lovable.dev/vite-tanstack-config` exposes a `nitro` option that lets us hard-pin a different preset **outside** the Lovable build (e.g. in CI / Netlify). Confirmed in `node_modules/@lovable.dev/vite-tanstack-config/dist/index.d.ts`: `nitro?: { preset?: string; ... }`.
- The docs note for that option: "zero-config target auto-detection (NITRO_PRESET, Vercel/Netlify/Cloudflare Pages) still wins, so a self-deploy auto-targets its own platform."
- Server code (`src/server.ts`, `src/start.ts`, the sitemap route) uses only Web-standard `Request`/`Response` — no Cloudflare-only APIs and no Node-only packages. So the Netlify **Node** serverless preset is safe and the most compatible.
- Project uses `bun.lock`; no `netlify.toml` exists yet.

## Plan

### 1. Pin the Nitro preset to `netlify` — `vite.config.ts`
Add `nitro: { preset: "netlify" }` to the `defineConfig` options (alongside the existing `tanstackStart.server.entry`):

```ts
export default defineConfig({
  tanstackStart: { server: { entry: "server" } },
  nitro: { preset: "netlify" },
});
```

This pins the target so local/CI builds emit Netlify's expected output layout (`.output/public` + the internal serverless function). The Lovable preview/publish flow is unaffected because it forces Cloudflare internally regardless.

### 2. Add `netlify.toml` at project root
```toml
[build]
  command = "bun run build"
  publish = ".output/public"

[build.environment]
  NODE_VERSION = "20"
```
- `publish = ".output/public"` — where the Nitro netlify preset writes static/prerendered assets.
- Nitro generates the serverless function under `.netlify/functions-internal/`, which Netlify auto-detects, so no explicit `functions` directory or manual `/*` redirect is needed. (We avoid `[[redirects]]` because this is SSR — every route is rendered by the function, not a SPA fallback.)
- If `bun` isn't available in the user's Netlify environment, they can swap the command to `npm run build` (Netlify reads `bun.lock` and installs bun automatically when present).

### 3. Verify with a local production build
Run `bun run build` in the sandbox to confirm:
- Build succeeds.
- `.output/public/` is created with static assets.
- The Netlify function is generated (under `.netlify/` or `.output/server/`).
This catches any preset mismatch before the user wires up Netlify.

### 4. Deploy instructions for the user (no code)
After the files are in place:
1. Push the repo to GitHub (or connect it to Netlify).
2. In Netlify → **Add new site → Import an existing project** → pick the repo.
3. Build command: `bun run build`; Publish directory: `.output/public` (Netlify will read `netlify.toml` and prefill these).
4. Deploy. Netlify auto-detects the Nitro serverless function for SSR.

## Notes / choices
- **Preset:** `netlify` (Node serverless) chosen over `netlify-edge` (Deno) for maximum compatibility and because it's the most battle-tested Nitro target. The app already avoids Node-incompatible packages, so edge would also work — can switch later by changing the preset string.
- **No app code changes** are required; this is build/deploy config only. The Lovable-hosted preview and "Publish" button continue to work as before.
- SEO/sitemap routes (`sitemap.xml`, `robots.txt`) are server routes and keep working under SSR on Netlify.
