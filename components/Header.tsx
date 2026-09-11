"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/locales";
import { site } from "@/lib/site";

type NavCopy = {
  home: string;
  music: string;
  about: string;
  gallery: string;
  skip: string;
};

export function Header({ locale, t }: { locale: Locale; t: NavCopy }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const other: Locale = locale === "en" ? "es" : "en";

  function switchLocale(next: Locale) {
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000`;
    const stripped = pathname.replace(/^\/(en|es)/, "") || "/";
    router.push(`/${next}${stripped === "/" ? "" : stripped}`);
  }

  const links = [
    { href: `/${locale}`, label: t.home },
    { href: `/${locale}#music`, label: t.music },
    { href: `/${locale}#about`, label: t.about },
    { href: `/${locale}/gallery`, label: t.gallery },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src={site.logo}
            alt={site.name}
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <span className="font-display text-2xl text-bone">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-headline text-[11px] text-bone/80 hover:text-ember"
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
        </nav>
        <button
          type="button"
          className="font-headline text-[11px] text-bone md:hidden"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>
      {open ? (
        <div className="border-t border-white/10 bg-ink/95 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-headline text-sm text-bone"
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
              className="font-headline text-left text-sm text-sunset"
            >
              {other.toUpperCase()}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
