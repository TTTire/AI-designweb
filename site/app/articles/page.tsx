import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ArticlesGrid from "@/components/ArticlesGrid";
import { articles } from "@/data/articles";

export default function ArticlesPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] overflow-hidden bg-bg-base">
      <div className="relative bg-bg-base">
        <NavBar />

        <header className="flex flex-col gap-4 px-24 pb-8 pt-16">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border-subtle bg-white/[0.05] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
            <span className="text-xs font-medium tracking-[0.5px] text-text-secondary">
              精选文章 · 共 {articles.length} 篇
            </span>
          </div>
          <h1 className="text-[44px] font-semibold leading-[1.2] tracking-[-0.5px] text-text-primary">
            全部文章
          </h1>
          <p className="max-w-[720px] text-base leading-[1.6] text-text-secondary">
            不追热点,只看清楚。这里是每一次对科技信号的慢速观察。
          </p>
        </header>

        <ArticlesGrid articles={articles} />
      </div>

      <Footer />
    </main>
  );
}
