import { Motif } from "@/components/Motif";
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
    <section id="reel" className="stage-wash grain relative overflow-hidden px-6 py-28">
      <Motif kind="flame" className="left-8 top-10 h-40 w-40 -rotate-12 text-ochre" />
      <p
        aria-hidden
        className="font-display pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] leading-none text-bone/[0.06]"
      >
        REEL
      </p>
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal variant="strike">
          <p className="stamp text-[10px] text-ochre">
            {t.index} / {t.kicker}
          </p>
          <h2 className="font-display distress mt-6 text-6xl text-bone sm:text-8xl">
            {t.title}
          </h2>
          <div className="tire-rule mx-auto mt-6 max-w-40" />
          <p className="mt-6 text-lg text-bone/85">{t.body}</p>
          <a
            href={site.instagramReelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sticker mt-10 inline-flex items-center gap-3 text-xs"
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
