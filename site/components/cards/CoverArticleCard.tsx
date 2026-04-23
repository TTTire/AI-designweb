type Variant = "amber" | "blue" | "green";

const colorMap: Record<Variant, string> = {
  amber: "text-accent-amber",
  blue: "text-accent-blue",
  green: "text-accent-green",
};

interface CoverArticleCardProps {
  cover: string;
  category: string;
  title: React.ReactNode;
  excerpt: string;
  variant: Variant;
  href: string;
}

export default function CoverArticleCard({
  cover,
  category,
  title,
  excerpt,
  variant,
  href,
}: CoverArticleCardProps) {
  const accent = colorMap[variant];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-border-subtle bg-bg-card transition-colors hover:border-border-default"
    >
      <div className="relative h-[180px] w-full overflow-hidden">
        <img
          src={cover}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-2.5 p-6">
        <div className={`text-xs font-medium tracking-[0.3px] ${accent}`}>{category}</div>
        <h3 className="whitespace-pre-line text-[18px] font-semibold leading-[1.3] text-text-primary">
          {title}
        </h3>
        <p className="text-[13px] leading-[1.5] text-text-secondary">{excerpt}</p>
        <div className={`text-[13px] font-medium ${accent}`}>继续阅读 →</div>
      </div>
    </a>
  );
}
