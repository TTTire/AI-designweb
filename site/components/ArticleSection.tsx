import StatCard from "./cards/StatCard";
import FeaturedImgCard from "./cards/FeaturedImgCard";
import QuoteCard from "./cards/QuoteCard";
import ShortArticleCard from "./cards/ShortArticleCard";
import CollectionCard from "./cards/CollectionCard";
import LatestArticleCard from "./cards/LatestArticleCard";
import CoverArticleCard from "./cards/CoverArticleCard";

const row3Items = [
  {
    cover: "/covers/cover_4.jpg",
    category: "AI · 生活 · 2026.03.26",
    title: "让 AI 当私教 3 个月,\n我最大的感受是——不饿还能瘦",
    excerpt: "去年 10 月左右,我还没有龙虾——现在那个每天帮我干活的 AI 助手……",
    variant: "amber" as const,
    href: "https://mp.weixin.qq.com/s/B949tzPLufbOrapq3Q77SQ",
  },
  {
    cover: "/covers/cover_5.jpg",
    category: "Meta · 组织 · 2026.03.23",
    title: "Meta 把 AI 用量写进绩效考核了,\n你的公司还会远吗?",
    excerpt:
      "想象一下,年底绩效评估 HR 递过来的不只是 KPI 表格,还有一份你的 AI Token 消耗量报告……",
    variant: "blue" as const,
    href: "https://mp.weixin.qq.com/s/WV5NOeD8qrLp-vwScLP3Tw",
  },
  {
    cover: "/covers/cover_6.jpg",
    category: "小米 · 推理 · 2026.03.20",
    title: "当推理变成白菜价:\n小米正在改写 AI 行业的游戏规则",
    excerpt:
      "推理能力的成本暴跌,比你想象的更彻底。一个叫 Hunter Alpha 的神秘选手悄无声息登上 OpenRouter 榜首……",
    variant: "green" as const,
    href: "https://mp.weixin.qq.com/s/Cv3uC5XyNFMQ4b5T-fxPuA",
  },
];

export default function ArticleSection() {
  return (
    <section className="flex flex-col gap-12 bg-bg-base px-24 py-24">
      <header className="flex flex-col gap-4">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border-subtle bg-white/[0.05] px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
          <span className="text-xs font-medium tracking-[0.5px] text-text-secondary">
            精选信号 · 2026 春
          </span>
        </div>
        <h2 className="text-[44px] font-semibold leading-[1.2] tracking-[-0.5px] text-text-primary">
          AI 时代,值得放大的六个信号
        </h2>
        <p className="max-w-[720px] text-base leading-[1.6] text-text-secondary">
          每一篇文章,都是一次对当下科技信号的慢速拆解。不追热点,只看清楚。
        </p>
      </header>

      <div className="flex h-[320px] gap-4">
        <StatCard />
        <FeaturedImgCard />
        <QuoteCard />
        <ShortArticleCard />
      </div>

      <div className="flex h-[320px] gap-4">
        <CollectionCard />
        <LatestArticleCard />
      </div>

      <div className="flex gap-4">
        {row3Items.map((item) => (
          <CoverArticleCard key={item.category} {...item} />
        ))}
      </div>
    </section>
  );
}
