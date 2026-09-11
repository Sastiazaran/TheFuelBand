import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type HeroCopy = {
  title: string;
  ctaMusic: string;
  ctaGallery: string;
};

export function Hero({
  locale,
  t,
}: {
  locale: string;
  t: HeroCopy;
}) {
  return (
    <section className="grain relative isolate min-h-[100svh] overflow-hidden bg-ink">
      <Image
        src="/covers/get-away.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/50" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 py-28 text-center">
        <h1 className="sr-only">{t.title}</h1>
        <Image
          src={site.logo}
          alt={site.name}
          width={616}
          height={616}
          priority
          className="h-44 w-44 object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.65)] sm:h-56 sm:w-56 md:h-64 md:w-64"
        />
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={site.linktree}
            target="_blank"
            rel="noreferrer"
            className="font-headline bg-blood px-7 py-3 text-xs text-bone transition hover:bg-sunset"
          >
            {t.ctaMusic}
          </a>
          <Link
            href={`/${locale}/gallery`}
            className="font-headline border border-bone/30 px-7 py-3 text-xs text-bone transition hover:border-ember hover:text-ember"
          >
            {t.ctaGallery}
          </Link>
        </div>
      </div>
    </section>
  );
}
