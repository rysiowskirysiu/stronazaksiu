# RICZI

Strona z kodami, giveawayami i social media — Next.js (App Router) + TypeScript + Tailwind CSS v4.

```bash
npm install
npm run dev   # http://localhost:3000
npm run build && npm start
```

## Struktura

- `app/layout.tsx` – fonty (`next/font`), metadane, `<body class="is-loading">`
- `app/page.tsx` – składa stronę z komponentów
- `app/globals.css` – tokeny `@theme` (kolory, fonty, easing, animacje) i efekty (maski, pseudo-elementy, loader)
- `lib/content.ts` – **treść do edycji**: social media, giveawaye, partnerzy
- `components/` – `Loader`, `SpotlightRoot`, `Hero`, `SocialLinks`, `Giveaways`, `Partners`, `Footer`, `RevealCard`, `CopyCodeButton`, `FallbackImage`, `Icon`
- `public/` – lokalne obrazki: `banner.jpg`, `avatar.png`, `skin2.png`, `kosa3.png`, `siano.png`
