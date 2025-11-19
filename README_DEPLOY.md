Deployment & optimization notes for cPanel / shared Apache hosting

What I changed
- Added `scripts/optimize-images.js` — optimizes images in `build/static/media` and writes .webp copies.
- Added `scripts/precompress.js` — generates `.gz` and `.br` precompressed files for static assets.
- Added `build/.htaccess` — SPA rewrite, caching, and basic security headers suitable for cPanel.
- Added npm scripts: `optimize-images`, `precompress`, and `prepare-deploy` (runs both).

Quick deploy steps (recommended)
1. Run a production build if you haven't:

```powershell
npm run build
```

2. Install the small optimization deps and run the helpers (first time only):

```powershell
npm install --no-audit --no-fund
npm run prepare-deploy
```

3. Upload the contents of the `build/` folder into your cPanel `public_html` (or the target domain folder). Ensure `index.html` and `.htaccess` are placed at the site root.

Notes & recommendations for cPanel
- If your host already supports Brotli and gzip at the server level, precompressed files are optional; they do no harm and allow the server to serve them directly if configured.
- Verify `mod_rewrite`, `mod_headers`, and `mod_expires` are enabled on your host — most cPanel providers enable them by default.
- For best results, enable "Serve precompressed files" or add rules in `.htaccess` to prefer `.br`/`.gz` when available (some hosts already handle this). I included `Vary: Accept-Encoding` header so proxies cache correctly.

Tests to run after deployment
- Lighthouse (Chrome DevTools) — check Performance, Best Practices, Accessibility.
- curl checks to confirm gzip/brotli and cache headers:

```powershell
curl -I -H "Accept-Encoding: br" https://yourdomain.com/static/js/main.45fee321.js
curl -I https://yourdomain.com/index.html
```

- Open a sub-route (e.g., /about) to ensure SPA rewrite serves `index.html` and the app loads.

Further improvements (optional)
- Move extremely large hero images to a CDN or lazy-load them.
- Run an audit of images and manually choose higher or lower quality for critical images.
- Consider using an image CDN that serves automated WebP/AVIF conversions and resizing on-the-fly.
