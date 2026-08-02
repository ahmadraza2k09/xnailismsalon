import { Link } from "react-router";
import { ArrowRight, Clock, Globe, Sparkles, UserCheck } from "lucide-react";
import { Ambient, PageHeader, Reveal3D, SectionHeading } from "@/app/site/ui";
import { useT } from "@/app/i18n";
import { routes } from "@/app/site/data";

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

      {/* Main story */}
      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto scene">
        <Reveal3D>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow={t.about.storyEyebrow}
              title={t.about.storyTitle}
              accent={t.about.storyAccent}
            />
            <div className="space-y-5 text-[0.98rem] md:text-base text-foreground/82 leading-relaxed mt-8">
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

            <dl className="glass grid grid-cols-3 gap-6 mt-12 px-6 py-6 border border-mauve/20">
              {t.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl md:text-4xl text-mauve" style={{ fontWeight: 500 }}>
                    {s.value}
                  </dt>
                  <dd className="caption mt-2 leading-relaxed">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal3D>
      </section>

      {/* Side-by-side Partners Intro Boxes (No pictures) */}
      <section className="relative overflow-hidden py-14 md:py-24 px-6 bg-mauve/5 border-y border-border scene">
        <Ambient />
        <div className="relative max-w-7xl mx-auto">
          <Reveal3D className="flex justify-center text-center">
            <SectionHeading
              eyebrow="El Equipo"
              title="Nuestras"
              accent="Especialistas"
              subtitle="Conoce a las profesionales detrás de X.Nailsm"
            />
          </Reveal3D>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-12">
            {/* Box 1: Ximena Moreno */}
            <Reveal3D delay={0.05}>
              <div className="card p-8 md:p-10 h-full flex flex-col justify-between border border-mauve/25 shadow-xl hover:border-mauve/50 transition-all bg-white/90">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mauve/10 text-mauve-deep text-[0.7rem] font-body tracking-[0.14em] uppercase font-semibold">
                      <UserCheck size={14} className="text-mauve" />
                      Fundadora & Artista
                    </span>
                    <span className="text-xs text-mauve font-medium">9+ años oficio</span>
                  </div>

                  <h3 className="font-display text-3xl text-mauve-deep" style={{ fontWeight: 500 }}>
                    {t.common.team.ximena.name}
                  </h3>
                  <p className="caption text-mauve mt-1">{t.common.team.ximena.role}</p>

                  <p className="text-sm text-foreground/82 leading-relaxed mt-5">
                    {t.common.team.ximena.bio}
                  </p>

                  <div className="mt-6 pt-6 border-t border-border space-y-2.5">
                    <div className="flex items-start gap-2.5 text-xs text-foreground/80">
                      <Sparkles size={14} className="text-mauve shrink-0 mt-0.5" />
                      <span>Nivelación de Builder, Extensiones de Polygel y Acrílico</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-foreground/80">
                      <Sparkles size={14} className="text-mauve shrink-0 mt-0.5" />
                      <span>Diseños asiáticos de autor pintados a mano</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center gap-2 text-xs font-semibold text-mauve-deep mb-2">
                    <Clock size={14} className="text-mauve" />
                    <span>Horarios de Ximena:</span>
                  </div>
                  <ul className="text-xs text-foreground/75 space-y-1">
                    <li>• Mar, Jue, Sáb y Dom: 7:00 am - 9:00 pm</li>
                    <li>• Lun, Mié y Vie: 7:00 am - 3:00 pm</li>
                  </ul>
                </div>
              </div>
            </Reveal3D>

            {/* Box 2: Karelli Sandoval */}
            <Reveal3D delay={0.12}>
              <div className="card p-8 md:p-10 h-full flex flex-col justify-between border border-mauve/25 shadow-xl hover:border-mauve/50 transition-all bg-white/90">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mauve/10 text-mauve-deep text-[0.7rem] font-body tracking-[0.14em] uppercase font-semibold">
                      <Globe size={14} className="text-mauve" />
                      {t.common.team.karelli.badge}
                    </span>
                    <span className="text-xs text-mauve font-medium">Socia</span>
                  </div>

                  <h3 className="font-display text-3xl text-mauve-deep" style={{ fontWeight: 500 }}>
                    {t.common.team.karelli.name}
                  </h3>
                  <p className="caption text-mauve mt-1">{t.common.team.karelli.role}</p>

                  <p className="text-sm text-foreground/82 leading-relaxed mt-5">
                    {t.common.team.karelli.bio}
                  </p>

                  <div className="mt-6 pt-6 border-t border-border space-y-2.5">
                    <div className="flex items-start gap-2.5 text-xs text-foreground/80">
                      <Sparkles size={14} className="text-mauve shrink-0 mt-0.5" />
                      <span>Pedicura en seco (limpieza profunda, cutícula y limado de precisión)</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-foreground/80">
                      <Sparkles size={14} className="text-mauve shrink-0 mt-0.5" />
                      <span>Tratamientos completos de Tina Spa con sales epsom aromáticas</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-foreground/80">
                      <Sparkles size={14} className="text-mauve shrink-0 mt-0.5" />
                      <span>Técnica Acripié y diseños variados en pies</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <Link to={routes.booking} className="btn-primary w-full text-[0.66rem] py-3.5">
                    {t.common.bookSession}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal3D>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative overflow-hidden py-12 md:py-20 px-6 bg-ivory-warm border-b border-border scene">
        <Ambient />
        <div className="relative max-w-7xl mx-auto">
          <Reveal3D className="flex justify-center">
            <SectionHeading
              eyebrow={t.about.valuesEyebrow}
              title={t.about.valuesTitle}
              accent={t.about.valuesAccent}
              subtitle={t.about.valuesSubtitle}
            />
          </Reveal3D>

          <div className="grid md:grid-cols-3 gap-10 md:gap-12 mt-12">
            {t.about.values.map((v, i) => (
              <Reveal3D key={v.title} delay={i * 0.08}>
                <div className="card card-hover h-full p-7">
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
      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto scene">
        <div className="max-w-3xl mx-auto">
          <Reveal3D>
            <SectionHeading
              align="center"
              eyebrow={t.about.studioEyebrow}
              title={t.about.studioTitle}
              accent={t.about.studioAccent}
            />
            <ul className="glass mt-10 px-6 py-2">
              {t.about.studioPoints.map((line) => (
                <li key={line} className="flex gap-4 items-start py-4 border-b border-white/60 last:border-b-0">
                  <span className="mt-2 w-1.5 h-1.5 rotate-45 bg-mauve/60 shrink-0" />
                  <span className="text-sm text-foreground/82 leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-10">
              <Link to={routes.booking} className="btn-primary text-[0.64rem] px-8 py-4">
                {t.common.bookSession}
                <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal3D>
        </div>
      </section>
    </>
  );
}
