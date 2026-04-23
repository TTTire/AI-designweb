import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function LatestArticleCard() {
  return (
    <article className="flex h-full w-[832px] overflow-hidden rounded-2xl border border-border-subtle bg-bg-card">
      <div className="relative h-full w-[420px] shrink-0 overflow-hidden">
        <img
          src="/covers/cover_2.jpg"
          alt="Anthropic 下场做设计工具"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between p-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-green px-2.5 py-1 text-[11px] font-semibold tracking-[0.5px] text-bg-base">
              <span className="h-1.5 w-1.5 rounded-full bg-bg-base" />
              最新
            </span>
            <span className="text-xs text-text-secondary">
              深度长文 · Anthropic · 2026.04.17
            </span>
          </div>
          <h2 className="text-[30px] font-semibold leading-[1.3] tracking-[-0.5px] text-text-primary">
            Anthropic 下场做设计工具,Adobe 当天跌了 2%
          </h2>
          <p className="text-sm leading-[1.6] text-text-secondary">
            4 月 17 日,The Information 爆出两条关于 Anthropic 的大消息:模型公司正式向设计工具领域进军——Claude 的另一条增长曲线,正在清晰起来……
          </p>
        </div>

        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <span className="relative inline-block h-7 w-7 overflow-hidden rounded-full">
              <Image src="/logo.png" alt="" fill sizes="28px" className="object-cover" />
            </span>
            <span className="text-[13px] text-text-primary">像素的呼吸</span>
          </a>

          <a
            href="https://mp.weixin.qq.com/s/Oxbsm-Z-w0gN7jBhvklX3Q"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border-default bg-white/[0.08] px-[18px] py-2.5 text-[13px] font-medium text-text-primary transition-colors hover:bg-white/[0.12]"
          >
            立即阅读
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
