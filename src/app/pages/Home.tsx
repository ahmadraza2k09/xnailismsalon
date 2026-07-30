import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Instagram } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  Ambient,
  FadeUp,
  Parallax,
  Reveal3D,
  ScrollZoom,
  SectionHeading,
  TiltCard,
} from "@/app/site/ui";
import { Testimonials } from "@/app/site/Testimonials";
import { Faq } from "@/app/site/Faq";
import { useT } from "@/app/i18n";
import { asianArtImg, brand, galleryItems, logo, routes, serviceImages } from "@/app/site/data";

export default function Home() {
  const t = useT();

  return (
    <>
      {/* ── Hero: asymmetric, type on the left, image on the right ── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-white scene overflow-hidden">
        <Ambient />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-[5.4rem] leading-[1.02] text-mauve-deep"
              style={{ fontWeight: 500, transformOrigin: "0% 100%" }}
            >
              {t.home.heroTitle}
              <span className="block text-mauve mt-2" style={{ fontWeight: 400 }}>
                {t.home.heroAccent}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-[0.95rem] md:text-base text-foreground/82 leading-relaxed mt-8 max-w-md"
            >
              {t.home.heroText}{" "}
              <span className="font-display text-lg text-mauve-deep" style={{ fontWeight: 500 }}>
                {t.common.artist}
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <Link to={routes.booking} className="btn-primary text-[0.66rem] px-9 py-4">
                {t.nav.bookAppointment}
              </Link>
              <Link to={routes.portfolio} className="btn-outline text-[0.66rem] px-9 py-4">
                {t.common.viewPortfolio}
              </Link>
            </motion.div>

          </div>

          {/* Two prints in white frames, lightly tilted */}
          <div className="relative">
            <Parallax distance={14}>
              <div className="relative mx-auto max-w-md lg:max-w-none aspect-[4/5]">
                <motion.div
                  initial={{ opacity: 0, y: 24, rotate: -6 }}
                  animate={{ opacity: 1, y: 0, rotate: -4 }}
                  transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="photo-frame absolute left-0 bottom-0 w-[54%]"
                >
                  <ScrollZoom from={1.04} className="rounded-lg aspect-[3/4]">
                    <ImageWithFallback
                      src={serviceImages[0]}
                      alt={t.services.items[0].title}
                      className="w-full h-full object-cover"
                    />
                  </ScrollZoom>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24, rotate: 6 }}
                  animate={{ opacity: 1, y: 0, rotate: 3 }}
                  transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="photo-frame absolute right-0 top-0 w-[60%]"
                >
                  <ScrollZoom from={1.04} className="rounded-lg aspect-[4/5]">
                    <ImageWithFallback
                      src={asianArtImg}
                      alt={t.services.items[3].title}
                      className="w-full h-full object-cover"
                    />
                  </ScrollZoom>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="glass-chip absolute left-[42%] bottom-[10%] w-20 h-20 lg:w-24 lg:h-24 p-1.5 z-10"
                >
                  <ImageWithFallback
                    src={logo}
                    alt={brand.name}
                    className="relative z-[1] w-full h-full rounded-full object-cover"
                  />
                </motion.div>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* ── Service ribbon ───────────────────────────────────────── */}
      <div className="border-y border-border bg-white overflow-hidden py-4">
        <div className="marquee gap-10">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex items-center gap-10 pr-10" aria-hidden={copy === 1}>
              {t.services.items.map((s) => (
                <li key={s.title} className="caption text-mauve/70 whitespace-nowrap">
                  {s.title}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* ── The studio ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-32 px-6 scene">
        <Ambient />
        <div className="relative max-w-3xl mx-auto">
          <Reveal3D>
            <SectionHeading
              align="left"
              eyebrow={t.home.introEyebrow}
              title={t.home.introTitle}
              accent={t.home.introAccent}
            />
            <div className="space-y-5 text-[0.95rem] md:text-base text-foreground/82 leading-relaxed mt-8">
              <p>{t.home.introP1}</p>
              <p>{t.home.introP2}</p>
            </div>

            <dl className="glass grid grid-cols-3 gap-6 mt-12 px-6 py-6">
              {t.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-4xl text-mauve" style={{ fontWeight: 500 }}>
                    {s.value}
                  </dt>
                  <dd className="caption mt-2 leading-relaxed">{s.label}</dd>
                </div>
              ))}
            </dl>

            <Link to={routes.about} className="btn-outline text-[0.64rem] px-7 py-3.5 mt-10">
              {t.common.moreAboutHer}
              <ArrowRight size={14} />
            </Link>
          </Reveal3D>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-32 px-6 bg-ivory-warm border-y border-border scene">
        <Ambient />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <Reveal3D>
              <SectionHeading
                align="left"
                eyebrow={t.home.servicesEyebrow}
                title={t.home.servicesTitle}
                accent={t.home.servicesAccent}
              />
            </Reveal3D>
            <FadeUp delay={0.1}>
              <p className="text-sm text-foreground/78 max-w-sm md:text-right">
                {t.home.servicesSubtitle}
              </p>
            </FadeUp>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {t.services.items.map((s, i) => (
              <Reveal3D key={s.title} delay={i * 0.08}>
                <TiltCard className="h-full">
                  <Link to={routes.services} className="group block h-full card card-hover overflow-hidden">
                    <div className="overflow-hidden aspect-[4/5]">
                      <ImageWithFallback
                        src={serviceImages[i]}
                        alt={s.title}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-baseline justify-between gap-3">
                        <span className="caption text-mauve/50">{String(i + 1).padStart(2, "0")}</span>
                        <span className="caption text-mauve">{s.price}</span>
                      </div>
                      <h3
                        className="font-display text-xl text-mauve-deep mt-3 leading-snug"
                        style={{ fontWeight: 500 }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-sm text-foreground/78 leading-relaxed mt-3">{s.desc}</p>
                    </div>
                  </Link>
                </TiltCard>
              </Reveal3D>
            ))}
          </div>

          <FadeUp className="mt-12">
            <p className="text-sm text-foreground/82 max-w-2xl leading-relaxed">{t.services.priceNote}</p>
          </FadeUp>

          <FadeUp className="flex mt-10">
            <Link to={routes.services} className="btn-outline text-[0.64rem] px-8 py-3.5">
              {t.common.allServices}
              <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Portfolio: offset editorial grid ─────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-32 px-6 scene">
        <Ambient />
        <div className="relative max-w-7xl mx-auto">
        <Reveal3D className="flex justify-center">
          <SectionHeading
            eyebrow={t.home.portfolioEyebrow}
            title={t.home.portfolioTitle}
            subtitle={t.home.portfolioSubtitle}
          />
        </Reveal3D>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mt-16">
          {galleryItems.slice(0, 4).map((img, i) => (
            <Parallax key={img.tag} distance={12}>
              <TiltCard intensity={3}>
                <Link to={routes.portfolio} className="group block">
                  <ScrollZoom from={1.04} className="rounded-xl frame-gloss aspect-[3/4] w-full">
                    <ImageWithFallback
                      src={img.src}
                      alt={t.portfolio.tags[img.tag]}
                      className="w-full h-full object-cover"
                    />
                  </ScrollZoom>
                  <p className="caption mt-4 text-center group-hover:text-mauve transition-colors">
                    {t.portfolio.tags[img.tag]}
                  </p>
                </Link>
              </TiltCard>
            </Parallax>
          ))}
        </div>

        <FadeUp className="flex justify-center mt-16">
          <Link to={routes.portfolio} className="btn-outline text-[0.64rem] px-8 py-3.5">
            {t.common.fullGallery}
            <ArrowRight size={14} />
          </Link>
        </FadeUp>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <Testimonials />

      {/* ── Questions ────────────────────────────────────────────── */}
      <Faq />

      {/* ── Closing invitation ───────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 md:py-32 px-6 text-white bg-mauve-deep scene">
        <Ambient tone="dark" />
        <div className="relative max-w-2xl mx-auto text-center flex flex-col items-center">
          <Reveal3D className="flex flex-col items-center">
            <SectionHeading
              light
              eyebrow={t.home.ctaEyebrow}
              title={t.home.ctaTitle}
              accent={t.home.ctaAccent}
              subtitle={t.home.ctaSubtitle}
            />
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <Link to={routes.booking} className="btn-on-dark text-[0.66rem] px-9 py-4">
                {t.nav.bookNow}
              </Link>
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light text-[0.66rem] px-9 py-4"
              >
                <Instagram size={15} />
                {brand.instagramHandle}
              </a>
            </div>
          </Reveal3D>
        </div>
      </section>
    </>
  );
}
