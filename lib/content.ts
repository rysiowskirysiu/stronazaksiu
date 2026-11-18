import type { IconName } from "@/components/Icon";

export const DISCORD_URL = "https://discord.gg/R3MmGpktra";
export const TWITCH_URL = "https://www.twitch.tv/playboyriczi";
export const INSTAGRAM_URL = "https://www.instagram.com/playboyriczi/";

export type Social = {
  name: string;
  href: string;
  icon: IconName;
  /** Kolor akcentu po najechaniu; domyślnie niebieski marki */
  color?: string;
};

export const socials: Social[] = [
  {
    name: "Twitch",
    href: "https://twitch.tv/playboyriczi",
    icon: "twitch",
    color: "#9146ff",
  },
  { name: "Discord", href: DISCORD_URL, icon: "discord", color: "#5865f2" },
  { name: "Instagram", href: INSTAGRAM_URL, icon: "instagram" },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ouushi.post",
    icon: "tiktok",
    color: "#00f2fe",
  },
];

export type Giveaway = {
  tag: string;
  pill: string;
  prize: string;
  requirements: string[];
  date: string;
  image: string;
  imageAlt: string;
  href: string;
  /** Ikona zastępcza, gdy obrazek się nie wczyta */
  fallbackIcon?: IconName;
  ctaLabel?: string;
};

export const giveaways: Giveaway[] = [
  {
    tag: "CSGOSKINS",
    pill: "Field Tested",
    prize: "★ Ursus Knife | Damascus Steel",
    requirements: [
      "Wpłata min. 10 PLN z kodem RICZI",
      "Wyślij screena z wpłatą na discordzie.",
    ],
    date: "10.12.2026",
    image:
      "https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV91cnN1c19hcV9kYW1hc2N1c19wcmlzbWFfbGlnaHQuM2UyZDAwYWUwOTY1MjU2MjZlZDU1ODIxZWRiYjk3YzUyMjg0MWZjOC5wbmc-/auto/auto/85/notrim/91b9e7a4c0545758bd1cc8fc7a851d68.webp",
    imageAlt: "Ursus Knife",
    href: DISCORD_URL,
  },
  {
    tag: "PIRATESWAP",
    pill: "Field Tested",
    prize: "★ Huntsman Knife | Freehand",
    requirements: [
      "Wpłata min. 5$ / 20 PLN z kodem RICZI",
      "Wyślij screena z wpłatą na discordzie.",
    ],
    date: "10.12.2026",
    image:
      "https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL3dlYXBvbl9rbmlmZV90YWN0aWNhbF9hbV9tYXJrZWRfdXBfOTBfbGlnaHQuMTFlNjA0MmQxNDE1MTI4NGM4MjI2ODM2OGI1YzA2OWU5MDc3MWJiNi5wbmc-/auto/auto/85/notrim/50ba879dfbe369541d447dda6ad1666c.webp",
    imageAlt: "Skin CS2",
    href: DISCORD_URL,
  },
  {
    tag: "DLA SUBÓW NA TTV",
    pill: "Field Tested",
    prize: "★ Hand Wraps | Overprint",
    requirements: [
      "Aktywny sub na kanale Twitch",
      "Dołącz na mój serwer Discord.",
    ],
    date: "10.12.2026",
    image:
      "https://cdn.csgoskins.gg/public/uih/products/aHR0cHM6Ly9jZG4uY3Nnb3NraW5zLmdnL3B1YmxpYy9pbWFnZXMvYnVja2V0cy9lY29uL2RlZmF1bHRfZ2VuZXJhdGVkL2xlYXRoZXJfaGFuZHdyYXBzX2hhbmR3cmFwX2xlYXRoZXJ5X2ZhYnJpY19nZW9tZXRyaWNfYmx1ZV9saWdodC4yNTQyOTMzNmNkZmMwZWQ4ZmNiMDZiMTEwZDgzZmVlY2VjYTlmMTE2LnBuZw--/auto/auto/85/notrim/b439a69779175bc1eb47244c0b36a361.webp",
    imageAlt: "Kosa dla subów",
    href: DISCORD_URL,
  },
  {
    tag: "DLA WSZYSTKICH",
    pill: "Co Tydzień",
    prize: "★ Kod CSGOSKINS | 100 PLN",
    requirements: [
      "Kod RICZI ustawiony na CSGOSKINS",
      "Dołącz na Discorda (tam będą wyniki)",
    ],
    date: "co poniedziałek na streamie",
    image:
      "https://media.discordapp.net/attachments/1348005857467826176/1570562865449148566/karta-kod.png?ex=6af78c26&is=6af63aa6&hm=c6f762f7177d8edd35dfd7d1fe6cc54009d70cf159f37453fea95691eb926ca6&=&format=webp&quality=lossless",
    imageAlt: "CSGOSKINS100ZL",
    href: TWITCH_URL,
    fallbackIcon: "twitch",
    ctaLabel: "WEŹ TICKET",
  },
];

export type Partner = {
  name: string;
  category: string;
  badge: string;
  logo: string;
  logoAlt: string;
  logoFallback: string;
  perks: string[];
  href: string;
  ctaLabel: string;
  /** Kod do skopiowania; bez kodu w stopce pojawia się etykieta "Skup skinów" */
  code?: string;
};

export const partners: Partner[] = [
  {
    name: "CSGOSKINS",
    category: "SKRZYNKI CS2",
    badge: "18+",
    logo: "https://www.google.com/s2/favicons?domain=csgo-skins.com&sz=128",
    logoAlt: "CSGOSKINS",
    logoFallback: "C",
    perks: ["2.10zł + 10% przy doładowaniu", "Wpłata z kodem = udział w giveawayu"],
    href: "https://csgo-skins.com/?ref=RICZI",
    ctaLabel: "Przejdź",
    code: "RICZI",
  },
  {
    name: "PIRATESWAP",
    category: "WYMIANA SKINÓW",
    badge: "18+",
    logo: "https://media.discordapp.net/attachments/1348005857467826176/1570563848639873104/pirateswap-logo.png?ex=6af78d11&is=6af63b91&hm=1eb4a4cd9096a719b6b400362ed697599aa6088181ed51aea66dda7adeb30073&=&format=webp&quality=lossless",
    logoAlt: "PIRATESWAP",
    logoFallback: "P",
    perks: ["35% bonusu przy doładowaniu", "Wpłata z kodem = udział w giveawayu"],
    href: "https://pirateswap.com/?ref=RICZI",
    ctaLabel: "Przejdź",
    code: "RICZI",
  },
  {
    name: "SPRZEDAJ MI SKINY",
    category: "SZYBKA GOTÓWKA",
    badge: "BLIK / PRZELEW",
    logo: "/siano.png",
    logoAlt: "Skup skinów",
    logoFallback: "R",
    perks: [
      "Skupuję skiny CS2 od widzów",
      "Wycena i bezpieczny handel na Instagramie",
    ],
    href: INSTAGRAM_URL,
    ctaLabel: "Instagram",
  },
];
