"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { Reveal } from "@/components/Reveal";
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
      <div className="grid grid-cols-2 items-start gap-5 md:grid-cols-4 md:gap-7">
        {items.map((item, index) => (
          <Reveal
            key={item.id}
            variant="rise"
            delayMs={index * 60}
            className={item.featured ? "col-span-2" : ""}
          >
            <button
              type="button"
              onClick={() => setOpen(index)}
              className={`polaroid group w-full text-left ${
                item.featured ? "" : ""
              }`}
              style={{ "--tilt": `${item.tilt}deg` } as CSSProperties}
            >
              <span
                className="tape tape-top"
                style={
                  {
                    "--tape-tilt": index % 2 === 0 ? "-10deg" : "9deg",
                  } as CSSProperties
                }
              />
              <span
                className={`relative block overflow-hidden bg-asphalt ${
                  item.featured ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={captions[item.id]}
                  fill
                  sizes={
                    item.featured
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </span>
              <span className="polaroid-caption">{captions[item.id]}</span>
            </button>
          </Reveal>
        ))}
      </div>
      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl bg-bone p-3 pb-8 shadow-[8px_10px_0_rgba(0,0,0,0.45)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={captions[active.id]}
              width={1200}
              height={1200}
              className="h-auto max-h-[75vh] w-full object-contain"
            />
            <p className="polaroid-caption">{captions[active.id]}</p>
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="font-headline mt-3 block w-full text-xs text-blood"
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
    <section id="gallery" className="charcoal-wash px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-4">
          <Reveal variant="strike">
            <p className="font-headline text-[11px] text-ochre">
              {t.index} / {t.title}
            </p>
            <h2 className="font-display distress mt-2 text-5xl text-bone sm:text-7xl">
              {t.title}
            </h2>
          </Reveal>
          <Link href={`/${locale}/gallery`} className="sticker text-[10px]">
            {t.cta}
          </Link>
        </div>
        <GalleryGrid items={preview} captions={captions} closeLabel={t.close} />
      </div>
    </section>
  );
}
