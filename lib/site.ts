export const site = {
  name: "THE FUEL",
  genre: "HARD ROCK",
  url: "https://thefuelband.vercel.app",
  logo: "/brand/the-fuel-logo.png",
  linktree: "https://linktr.ee/TheFuelBand",
  socials: {
    instagram: "https://www.instagram.com/thefuel.official/",
    x: "https://x.com/thefuel_oficial",
    tiktok: "https://www.tiktok.com/@thefuel_official",
    spotify: "https://open.spotify.com/artist/2Lm2TP2aGGUfqoWxZlaqYw",
  },
  singles: [
    {
      id: "get-away",
      title: "Get Away",
      status: "out" as const,
      cover: "/covers/get-away.jpg",
      href: "https://open.spotify.com/album/0kuGpYTfuaYe4k32I0WfcW",
    },
    {
      id: "dont-disappoint-me",
      title: "Don’t Disappoint Me",
      status: "out" as const,
      cover: "/covers/dont-disappoint-me.jpg",
      href: "https://open.spotify.com/album/0om2kKzvFMzerQoO1LWj99",
    },
    {
      id: "the-girl-who-likes-rock-and-roll",
      title: "The Girl Who Likes Rock and Roll",
      status: "next" as const,
      cover: null,
      href: null,
    },
  ],
} as const;

export const galleryItems = [
  { id: "get-away", src: "/covers/get-away.jpg", featured: true },
  {
    id: "dont-disappoint-me",
    src: "/covers/dont-disappoint-me.jpg",
    featured: true,
  },
  { id: "drums", src: "/gallery/drums.jpg", featured: false },
  { id: "vocals", src: "/gallery/vocals.jpg", featured: false },
  { id: "guitar", src: "/gallery/guitar.jpg", featured: false },
  { id: "bass", src: "/gallery/bass.jpg", featured: false },
  { id: "redline", src: "/gallery/redline.jpg", featured: false },
  { id: "sunset-run", src: "/gallery/sunset-run.jpg", featured: false },
  { id: "plate", src: "/gallery/plate.jpg", featured: false },
  { id: "horizon", src: "/gallery/horizon.jpg", featured: false },
] as const;

export type GalleryId = (typeof galleryItems)[number]["id"];

export type GalleryItem = {
  id: GalleryId;
  src: string;
  featured: boolean;
};
