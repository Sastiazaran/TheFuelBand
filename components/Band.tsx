import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Motif } from "@/components/Motif";
import { Reveal } from "@/components/Reveal";
import { site, type Member, type MemberId } from "@/lib/site";

type BandCopy = {
  index: string;
  title: string;
  kicker: string;
  photoIncoming: string;
  reserved: string;
};

type Captions = Record<MemberId | "astiAlt", string>;

function publicFileExists(src: string | null | undefined) {
  if (!src) return false;
  return existsSync(join(process.cwd(), "public", src.replace(/^\//, "")));
}

function PolaroidFrame({
  tilt,
  tapeTilt,
  caption,
  compact = false,
  children,
}: {
  tilt: number;
  tapeTilt: string;
  caption: string;
  compact?: boolean;
  children: ReactNode;
}) {
  return (
    <figure
      className={`polaroid polaroid-chapter ${compact ? "polaroid-chapter-compact" : ""}`}
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
  placeholder,
}: {
  member: Member;
  captions: Captions;
  placeholder: { incoming: string; reserved: string };
}) {
  const altSrc = "altSrc" in member ? member.altSrc : undefined;
  const showAlt = publicFileExists(altSrc);
  const altTilt = "altTilt" in member && member.altTilt ? member.altTilt : 3.4;

  if (!member.src) {
    return (
      <div className="relative mx-auto flex w-full max-w-xl justify-center">
        <PolaroidFrame tilt={member.tilt} tapeTilt="-8deg" caption={captions[member.id]}>
          <div className="relative flex h-full flex-col items-center justify-center bg-[repeating-linear-gradient(135deg,#2a221c_0_12px,#1c1612_12px_24px)] px-6 text-center">
            <div className="pointer-events-none absolute inset-3 border border-dashed border-bone/25" />
            <p className="font-headline relative text-[10px] tracking-[0.28em] text-ochre">
              {placeholder.incoming}
            </p>
            <p className="relative mt-3 max-w-[10rem] text-sm text-bone/70">{placeholder.reserved}</p>
          </div>
        </PolaroidFrame>
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex w-full max-w-xl items-start justify-center">
      {showAlt && altSrc ? (
        <div className="pointer-events-none absolute -right-2 top-10 z-0 hidden sm:block md:-right-8">
          <PolaroidFrame
            compact
            tilt={altTilt}
            tapeTilt="11deg"
            caption={captions.astiAlt}
          >
            <Image
              src={altSrc}
              alt={captions.astiAlt}
              fill
              sizes="220px"
              className="polaroid-shot object-cover"
            />
          </PolaroidFrame>
        </div>
      ) : null}
      <div className="relative z-10 w-full">
        <PolaroidFrame
          tilt={member.tilt}
          tapeTilt={member.id === "ati" || member.id === "alan" ? "9deg" : "-10deg"}
          caption={captions[member.id]}
        >
          <Image
            src={member.src}
            alt={`${member.name} — ${captions[member.id]}`}
            fill
            sizes="(max-width: 768px) 80vw, 34rem"
            className="polaroid-shot object-cover"
          />
        </PolaroidFrame>
      </div>
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
  captions: Captions;
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
          <article key={member.id} className="band-chapter relative">
            <div className={`band-chapter-sticky grain ${wash} flex items-center`}>
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
                  <MemberShot
                    member={member}
                    captions={captions}
                    placeholder={{ incoming: t.photoIncoming, reserved: t.reserved }}
                  />
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
