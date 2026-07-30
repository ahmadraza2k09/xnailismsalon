import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { brand, logo, navLinks } from "./data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(251,246,248,0.94)" : "rgba(251,246,248,0.55)",
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${scrolled ? "rgba(163,91,133,0.16)" : "transparent"}`,
        boxShadow: scrolled ? "0 6px 24px -14px rgba(163,91,133,0.45)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3.5">
          <span
            className="rounded-full p-[3px]"
            style={{
              background: "linear-gradient(145deg, #FFFFFF, #EFDFE8)",
              boxShadow:
                "4px 4px 10px rgba(163,91,133,0.22), -4px -4px 10px rgba(255,255,255,0.95)",
            }}
          >
            <ImageWithFallback
              src={logo}
              alt={`${brand.name} logo`}
              className="w-11 h-11 rounded-full object-cover"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg md:text-xl tracking-[0.14em] text-mauve-deep" style={{ fontWeight: 600 }}>
              {brand.wordmark}
            </span>
            <span className="text-[0.55rem] font-body tracking-[0.34em] uppercase text-mauve/75 mt-1.5" style={{ fontWeight: 600 }}>
              Nail Atelier
            </span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-body text-[0.7rem] tracking-[0.2em] uppercase transition-colors relative py-1 ${
                  isActive ? "text-mauve" : "text-foreground/70 hover:text-mauve"
                }`
              }
              style={{ fontWeight: 600 }}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px bg-mauve transition-all duration-300"
                    style={{ width: isActive ? "100%" : "0%" }}
                  />
                </>
              )}
            </NavLink>
          ))}
          <Link to="/booking" className="btn-lux text-[0.68rem] px-6 py-2.5">
            Book now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-mauve-deep"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
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

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{
          maxHeight: open ? "24rem" : "0",
          background: "rgba(251,246,248,0.98)",
          backdropFilter: "blur(18px)",
        }}
      >
        <div className="px-6 py-7 flex flex-col gap-5 border-t border-mauve/15">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-body text-xs tracking-[0.2em] uppercase ${isActive ? "text-mauve" : "text-foreground/75"}`
              }
              style={{ fontWeight: 600 }}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/booking" className="btn-lux text-[0.68rem] px-6 py-3.5 mt-1">
            Book an appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
