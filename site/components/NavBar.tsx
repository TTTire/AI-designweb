"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

const menuItems = [
  { label: "首页", href: "/" },
  { label: "像素", href: "#" },
  { label: "文章", href: "/articles" },
  { label: "关于我", href: "#" },
];

export default function NavBar() {
  const [qrOpen, setQrOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!qrOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setQrOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [qrOpen]);

  return (
    <>
      <nav className="relative z-20 flex h-20 w-full items-center justify-between px-12">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative inline-block h-7 w-7 overflow-hidden rounded-full">
            <Image src="/logo.png" alt="像素的呼吸" fill sizes="28px" className="object-cover" />
          </span>
          <span className="text-[18px] font-semibold tracking-[0.5px] text-text-primary">
            像素的呼吸
          </span>
        </Link>

        <ul className="flex items-center gap-8">
          {menuItems.map((item) => {
            const isActive =
              item.href !== "#" &&
              (item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`));
            const className = `text-sm transition-colors hover:text-text-primary ${
              isActive ? "text-text-primary" : "text-text-secondary"
            }`;
            return (
              <li key={item.label}>
                {item.label === "关于我" ? (
                  <button type="button" onClick={() => setQrOpen(true)} className={className}>
                    {item.label}
                  </button>
                ) : item.href.startsWith("/") ? (
                  <Link href={item.href} className={className}>
                    {item.label}
                  </Link>
                ) : (
                  <a href={item.href} className={className}>
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setQrOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-border-default bg-white/[0.08] px-5 py-2.5 text-[13px] font-medium text-text-primary transition-colors hover:bg-white/[0.12]"
        >
          关注公众号
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </nav>

      {qrOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="扫码关注公众号"
          onClick={() => setQrOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center gap-5 rounded-2xl border border-border-default bg-bg-card-raised p-8 shadow-2xl"
          >
            <button
              type="button"
              aria-label="关闭"
              onClick={() => setQrOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-white/[0.08] hover:text-text-primary"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="h-[220px] w-[220px] overflow-hidden rounded-xl bg-white p-2">
              <img
                src="/qrcode.png"
                alt="公众号二维码"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-base font-semibold text-text-primary">扫码关注公众号</div>
              <div className="text-xs text-text-tertiary">每周至少一更</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
