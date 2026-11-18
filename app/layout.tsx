import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "RICZI",
  // Ikonka karty przeglądarki: podmień public/title.png na swój plik
  icons: { icon: "/title.png", apple: "/title.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${montserrat.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="is-loading" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
