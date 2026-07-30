import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { FadeUp, PageHeader, SectionHeading } from "@/app/site/ui";
import { asianArtImg, brand, builderGelImg, stats } from "@/app/site/data";

const values = [
  {
    no: "01",
    title: "Preparation first",
    text: "Every set begins with meticulous cuticle work and a properly prepared nail plate. It is the reason the work lasts.",
  },
  {
    no: "02",
    title: "Structure over speed",
    text: "A correct apex and a thin free edge make a set strong and comfortable. Nothing is rushed to save a few minutes.",
  },
  {
    no: "03",
    title: "Quiet luxury",
    text: "Premium products, a calm studio and a design language that stays elegant long after the appointment ends.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the artist"
        title="Ximena Moreno"
        accent="nail artist & founder"
        subtitle="Nearly nine years spent turning nail care into a considered, personal ritual."
      />

      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <FadeUp>
            <div className="rounded-2xl p-3 neo-panel">
              <div className="overflow-hidden rounded-xl aspect-[4/5]">
                <ImageWithFallback
                  src={asianArtImg}
                  alt="Hand-painted floral nail art by Ximena Moreno"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <SectionHeading align="left" eyebrow="The story" title="A studio built on" accent="craft and care" />
            <div className="space-y-4 text-sm md:text-base text-foreground/70 leading-relaxed mt-7">
              <p>
                With nearly{" "}
                <span className="font-display text-mauve-deep" style={{ fontWeight: 600 }}>
                  nine years of professional mastery
                </span>
                , {brand.artist} has transformed nail care into a personalised ritual where clients
                leave feeling composed and confident.
              </p>
              <p>
                Staying at the forefront of global nail aesthetics — from sculpted builder gels to
                detailed hand-painted art — she combines technical precision with a restrained
                creative eye.
              </p>
              <p>
                Your session is more than an appointment: it is a calm, private studio experience
                centred on your comfort and your own sense of style.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center rounded-xl py-5 px-3 neo-panel-sm">
                  <p className="font-display text-3xl text-mauve" style={{ fontWeight: 600 }}>
                    {s.value}
                  </p>
                  <p
                    className="text-[0.6rem] font-body tracking-[0.18em] uppercase text-mauve-deep/70 mt-2"
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

      {/* Values */}
      <section
        className="py-16 md:py-24 px-6"
        style={{ background: "linear-gradient(180deg, #FBF6F8 0%, #F6EBF0 50%, #FBF6F8 100%)" }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeUp className="flex justify-center">
            <SectionHeading
              eyebrow="How we work"
              title="Three quiet"
              accent="principles"
              subtitle="The habits behind every set that leaves the studio."
            />
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {values.map((v, i) => (
              <FadeUp key={v.no} delay={i * 0.08}>
                <div className="h-full rounded-2xl p-8 neo-panel">
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full font-display text-sm text-mauve-deep neo-inset"
                    style={{ fontWeight: 600 }}
                  >
                    {v.no}
                  </span>
                  <h3 className="font-display text-lg text-mauve-deep mt-6" style={{ fontWeight: 600 }}>
                    {v.title}
                  </h3>
                  <p className="text-sm text-foreground/68 leading-relaxed mt-3">{v.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Studio strip */}
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <FadeUp>
            <SectionHeading align="left" eyebrow="The experience" title="Inside the" accent="studio" />
            <ul className="mt-8 space-y-4">
              {[
                "Private one-to-one appointments, never overlapping.",
                "Sterilised tooling and single-use files for every client.",
                "Design consultation before the first brush stroke.",
                "Aftercare guidance so your set lasts its full life.",
              ].map((line) => (
                <li key={line} className="flex gap-4 items-start">
                  <span className="mt-2 w-1.5 h-1.5 rotate-45 bg-mauve/60 shrink-0" />
                  <span className="text-sm text-foreground/70 leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
            <Link to="/booking" className="btn-lux text-[0.68rem] px-8 py-4 mt-10">
              Book a session
              <ArrowRight size={14} />
            </Link>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div className="rounded-2xl p-3 neo-panel">
              <div className="overflow-hidden rounded-xl aspect-[5/4]">
                <ImageWithFallback
                  src={builderGelImg}
                  alt="Copper chrome builder gel nails"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
