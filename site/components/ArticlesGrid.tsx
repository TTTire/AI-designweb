"use client";

import { useMemo, useState } from "react";
import CoverArticleCard from "./cards/CoverArticleCard";
import {
  type Article,
  type CategoryFilter,
  categories,
} from "@/data/articles";

interface ArticlesGridProps {
  articles: Article[];
}

export default function ArticlesGrid({ articles }: ArticlesGridProps) {
  const [active, setActive] = useState<CategoryFilter>("全部");

  const counts = useMemo(() => {
    const base: Record<CategoryFilter, number> = {
      全部: articles.length,
      "AI 模型": 0,
      科技公司: 0,
      产品与生活: 0,
      日报: 0,
    };
    for (const a of articles) base[a.category] += 1;
    return base;
  }, [articles]);

  const filtered = useMemo(() => {
    if (active === "全部") return articles;
    return articles.filter((a) => a.category === active);
  }, [articles, active]);

  return (
    <div className="flex flex-col gap-8 px-24 pb-24">
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(cat)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                isActive
                  ? "border-border-default bg-white/[0.12] text-text-primary"
                  : "border-border-subtle bg-white/[0.05] text-text-secondary hover:bg-white/[0.08]"
              }`}
            >
              <span>{cat}</span>
              <span className="text-xs text-text-tertiary">{counts[cat]}</span>
            </button>
          );
        })}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-3 gap-6">
          {filtered.map((a) => (
            <CoverArticleCard
              key={a.id}
              cover={a.cover}
              category={`${a.tag} · ${a.date}`}
              title={a.title}
              excerpt={a.excerpt}
              variant={a.variant}
              href={a.href}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center text-sm text-text-tertiary">
          该分类暂无文章
        </div>
      )}

      <div className="pt-4 text-center text-xs text-text-tertiary">
        更多文章持续更新
      </div>
    </div>
  );
}
