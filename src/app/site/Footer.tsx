import { Link } from "react-router";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useT } from "@/app/i18n";
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
    <footer className="bg-mauve-deep text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="flex items-start gap-4">
            <ImageWithFallback src={logo} alt={brand.name} className="w-14 h-14 rounded-full object-cover" />
            <div>
              <p className="font-display text-2xl tracking-[0.02em] text-white" style={{ fontWeight: 500 }}>
                {brand.wordmark}
              </p>
              <p className="text-xs text-white/72 mt-4 leading-relaxed max-w-xs">{t.footer.about}</p>
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
                <li key={h.day} className="text-xs text-white/70">
                  {t.common.hours[h.day]} — {h.time ?? t.common.hours.byAppointment}
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
                  className="p-3 rounded-full border border-white/20 hover:bg-mauve hover:border-mauve transition-colors"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/12 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.7rem] text-white/72">
          <p>
            © {new Date().getFullYear()} {brand.name} · {t.common.artist}. {t.footer.rights}
          </p>
          <p className="font-display tracking-wide text-blush/80 text-sm">{t.footer.motto}</p>
        </div>
      </div>
    </footer>
  );
}
