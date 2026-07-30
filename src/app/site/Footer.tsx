import { Link } from "react-router";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useT } from "@/app/i18n";
import { Ambient } from "./ui";
import { brand, logo, routes, studioHours } from "./data";

export function Footer() {
  const t = useT();

  const links = [
    { label: t.nav.home, to: routes.home },
    { label: t.nav.about, to: routes.about },
    { label: t.nav.services, to: routes.services },
    { label: t.nav.portfolio, to: routes.portfolio },
    { label: t.nav.contact, to: routes.contact },
    { label: t.nav.booking, to: routes.booking },
  ];

  const socials = [
    { href: brand.instagram, label: t.common.instagram, icon: Instagram, external: true },
    { href: brand.whatsapp, label: t.common.whatsapp, icon: MessageCircle, external: true },
    { href: brand.phoneHref, label: t.common.phone, icon: Phone, external: false },
  ];

  return (
    <footer className="relative overflow-hidden bg-plum-dark text-white pt-16 pb-10 px-6">
      <Ambient tone="dark" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="flex items-start gap-4">
            <Link
              to={routes.home}
              aria-label={`${brand.name} · ${t.nav.home}`}
              className="glass-dark w-14 h-14 shrink-0 !rounded-full p-1"
            >
              <ImageWithFallback
                src={logo}
                alt={brand.name}
                className="relative z-[1] w-full h-full rounded-full object-cover"
              />
            </Link>
            <div>
              <Link
                to={routes.home}
                className="font-display text-2xl tracking-[0.02em] text-white hover:text-blush transition-colors"
                style={{ fontWeight: 500 }}
              >
                {brand.wordmark}
              </Link>
              <p className="text-sm text-white/72 mt-4 leading-relaxed max-w-xs">{t.footer.about}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:text-center">
            <p className="eyebrow text-blush">{t.footer.explore}</p>
            <ul className="mt-5 flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-body text-[0.7rem] tracking-[0.2em] uppercase text-white/78 hover:text-white transition-colors"
                    style={{ fontWeight: 500 }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <p className="eyebrow text-blush">{t.footer.studio}</p>
            <ul className="mt-5 flex flex-col gap-2 text-sm text-white/85">
              <li>
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t.common.whatsapp} · {brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t.common.instagram} · {brand.instagramHandle}
                </a>
              </li>
              {studioHours.map((h) => (
                <li key={h.day} className="text-sm text-white/70">
                  {t.common.hours[h.day]} · {h.to ? `${h.from} ${t.common.hours.to} ${h.to}` : t.common.hours.byAppointment}
                </li>
              ))}
            </ul>

            <div className="flex md:justify-end gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="glass-dark p-3 !rounded-full hover:bg-white/25 transition-colors"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-7 border-t border-white/12 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.7rem] text-white/72">
          <p>
            © {new Date().getFullYear()} {brand.name} · {t.common.artist}. {t.footer.rights}
          </p>
          <p className="font-display tracking-wide text-blush/80 text-sm">{t.footer.motto}</p>
        </div>

        <p className="mt-6 text-center text-[0.68rem] text-white/60">
          {t.footer.credit}{" "}
          <a
            href="https://mazharcreativeagency.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blush hover:text-white underline decoration-blush/40 hover:decoration-white underline-offset-4 transition-colors"
          >
            Mazhar Creative Agency
          </a>
        </p>
      </div>
    </footer>
  );
}
