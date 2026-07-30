import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { FadeUp, PageHeader, SectionHeading } from "@/app/site/ui";
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

      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto space-y-16 md:space-y-24">
        {t.services.items.map((s, i) => (
          <FadeUp key={s.title}>
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className={`overflow-hidden rounded-lg border border-border ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <ImageWithFallback src={serviceImages[i]} alt={s.title} className="w-full aspect-[4/3] object-cover" />
              </div>

              <div>
                <p className="font-display text-sm tracking-[0.3em] text-mauve/70">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-mauve-deep mt-2" style={{ fontWeight: 600 }}>
                  {s.title}
                </h3>
                <p
                  className="text-[0.66rem] font-body tracking-[0.18em] uppercase text-mauve mt-2.5"
                  style={{ fontWeight: 600 }}
                >
                  {s.price} · {s.badge}
                </p>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed mt-5">{s.detail}</p>

                <p
                  className="text-[0.6rem] font-body tracking-[0.22em] uppercase text-mauve-deep/60 mt-7"
                  style={{ fontWeight: 600 }}
                >
                  {t.services.includesLabel}
                </p>
                <ul className="mt-3 grid sm:grid-cols-2 gap-2.5">
                  {s.includes.map((inc) => (
                    <li key={inc} className="flex items-center gap-2.5 text-xs text-foreground/68">
                      <Check size={13} className="text-mauve shrink-0" />
                      {inc}
                    </li>
                  ))}
                </ul>

                <Link to={routes.booking} className="btn-primary text-[0.64rem] px-7 py-3.5 mt-8">
                  {t.common.bookThisService}
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </FadeUp>
        ))}
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 px-6 bg-ivory-warm border-y border-border">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="flex justify-center">
            <SectionHeading
              eyebrow={t.services.processEyebrow}
              title={t.services.processTitle}
              accent={t.services.processAccent}
              subtitle={t.services.processSubtitle}
            />
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {t.services.steps.map((st, i) => (
              <FadeUp key={st.title} delay={i * 0.06}>
                <div className="h-full card p-7">
                  <p className="font-display text-sm tracking-[0.28em] text-mauve/70">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-base text-mauve-deep mt-4" style={{ fontWeight: 600 }}>
                    {st.title}
                  </h3>
                  <p className="text-xs text-foreground/65 leading-relaxed mt-2.5">{st.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="flex justify-center mt-14">
            <Link to={routes.booking} className="btn-primary text-[0.66rem] px-9 py-4">
              {t.services.reserveCta}
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
