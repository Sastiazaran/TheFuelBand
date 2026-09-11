import { HeroBackdrop } from "@/components/HeroBackdrop";

type HeroCopy = {
  title: string;
};

export function Hero({ t }: { t: HeroCopy }) {
  return (
    <section className="grain relative isolate min-h-[100svh] overflow-hidden bg-ink">
      <h1 className="sr-only">{t.title}</h1>
      <HeroBackdrop />
    </section>
  );
}
