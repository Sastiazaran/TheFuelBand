import type { GalleryId } from "@/lib/site";
import type { Locale } from "@/lib/locales";

const galleryCaptions = {
  en: {
    "get-away": "Get Away",
    "dont-disappoint-me": "Don’t Disappoint Me",
    vocals: "Vocals",
    guitar: "Guitar",
    drums: "Drums",
    bass: "Bass",
    redline: "Redline",
    "sunset-run": "Sunset run",
    plate: "THE FUEL",
    horizon: "Horizon",
  },
  es: {
    "get-away": "Get Away",
    "dont-disappoint-me": "Don’t Disappoint Me",
    vocals: "Voz",
    guitar: "Guitarra",
    drums: "Batería",
    bass: "Bajo",
    redline: "A fondo",
    "sunset-run": "Hacia el sol",
    plate: "THE FUEL",
    horizon: "Horizonte",
  },
} satisfies Record<Locale, Record<GalleryId, string>>;

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
      lead: "Classic muscle. Modern grit. No apology.",
      ctaMusic: "Singles",
      ctaGallery: "Gallery",
      scroll: "Scroll",
    },
    music: {
      index: "01",
      title: "Singles",
      listen: "Listen",
      outNow: "Out now",
      next: "Next",
      comingSoon: "Coming soon",
    },
    about: {
      index: "02",
      title: "The Band",
      body: "THE FUEL is built on classic hard rock muscle and a modern charge — loud, lean, restless. Grit in the riffs, heat in the hooks, no polish for polish’s sake. Just a redline pulse and songs that don’t ask permission.",
    },
    reel: {
      index: "03",
      kicker: "Instagram",
      title: "Latest reel",
      body: "Fresh heat from @thefuel.official.",
      cta: "Watch the reel",
    },
    gallery: {
      index: "04",
      title: "Gallery",
      cta: "See it all",
      pageLead: "Covers, members, sunset miles.",
      close: "Close",
    },
    footer: {
      rights: "THE FUEL",
      follow: "Follow",
    },
    notFound: {
      title: "Lost in the dark",
      body: "This page burned out.",
      home: "Back to THE FUEL",
    },
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
      lead: "Músculo clásico. Grit moderno. Sin pedir perdón.",
      ctaMusic: "Singles",
      ctaGallery: "Galería",
      scroll: "Bajar",
    },
    music: {
      index: "01",
      title: "Singles",
      listen: "Escuchar",
      outNow: "Disponible",
      next: "Próximo",
      comingSoon: "Próximamente",
    },
    about: {
      index: "02",
      title: "La banda",
      body: "THE FUEL nace del músculo del hard rock clásico y de una carga moderna — alta, afilada, inquieta. Grit en los riffs, calor en los hooks, sin barniz de más. Solo pulso a fondo y canciones que no piden permiso.",
    },
    reel: {
      index: "03",
      kicker: "Instagram",
      title: "Último reel",
      body: "Fuego nuevo de @thefuel.official.",
      cta: "Ver el reel",
    },
    gallery: {
      index: "04",
      title: "Galería",
      cta: "Ver todo",
      pageLead: "Portadas, la banda, kilómetros de atardecer.",
      close: "Cerrar",
    },
    footer: {
      rights: "THE FUEL",
      follow: "Seguir",
    },
    notFound: {
      title: "Perdido en la oscuridad",
      body: "Esta página se apagó.",
      home: "Volver a THE FUEL",
    },
    galleryCaptions: galleryCaptions.es,
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
