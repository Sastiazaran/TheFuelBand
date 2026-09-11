"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { galleryItems, type GalleryId, type GalleryItem } from "@/lib/site";

type GalleryCopy = {
  index: string;
  title: string;
  cta: string;
  pageLead: string;
  close: string;
};

export function GalleryGrid({
  items,
  captions,
  closeLabel,
}: {
  items: readonly GalleryItem[];
  captions: Record<GalleryId, string>;
  closeLabel: string;
}) {
  const [open, setOpen] = useState<number | null>(null);
  const active = open === null ? null : items[open];

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpen(index)}
            className={`group relative overflow-hidden bg-asphalt ${
              item.featured ? "col-span-2 aspect-[4/3] md:aspect-[16/10]" : "aspect-square"
            }`}
          >
            <Image
              src={item.src}
              alt={captions[item.id]}
              fill
              sizes={item.featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="font-headline absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent p-3 text-left text-[10px] text-bone">
              {captions[item.id]}
            </span>
          </button>
        ))}
      </div>
      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-h-[90vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.src}
              alt={captions[active.id]}
              width={1200}
              height={1200}
              className="h-auto max-h-[80vh] w-full object-contain"
            />
            <p className="font-headline mt-3 text-center text-xs text-bone">
              {captions[active.id]}
            </p>
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="font-headline mt-4 block w-full text-xs text-ember"
            >
              {closeLabel}
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function GalleryTeaser({
  locale,
  t,
  captions,
}: {
  locale: string;
  t: GalleryCopy;
  captions: Record<GalleryId, string>;
}) {
  const preview = galleryItems.slice(0, 6);

  return (
    <section className="bg-ink px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="font-headline text-[11px] text-sunset">
              {t.index} / {t.title}
            </p>
            <h2 className="font-display mt-2 text-5xl text-bone sm:text-6xl">{t.title}</h2>
          </div>
          <Link
            href={`/${locale}/gallery`}
            className="font-headline text-[11px] text-ember underline-offset-4 hover:underline"
          >
            {t.cta}
          </Link>
        </div>
        <GalleryGrid items={preview} captions={captions} closeLabel={t.close} />
      </div>
    </section>
  );
}
