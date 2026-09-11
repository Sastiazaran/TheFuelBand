import Image from "next/image";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { site } from "@/lib/site";

type HeroCopy = {
  kicker: string;
  title: string;
  genre: string;
  issue: string;
  lead: string;
  ctaMusic: string;
  ctaGallery: string;
  scroll: string;
};

export function Hero({ locale, t }: { locale: string; t: HeroCopy }) {
  return (
    <section className="grain relative isolate min-h-[100svh] overflow-hidden bg-ink">
      <HeroBackdrop />
      <div className="pointer-events-none absolute inset-4 z-10 border-[6px] border-bone/25 shadow-[inset_0_0_0_3px_rgba(196,160,86,0.25)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 py-28 text-center">
        <p className="stamp mb-8 text-[10px] text-ochre">{t.issue}</p>
        <h1 className="sr-only">{t.title}</h1>
        <Image
          src={site.wordmark}
          alt={site.name}
          width={1200}
          height={242}
          priority
          sizes="(max-width: 768px) 90vw, 42rem"
          className="wordmark-glow h-auto w-[min(90vw,42rem)]"
        />
        <p className="font-headline mt-8 text-[11px] text-ember sm:text-xs">{t.genre}</p>
        <div className="tire-rule mx-auto mt-6 max-w-xs" />
        <p className="mt-6 max-w-md text-lg text-bone/85">{t.lead}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <a href={`/${locale}#music`} className="sticker text-xs">
            {t.ctaMusic}
          </a>
          <a href={`/${locale}/gallery`} className="sticker sticker-ghost text-xs">
            {t.ctaGallery}
          </a>
        </div>
      </div>

      <a
        href={`/${locale}#music`}
        className="scroll-cue font-headline absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-[10px] text-bone/70"
      >
        {t.scroll}
      </a>
    </section>
  );
}
