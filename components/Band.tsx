import Image from "next/image";
import type { CSSProperties } from "react";
import { Motif } from "@/components/Motif";
import { Reveal } from "@/components/Reveal";
import { site, type MemberId } from "@/lib/site";

type BandCopy = {
  index: string;
  title: string;
  kicker: string;
};

export function Band({
  t,
  roles,
}: {
  t: BandCopy;
  roles: Record<MemberId, string>;
}) {
  return (
    <section id="band" className="paper-wash relative overflow-hidden px-6 py-28 text-ink">
      <Motif kind="guitar" className="-left-6 top-10 h-40 w-40 -rotate-12" />
      <Motif kind="wrench" className="right-4 bottom-8 h-32 w-32 rotate-12 text-rust" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal variant="strike">
          <p className="font-headline text-[11px] text-blood">
            {t.index} / {t.kicker}
          </p>
          <h2 className="font-display distress mt-2 text-6xl sm:text-7xl">{t.title}</h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {site.members.map((member, index) => (
            <Reveal key={member.id} variant="rise" delayMs={index * 110}>
              <figure
                className="polaroid mx-auto w-full max-w-[260px]"
                style={{ "--tilt": `${member.tilt}deg` } as CSSProperties}
              >
                <span
                  className="tape tape-top"
                  style={{ "--tape-tilt": index % 2 === 0 ? "-9deg" : "8deg" } as CSSProperties}
                />
                <div className="relative aspect-[4/5] overflow-hidden bg-asphalt">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="polaroid-shot object-cover"
                  />
                </div>
                <figcaption className="polaroid-caption">
                  <span className="block font-display text-2xl tracking-wide text-ink">
                    {member.name}
                  </span>
                  {roles[member.id]}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
