import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { FadeUp, PageHeader, Parallax, Reveal3D, ScrollZoom, SectionHeading } from "@/app/site/ui";
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
      <section className="px-6 pt-16 md:pt-20 max-w-4xl mx-auto">
        <FadeUp>
          <ul className="border-t border-mauve/15">
            {t.services.items.map((s, i) => (
              <li
                key={s.title}
                className="flex items-baseline justify-between gap-6 py-4 border-b border-mauve/15"
              >
                <span className="flex items-baseline gap-4">
                  <span className="caption text-mauve/50">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-lg md:text-xl text-mauve-deep" style={{ fontWeight: 500 }}>
                    {s.title}
                  </span>
                </span>
                <span className="caption text-mauve whitespace-nowrap">{s.price}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-foreground/85 leading-relaxed mt-5">{t.services.priceNote}</p>
        </FadeUp>
      </section>

      {/* Each service in detail */}
      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto space-y-20 md:space-y-32 scene">
        {t.services.items.map((s, i) => (
          <div key={s.title} className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <Parallax distance={30} className={i % 2 === 1 ? "md:order-2" : ""}>
              <ScrollZoom from={1.1} className="rounded-lg border border-mauve/15 aspect-[4/3]">
                <ImageWithFallback
                  src={serviceImages[i]}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </ScrollZoom>
            </Parallax>

            <Reveal3D>
              <span className="caption text-mauve/50">{String(i + 1).padStart(2, "0")}</span>
              <h3
                className="font-display text-3xl md:text-4xl text-mauve-deep mt-3 leading-tight"
                style={{ fontWeight: 500 }}
              >
                {s.title}
              </h3>
              <p className="caption text-mauve mt-4">
                {s.price} · {s.badge}
              </p>
              <p className="text-base md:text-[1.05rem] text-foreground/85 leading-relaxed mt-6">{s.detail}</p>

              <p className="caption mt-8">{t.services.includesLabel}</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {s.includes.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5 text-sm text-foreground/80 leading-relaxed">
                    <Check size={13} className="text-mauve shrink-0 mt-0.5" />
                    {inc}
                  </li>
                ))}
              </ul>

              <Link to={routes.booking} className="btn-primary text-[0.74rem] px-7 py-3.5 mt-9">
                {t.common.bookThisService}
                <ArrowRight size={13} />
              </Link>
            </Reveal3D>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 px-6 bg-ivory-warm border-y border-border scene">
        <div className="max-w-7xl mx-auto">
          <Reveal3D className="flex justify-center">
            <SectionHeading
              eyebrow={t.services.processEyebrow}
              title={t.services.processTitle}
              accent={t.services.processAccent}
              subtitle={t.services.processSubtitle}
            />
          </Reveal3D>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mt-16">
            {t.services.steps.map((st, i) => (
              <Reveal3D key={st.title} delay={i * 0.08}>
                <li className="border-t border-mauve/25 pt-6">
                  <span className="caption text-mauve/50">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl text-mauve-deep mt-3" style={{ fontWeight: 500 }}>
                    {st.title}
                  </h3>
                  <p className="text-sm text-foreground/80 leading-relaxed mt-3">{st.text}</p>
                </li>
              </Reveal3D>
            ))}
          </ol>

          <FadeUp className="flex justify-center mt-16">
            <Link to={routes.booking} className="btn-primary text-[0.76rem] px-9 py-4">
              {t.services.reserveCta}
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
