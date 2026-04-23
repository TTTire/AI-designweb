import { Layers } from "lucide-react";

const tags = [
  { label: "AI 模型", color: "text-accent-green", bg: "bg-accent-green/15" },
  { label: "科技公司", color: "text-accent-blue", bg: "bg-accent-blue/15" },
  { label: "产品与生活", color: "text-accent-amber", bg: "bg-accent-amber/15" },
];

export default function CollectionCard() {
  return (
    <a
      href="#"
      className="flex h-full w-[400px] flex-col justify-between gap-6 rounded-2xl border border-border-subtle bg-bg-card p-7 transition-colors hover:border-border-default"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-amber/15">
            <Layers className="h-5 w-5 text-accent-amber" />
          </div>
          <span className="text-sm font-medium text-text-secondary">主题合集</span>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-[56px] font-bold leading-none tracking-[-2px] text-text-primary">
            3
          </span>
          <span className="pb-1 text-sm text-text-secondary">条主线 · 持续更新</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t.label}
            className={`rounded-md px-2.5 py-1 text-[11px] ${t.color} ${t.bg}`}
          >
            {t.label}
          </span>
        ))}
        <span className="rounded-md bg-white/[0.05] px-2.5 py-1 text-[11px] text-text-secondary">
          + 更多
        </span>
      </div>
    </a>
  );
}
