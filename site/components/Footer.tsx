import Image from "next/image";
import { Mail, Rss, Github } from "lucide-react";

const linkCols = [
  {
    title: "阅读",
    links: ["最新文章", "精选合集", "归档"],
  },
  {
    title: "关于",
    links: ["关于作者", "视觉原则", "联系方式"],
  },
  {
    title: "工具",
    links: ["RSS 订阅", "邮件通讯", "友情链接"],
  },
];

const socials = [
  { icon: Mail, label: "邮箱" },
  { icon: Rss, label: "RSS" },
  { icon: Github, label: "GitHub" },
];

const metaLinks = ["隐私政策", "使用条款"];

export default function Footer() {
  return (
    <footer
      className="flex flex-col gap-12 border-t border-border-subtle px-24 py-16"
      style={{ background: "#050709" }}
    >
      <div className="flex items-start justify-between gap-16">
        <div className="flex w-[320px] flex-col gap-4">
          <a href="#" className="flex items-center gap-2.5">
            <span className="relative inline-block h-7 w-7 overflow-hidden rounded-full">
              <Image src="/logo.png" alt="像素的呼吸" fill sizes="28px" className="object-cover" />
            </span>
            <span className="text-[18px] font-semibold text-text-primary">像素的呼吸</span>
          </a>
          <p className="text-[13px] leading-[1.7] text-text-secondary">
            一个关于像素、色彩与视觉美学的微信公众号。
            <br />
            记录每一帧画面的微小呼吸。
          </p>
          <div className="flex gap-2.5">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-white/[0.05] text-text-secondary transition-colors hover:border-border-default hover:text-text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-14">
          {linkCols.map((col) => (
            <div key={col.title} className="flex flex-col gap-3.5">
              <div className="text-[13px] font-semibold tracking-[0.5px] text-text-primary">
                {col.title}
              </div>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[13px] text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3.5">
          <div className="h-[140px] w-[140px] overflow-hidden rounded-xl bg-white">
            <img src="/qrcode.png" alt="公众号二维码" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-[13px] font-semibold text-text-primary">扫码关注公众号</div>
            <div className="text-[11px] text-text-tertiary">每周至少一更</div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-border-subtle" />

      <div className="flex items-center justify-between">
        <div className="text-xs text-text-tertiary">© 2026 像素的呼吸 · 保留所有权利</div>
        <div className="flex items-center gap-6 text-xs text-text-tertiary">
          <a href="#" className="transition-colors hover:text-text-primary">
            京ICP备 XXXXXXXX 号
          </a>
          {metaLinks.map((link, i) => (
            <span key={link} className="flex items-center gap-6">
              {i > 0 && <span>·</span>}
              <a href="#" className="transition-colors hover:text-text-primary">
                {link}
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
