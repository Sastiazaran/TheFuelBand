import type { GalleryId, MemberId } from "@/lib/site";
import type { Locale } from "@/lib/locales";

const galleryCaptions = {
  en: {
    "studio-jackson-v": "Jackson heat",
    "duo-guitar-energy": "Two-man wrecking",
    "horns-duo-bts": "Horns up",
    "street-horns-brand": "Street charge",
    "portrait-long-hair": "Long hair, short fuse",
    "finger-gun-brand": "Point blank",
    "doorway-silhouette": "Doorway",
    "merch-the-fuel": "Merch that bites",
    "sticker-wall-brand": "Sticker wall",
    "leather-iem-street": "Leather & IEM",
    "night-laugh-bts": "Night laugh",
    "night-duo-portrait": "After hours",
    "portrait-tank-gold-cross": "Gold cross",
    "urban-candid": "Candid miles",
  },
  es: {
    "studio-jackson-v": "Jackson al rojo",
    "duo-guitar-energy": "Dúo a romper",
    "horns-duo-bts": "Cuernos arriba",
    "street-horns-brand": "Carga en la calle",
    "portrait-long-hair": "Pelo largo, mecha corta",
    "finger-gun-brand": "A quemarropa",
    "doorway-silhouette": "El umbral",
    "merch-the-fuel": "Merch que muerde",
    "sticker-wall-brand": "Muro de stickers",
    "leather-iem-street": "Cuero e IEM",
    "night-laugh-bts": "Risa de noche",
    "night-duo-portrait": "Después del show",
    "portrait-tank-gold-cross": "Cruz de oro",
    "urban-candid": "Al vuelo",
  },
} satisfies Record<Locale, Record<GalleryId, string>>;

const memberRoles = {
  en: {
    asti: "Vocals",
    ati: "Drums",
    beto: "Bass",
    alan: "Guitar",
  },
  es: {
    asti: "Voz",
    ati: "Batería",
    beto: "Bajo",
    alan: "Guitarra",
  },
} satisfies Record<Locale, Record<MemberId, string>>;

export const dictionaries = {
  en: {
    meta: {
      title: "THE FUEL",
      description:
        "THE FUEL — hard rock with classic muscle and modern grit. Singles Get Away and Don’t Disappoint Me out now. Next: The Girl Who Likes Rock and Roll.",
    },
    nav: {
      home: "Home",
      music: "Music",
      band: "Band",
      about: "About",
      gallery: "Gallery",
      skip: "Skip to content",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      kicker: "the fuel",
      title: "THE FUEL",
      genre: "the fuel",
      issue: "Issue 01",
      lead: "Classic muscle. Modern grit. No apology.",
      ctaMusic: "Singles",
      ctaGallery: "Gallery",
      scroll: "Flip the page",
    },
    music: {
      index: "01",
      title: "Singles",
      listen: "Listen",
      outNow: "Out now",
      next: "Next",
      comingSoon: "Coming soon",
    },
    band: {
      index: "02",
      title: "The Band",
      kicker: "Polaroids",
    },
    about: {
      index: "03",
      title: "Liner notes",
      body: "THE FUEL is built on classic hard rock muscle and a modern charge — loud, lean, restless. Grit in the riffs, heat in the hooks, no polish for polish’s sake. Just a redline pulse and songs that don’t ask permission.",
    },
    gallery: {
      index: "04",
      title: "Gallery",
      cta: "See it all",
      pageLead: "Cured stills. No filler. Tape optional.",
      close: "Close",
    },
    reel: {
      index: "05",
      kicker: "Instagram",
      title: "Latest reel",
      body: "Fresh heat from @thefuel.official.",
      cta: "Watch the reel",
    },
    footer: {
      rights: "THE FUEL",
      follow: "Follow",
      colophon: "Printed in the red.",
    },
    notFound: {
      title: "Lost in the dark",
      body: "This page burned out.",
      home: "Back to THE FUEL",
    },
    memberRoles: memberRoles.en,
    galleryCaptions: galleryCaptions.en,
  },
  es: {
    meta: {
      title: "THE FUEL",
      description:
        "THE FUEL — hard rock con músculo clásico y grit moderno. Singles Get Away y Don’t Disappoint Me disponibles. Próximo: The Girl Who Likes Rock and Roll.",
    },
    nav: {
      home: "Inicio",
      music: "Música",
      band: "Banda",
      about: "Banda",
      gallery: "Galería",
      skip: "Saltar al contenido",
      menu: "Menú",
      close: "Cerrar",
    },
    hero: {
      kicker: "the fuel",
      title: "THE FUEL",
      genre: "the fuel",
      issue: "Número 01",
      lead: "Músculo clásico. Grit moderno. Sin pedir perdón.",
      ctaMusic: "Singles",
      ctaGallery: "Galería",
      scroll: "Pasa la página",
    },
    music: {
      index: "01",
      title: "Singles",
      listen: "Escuchar",
      outNow: "Disponible",
      next: "Próximo",
      comingSoon: "Próximamente",
    },
    band: {
      index: "02",
      title: "La banda",
      kicker: "Polaroids",
    },
    about: {
      index: "03",
      title: "Notas",
      body: "THE FUEL nace del músculo del hard rock clásico y de una carga moderna — alta, afilada, inquieta. Grit en los riffs, calor en los hooks, sin barniz de más. Solo pulso a fondo y canciones que no piden permiso.",
    },
    gallery: {
      index: "04",
      title: "Galería",
      cta: "Ver todo",
      pageLead: "Stills curados. Sin relleno. Cinta opcional.",
      close: "Cerrar",
    },
    reel: {
      index: "05",
      kicker: "Instagram",
      title: "Último reel",
      body: "Fuego nuevo de @thefuel.official.",
      cta: "Ver el reel",
    },
    footer: {
      rights: "THE FUEL",
      follow: "Seguir",
      colophon: "Impreso en rojo.",
    },
    notFound: {
      title: "Perdido en la oscuridad",
      body: "Esta página se apagó.",
      home: "Volver a THE FUEL",
    },
    memberRoles: memberRoles.es,
    galleryCaptions: galleryCaptions.es,
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
