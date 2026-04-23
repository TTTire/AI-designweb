export default function QuoteCard() {
  return (
    <div className="flex h-full w-[280px] flex-col justify-between gap-4 rounded-2xl border border-border-subtle bg-bg-card-raised p-7">
      <div className="text-[80px] font-bold leading-[0.8] text-accent-amber">“</div>
      <div className="flex flex-col gap-3">
        <p className="text-[18px] font-medium leading-[1.5] text-text-primary">
          真正的观察,是把一个信号放大到能看清它全部的纹理。
        </p>
        <div className="h-px w-8 bg-border-default" />
        <div className="text-xs tracking-[0.3px] text-text-tertiary">
          — 像素的呼吸 · 2026 春
        </div>
      </div>
    </div>
  );
}
