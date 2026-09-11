import Image from "next/image";
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

export function Music({ t }: { t: MusicCopy }) {
  return (
    <section id="music" className="bg-asphalt px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="strike">
          <p className="font-headline text-[11px] text-sunset">
            {t.index} / {t.title}
          </p>
          <h2 className="font-display mt-2 text-5xl text-bone sm:text-6xl">{t.title}</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {site.singles.map((single, index) => (
            <Reveal key={single.id} variant="slam" delayMs={index * 120}>
              <article className="group flex h-full flex-col border border-white/10 bg-ink">
                <div className="relative aspect-square overflow-hidden bg-ink">
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
                      <p className="font-headline mt-4 text-[10px] text-ember">{t.next}</p>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-headline text-[10px] text-sunset">
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
