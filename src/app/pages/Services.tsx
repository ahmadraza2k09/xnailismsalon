import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Ambient, FadeUp, MediaParallax, PageHeader, Reveal3D, SectionHeading } from "@/app/site/ui";
import { useT } from "@/app/i18n";
import { routes, serviceImages } from "@/app/site/data";

export default function Services() {
  const t = useT();

  return (
    <>
      <PageHeader
        eyebrow={t.services.headerEyebrow}
        title={t.services.headerTitle}
        accent={t.services.headerAccent}
        subtitle={t.services.headerSubtitle}
      />

      {/* Price list — the whole offer at a glance */}
      <section className="relative overflow-hidden px-6 pt-12 md:pt-16 pb-2">
        <Ambient />
        <div className="relative max-w-4xl mx-auto">
        <FadeUp>
          <ul className="glass px-6 py-2">
            {t.services.items.map((s, i) => (
              <li
                key={s.title}
                className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6 py-4 border-b border-white/60 last:border-b-0"
              >
                <span className="flex items-baseline gap-4">
                  <span className="caption text-mauve/50 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-lg md:text-xl text-mauve-deep" style={{ fontWeight: 500 }}>
                    {s.title}
                  </span>
                </span>
                <span className="caption text-mauve sm:whitespace-nowrap sm:text-right pl-8 sm:pl-0">{s.price}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-foreground/82 leading-relaxed mt-5">{t.services.priceNote}</p>
        </FadeUp>
        </div>
      </section>

      {/* Each service in detail */}
      <section className="py-12 md:py-20 px-6 max-w-6xl mx-auto space-y-8 md:space-y-12 scene">
        {t.services.items.map((s, i) => (
          <Reveal3D key={s.title}>
            <article className="glass overflow-hidden grid md:grid-cols-2 gap-0 items-stretch">
              <div className={`media !rounded-none min-h-[19rem] ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <MediaParallax className="absolute inset-0" amount={7}>
                  <ImageWithFallback
                    src={serviceImages[i]}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                </MediaParallax>
              </div>

              <div className="p-8 md:p-11">
                <span className="caption text-mauve/50">{String(i + 1).padStart(2, "0")}</span>
                <h3
                  className="font-display text-3xl md:text-4xl text-mauve-deep mt-2 leading-tight"
                  style={{ fontWeight: 500 }}
                >
                  {s.title}
                </h3>
                <p className="caption text-mauve mt-3">
                  {s.price} · {s.badge}
                </p>
                <p className="text-[0.95rem] text-foreground/82 leading-relaxed mt-5">{s.detail}</p>

                <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
                  {s.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-2.5 text-sm text-foreground/78 leading-relaxed">
                      <Check size={13} className="text-mauve shrink-0 mt-1" />
                      {inc}
                    </li>
                  ))}
                </ul>

                <Link to={routes.booking} className="btn-primary text-[0.62rem] px-7 py-3.5 mt-8">
                  {t.common.bookThisService}
                  <ArrowRight size={13} />
                </Link>
              </div>
            </article>
          </Reveal3D>
        ))}
      </section>

      {/* Process */}
      <section className="relative overflow-hidden py-12 md:py-20 px-6 bg-ivory-warm border-y border-border scene">
        <Ambient />
        <div className="relative max-w-7xl mx-auto">
          <Reveal3D className="flex justify-center">
            <SectionHeading
              eyebrow={t.services.processEyebrow}
              title={t.services.processTitle}
              accent={t.services.processAccent}
              subtitle={t.services.processSubtitle}
            />
          </Reveal3D>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mt-12">
            {t.services.steps.map((st, i) => (
              <Reveal3D key={st.title} delay={i * 0.08}>
                <li className="card card-hover h-full p-7">
                  <span className="caption text-mauve/50">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl text-mauve-deep mt-3" style={{ fontWeight: 500 }}>
                    {st.title}
                  </h3>
                  <p className="text-sm text-foreground/78 leading-relaxed mt-3">{st.text}</p>
                </li>
              </Reveal3D>
            ))}
          </ol>

          <FadeUp className="flex justify-center mt-12">
            <Link to={routes.booking} className="btn-primary text-[0.64rem] px-9 py-4">
              {t.services.reserveCta}
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
