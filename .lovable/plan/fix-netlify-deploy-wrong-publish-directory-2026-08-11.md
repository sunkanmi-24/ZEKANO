# Fix Netlify deploy: wrong publish directory

## What went wrong
Netlify failed with `Deploy directory '.output/public' does not exist`. The build itself ran; only the publish path was wrong.

Verified in the installed Nitro (3.0.260603-beta) Netlify preset:
- static/prerendered assets go to `dist/` (rootDir/dist), not `.output/public`
- the SSR serverless function goes to `.netlify/functions-internal/server/`, which Netlify auto-detects

`.output/public` is the Node preset layout, not the Netlify one.

## Change

### `netlify.toml`
Set the publish directory to `dist`:

```toml
[build]
  command = "bun run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

No other changes needed — `vite.config.ts` already pins `nitro: { preset: "netlify" }`, and Netlify's own zero-config detection also resolves to the same preset.

## Notes
- The comment block at the top of `netlify.toml` gets corrected to describe the real layout (`dist` + `.netlify/functions-internal`).
- No redirects block: SSR routes are served by the auto-detected function; the preset writes its own `_headers`/`_redirects`.
- Lovable preview/Publish is unaffected (it forces the Cloudflare layout internally).
- Verification will be a local production build with the Netlify preset forced, checking that `dist/` and `.netlify/functions-internal/server/server.mjs` are produced.
