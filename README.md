# Feven Abebe Bejiga — Portfolio

A personal AI/ML portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. All content is sourced from a single file, `src/lib/data.ts`, which mirrors the CV exactly — nothing on the site is invented.

## Design concept

The visual motif — a central node connected to orbiting client nodes, animated in the hero background — is a direct reference to the federated-learning work in the CV (a central aggregator training across distributed clients). It reappears quietly through the site (timeline dots, section markers) instead of generic decoration.

- **Palette:** graphite base (`#12151A`) with two accents — amber "signal" (`#F2A45C`) and teal "node" (`#59C9BC`) — rather than a stock dark-mode neon look.
- **Type:** Space Grotesk (display), Inter (body), IBM Plex Mono (labels/data/tags).

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## 2. Add your CV file (required)

The "Download CV" buttons link to `/cv.pdf`. Place your CV PDF at:

```
public/cv.pdf
```

The button will not work until this file exists — it was intentionally not faked.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 4. Deploy to Vercel

**Option A — Dashboard:**
1. Go to https://vercel.com/new
2. Import the GitHub repo you just pushed
3. Framework preset: Next.js (auto-detected)
4. Click **Deploy**

**Option B — CLI:**
```bash
npm i -g vercel
vercel
vercel --prod
```

No environment variables are required.

## 5. Things you may want to update yourself

These weren't in the CV, so they were deliberately left out or generic — fill in whichever you'd like:

- **Project repo/demo links** — only the main GitHub profile link was in the CV, so individual project cards don't link out. Add a `repo` or `demo` URL per project in `src/lib/data.ts` (`projects` array) once you have public links.
- **`cv.pdf`** — see step 2 above.
- **Site URL** — `siteUrl` in `src/app/layout.tsx` is a placeholder (`https://feven-abebe.vercel.app`); update it to your real deployed domain once you have one, for correct Open Graph metadata.
- **OG image** — no custom social-preview image was created; add one at `public/og.png` and reference it in `layout.tsx` if you'd like link previews to show an image.

## Project structure

```
src/
  app/
    layout.tsx      — fonts, metadata, root shell
    page.tsx         — assembles all sections
    globals.css
  components/        — one component per section
  lib/
    data.ts           — single source of truth for all CV content
public/
  favicon.svg
  robots.txt
  cv.pdf              — add this yourself (see step 2)
```
