# Brand Tracker — Vite + React

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build      # outputs to dist/
npm run preview    # serve the build locally
```

## Deploy to Vercel
1. Push this folder to a Git repo.
2. Import the repo in Vercel.
3. Framework Preset: **Vite** (auto-detected).
4. Build Command: `npm run build` · Output Directory: `dist`.

## Asset paths
- Fonts live in `public/fonts/` → referenced from CSS as `/fonts/Aeonik-*.ttf`.
- Images live in `public/assets/` → referenced in JSX as `/assets/...`.

Anything in `public/` is served as-is from the site root — no import needed.
