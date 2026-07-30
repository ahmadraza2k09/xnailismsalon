import { Star } from "lucide-react";
import { useT } from "@/app/i18n";
import { Ambient, Reveal3D, SectionHeading } from "./ui";

/* Three client quotes, side by side, each on its own glass panel. */
export function Testimonials() {
  const t = useT();

  return (
    <section
      id="opiniones"
      className="relative overflow-hidden py-20 md:py-32 px-6 bg-ivory-warm border-y border-border scene"
    >
      <Ambient />
      <div className="relative max-w-7xl mx-auto">
        <Reveal3D className="flex justify-center">
          <SectionHeading eyebrow={t.home.testimonialsEyebrow} title={t.home.testimonialsTitle} />
        </Reveal3D>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {t.testimonials.map((item, i) => (
            <Reveal3D key={item.name} delay={i * 0.08}>
              <figure className="card h-full p-8 flex flex-col justify-between">
                <blockquote className="font-display text-xl md:text-2xl leading-[1.35] text-mauve-deep">
                  {item.text}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-white/60">
                  <p className="font-display text-lg text-mauve" style={{ fontWeight: 500 }}>
                    {item.name}
                  </p>
                  <p className="caption mt-1.5">{item.role}</p>
                  <div className="flex gap-1 mt-4" aria-label="5 / 5">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} size={14} className="fill-mauve text-mauve" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
