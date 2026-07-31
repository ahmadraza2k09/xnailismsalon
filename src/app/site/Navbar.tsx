import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useLanguage } from "@/app/i18n";
import { brand, logo, routes } from "./data";

function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`flex items-center gap-1 p-1 bg-mauve/10 backdrop-blur-md rounded-full border border-mauve/20 ${className}`}>
      {(["es", "en"] as const).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2.5 py-1 text-[0.66rem] font-nav tracking-[0.16em] uppercase rounded-full transition-all duration-300 ${
            lang === code
              ? "bg-mauve-deep text-white shadow-md font-semibold"
              : "text-mauve-deep/70 hover:text-mauve-deep"
          }`}
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
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(255, 255, 255, 0.92)"
          : "rgba(255, 255, 255, 0.78)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        borderBottom: `1px solid ${scrolled ? "rgba(163, 91, 133, 0.2)" : "rgba(255, 255, 255, 0.5)"}`,
        boxShadow: scrolled
          ? "0 14px 40px -20px rgba(110,58,89,0.25), inset 0 1px 0 rgba(255,255,255,0.9)"
          : "inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        <Link to={routes.home} aria-label={`${brand.name} · ${t.nav.home}`} className="flex items-center gap-3.5 group">
          <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-mauve via-blush to-mauve-deep group-hover:scale-105 transition-transform duration-300 shadow-sm">
            <span className="glass-chip w-11 h-11 shrink-0 grid place-items-center p-[2px]">
              <ImageWithFallback
                src={logo}
                alt={`${brand.name} logo`}
                className="relative z-[1] w-full h-full rounded-full object-cover"
              />
            </span>
          </div>
          <span className="flex flex-col leading-none">
            <span
              className="font-display text-2xl md:text-[1.65rem] tracking-[0.02em] text-mauve-deep group-hover:text-mauve transition-colors"
              style={{ fontWeight: 600 }}
            >
              {brand.wordmark}
            </span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `relative font-nav text-[0.72rem] tracking-[0.2em] uppercase transition-all duration-300 py-1 ${
                  isActive ? "text-mauve-deep font-bold" : "text-mauve-deep/70 hover:text-mauve-deep"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{l.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-mauve to-mauve-deep rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <LanguageToggle />
          <Link
            to={routes.booking}
            className="btn-primary text-[0.66rem] px-6 py-2.5 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
          >
            {t.nav.bookNow}
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageToggle />
          <button
            className="p-2 text-mauve-deep rounded-full hover:bg-mauve/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={t.nav.menu}
            aria-expanded={open}
          >
            <span className="w-6 h-4 flex flex-col justify-between">
              <span
                className="block h-[2px] bg-current rounded-full transition-all duration-300 origin-top-right"
                style={{ transform: open ? "rotate(-45deg) translateY(2px)" : "" }}
              />
              <span className="block h-[2px] bg-current rounded-full transition-all duration-300" style={{ opacity: open ? 0 : 1 }} />
              <span
                className="block h-[2px] bg-current rounded-full transition-all duration-300 origin-bottom-right"
                style={{ transform: open ? "rotate(45deg) translateY(-2px)" : "" }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-400 glass !rounded-none !border-x-0 !border-t-0 shadow-xl"
        style={{ maxHeight: open ? "24rem" : "0" }}
      >
        <div className="px-6 py-7 flex flex-col gap-5 border-t border-border bg-white/95">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-nav text-sm tracking-[0.2em] uppercase transition-colors ${
                  isActive ? "text-mauve-deep font-bold" : "text-mauve-deep/70"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to={routes.booking} className="btn-primary text-[0.66rem] px-6 py-3.5 mt-2 shadow-md">
            {t.nav.bookAppointment}
          </Link>
        </div>
      </div>
    </nav>
  );
}
