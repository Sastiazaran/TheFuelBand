export const site = {
  name: "THE FUEL",
  label: "the fuel",
  url: "https://thefuelband.vercel.app",
  logo: "/brand/the-fuel-logo.png",
  wordmark: "/brand/the-fuel-logo-transparent.png",
  hero: {
    video: "/hero/loop.mp4",
    poster: "/hero/loop-poster.jpg",
  },
  instagramReelUrl: "https://www.instagram.com/thefuel.official/reel/Db6nCBvxfwg/",
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
  members: [
    {
      id: "asti",
      name: "Asti",
      src: "/band/asti-stage-shirtless.jpg",
      tilt: -4.2,
    },
    {
      id: "ati",
      name: "Ati",
      src: "/band/ati-drums-red.jpg",
      tilt: 3.4,
    },
    {
      id: "beto",
      name: "Beto",
      src: "/band/beto-bass.jpg",
      tilt: -2.1,
    },
    {
      id: "alan",
      name: "Alan",
      src: "/band/alan-jackson-studio.jpg",
      tilt: 4.8,
    },
  ],
} as const;

export const galleryItems = [
  { id: "studio-jackson-v", src: "/gallery/01-studio-jackson-v.jpg", featured: true, tilt: -2.4 },
  { id: "duo-guitar-energy", src: "/gallery/02-duo-guitar-energy.jpg", featured: true, tilt: 1.8 },
  { id: "horns-duo-bts", src: "/gallery/03-horns-duo-bts.jpg", featured: false, tilt: 2.6 },
  { id: "street-horns-brand", src: "/gallery/04-street-horns-brand.jpg", featured: false, tilt: -1.7 },
  { id: "portrait-long-hair", src: "/gallery/05-portrait-long-hair.jpg", featured: false, tilt: 3.1 },
  { id: "finger-gun-brand", src: "/gallery/06-finger-gun-brand.jpg", featured: false, tilt: -2.8 },
  { id: "doorway-silhouette", src: "/gallery/07-doorway-silhouette.jpg", featured: false, tilt: 1.2 },
  { id: "merch-the-fuel", src: "/gallery/08-merch-the-fuel.jpg", featured: false, tilt: -3.3 },
  { id: "sticker-wall-brand", src: "/gallery/09-sticker-wall-brand.jpg", featured: false, tilt: 2.2 },
  { id: "leather-iem-street", src: "/gallery/10-leather-iem-street.jpg", featured: false, tilt: -1.4 },
  { id: "night-laugh-bts", src: "/gallery/11-night-laugh-bts.jpg", featured: false, tilt: 3.6 },
  { id: "night-duo-portrait", src: "/gallery/12-night-duo-portrait.jpg", featured: false, tilt: -2.0 },
  { id: "portrait-tank-gold-cross", src: "/gallery/13-portrait-tank-gold-cross.jpg", featured: false, tilt: 1.5 },
  { id: "urban-candid", src: "/gallery/14-urban-candid.jpg", featured: false, tilt: -3.8 },
  { id: "singer-arm-up-blue", src: "/gallery/15-singer-arm-up-blue.jpg", featured: false, tilt: 2.4 },
  { id: "guitarist-leather-vertical", src: "/gallery/16-guitarist-leather-vertical.jpg", featured: false, tilt: -2.6 },
  { id: "singer-profile-red-led", src: "/gallery/17-singer-profile-red-led.jpg", featured: false, tilt: 1.9 },
  { id: "singer-neon-mic-close", src: "/gallery/18-singer-neon-mic-close.jpg", featured: false, tilt: -1.8 },
  { id: "duo-bass-vocals", src: "/gallery/19-duo-bass-vocals.jpg", featured: true, tilt: 2.1 },
  { id: "singer-arms-wide-fuel", src: "/gallery/20-singer-arms-wide-fuel.jpg", featured: false, tilt: -3.2 },
  { id: "beto-bass-spotlight", src: "/gallery/21-beto-bass-spotlight.jpg", featured: false, tilt: 1.4 },
  { id: "explorer-guitar-dutch", src: "/gallery/22-explorer-guitar-dutch.jpg", featured: false, tilt: -2.3 },
  { id: "duo-singer-guitar-fuel", src: "/gallery/23-duo-singer-guitar-fuel.jpg", featured: true, tilt: 3.0 },
  { id: "drummer-pearl-led", src: "/gallery/24-drummer-pearl-led.jpg", featured: false, tilt: -1.6 },
  { id: "bass-guitar-interaction", src: "/gallery/25-bass-guitar-interaction.jpg", featured: false, tilt: 2.7 },
  { id: "fist-raise-duo", src: "/gallery/26-fist-raise-duo.jpg", featured: false, tilt: -2.9 },
  { id: "trio-wide-fuel-logo", src: "/gallery/27-trio-wide-fuel-logo.jpg", featured: false, tilt: 1.1 },
  { id: "singer-fuel-intensity", src: "/gallery/28-singer-fuel-intensity.jpg", featured: false, tilt: -3.5 },
] as const;

export type GalleryId = (typeof galleryItems)[number]["id"];
export type MemberId = (typeof site.members)[number]["id"];

export type GalleryItem = {
  id: GalleryId;
  src: string;
  featured: boolean;
  tilt: number;
};
