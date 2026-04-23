import { BookOpen } from "lucide-react";

export default function StatCard() {
  return (
    <a
      href="#"
      className="flex h-full w-[280px] flex-col justify-between rounded-2xl border border-border-subtle bg-bg-card p-7 transition-colors hover:border-border-default"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-accent-green/15">
        <BookOpen className="h-5 w-5 text-accent-green" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-[44px] font-bold leading-none tracking-[-1px] text-text-primary">
          6
        </div>
        <div className="text-sm text-text-secondary">篇最新观察</div>
        <div className="text-xs text-text-tertiary">每周 1-2 篇 · 2026.03 起</div>
      </div>
    </a>
  );
}
