import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/gallery"];
  const locales = ["en", "es"] as const;
  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${site.url}/${locale}${path}`,
      lastModified: new Date(),
    })),
  );
}
