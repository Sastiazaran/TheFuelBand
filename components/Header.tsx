"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/locales";
import { site } from "@/lib/site";

type NavCopy = {
  home: string;
  music: string;
  about: string;
  gallery: string;
  skip: string;
  menu: string;
  close: string;
};

export function Header({ locale, t }: { locale: Locale; t: NavCopy }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const other: Locale = locale === "en" ? "es" : "en";

  function switchLocale(next: Locale) {
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000`;
    const stripped = pathname.replace(/^\/(en|es)/, "") || "/";
    router.push(`/${next}${stripped === "/" ? "" : stripped}`);
  }

  const leftLinks = [
    { href: `/${locale}`, label: t.home },
    { href: `/${locale}#music`, label: t.music },
  ];
  const rightLinks = [
    { href: `/${locale}#about`, label: t.about },
    { href: `/${locale}/gallery`, label: t.gallery },
  ];
  const allLinks = [...leftLinks, ...rightLinks];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/92 backdrop-blur-sm"
          : "bg-gradient-to-b from-ink/80 to-transparent"
      }`}
    >
      <div className="relative mx-auto grid h-16 max-w-6xl grid-cols-3 items-center px-6 md:h-20">
        <nav className="col-start-1 hidden items-center justify-end gap-8 pr-6 md:flex">
          {leftLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link font-headline text-[11px] text-bone/80 hover:text-ember"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={`/${locale}`}
          className="col-start-2 justify-self-center"
          aria-label={site.name}
        >
          <Image
            src={site.wordmark}
            alt={site.name}
            width={1200}
            height={242}
            priority
            sizes="200px"
            className="h-8 w-auto md:h-10"
          />
        </Link>

        <div className="col-start-3 hidden items-center justify-start gap-8 pl-6 md:flex">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link font-headline text-[11px] text-bone/80 hover:text-ember"
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => switchLocale(other)}
            className="font-headline text-[11px] text-sunset"
            aria-label={other === "es" ? "Español" : "English"}
          >
            {other.toUpperCase()}
          </button>
        </div>

        <button
          type="button"
          className="col-start-3 justify-self-end font-headline text-[11px] text-bone md:hidden"
          aria-expanded={open}
          aria-label={open ? t.close : t.menu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? t.close : t.menu}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink md:hidden">
          <div className="flex h-16 items-center justify-between px-6">
            <Link href={`/${locale}`} onClick={() => setOpen(false)} aria-label={site.name}>
              <Image
                src={site.wordmark}
                alt={site.name}
                width={1200}
                height={242}
                sizes="160px"
                className="h-7 w-auto"
              />
            </Link>
            <button
              type="button"
              className="font-headline text-[11px] text-ember"
              onClick={() => setOpen(false)}
            >
              {t.close}
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {allLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-6xl text-bone hover:text-ember"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                switchLocale(other);
              }}
              className="font-headline mt-4 text-sm text-sunset"
            >
              {other.toUpperCase()}
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
