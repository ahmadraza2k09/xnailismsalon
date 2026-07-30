import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { FadeUp, PageHeader, SectionHeading } from "@/app/site/ui";
import { useT } from "@/app/i18n";
import { asianArtImg, builderGelImg, routes } from "@/app/site/data";

export default function About() {
  const t = useT();

  return (
    <>
      <PageHeader
        eyebrow={t.about.headerEyebrow}
        title={t.about.headerTitle}
        accent={t.about.headerAccent}
        subtitle={t.about.headerSubtitle}
      />

      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <FadeUp>
            <div className="overflow-hidden rounded-lg aspect-[4/5] border border-border">
              <ImageWithFallback
                src={asianArtImg}
                alt={t.services.items[3].title}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow={t.about.storyEyebrow}
              title={t.about.storyTitle}
              accent={t.about.storyAccent}
            />
            <div className="space-y-4 text-sm md:text-base text-foreground/70 leading-relaxed mt-7">
              <p>
                {t.about.storyP1a}{" "}
                <span className="font-display text-mauve-deep" style={{ fontWeight: 600 }}>
                  {t.about.storyP1Strong}
                </span>
                {t.about.storyP1b}
              </p>
              <p>{t.about.storyP2}</p>
              <p>{t.about.storyP3}</p>
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
          </FadeUp>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-24 px-6 bg-ivory-warm border-y border-border">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="flex justify-center">
            <SectionHeading
              eyebrow={t.about.valuesEyebrow}
              title={t.about.valuesTitle}
              accent={t.about.valuesAccent}
              subtitle={t.about.valuesSubtitle}
            />
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {t.about.values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.06}>
                <div className="h-full card p-8">
                  <p className="font-display text-sm tracking-[0.28em] text-mauve/70">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-lg text-mauve-deep mt-4" style={{ fontWeight: 600 }}>
                    {v.title}
                  </h3>
                  <p className="text-sm text-foreground/68 leading-relaxed mt-3">{v.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <FadeUp>
            <SectionHeading
              align="left"
              eyebrow={t.about.studioEyebrow}
              title={t.about.studioTitle}
              accent={t.about.studioAccent}
            />
            <ul className="mt-8 space-y-4">
              {t.about.studioPoints.map((line) => (
                <li key={line} className="flex gap-4 items-start">
                  <span className="mt-2 w-1.5 h-1.5 rotate-45 bg-mauve/60 shrink-0" />
                  <span className="text-sm text-foreground/70 leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
            <Link to={routes.booking} className="btn-primary text-[0.66rem] px-8 py-4 mt-10">
              {t.common.bookSession}
              <ArrowRight size={14} />
            </Link>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="overflow-hidden rounded-lg aspect-[5/4] border border-border">
              <ImageWithFallback
                src={builderGelImg}
                alt={t.services.items[0].title}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
