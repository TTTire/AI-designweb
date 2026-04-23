import type { Metadata } from "next";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "像素的呼吸 · 慢速观察 AI 与科技的每一次呼吸",
  description:
    "一个关于 AI、产品与科技变化的长期观察。每一篇文章,都是一次对当下信号的慢速拆解——不追热点,只看清楚。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSC.variable}`}>
      <body className="font-sans bg-bg-base text-text-primary">{children}</body>
    </html>
  );
}
