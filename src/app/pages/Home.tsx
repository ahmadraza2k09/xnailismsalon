import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Instagram, Star } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { FadeUp, Rule, SectionHeading } from "@/app/site/ui";
import { useT } from "@/app/i18n";
import { asianArtImg, brand, galleryItems, logo, routes, serviceImages } from "@/app/site/data";

export default function Home() {
  const t = useT();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[86vh] flex items-center justify-center px-6 pt-28 pb-20 bg-blush-mist">
        <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-9"
          >
            <ImageWithFallback
              src={logo}
              alt={`${brand.name} — ${t.common.tagline}`}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="eyebrow"
          >
            {t.common.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.12] mt-5 text-mauve-deep"
            style={{ fontWeight: 600 }}
          >
            {t.home.heroTitle}
            <span className="block text-mauve mt-1" style={{ fontWeight: 400 }}>
              {t.home.heroAccent}
            </span>
          </motion.h1>

          <Rule className="w-28 mt-7" />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="text-sm md:text-base text-foreground/70 leading-relaxed mt-7 max-w-xl"
          >
            {t.home.heroText}{" "}
            <span className="font-display text-mauve-deep" style={{ fontWeight: 600 }}>
              {t.common.artist}
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
          >
            <Link to={routes.booking} className="btn-primary text-[0.68rem] px-9 py-4">
              {t.nav.bookAppointment}
            </Link>
            <Link to={routes.portfolio} className="btn-outline text-[0.68rem] px-9 py-4">
              {t.common.viewPortfolio}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Introduction ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <FadeUp>
            <div className="relative overflow-hidden rounded-lg aspect-[4/5] border border-border">
              <ImageWithFallback
                src={asianArtImg}
                alt={t.services.items[3].title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(110,58,89,0.55) 0%, transparent 55%)" }}
              />
              <div className="absolute bottom-5 left-5 right-5">
                <p
                  className="font-display text-sm tracking-[0.12em] text-white uppercase"
                  style={{ fontWeight: 600 }}
                >
                  {t.home.badgeName}
                </p>
                <p className="text-xs text-white/75 mt-1">{t.home.badgeSub}</p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow={t.home.introEyebrow}
              title={t.home.introTitle}
              accent={t.home.introAccent}
            />
            <div className="space-y-4 text-sm md:text-base text-foreground/70 leading-relaxed mt-7">
              <p>{t.home.introP1}</p>
              <p>{t.home.introP2}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
              {t.stats.map((s) => (
                <div key={s.label} className="text-center card py-5 px-3">
                  <p className="font-display text-3xl text-mauve" style={{ fontWeight: 600 }}>
                    {s.value}
                  </p>
                  <p
                    className="text-[0.6rem] font-body tracking-[0.16em] uppercase text-mauve-deep/70 mt-2"
                    style={{ fontWeight: 600 }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <Link to={routes.about} className="btn-outline text-[0.66rem] px-7 py-3.5 mt-9">
              {t.common.moreAboutHer}
              <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Services preview ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-ivory-warm border-y border-border">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="flex justify-center">
            <SectionHeading
              eyebrow={t.home.servicesEyebrow}
              title={t.home.servicesTitle}
              accent={t.home.servicesAccent}
              subtitle={t.home.servicesSubtitle}
            />
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {t.services.items.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.06}>
                <Link to={routes.services} className="block h-full card card-hover overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <ImageWithFallback
                      src={serviceImages[i]}
                      alt={s.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p
                      className="text-[0.58rem] font-body tracking-[0.18em] uppercase text-mauve/70"
                      style={{ fontWeight: 600 }}
                    >
                      {s.badge}
                    </p>
                    <h3 className="font-display text-lg text-mauve-deep mt-2" style={{ fontWeight: 600 }}>
                      {s.title}
                    </h3>
                    <p
                      className="text-[0.62rem] font-body tracking-[0.14em] uppercase text-mauve mt-1.5"
                      style={{ fontWeight: 600 }}
                    >
                      {s.price}
                    </p>
                    <p className="text-xs text-foreground/65 leading-relaxed mt-3">{s.desc}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="flex justify-center mt-14">
            <Link to={routes.services} className="btn-outline text-[0.66rem] px-8 py-3.5">
              {t.common.allServices}
              <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Portfolio preview ────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
        <FadeUp className="flex justify-center">
          <SectionHeading
            eyebrow={t.home.portfolioEyebrow}
            title={t.home.portfolioTitle}
            subtitle={t.home.portfolioSubtitle}
          />
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
          {galleryItems.slice(0, 4).map((img, i) => (
            <FadeUp key={img.tag} delay={i * 0.06}>
              <Link to={routes.portfolio} className="block card card-hover overflow-hidden">
                <div className="overflow-hidden aspect-square">
                  <ImageWithFallback
                    src={img.src}
                    alt={t.portfolio.tags[img.tag]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p
                  className="text-[0.58rem] font-body tracking-[0.2em] uppercase text-mauve text-center py-3"
                  style={{ fontWeight: 600 }}
                >
                  {t.portfolio.tags[img.tag]}
                </p>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="flex justify-center mt-14">
          <Link to={routes.portfolio} className="btn-outline text-[0.66rem] px-8 py-3.5">
            {t.common.fullGallery}
            <ArrowRight size={14} />
          </Link>
        </FadeUp>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-ivory-warm border-y border-border">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="flex justify-center">
            <SectionHeading
              eyebrow={t.home.testimonialsEyebrow}
              title={t.home.testimonialsTitle}
            />
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {t.testimonials.map((item, i) => (
              <FadeUp key={item.name} delay={i * 0.06}>
                <div className="h-full card p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} size={13} className="fill-mauve text-mauve" />
                      ))}
                    </div>
                    <p className="text-sm text-foreground/72 leading-relaxed">&ldquo;{item.text}&rdquo;</p>
                  </div>
                  <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-border">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display text-sm bg-mauve"
                      style={{ fontWeight: 600 }}
                    >
                      {item.name.charAt(0)}
                    </span>
                    <div>
                      <p className="font-display text-sm text-mauve-deep" style={{ fontWeight: 600 }}>
                        {item.name}
                      </p>
                      <p className="text-[0.68rem] text-foreground/55">{item.role}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing invitation ───────────────────────────────────── */}
      <section className="py-20 md:py-28 px-6 text-white bg-mauve-deep">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          <FadeUp className="flex flex-col items-center">
            <SectionHeading
              light
              eyebrow={t.home.ctaEyebrow}
              title={t.home.ctaTitle}
              accent={t.home.ctaAccent}
              subtitle={t.home.ctaSubtitle}
            />
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link to={routes.booking} className="btn-on-dark text-[0.68rem] px-9 py-4">
                {t.nav.bookNow}
              </Link>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-[0.68rem] px-9 py-4 text-white border-white/40 hover:bg-white hover:text-mauve-deep"
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
