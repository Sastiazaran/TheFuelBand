import Image from "next/image";
import { site } from "@/lib/site";

type HeroCopy = {
  kicker: string;
  title: string;
  genre: string;
  lead: string;
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
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blood/40 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 py-28 text-center">
        <Image
          src={site.logo}
          alt={site.name}
          width={616}
          height={616}
          priority
          className="h-40 w-40 object-contain sm:h-52 sm:w-52"
        />
        <p className="font-headline mt-8 text-[11px] text-ember sm:text-xs">
          {t.kicker}
        </p>
        <h1 className="font-display mt-3 text-7xl leading-none text-bone sm:text-8xl md:text-9xl">
          {t.title}
        </h1>
        <p className="font-headline mt-2 text-sm text-sunset sm:text-base">
          {t.genre}
        </p>
        <div className="tire-rule mx-auto mt-6 max-w-xs" />
        <p className="mt-6 max-w-md text-lg text-bone/85">{t.lead}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`/${locale}#music`}
            className="font-headline bg-blood px-7 py-3 text-xs text-bone transition hover:bg-sunset"
          >
            {t.ctaMusic}
          </a>
          <a
            href={`/${locale}/gallery`}
            className="font-headline border border-bone/30 px-7 py-3 text-xs text-bone transition hover:border-ember hover:text-ember"
          >
            {t.ctaGallery}
          </a>
        </div>
      </div>
    </section>
  );
}
