import { Reveal } from "@/components/Reveal";

type AboutCopy = {
  index: string;
  title: string;
  body: string;
};

export function About({ t }: { t: AboutCopy }) {
  return (
    <section id="about" className="paper-wash px-6 py-28 text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-12">
        <div className="md:sticky md:top-28 md:col-span-4 md:self-start">
          <Reveal variant="strike">
            <p className="font-headline text-[11px] text-blood">
              {t.index} / {t.title}
            </p>
            <h2 className="font-display mt-2 text-5xl sm:text-6xl">{t.title}</h2>
            <div className="tire-rule mt-6 max-w-40 bg-[repeating-linear-gradient(90deg,#c1121f_0_10px,transparent_10px_16px)]" />
          </Reveal>
        </div>
        <Reveal variant="slam" className="md:col-span-8" delayMs={80}>
          <p className="text-lg leading-relaxed text-ink/85 md:pt-16">{t.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
