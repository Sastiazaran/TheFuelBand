import Image from "next/image";
import type { CSSProperties } from "react";
import { Motif } from "@/components/Motif";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

type MusicCopy = {
  index: string;
  title: string;
  listen: string;
  outNow: string;
  next: string;
  comingSoon: string;
};

const tilts = [-2.4, 1.8, -3.1];

export function Music({ t }: { t: MusicCopy }) {
  return (
    <section id="music" className="charcoal-wash relative overflow-hidden px-6 py-24">
      <Motif kind="flame" className="right-6 top-8 h-36 w-36 rotate-12 text-ember" />
      <Motif kind="gas" className="-bottom-4 left-4 h-28 w-28 -rotate-12" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal variant="strike">
          <p className="font-headline text-[11px] text-ochre">
            {t.index} / {t.title}
          </p>
          <h2 className="font-display distress mt-2 text-5xl text-bone sm:text-7xl">
            {t.title}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {site.singles.map((single, index) => (
            <Reveal key={single.id} variant="slam" delayMs={index * 120}>
              <article
                className="clipping group flex h-full flex-col"
                style={{ "--tilt": `${tilts[index] ?? -1}deg` } as CSSProperties}
              >
                <div className="relative aspect-square overflow-hidden bg-ink">
                  <span
                    className="tape"
                    style={
                      {
                        top: 10,
                        left: 16,
                        "--tape-tilt": "-18deg",
                      } as CSSProperties
                    }
                  />
                  {single.cover ? (
                    <Image
                      src={single.cover}
                      alt={single.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.06]"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-blood/80 via-ink to-sunset/50 p-6 text-center">
                      <Image
                        src={site.wordmark}
                        alt=""
                        width={1200}
                        height={242}
                        className="h-auto w-40 object-contain opacity-90"
                      />
                      <p className="stamp mt-4 text-[10px] text-ember">{t.next}</p>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-headline text-[10px] text-ochre">
                    {single.status === "out" ? t.outNow : t.comingSoon}
                  </p>
                  <h3 className="font-display mt-2 text-3xl leading-none text-bone">
                    {single.title}
                  </h3>
                  {single.href ? (
                    <a
                      href={single.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-headline mt-6 inline-flex w-fit text-[11px] text-ember underline-offset-4 hover:underline"
                    >
                      {t.listen}
                    </a>
                  ) : (
                    <span className="font-headline mt-6 text-[11px] text-muted">
                      {t.comingSoon}
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
