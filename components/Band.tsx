import type { CSSProperties, ReactNode } from "react";
import { Motif } from "@/components/Motif";
import { Reveal } from "@/components/Reveal";
import { site, type Member, type MemberId } from "@/lib/site";

type BandCopy = {
  index: string;
  title: string;
  kicker: string;
};

function PolaroidFrame({
  tilt,
  tapeTilt,
  caption,
  children,
}: {
  tilt: number;
  tapeTilt: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure
      className="polaroid polaroid-chapter"
      style={{ "--tilt": `${tilt}deg` } as CSSProperties}
    >
      <span className="tape tape-top" style={{ "--tape-tilt": tapeTilt } as CSSProperties} />
      <div className="relative aspect-[4/5] overflow-hidden bg-asphalt">{children}</div>
      <figcaption className="polaroid-caption polaroid-hand">{caption}</figcaption>
    </figure>
  );
}

function MemberShot({
  member,
  captions,
}: {
  member: Member;
  captions: Record<MemberId, string>;
}) {
  return (
    <div className="relative mx-auto flex w-full max-w-xl justify-center">
      <PolaroidFrame
        tilt={member.tilt}
        tapeTilt={member.id === "ati" || member.id === "alan" ? "9deg" : "-10deg"}
        caption={captions[member.id]}
      >
        <img
          src={member.src}
          alt={`${member.name} — ${captions[member.id]}`}
          className={`absolute inset-0 h-full w-full object-cover polaroid-shot ${
            member.id === "beto" ? "object-[20%_center]" : ""
          }`}
        />
      </PolaroidFrame>
    </div>
  );
}

export function Band({
  t,
  roles,
  tags,
  captions,
}: {
  t: BandCopy;
  roles: Record<MemberId, string>;
  tags: Record<MemberId, readonly string[]>;
  captions: Record<MemberId, string>;
}) {
  return (
    <section id="band" className="relative text-bone">
      <div className="charcoal-wash relative flex min-h-[88svh] flex-col justify-center overflow-hidden px-6 pb-16 pt-28">
        <Motif kind="guitar" className="-left-6 top-10 h-40 w-40 -rotate-12" />
        <Motif kind="wrench" className="right-4 bottom-8 h-32 w-32 rotate-12 text-rust" />
        <p
          aria-hidden
          className="font-display pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16vw] leading-none text-bone/[0.07]"
        >
          {t.title}
        </p>
        <Reveal variant="strike" className="relative mx-auto max-w-6xl">
          <p className="font-headline text-[11px] text-ochre">
            {t.index} / {t.kicker}
          </p>
          <h2 className="font-display distress mt-2 text-6xl sm:text-8xl">{t.title}</h2>
          <div className="tire-rule mt-6 max-w-48" />
        </Reveal>
      </div>

      {site.members.map((member, index) => {
        const flip = index % 2 === 1;
        const wash = index % 2 === 0 ? "stage-wash" : "charcoal-wash";

        return (
          <article
            key={member.id}
            className="band-chapter relative"
            style={{ zIndex: index + 1 }}
          >
            <div className={`band-chapter-sticky ${wash} flex items-center pt-20`}>
              <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-24 md:grid-cols-12 md:gap-6">
                <div className={`md:col-span-5 ${flip ? "md:order-2" : "md:order-1"}`}>
                  <p className="font-headline text-[11px] text-ochre">
                    {String(index + 1).padStart(2, "0")} / {t.title}
                  </p>
                  <h3 className="font-display distress mt-3 text-7xl leading-none sm:text-8xl md:text-9xl">
                    {member.name}
                  </h3>
                  <p className="font-headline mt-4 text-sm tracking-[0.28em] text-ember">
                    {roles[member.id]}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-3">
                    {tags[member.id].map((tag) => (
                      <li key={tag} className="stamp text-[9px] text-ochre">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`order-first md:col-span-7 ${flip ? "md:order-1" : "md:order-2"}`}>
                  <MemberShot member={member} captions={captions} />
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
