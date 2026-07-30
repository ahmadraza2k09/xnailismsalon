import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Instagram, Phone, MessageCircle, Star, X, ChevronDown, Sparkles, Gem, Layers, Palette } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logo from "@/imports/85e7fa0a-69f4-487a-8b11-09f22196f1c0-modified.png";
import builderGelImg from "@/imports/8d5e0d9b-595f-4f62-bef6-e00598cbf0f7.jpeg";
import polygelImg from "@/imports/b29a61bf-cc3d-41e2-a835-0f15e46500aa.jpeg";
import acrylicImg from "@/imports/092385ee-ae0d-42ec-b0fc-d857f4e13718.jpeg";
import asianArtImg from "@/imports/8e8b75cf-bcf8-411e-a516-4dc67de67d3b.jpeg";
import gallery1 from "@/imports/201b52d1-291b-4f09-9168-53d4eecac74e.jpeg";
import gallery2 from "@/imports/cbe5e474-8f30-4240-814c-568a9d72849e.jpeg";
import gallery3 from "@/imports/d2e1918e-2b53-48ec-ba06-5a0663e2aa06.jpeg";

/* ─── Fade-in-on-scroll wrapper ─────────────────────────────────── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Floating petal SVG decoration ─────────────────────────────── */
function Petal({
  className = "",
  size = 48,
  opacity = 0.18,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <ellipse
        cx="30"
        cy="40"
        rx="18"
        ry="36"
        fill="url(#petalGrad)"
        transform="rotate(-15 30 40)"
      />
      <defs>
        <linearGradient id="petalGrad" x1="12" y1="10" x2="48" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8A8CC" />
          <stop offset="0.5" stopColor="#B8688E" />
          <stop offset="1" stopColor="#8B4E6E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─── Section label ──────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-xs font-semibold tracking-[0.22em] uppercase text-primary mb-3"
      style={{ fontFamily: "Manrope, sans-serif", letterSpacing: "0.22em" }}
    >
      {children}
    </span>
  );
}

/* ─── Divider ────────────────────────────────────────────────────── */
function OrchidDivider() {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" fill="#A8638A" fillOpacity="0.6" />
        <circle cx="12" cy="5" r="2" fill="#A8638A" fillOpacity="0.35" />
        <circle cx="12" cy="19" r="2" fill="#A8638A" fillOpacity="0.35" />
        <circle cx="5" cy="12" r="2" fill="#A8638A" fillOpacity="0.35" />
        <circle cx="19" cy="12" r="2" fill="#A8638A" fillOpacity="0.35" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════════ */
export default function App() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (lightbox) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const handleWhatsApp = () => {
    const msg = `Hello Ximena! 🌸

I would like to book an appointment.

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📅 Preferred Date: ${form.date}
⏰ Preferred Time: ${form.time}
💅 Service: ${form.service}
📝 Additional Notes: ${form.notes || "None"}

Thank you!`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/526643289886?text=${encoded}`, "_blank");
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Book", href: "#booking" },
    { label: "Contact", href: "#contact" },
  ];

  const galleryImages = [
    { src: builderGelImg, alt: "Copper chrome builder gel nails" },
    { src: asianArtImg, alt: "Pink floral Asian nail art" },
    { src: gallery1, alt: "Gray star and polka dot nail art" },
    { src: acrylicImg, alt: "Gold foil acrylic nail extensions" },
    { src: polygelImg, alt: "Dark mauve polygel nail extensions" },
    { src: gallery2, alt: "Crystal gem Asian nail art" },
    { src: gallery3, alt: "Zebra print French tip acrylic nails" },
  ];

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "Manrope, sans-serif" }}
    >
      {/* ── GLOBAL STYLES ─────────────────────────────────────────── */}
      <style>{`
        :root { scroll-behavior: smooth; }
        ::selection { background: #A8638A33; color: #2C1A1D; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #A8638A55; border-radius: 3px; }
        .serif { font-family: 'Playfair Display', serif; }
        .btn-primary {
          background: linear-gradient(135deg, #A8638A 0%, #8B4E6E 100%);
          color: #fff;
          border: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(168,99,138,0.28);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(168,99,138,0.38);
          background: linear-gradient(135deg, #B8729A 0%, #9B5E7E 100%);
        }
        .btn-outline {
          background: transparent;
          border: 1.5px solid rgba(168,99,138,0.55);
          color: #A8638A;
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          background: rgba(168,99,138,0.08);
          border-color: #A8638A;
          transform: translateY(-2px);
        }
        .card-hover {
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(168,99,138,0.16);
        }
        .gallery-img { transition: transform 0.45s cubic-bezier(0.22,1,0.36,1); }
        .gallery-img:hover { transform: scale(1.04); }
        .float-petal {
          animation: floatPetal 6s ease-in-out infinite;
        }
        .float-petal-2 {
          animation: floatPetal 8s ease-in-out 1s infinite;
        }
        .float-petal-3 {
          animation: floatPetal 7s ease-in-out 2.5s infinite;
        }
        @keyframes floatPetal {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(5deg); }
          66% { transform: translateY(-6px) rotate(-3deg); }
        }
        .form-input {
          background: #fff;
          border: 1.5px solid rgba(168,99,138,0.2);
          border-radius: 0.75rem;
          padding: 0.875rem 1.125rem;
          width: 100%;
          font-family: Manrope, sans-serif;
          font-size: 0.9rem;
          color: #2C1A1D;
          transition: border-color 0.25s, box-shadow 0.25s;
          outline: none;
        }
        .form-input:focus {
          border-color: #A8638A;
          box-shadow: 0 0 0 3px rgba(168,99,138,0.12);
        }
        .form-input::placeholder { color: #B89AAC; }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════
          NAV
      ══════════════════════════════════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: navScrolled
            ? "rgba(250,247,245,0.92)"
            : "transparent",
          backdropFilter: navScrolled ? "blur(16px)" : "none",
          borderBottom: navScrolled ? "1px solid rgba(168,99,138,0.12)" : "none",
          boxShadow: navScrolled ? "0 2px 24px rgba(168,99,138,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <ImageWithFallback
              src={logo}
              alt="X.NailsM logo"
              className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className="serif text-xl font-semibold tracking-wide hidden sm:block"
              style={{ color: "#A8638A" }}
            >
              X.NailsM
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium tracking-wide text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              className="btn-primary text-sm font-semibold px-6 py-2.5 rounded-full cursor-pointer"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className="block h-0.5 bg-current transition-all duration-300 origin-top-right"
                style={{ transform: mobileMenu ? "rotate(-45deg) translateY(1px)" : "" }}
              />
              <span
                className="block h-0.5 bg-current transition-all duration-300"
                style={{ opacity: mobileMenu ? 0 : 1 }}
              />
              <span
                className="block h-0.5 bg-current transition-all duration-300 origin-bottom-right"
                style={{ transform: mobileMenu ? "rotate(45deg) translateY(-1px)" : "" }}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-400"
          style={{
            maxHeight: mobileMenu ? "320px" : "0",
            background: "rgba(250,247,245,0.97)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="px-6 py-6 flex flex-col gap-5 border-t border-border">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenu(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              className="btn-primary text-sm font-semibold px-6 py-3 rounded-full text-center cursor-pointer"
              onClick={() => setMobileMenu(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(155deg, #FAF7F5 0%, #F4E8F1 35%, #EDD8EA 60%, #E2C5DC 80%, #D4A8C4 100%)",
        }}
      >
        {/* Floating petals */}
        <div className="float-petal absolute top-[12%] left-[8%] pointer-events-none">
          <Petal size={72} opacity={0.22} />
        </div>
        <div className="float-petal-2 absolute top-[20%] right-[10%] pointer-events-none">
          <Petal size={52} opacity={0.16} />
        </div>
        <div className="float-petal-3 absolute bottom-[25%] left-[5%] pointer-events-none">
          <Petal size={40} opacity={0.13} />
        </div>
        <div className="float-petal absolute bottom-[30%] right-[7%] pointer-events-none">
          <Petal size={64} opacity={0.18} />
        </div>
        <div className="float-petal-2 absolute top-[55%] left-[15%] pointer-events-none">
          <Petal size={32} opacity={0.12} />
        </div>
        <div className="float-petal-3 absolute top-[40%] right-[20%] pointer-events-none">
          <Petal size={28} opacity={0.10} />
        </div>

        {/* Subtle radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(255,255,255,0.45) 0%, transparent 75%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-28 pb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <ImageWithFallback
              src={logo}
              alt="X.NailsM — Creación Arte Poder"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full mx-auto object-cover"
              style={{ boxShadow: "0 8px 48px rgba(168,99,138,0.28), 0 0 0 6px rgba(255,255,255,0.6)" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>Creación · Arte · Poder</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="serif text-5xl md:text-7xl font-semibold leading-[1.1] mb-6"
            style={{ color: "#5E2D50" }}
          >
            Where Nails
            <br />
            <em className="not-italic" style={{ color: "#A8638A" }}>Become Art</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-foreground/65 leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Personalized nail services crafted with care, staying at the
            forefront of the latest techniques and trends — by Ximena Moreno.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#booking"
              className="btn-primary text-sm font-semibold px-8 py-4 rounded-full cursor-pointer inline-block"
            >
              Book an Appointment
            </a>
            <a
              href="https://www.instagram.com/x.nailsm"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm font-semibold px-8 py-4 rounded-full cursor-pointer inline-flex items-center gap-2"
            >
              <Instagram size={16} />
              @x.nailsm
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ animation: "floatPetal 2.5s ease-in-out infinite" }}
        >
          <span className="text-xs tracking-widest uppercase text-primary/50 font-medium">Scroll</span>
          <ChevronDown size={16} className="text-primary/40" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-24 md:py-36 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image column */}
          <FadeUp className="relative">
            <div
              className="relative rounded-3xl overflow-hidden aspect-[3/4]"
              style={{ boxShadow: "0 24px 64px rgba(168,99,138,0.18)" }}
            >
              <ImageWithFallback
                src={asianArtImg}
                alt="Asian nail art by Ximena Moreno — pink floral design"
                className="w-full h-full object-cover"
              />
              {/* Overlay badge */}
              <div
                className="absolute bottom-6 left-6 right-6 backdrop-blur-sm rounded-2xl px-5 py-4"
                style={{ background: "rgba(250,247,245,0.88)", border: "1px solid rgba(168,99,138,0.2)" }}
              >
                <p className="serif text-sm font-medium text-primary mb-0.5">Ximena Moreno</p>
                <p className="text-xs text-muted-foreground">Nearly 9 years of professional experience</p>
              </div>
            </div>

            {/* Decorative accent circle */}
            <div
              className="absolute -top-6 -right-6 w-28 h-28 rounded-full pointer-events-none"
              style={{
                background: "linear-gradient(135deg, #F4EBF1 0%, #E8C5DA 100%)",
                opacity: 0.7,
              }}
            />
            <Petal
              className="absolute -bottom-8 -left-8 float-petal pointer-events-none"
              size={56}
              opacity={0.25}
            />
          </FadeUp>

          {/* Text column */}
          <FadeUp delay={0.15}>
            <SectionLabel>About Ximena</SectionLabel>
            <h2
              className="serif text-4xl md:text-5xl font-semibold leading-[1.15] mb-6 mt-2"
              style={{ color: "#5E2D50" }}
            >
              Passion Crafted
              <br />
              Into Every Detail
            </h2>
            <OrchidDivider />
            <div className="space-y-4 mt-6 text-[0.95rem] leading-relaxed text-foreground/70">
              <p>
                With nearly <strong className="text-foreground">9 years of professional experience</strong>,
                Ximena Moreno has built her practice on one simple principle: every client deserves
                nails that feel personally theirs.
              </p>
              <p>
                She stays at the cutting edge of nail techniques and global trends — from builder gel
                to intricate Asian nail art — bringing mastery and creativity to every appointment.
              </p>
              <p>
                Beyond skill, Ximena prioritizes your <strong className="text-foreground">comfort and wellbeing</strong>.
                Every session is an experience of personalized care in a warm, welcoming environment.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: "9+", label: "Years\nExperience" },
                { value: "500+", label: "Happy\nClients" },
                { value: "4", label: "Signature\nServices" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center py-4 px-2 rounded-2xl"
                  style={{ background: "linear-gradient(135deg, #F4EBF1 0%, #EDD8EA 100%)" }}
                >
                  <p className="serif text-2xl font-semibold" style={{ color: "#A8638A" }}>
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight whitespace-pre-line">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#booking"
              className="btn-primary inline-block mt-8 text-sm font-semibold px-7 py-3.5 rounded-full cursor-pointer"
            >
              Book a Session
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SERVICES
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="services"
        className="py-24 md:py-36 px-6"
        style={{
          background:
            "linear-gradient(180deg, #FAF7F5 0%, #F4EBF1 50%, #FAF7F5 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16 md:mb-20">
            <SectionLabel>What I Offer</SectionLabel>
            <h2
              className="serif text-4xl md:text-5xl font-semibold mt-2 mb-4"
              style={{ color: "#5E2D50" }}
            >
              Signature Services
            </h2>
            <p className="text-foreground/60 max-w-md mx-auto text-[0.95rem]">
              Tailored nail experiences using premium products and the
              latest global techniques.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Layers size={22} />,
                title: "Builder Gel",
                price: "From $600 MXN",
                desc: "Durable, natural-looking gel overlays for strong, flexible nails with flawless finish.",
                img: builderGelImg,
                alt: "Copper chrome builder gel nails",
                delay: 0,
              },
              {
                icon: <Sparkles size={22} />,
                title: "Polygel Extensions",
                price: "From $700 MXN",
                desc: "Lightweight, odor-free polygel extensions sculpted to perfection for any length.",
                img: polygelImg,
                alt: "Dark mauve polygel nail extensions",
                delay: 0.1,
              },
              {
                icon: <Gem size={22} />,
                title: "Acrylic Extensions",
                price: "From $700 MXN",
                desc: "Classic and bold — acrylic extensions with artistic sculpting and decorative finishes.",
                img: acrylicImg,
                alt: "Gold foil acrylic nail art extensions",
                delay: 0.2,
              },
              {
                icon: <Palette size={22} />,
                title: "Asian Nail Art",
                price: "Variable Pricing",
                desc: "Intricate hand-painted designs inspired by Asian nail culture — flowers, gems, and luxury motifs.",
                img: asianArtImg,
                alt: "Pink floral Asian nail art",
                delay: 0.3,
              },
            ].map((s) => (
              <FadeUp key={s.title} delay={s.delay}>
                <div
                  className="bg-card rounded-3xl overflow-hidden card-hover h-full flex flex-col"
                  style={{
                    boxShadow: "0 4px 24px rgba(168,99,138,0.09)",
                    border: "1px solid rgba(168,99,138,0.12)",
                  }}
                >
                  {/* Service image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <ImageWithFallback
                      src={s.img}
                      alt={s.alt}
                      className="gallery-img w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(94,45,80,0.45) 0%, transparent 60%)",
                      }}
                    />
                    <div
                      className="absolute top-3 left-3 p-2.5 rounded-xl text-primary"
                      style={{ background: "rgba(250,247,245,0.88)", backdropFilter: "blur(8px)" }}
                    >
                      {s.icon}
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="serif text-lg font-semibold mb-1" style={{ color: "#5E2D50" }}>
                      {s.title}
                    </h3>
                    <p
                      className="text-xs font-semibold tracking-wide mb-3"
                      style={{ color: "#C9A96E" }}
                    >
                      {s.price}
                    </p>
                    <p className="text-[0.875rem] text-foreground/60 leading-relaxed flex-1">
                      {s.desc}
                    </p>
                    <a
                      href="#booking"
                      className="mt-4 text-xs font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 group"
                    >
                      Book this service
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          GALLERY
      ══════════════════════════════════════════════════════════════ */}
      <section id="gallery" className="py-24 md:py-36 px-6 max-w-7xl mx-auto">
        <FadeUp className="text-center mb-16">
          <SectionLabel>Portfolio</SectionLabel>
          <h2
            className="serif text-4xl md:text-5xl font-semibold mt-2 mb-4"
            style={{ color: "#5E2D50" }}
          >
            The Work
          </h2>
          <p className="text-foreground/60 max-w-md mx-auto text-[0.95rem]">
            Each design tells a story. Click any image to explore the detail.
          </p>
        </FadeUp>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <div
                className="break-inside-avoid relative overflow-hidden rounded-2xl cursor-pointer group"
                style={{ boxShadow: "0 4px 20px rgba(168,99,138,0.1)" }}
                onClick={() => setLightbox(img.alt)}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  className="gallery-img w-full object-cover block"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(94,45,80,0.35)", backdropFilter: "blur(2px)" }}
                >
                  <div
                    className="p-3 rounded-full"
                    style={{ background: "rgba(255,255,255,0.9)" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A8638A" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(44,26,29,0.85)", backdropFilter: "blur(12px)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 p-2 rounded-full text-white/80 hover:text-white transition-colors"
            style={{ background: "rgba(255,255,255,0.12)" }}
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
          {(() => {
            const found = galleryImages.find((g) => g.alt === lightbox);
            if (!found) return null;
            return (
              <div
                className="max-w-2xl max-h-[85vh] overflow-hidden rounded-3xl"
                style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <ImageWithFallback
                  src={found.src}
                  alt={found.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })()}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════
          BOOKING
      ══════════════════════════════════════════════════════════════ */}
      <section
        id="booking"
        className="py-24 md:py-36 px-6"
        style={{
          background:
            "linear-gradient(155deg, #F4EBF1 0%, #EDD8EA 50%, #E2C5DC 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <FadeUp className="text-center mb-14">
            <SectionLabel>Book an Appointment</SectionLabel>
            <h2
              className="serif text-4xl md:text-5xl font-semibold mt-2 mb-4"
              style={{ color: "#5E2D50" }}
            >
              Reserve Your Moment
            </h2>
            <p className="text-foreground/65 max-w-md mx-auto text-[0.95rem]">
              Fill out the form below and your appointment request will be sent
              directly to Ximena via WhatsApp.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div
              className="bg-card rounded-3xl p-8 md:p-12"
              style={{
                boxShadow: "0 24px 64px rgba(168,99,138,0.15)",
                border: "1px solid rgba(168,99,138,0.12)",
              }}
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-foreground/70 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground/70 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+52 664 000 0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground/70 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    className="form-input"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground/70 mb-2">
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    className="form-input"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-foreground/70 mb-2">
                    Desired Service *
                  </label>
                  <select
                    className="form-input"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a service</option>
                    <option value="Builder Gel — From $600 MXN">Builder Gel — From $600 MXN</option>
                    <option value="Polygel Extensions — From $700 MXN">Polygel Extensions — From $700 MXN</option>
                    <option value="Acrylic Extensions — From $700 MXN">Acrylic Extensions — From $700 MXN</option>
                    <option value="Asian Nail Art — Variable Pricing">Asian Nail Art — Variable Pricing</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-foreground/70 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    className="form-input resize-none"
                    rows={3}
                    placeholder="Any specific designs, preferences, or questions..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
                <button
                  onClick={handleWhatsApp}
                  disabled={!form.name || !form.phone || !form.service}
                  className="btn-primary w-full sm:w-auto text-sm font-semibold px-8 py-4 rounded-full cursor-pointer inline-flex items-center justify-center gap-2.5 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <MessageCircle size={17} />
                  Book via WhatsApp
                </button>
                <p className="text-xs text-muted-foreground text-center sm:text-left">
                  You will be redirected to WhatsApp with a pre-filled message.
                  <br />
                  No account required.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-36 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-16">
            <SectionLabel>Client Love</SectionLabel>
            <h2
              className="serif text-4xl md:text-5xl font-semibold mt-2"
              style={{ color: "#5E2D50" }}
            >
              What They Say
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Sofía R.",
                role: "Regular Client",
                text: "Ximena is an absolute artist. Every time I leave, I feel like I have a masterpiece on my hands. The Asian nail art she does is incomparable — so detailed and personalized.",
                stars: 5,
                delay: 0,
              },
              {
                name: "Valentina M.",
                role: "New Client",
                text: "I was nervous about getting extensions for the first time, but Ximena made the whole experience so comfortable and relaxing. The polygel extensions look incredibly natural and last so long!",
                stars: 5,
                delay: 0.1,
              },
              {
                name: "Daniela L.",
                role: "Loyal Client",
                text: "9 years of experience truly shows. The quality, the attention to detail, the care she puts into every single nail — it is unmatched. I would not trust anyone else with my nails.",
                stars: 5,
                delay: 0.2,
              },
            ].map((t) => (
              <FadeUp key={t.name} delay={t.delay}>
                <div
                  className="bg-card rounded-3xl p-7 card-hover h-full flex flex-col"
                  style={{
                    boxShadow: "0 4px 24px rgba(168,99,138,0.09)",
                    border: "1px solid rgba(168,99,138,0.10)",
                  }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="#C9A96E"
                        stroke="none"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[0.9rem] text-foreground/65 leading-relaxed flex-1 mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-white flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #A8638A 0%, #8B4E6E 100%)",
                      }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          INSTAGRAM SECTION
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="py-20 md:py-28 px-6"
        style={{
          background:
            "linear-gradient(135deg, #5E2D50 0%, #8B4E6E 50%, #A8638A 100%)",
        }}
      >
        <FadeUp className="text-center max-w-xl mx-auto">
          <div
            className="inline-flex p-4 rounded-2xl mb-6"
            style={{ background: "rgba(255,255,255,0.15)" }}
          >
            <Instagram size={28} className="text-white" />
          </div>
          <h2 className="serif text-3xl md:text-4xl font-semibold text-white mb-4">
            Follow the Journey
          </h2>
          <p className="text-white/70 mb-8 text-[0.95rem] leading-relaxed">
            Stay inspired with the latest nail designs, techniques, and studio
            moments shared daily.
          </p>
          <a
            href="https://www.instagram.com/x.nailsm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-foreground cursor-pointer transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "#FAF7F5",
              boxShadow: "0 8px 28px rgba(0,0,0,0.2)",
            }}
          >
            <Instagram size={17} className="text-primary" />
            <span>@x.nailsm on Instagram</span>
          </a>
        </FadeUp>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-36 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-16">
            <SectionLabel>Get in Touch</SectionLabel>
            <h2
              className="serif text-4xl md:text-5xl font-semibold mt-2 mb-4"
              style={{ color: "#5E2D50" }}
            >
              Let&apos;s Connect
            </h2>
            <p className="text-foreground/60 max-w-sm mx-auto text-[0.95rem]">
              Ready to transform your nails? Reach out through any channel below.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <MessageCircle size={24} />,
                label: "WhatsApp",
                value: "664 328 9886",
                sub: "Available Mon–Sat",
                href: "https://wa.me/526643289886",
                btnText: "Message on WhatsApp",
                delay: 0,
              },
              {
                icon: <Instagram size={24} />,
                label: "Instagram",
                value: "@x.nailsm",
                sub: "DMs open",
                href: "https://www.instagram.com/x.nailsm",
                btnText: "Follow on Instagram",
                delay: 0.1,
              },
              {
                icon: <Phone size={24} />,
                label: "Phone",
                value: "664 328 9886",
                sub: "Call for inquiries",
                href: "tel:+526643289886",
                btnText: "Call Now",
                delay: 0.2,
              },
            ].map((c) => (
              <FadeUp key={c.label} delay={c.delay}>
                <div
                  className="bg-card rounded-3xl p-7 text-center card-hover h-full flex flex-col items-center"
                  style={{
                    boxShadow: "0 4px 24px rgba(168,99,138,0.09)",
                    border: "1px solid rgba(168,99,138,0.10)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-primary"
                    style={{
                      background: "linear-gradient(135deg, #F4EBF1 0%, #EDD8EA 100%)",
                    }}
                  >
                    {c.icon}
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                    {c.label}
                  </p>
                  <p className="serif text-lg font-medium text-foreground mb-1">{c.value}</p>
                  <p className="text-xs text-muted-foreground mb-6">{c.sub}</p>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs font-semibold px-6 py-2.5 rounded-full cursor-pointer mt-auto"
                  >
                    {c.btnText}
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Owner card */}
          <FadeUp delay={0.1} className="mt-12">
            <div
              className="rounded-3xl p-8 md:p-10 text-center"
              style={{
                background: "linear-gradient(135deg, #F4EBF1 0%, #EDD8EA 100%)",
                border: "1px solid rgba(168,99,138,0.15)",
              }}
            >
              <ImageWithFallback
                src={logo}
                alt="X.NailsM logo"
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                style={{ boxShadow: "0 4px 20px rgba(168,99,138,0.22)" }}
              />
              <h3 className="serif text-2xl font-semibold mb-1" style={{ color: "#5E2D50" }}>
                Ximena Moreno
              </h3>
              <p className="text-sm text-muted-foreground mb-1">Professional Nail Artist · X.NailsM</p>
              <p
                className="text-xs font-semibold tracking-[0.18em] uppercase mt-3"
                style={{ color: "#A8638A" }}
              >
                Creación · Arte · Poder
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════════ */}
      <footer
        className="py-12 px-6"
        style={{
          background: "#2C1A1D",
          borderTop: "1px solid rgba(168,99,138,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center mb-10">
            {/* Logo + brand */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <ImageWithFallback
                src={logo}
                alt="X.NailsM"
                className="w-14 h-14 rounded-full object-cover"
                style={{ boxShadow: "0 0 0 3px rgba(168,99,138,0.3)" }}
              />
              <div>
                <p className="serif text-lg font-semibold text-white/90">X.NailsM</p>
                <p className="text-xs text-white/40 tracking-widest uppercase mt-0.5">
                  Creación · Arte · Poder
                </p>
              </div>
            </div>

            {/* Nav links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-white/50 hover:text-white/80 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://www.instagram.com/x.nailsm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                style={{ background: "rgba(168,99,138,0.2)" }}
                aria-label="Instagram"
              >
                <Instagram size={17} className="text-white/70" />
              </a>
              <a
                href="https://wa.me/526643289886"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                style={{ background: "rgba(168,99,138,0.2)" }}
                aria-label="WhatsApp"
              >
                <MessageCircle size={17} className="text-white/70" />
              </a>
              <a
                href="tel:+526643289886"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                style={{ background: "rgba(168,99,138,0.2)" }}
                aria-label="Phone"
              >
                <Phone size={17} className="text-white/70" />
              </a>
            </div>
          </div>

          <div
            className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p>&copy; {new Date().getFullYear()} X.NailsM · Ximena Moreno. All rights reserved.</p>
            <p className="italic" style={{ fontFamily: "Playfair Display, serif" }}>
              &ldquo;Where every nail tells a story.&rdquo;
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
