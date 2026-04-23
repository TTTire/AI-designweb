import { ArrowRight } from "lucide-react";

export default function ShortArticleCard() {
  return (
    <a
      href="https://mp.weixin.qq.com/s/KJawME_sRIYbFCWjfl7UIQ"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-full w-[280px] flex-col justify-between gap-5 rounded-2xl border border-border-subtle bg-bg-card p-7 transition-colors hover:border-border-default"
    >
      <div className="flex items-center gap-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
        <span className="text-xs font-medium tracking-[0.5px] text-text-secondary">
          OpenAI · 政策
        </span>
        <span className="text-xs text-text-tertiary">·</span>
        <span className="text-xs text-text-tertiary">04.07</span>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-[22px] font-semibold leading-[1.3] text-text-primary">
          OpenAI 主动要求给自己征税,你信吗?
        </h3>
        <p className="text-[13px] leading-[1.5] text-text-secondary">
          2026 年 4 月 6 日,一件挺反常的事情发生了……
        </p>
      </div>
      <div className="flex items-center gap-1.5 text-accent-blue">
        <span className="text-[13px] font-medium">继续阅读</span>
        <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </a>
  );
}
