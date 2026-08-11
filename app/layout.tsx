import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Кураторы Labbayk Tour",
  description:
    "Простой каталог кураторов Labbayk Tour для паломников: роли, опыт, языки и помощь на месте.",
  openGraph: {
    title: "Кураторы Labbayk Tour",
    description:
      "Каталог кураторов для паломников с временными профилями, готовыми к замене реальными данными.",
    images: [
      {
        url: "/og.png",
        width: 1792,
        height: 1024,
        alt: "Премиальный каталог кураторов Labbayk Tour",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
