import { Link } from "react-router";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { brand, logo, navLinks } from "./data";

const socials = [
  { href: brand.instagram, label: "Instagram", icon: Instagram, external: true },
  { href: brand.whatsapp, label: "WhatsApp", icon: MessageCircle, external: true },
  { href: brand.phoneHref, label: "Phone", icon: Phone, external: false },
];

export function Footer() {
  return (
    <footer className="bg-mauve-deep text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div className="flex items-start gap-4">
            <ImageWithFallback
              src={logo}
              alt={brand.name}
              className="w-14 h-14 rounded-full object-cover"
              style={{ boxShadow: "0 0 0 1px rgba(254,181,203,0.5), 0 8px 18px -8px rgba(0,0,0,0.5)" }}
            />
            <div>
              <p className="font-display text-xl tracking-[0.14em] text-white" style={{ fontWeight: 600 }}>
                {brand.wordmark}
              </p>
              <p className="text-[0.6rem] font-body tracking-[0.3em] uppercase text-blush mt-1.5" style={{ fontWeight: 600 }}>
                {brand.tagline}
              </p>
              <p className="text-xs text-white/60 mt-4 leading-relaxed max-w-xs">
                The nail atelier of {brand.artist} — structured extensions and hand-painted detail, by appointment.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:text-center">
            <p className="eyebrow text-blush">Explore</p>
            <ul className="mt-5 flex flex-col gap-3">
              {[...navLinks, { label: "Booking", to: "/booking" }].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-body text-[0.7rem] tracking-[0.2em] uppercase text-white/65 hover:text-white transition-colors"
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
            <p className="eyebrow text-blush">Studio</p>
            <ul className="mt-5 flex flex-col gap-2 text-sm text-white/75">
              <li>
                <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp · {brand.phone}
                </a>
              </li>
              <li>
                <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram · {brand.instagramHandle}
                </a>
              </li>
              {brand.hours.map((h) => (
                <li key={h.day} className="text-xs text-white/55">
                  {h.day} — {h.time}
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
                  className="p-3 rounded-full bg-white/10 hover:bg-mauve transition-colors"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)" }}
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/12 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.7rem] text-white/45">
          <p>
            © {new Date().getFullYear()} {brand.name} · {brand.artist}. All rights reserved.
          </p>
          <p className="font-display tracking-wide text-blush/80 text-sm">Where every nail tells a story.</p>
        </div>
      </div>
    </footer>
  );
}
