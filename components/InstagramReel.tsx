import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

type ReelCopy = {
  index: string;
  kicker: string;
  title: string;
  body: string;
  cta: string;
};

export function InstagramReel({ t }: { t: ReelCopy }) {
  return (
    <section id="reel" className="relative overflow-hidden bg-ink px-6 py-28">
      <p
        aria-hidden
        className="font-display pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] leading-none text-bone/[0.04]"
      >
        REEL
      </p>
      <div className="relative mx-auto max-w-6xl text-center">
        <Reveal variant="strike">
          <p className="font-headline text-[11px] text-sunset">
            {t.index} / {t.kicker}
          </p>
          <h2 className="font-display mt-3 text-6xl text-bone sm:text-8xl">{t.title}</h2>
          <div className="tire-rule mx-auto mt-6 max-w-40" />
          <p className="mt-6 text-lg text-bone/80">{t.body}</p>
          <a
            href={site.instagramReelUrl}
            target="_blank"
            rel="noreferrer"
            className="font-headline mt-10 inline-flex items-center gap-3 bg-blood px-8 py-4 text-xs text-bone transition hover:bg-sunset"
          >
            <span
              aria-hidden
              className="inline-block border-y-[7px] border-l-[12px] border-y-transparent border-l-bone"
            />
            {t.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
