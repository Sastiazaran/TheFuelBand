import { About } from "@/components/About";
import { Band } from "@/components/Band";
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
      <Music t={t.music} />
      <Band t={t.band} roles={t.memberRoles} />
      <About t={t.about} />
      <GalleryTeaser locale={locale} t={t.gallery} captions={t.galleryCaptions} />
      <InstagramReel t={t.reel} />
    </>
  );
}
