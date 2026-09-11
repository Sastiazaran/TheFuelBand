import { Motif } from "@/components/Motif";
import { Reveal } from "@/components/Reveal";

type AboutCopy = {
  index: string;
  title: string;
  body: string;
};

export function About({ t }: { t: AboutCopy }) {
  return (
    <section id="about" className="paper-wash relative overflow-hidden px-6 py-28 text-ink">
      <Motif kind="bottle" className="right-8 top-16 h-28 w-28 rotate-12" />
      <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-12">
        <div className="md:sticky md:top-28 md:col-span-4 md:self-start">
          <Reveal variant="strike">
            <p className="font-headline text-[11px] text-blood">
              {t.index} / {t.title}
            </p>
            <h2 className="font-display distress mt-2 text-5xl sm:text-6xl">{t.title}</h2>
            <div className="tire-rule mt-6 max-w-40" />
          </Reveal>
        </div>
        <Reveal variant="slam" className="md:col-span-8" delayMs={80}>
          <div className="rough-frame bg-bone/70 p-6 md:p-10 md:pt-16">
            <p className="drop-cap text-lg leading-relaxed text-ink/90">{t.body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
