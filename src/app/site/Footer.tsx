import { Link } from "react-router";
import { Instagram, MessageCircle, Phone, ArrowUpRight, Heart } from "lucide-react";
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
    <footer className="relative overflow-hidden bg-gradient-to-b from-plum-dark via-[#3d1c31] to-[#25101f] text-white pt-20 pb-12 px-6 border-t border-white/10">
      <Ambient tone="dark" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand Column */}
          <div className="flex items-start gap-4">
            <Link
              to={routes.home}
              aria-label={`${brand.name} · ${t.nav.home}`}
              className="relative p-0.5 rounded-full bg-gradient-to-tr from-blush via-mauve to-white shrink-0 group"
            >
              <div className="w-14 h-14 rounded-full overflow-hidden p-0.5 bg-plum-dark">
                <ImageWithFallback
                  src={logo}
                  alt={brand.name}
                  className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <div>
              <Link
                to={routes.home}
                className="font-display text-2xl md:text-3xl tracking-[0.02em] text-white hover:text-blush transition-colors font-semibold"
              >
                {brand.wordmark}
              </Link>
              <p className="text-sm text-white/80 mt-3 leading-relaxed max-w-xs">{t.footer.about}</p>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:text-center">
            <p className="eyebrow !text-blush tracking-[0.22em] font-semibold">{t.footer.explore}</p>
            <ul className="mt-5 flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-1 font-body text-[0.72rem] tracking-[0.2em] uppercase text-white/75 hover:text-white transition-colors"
                  >
                    <span>{l.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:text-right">
            <p className="eyebrow !text-blush tracking-[0.22em] font-semibold">{t.footer.studio}</p>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm text-white/85">
              <li>
                <a
                  href={brand.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blush transition-colors inline-flex items-center md:justify-end gap-1.5 font-medium"
                >
                  <MessageCircle size={14} className="text-blush" />
                  <span>{t.common.whatsapp} · {brand.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blush transition-colors inline-flex items-center md:justify-end gap-1.5 font-medium"
                >
                  <Instagram size={14} className="text-blush" />
                  <span>{t.common.instagram} · {brand.instagramHandle}</span>
                </a>
              </li>
              {studioHours.map((h) => (
                <li key={h.day} className="text-xs text-white/70">
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
                  className="p-3 rounded-full bg-white/10 border border-white/15 hover:bg-white/25 hover:scale-110 text-white transition-all duration-300 shadow-md"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.72rem] text-white/70">
          <p>
            © {new Date().getFullYear()} {brand.name} · {t.common.artist}. {t.footer.rights}
          </p>
          <p className="font-display tracking-wide text-blush text-sm font-medium">{t.footer.motto}</p>
        </div>

        <p className="mt-6 text-center text-[0.68rem] text-white/60 flex items-center justify-center gap-1">
          <span>{t.footer.credit}</span>
          <a
            href="https://mazharcreativeagency.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blush hover:text-white font-medium underline decoration-blush/40 hover:decoration-white underline-offset-4 transition-colors"
          >
            Mazhar Creative Agency
          </a>
        </p>
      </div>
    </footer>
  );
}
