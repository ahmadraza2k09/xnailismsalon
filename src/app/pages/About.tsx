import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { PageHeader, Parallax, Reveal3D, ScrollZoom, SectionHeading } from "@/app/site/ui";
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

      <section className="py-16 md:py-28 px-6 max-w-7xl mx-auto scene">
        <div className="grid md:grid-cols-2 gap-14 md:gap-24 items-center">
          <Parallax distance={34} depth={30}>
            <ScrollZoom from={1.12} className="rounded-lg aspect-[4/5]">
              <ImageWithFallback
                src={asianArtImg}
                alt={t.services.items[3].title}
                className="w-full h-full object-cover"
              />
            </ScrollZoom>
          </Parallax>

          <Reveal3D>
            <SectionHeading
              align="left"
              eyebrow={t.about.storyEyebrow}
              title={t.about.storyTitle}
              accent={t.about.storyAccent}
            />
            <div className="space-y-5 text-sm md:text-[0.95rem] text-foreground/82 leading-relaxed mt-8">
              <p>
                {t.about.storyP1a}{" "}
                <span className="font-display text-lg text-mauve-deep" style={{ fontWeight: 500 }}>
                  {t.about.storyP1Strong}
                </span>
                {t.about.storyP1b}
              </p>
              <p>{t.about.storyP2}</p>
              <p>{t.about.storyP3}</p>
            </div>

            <dl className="grid grid-cols-3 gap-8 mt-12 border-t border-mauve/15 pt-8">
              {t.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-4xl text-mauve" style={{ fontWeight: 500 }}>
                    {s.value}
                  </dt>
                  <dd className="caption mt-2 leading-relaxed">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal3D>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-24 px-6 bg-ivory-warm border-y border-border scene">
        <div className="max-w-7xl mx-auto">
          <Reveal3D className="flex justify-center">
            <SectionHeading
              eyebrow={t.about.valuesEyebrow}
              title={t.about.valuesTitle}
              accent={t.about.valuesAccent}
              subtitle={t.about.valuesSubtitle}
            />
          </Reveal3D>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12 mt-16">
            {t.about.values.map((v, i) => (
              <Reveal3D key={v.title} delay={i * 0.08}>
                <div className="border-t border-mauve/25 pt-6">
                  <span className="caption text-mauve/50">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl text-mauve-deep mt-3" style={{ fontWeight: 500 }}>
                    {v.title}
                  </h3>
                  <p className="text-sm text-foreground/78 leading-relaxed mt-4">{v.text}</p>
                </div>
              </Reveal3D>
            ))}
          </div>
        </div>
      </section>

      {/* Studio */}
      <section className="py-16 md:py-28 px-6 max-w-7xl mx-auto scene">
        <div className="grid md:grid-cols-2 gap-14 md:gap-24 items-center">
          <Reveal3D>
            <SectionHeading
              align="left"
              eyebrow={t.about.studioEyebrow}
              title={t.about.studioTitle}
              accent={t.about.studioAccent}
            />
            <ul className="mt-10 border-t border-mauve/15">
              {t.about.studioPoints.map((line) => (
                <li key={line} className="flex gap-4 items-start py-4 border-b border-mauve/15">
                  <span className="mt-2 w-1.5 h-1.5 rotate-45 bg-mauve/60 shrink-0" />
                  <span className="text-sm text-foreground/82 leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
            <Link to={routes.booking} className="btn-primary text-[0.64rem] px-8 py-4 mt-10">
              {t.common.bookSession}
              <ArrowRight size={14} />
            </Link>
          </Reveal3D>

          <Parallax distance={40} className="md:pt-10">
            <ScrollZoom from={1.12} className="rounded-lg aspect-[5/6]">
              <ImageWithFallback
                src={builderGelImg}
                alt={t.services.items[0].title}
                className="w-full h-full object-cover"
              />
            </ScrollZoom>
          </Parallax>
        </div>
      </section>
    </>
  );
}
