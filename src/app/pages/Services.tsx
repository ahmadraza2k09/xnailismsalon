import { Link } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { FadeUp, PageHeader, SectionHeading } from "@/app/site/ui";
import { services } from "@/app/site/data";

const steps = [
  { no: "01", title: "Consultation", text: "We agree on shape, length and finish, and check the health of your natural nail." },
  { no: "02", title: "Preparation", text: "Cuticle work, dehydration and priming — the groundwork that makes a set last." },
  { no: "03", title: "Application", text: "Overlay, sculpting or extension, built with a correct apex and a thin edge." },
  { no: "04", title: "Finish", text: "Colour, art and top coat, followed by aftercare guidance for the weeks ahead." },
];

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services & pricing"
        title="Signature"
        accent="services"
        subtitle="Tailored nail experiences using premium products and refined technique. Pricing starts from the figures below and varies with length and design."
      />

      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto space-y-16 md:space-y-24">
        {services.map((s, i) => (
          <FadeUp key={s.title}>
            <div
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="rounded-2xl p-3 neo-panel">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <ImageWithFallback src={s.img} alt={s.alt} className="w-full h-full object-cover" />
                  <span
                    className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/94 text-[0.58rem] font-body tracking-[0.18em] uppercase text-mauve-deep"
                    style={{ fontWeight: 600, boxShadow: "0 4px 10px -6px rgba(110,58,89,0.6)" }}
                  >
                    {s.badge}
                  </span>
                </div>
              </div>

              <div>
                <p className="font-display text-[0.7rem] tracking-[0.32em] text-mauve/60">{s.no}</p>
                <h3 className="font-display text-2xl md:text-3xl text-mauve-deep mt-2" style={{ fontWeight: 600 }}>
                  {s.title}
                </h3>
                <p className="text-[0.66rem] font-body tracking-[0.2em] uppercase text-mauve mt-2.5" style={{ fontWeight: 600 }}>
                  {s.price}
                </p>
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed mt-5">{s.detail}</p>

                <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
                  {s.includes.map((inc) => (
                    <li key={inc} className="flex items-center gap-2.5 text-xs text-foreground/68">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center neo-inset text-mauve shrink-0">
                        <Check size={11} />
                      </span>
                      {inc}
                    </li>
                  ))}
                </ul>

                <Link to="/booking" className="btn-lux text-[0.66rem] px-7 py-3.5 mt-8">
                  Book this service
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </FadeUp>
        ))}
      </section>

      {/* Process */}
      <section
        className="py-16 md:py-24 px-6"
        style={{ background: "linear-gradient(180deg, #FBF6F8 0%, #F6EBF0 50%, #FBF6F8 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp className="flex justify-center">
            <SectionHeading
              eyebrow="The appointment"
              title="How a session"
              accent="unfolds"
              subtitle="Around two hours, start to finish, depending on the design."
            />
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {steps.map((st, i) => (
              <FadeUp key={st.no} delay={i * 0.07}>
                <div className="h-full rounded-2xl p-7 neo-panel">
                  <span
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full font-display text-xs text-mauve-deep neo-inset"
                    style={{ fontWeight: 600 }}
                  >
                    {st.no}
                  </span>
                  <h3 className="font-display text-base text-mauve-deep mt-5" style={{ fontWeight: 600 }}>
                    {st.title}
                  </h3>
                  <p className="text-xs text-foreground/65 leading-relaxed mt-2.5">{st.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="flex justify-center mt-14">
            <Link to="/booking" className="btn-lux text-[0.68rem] px-9 py-4">
              Reserve your appointment
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
