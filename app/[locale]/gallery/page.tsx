import { GalleryGrid } from "@/components/GalleryGrid";
import { Reveal } from "@/components/Reveal";
import { getDictionary } from "@/lib/i18n";
import { isLocale } from "@/lib/locales";
import { galleryItems } from "@/lib/site";
import { notFound } from "next/navigation";

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale);

  return (
    <section className="bg-ink px-6 pb-24 pt-32">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="strike">
          <p className="font-headline text-[11px] text-sunset">{t.gallery.index}</p>
          <h1 className="font-display mt-2 text-6xl text-bone sm:text-7xl">
            {t.gallery.title}
          </h1>
          <p className="mt-4 max-w-xl text-bone/75">{t.gallery.pageLead}</p>
        </Reveal>
        <div className="mt-12">
          <GalleryGrid
            items={galleryItems}
            captions={t.galleryCaptions}
            closeLabel={t.gallery.close}
          />
        </div>
      </div>
    </section>
  );
}
