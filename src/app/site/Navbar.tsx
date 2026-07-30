import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useLanguage } from "@/app/i18n";
import { brand, logo, routes } from "./data";

function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {(["es", "en"] as const).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2 py-1 text-[0.62rem] font-body tracking-[0.16em] uppercase rounded-full transition-colors ${
            lang === code ? "bg-mauve text-white" : "text-mauve-deep/60 hover:text-mauve"
          }`}
          style={{ fontWeight: 500 }}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const links = [
    { label: t.nav.home, to: routes.home },
    { label: t.nav.about, to: routes.about },
    { label: t.nav.services, to: routes.services },
    { label: t.nav.portfolio, to: routes.portfolio },
    { label: t.nav.contact, to: routes.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 transition-shadow duration-300 ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        <Link to={routes.home} className="flex items-center gap-3.5">
          <ImageWithFallback
            src={logo}
            alt={`${brand.name} logo`}
            className="w-11 h-11 rounded-full object-cover"
          />
          <span className="flex flex-col leading-none">
            <span
              className="font-display text-2xl md:text-[1.6rem] tracking-[0.02em] text-mauve-deep"
              style={{ fontWeight: 500 }}
            >
              {brand.wordmark}
            </span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-body text-[0.7rem] tracking-[0.2em] uppercase transition-colors ${
                  isActive ? "text-mauve" : "text-foreground/82 hover:text-mauve"
                }`
              }
              style={{ fontWeight: 500 }}
            >
              {l.label}
            </NavLink>
          ))}
          <LanguageToggle />
          <Link to={routes.booking} className="btn-primary text-[0.66rem] px-6 py-2.5">
            {t.nav.bookNow}
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageToggle />
          <button
            className="p-2 text-mauve-deep"
            onClick={() => setOpen(!open)}
            aria-label={t.nav.menu}
            aria-expanded={open}
          >
            <span className="w-6 h-4 flex flex-col justify-between">
              <span
                className="block h-px bg-current transition-all duration-300 origin-top-right"
                style={{ transform: open ? "rotate(-45deg) translateY(1px)" : "" }}
              />
              <span className="block h-px bg-current transition-all duration-300" style={{ opacity: open ? 0 : 1 }} />
              <span
                className="block h-px bg-current transition-all duration-300 origin-bottom-right"
                style={{ transform: open ? "rotate(45deg) translateY(-1px)" : "" }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-400 bg-white"
        style={{ maxHeight: open ? "24rem" : "0" }}
      >
        <div className="px-6 py-7 flex flex-col gap-5 border-t border-border">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-body text-xs tracking-[0.2em] uppercase ${isActive ? "text-mauve" : "text-foreground/82"}`
              }
              style={{ fontWeight: 500 }}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to={routes.booking} className="btn-primary text-[0.66rem] px-6 py-3.5 mt-1">
            {t.nav.bookAppointment}
          </Link>
        </div>
      </div>
    </nav>
  );
}
