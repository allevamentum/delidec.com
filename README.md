# delidec.com

Enterprise + investor site for **DELIDEC** — eight specialist AI executives analyze a
decision independently; a synthesis layer unifies every perspective into one clear,
cited, tamper-evident path. You make the final call.

Static single-page site, **no build step**. Hosted on GitHub Pages.

## Structure
- `index.html` — the whole site (inline CSS/JS; Three.js via CDN). Hash router:
  `#/board`, `#/research`, `#/security`, `#/company`, `#/privacy`, `#/terms`.
- `assets/research.js` — research publications data module (`window.DLD_RESEARCH`: 64 papers).
- `favicon.svg` — the `d|` mark.
- `CNAME` — custom domain (`delidec.com`).

## Local preview
```bash
python3 -m http.server 8099   # then open http://localhost:8099
```

## Configuration
- **Formspree** — set `FORMSPREE_ID` in `index.html` (placeholder until then; the access
  form falls back to a mailto so nothing is lost).
- **Plausible** — add the `delidec.com` site in your Plausible dashboard (cookieless;
  the script is already embedded).
- Emails referenced on the site: `boris@`, `privacy@`, `legal@`, `security@` `@delidec.com`.

© 2026 DELIDEC Corporation · Delaware, USA. Decision-support software — it produces
inputs; a human decides. Not legal, financial, or professional advice.
