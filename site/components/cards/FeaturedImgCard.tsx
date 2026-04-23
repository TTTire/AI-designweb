export default function FeaturedImgCard() {
  return (
    <a
      href="https://mp.weixin.qq.com/s/EOlyEmRCGDytSntQT7jdjw"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full w-[360px] overflow-hidden rounded-2xl border border-border-subtle bg-bg-card"
    >
      <img
        src="/covers/cover_1.jpg"
        alt="库克交班了,你的 iPhone 要变聪明了"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(10,14,20,0) 30%, rgba(10,14,20,0.93) 100%)",
        }}
      />
      <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2.5">
        <div className="text-[11px] font-medium tracking-[0.8px] text-accent-blue">
          Apple · AI · 2026.04.21
        </div>
        <h3 className="text-xl font-semibold leading-[1.3] text-text-primary">
          库克交班了,
          <br />
          你的 iPhone 要变聪明了
        </h3>
      </div>
    </a>
  );
}
