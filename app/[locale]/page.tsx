import { About } from "@/components/About";
import { GalleryTeaser } from "@/components/GalleryGrid";
import { Hero } from "@/components/Hero";
import { InstagramReel } from "@/components/InstagramReel";
import { Music } from "@/components/Music";
import { getDictionary } from "@/lib/i18n";
import { isLocale } from "@/lib/locales";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} t={t.hero} />
      <div className="slash-edge bg-asphalt" />
      <Music t={t.music} />
      <div className="slash-edge bg-paper" />
      <About t={t.about} />
      <div className="slash-edge bg-ink" />
      <InstagramReel t={t.reel} />
      <GalleryTeaser locale={locale} t={t.gallery} captions={t.galleryCaptions} />
    </>
  );
}
