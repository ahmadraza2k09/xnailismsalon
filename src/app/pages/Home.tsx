import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Instagram, Star } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { FadeUp, Rule, SectionHeading } from "@/app/site/ui";
import { asianArtImg, brand, galleryImages, logo, services, stats, testimonials } from "@/app/site/data";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[86vh] flex items-center justify-center px-6 pt-28 pb-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 85% 65% at 50% 25%, #FFFFFF 0%, #FFF0F4 40%, #F1DCE6 80%, #E7CBDA 100%)",
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Logo medallion — soft raised disc */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-full p-2 mb-9"
            style={{
              background: "linear-gradient(145deg, #FFFFFF 0%, #F0DEE7 100%)",
              boxShadow:
                "14px 14px 30px rgba(163,91,133,0.22), -12px -12px 28px rgba(255,255,255,0.95), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            <ImageWithFallback
              src={logo}
              alt={`${brand.name} — ${brand.tagline}`}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
              style={{ boxShadow: "inset 0 2px 6px rgba(110,58,89,0.35)" }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="eyebrow"
          >
            {brand.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.12] mt-5 text-mauve-deep"
            style={{ fontWeight: 600 }}
          >
            Where Nails
            <span className="block text-mauve mt-1" style={{ fontWeight: 400 }}>
              Become Art
            </span>
          </motion.h1>

          <Rule className="w-28 mt-7" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
            className="text-sm md:text-base text-foreground/70 leading-relaxed mt-7 max-w-xl"
          >
            Personalised nail services crafted with precision and quiet luxury — structured
            extensions, refined finishes and hand-painted detail by{" "}
            <span className="font-display text-mauve-deep" style={{ fontWeight: 600 }}>
              {brand.artist}
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
          >
            <Link to="/booking" className="btn-lux text-[0.7rem] px-9 py-4">
              Book an appointment
            </Link>
            <Link to="/portfolio" className="btn-quiet text-[0.7rem] px-9 py-4">
              View the portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Introduction ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <FadeUp>
            <div className="rounded-2xl p-3 neo-panel">
              <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
                <ImageWithFallback
                  src={asianArtImg}
                  alt="Hand-painted floral nail art by Ximena Moreno"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(110,58,89,0.5) 0%, transparent 55%)" }}
                />
                <div
                  className="absolute bottom-4 left-4 right-4 rounded-lg px-5 py-4 bg-white/92 backdrop-blur-sm"
                  style={{ boxShadow: "0 10px 24px -14px rgba(110,58,89,0.7), inset 0 1px 0 #fff" }}
                >
                  <p className="font-display text-sm tracking-[0.12em] text-mauve-deep uppercase" style={{ fontWeight: 600 }}>
                    {brand.artist}
                  </p>
                  <p className="text-xs text-foreground/65 mt-1">
                    Nearly nine years of professional artistry
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <SectionHeading
              align="left"
              eyebrow="The atelier"
              title="Passion crafted"
              accent="into every detail"
            />
            <div className="space-y-4 text-sm md:text-base text-foreground/70 leading-relaxed mt-7">
              <p>
                X.Nailsm is a private studio built around one idea: a manicure should feel like a
                considered ritual, not an errand. Every set begins with careful preparation and ends
                with a finish that holds.
              </p>
              <p>
                From sculpted builder gel to fine hand-painted detail, {brand.artist} combines
                technical precision with a restrained, classic sense of style.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center rounded-xl py-5 px-3 neo-panel-sm">
                  <p className="font-display text-3xl text-mauve" style={{ fontWeight: 600 }}>
                    {s.value}
                  </p>
                  <p className="text-[0.6rem] font-body tracking-[0.18em] uppercase text-mauve-deep/70 mt-2" style={{ fontWeight: 600 }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-quiet text-[0.68rem] px-7 py-3.5 mt-9">
              More about Ximena
              <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Services preview ─────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 px-6"
        style={{ background: "linear-gradient(180deg, #FBF6F8 0%, #F6EBF0 50%, #FBF6F8 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp className="flex justify-center">
            <SectionHeading
              eyebrow="What we offer"
              title="Signature"
              accent="services"
              subtitle="Four techniques, each tailored to the shape of your hands and the way you live."
            />
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.08}>
                <Link
                  to="/services"
                  className="block h-full rounded-2xl p-3 neo-panel neo-hover"
                >
                  <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                    <ImageWithFallback src={s.img} alt={s.alt} className="w-full h-full object-cover" />
                    <span
                      className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/94 text-[0.58rem] font-body tracking-[0.18em] uppercase text-mauve-deep"
                      style={{ fontWeight: 600, boxShadow: "0 4px 10px -6px rgba(110,58,89,0.6)" }}
                    >
                      {s.badge}
                    </span>
                  </div>
                  <div className="px-3 pt-5 pb-3">
                    <p className="font-display text-[0.7rem] tracking-[0.3em] text-mauve/60">{s.no}</p>
                    <h3 className="font-display text-lg text-mauve-deep mt-2" style={{ fontWeight: 600 }}>
                      {s.title}
                    </h3>
                    <p className="text-[0.62rem] font-body tracking-[0.16em] uppercase text-mauve mt-1.5" style={{ fontWeight: 600 }}>
                      {s.price}
                    </p>
                    <p className="text-xs text-foreground/65 leading-relaxed mt-3">{s.desc}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="flex justify-center mt-14">
            <Link to="/services" className="btn-quiet text-[0.68rem] px-8 py-3.5">
              All services & pricing
              <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Portfolio preview ────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
        <FadeUp className="flex justify-center">
          <SectionHeading
            eyebrow="Recent work"
            title="The portfolio"
            subtitle="A selection of recent sets from the studio."
          />
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
          {galleryImages.slice(0, 4).map((img, i) => (
            <FadeUp key={img.alt} delay={i * 0.07}>
              <div className="rounded-2xl p-2.5 neo-panel-sm neo-hover">
                <div className="overflow-hidden rounded-lg aspect-square">
                  <ImageWithFallback src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </div>
                <p className="text-[0.58rem] font-body tracking-[0.2em] uppercase text-mauve text-center py-2.5" style={{ fontWeight: 600 }}>
                  {img.tag}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="flex justify-center mt-14">
          <Link to="/portfolio" className="btn-quiet text-[0.68rem] px-8 py-3.5">
            See the full gallery
            <ArrowRight size={14} />
          </Link>
        </FadeUp>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 px-6"
        style={{ background: "linear-gradient(180deg, #FBF6F8 0%, #FFF0F4 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp className="flex justify-center">
            <SectionHeading eyebrow="Client words" title="What they say" />
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.08}>
                <div className="h-full rounded-2xl p-8 neo-panel flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} size={13} className="fill-mauve text-mauve" />
                      ))}
                    </div>
                    <p className="text-sm text-foreground/72 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  </div>
                  <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-mauve/12">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display text-sm"
                      style={{
                        fontWeight: 600,
                        background: "linear-gradient(180deg, #B96E9A, #8B4A70)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.35)",
                      }}
                    >
                      {t.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-display text-sm text-mauve-deep" style={{ fontWeight: 600 }}>
                        {t.name}
                      </p>
                      <p className="text-[0.68rem] text-foreground/55">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing invitation ───────────────────────────────────── */}
      <section
        className="py-20 md:py-28 px-6 text-white"
        style={{ background: "linear-gradient(135deg, #6E3A59 0%, #8B4A70 50%, #A35B85 100%)" }}
      >
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          <FadeUp className="flex flex-col items-center">
            <SectionHeading
              light
              eyebrow="By appointment"
              title="Reserve your"
              accent="nail experience"
              subtitle="Send your preferred date and service through WhatsApp — Ximena replies personally."
            />
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                to="/booking"
                className="btn-quiet text-[0.7rem] px-9 py-4"
                style={{ color: "#6E3A59" }}
              >
                Book now
              </Link>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lux text-[0.7rem] px-9 py-4"
              >
                <Instagram size={15} />
                {brand.instagramHandle}
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
