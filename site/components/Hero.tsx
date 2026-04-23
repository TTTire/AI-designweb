import { ArrowRight } from "lucide-react";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <section className="relative h-[720px] w-full overflow-hidden">
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-bg-frame.jpg"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      <img
        src="/hero-bg-frame.jpg"
        alt=""
        aria-hidden="true"
        className="hero-poster absolute inset-0 hidden h-full w-full object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(10,14,20,0.2) 0%, rgba(10,14,20,0.6) 50%, rgba(10,14,20,0.93) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full w-full flex-col">
        <NavBar />

        <div className="mt-[160px] flex max-w-[900px] flex-col gap-6 pl-24 pr-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border-subtle bg-white/[0.05] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-green" />
            <span className="text-xs font-medium tracking-[0.5px] text-text-secondary">
              微信公众号 · AI 与科技观察
            </span>
          </div>

          <h1 className="text-[72px] font-semibold leading-[1.1] tracking-[-1px] text-text-primary">
            在这里,慢速观察
            <br />
            AI 与科技的每一次呼吸
          </h1>

          <p className="max-w-[720px] text-lg leading-[1.6] text-text-secondary">
            一个关于 AI、产品与科技变化的长期观察。每一篇文章,都是一次对当下信号的慢速拆解——不追热点,只看清楚。
          </p>

          <div className="mt-2 flex items-center gap-4">
            <a
              href="https://mp.weixin.qq.com/s/EOlyEmRCGDytSntQT7jdjw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-text-primary px-6 py-3.5 text-[15px] font-semibold text-bg-base transition-opacity hover:opacity-90"
            >
              阅读最新文章
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-full border border-border-default px-6 py-3.5 text-[15px] font-medium text-text-primary transition-colors hover:bg-white/[0.06]"
            >
              关于作者
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
