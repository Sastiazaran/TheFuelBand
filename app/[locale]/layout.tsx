import type { Metadata } from "next";
import { Bebas_Neue, Oswald, Source_Sans_3 } from "next/font/google";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/locales";
import { site } from "@/lib/site";
import "../globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  variable: "--font-oswald",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source",
});

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url: `${site.url}/${locale}`,
      siteName: site.name,
      locale: locale === "es" ? "es_ES" : "en_US",
      images: [
        {
          url: site.logo,
          width: 616,
          height: 616,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: t.meta.title,
      description: t.meta.description,
      images: [site.logo],
    },
    icons: {
      icon: site.logo,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);

  return (
    <html
      lang={locale}
      className={`${bebas.variable} ${oswald.variable} ${sourceSans.variable} h-full`}
    >
      <body className={`${sourceSans.className} min-h-full bg-charcoal text-bone antialiased`}>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-blood focus:px-4 focus:py-2"
        >
          {t.nav.skip}
        </a>
        <Header locale={locale as Locale} t={t.nav} />
        <main id="content">{children}</main>
        <Footer t={t.footer} />
      </body>
    </html>
  );
}
