import { site } from "@/lib/site";

type FooterCopy = {
  rights: string;
  follow: string;
  colophon: string;
};

export function Footer({ t }: { t: FooterCopy }) {
  const links = [
    { href: site.socials.instagram, label: "Instagram" },
    { href: site.socials.x, label: "X" },
    { href: site.socials.tiktok, label: "TikTok" },
  ];

  return (
    <footer className="charcoal-wash border-t-4 border-rust px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display distress text-5xl text-bone">{t.rights}</p>
          <p className="font-headline mt-2 text-[11px] text-ochre">{site.label}</p>
          <p className="mt-3 text-sm text-muted">{t.colophon}</p>
        </div>
        <div>
          <p className="font-headline text-[10px] text-muted">{t.follow}</p>
          <ul className="mt-3 flex flex-wrap gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-headline text-[11px] text-bone hover:text-ember"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
