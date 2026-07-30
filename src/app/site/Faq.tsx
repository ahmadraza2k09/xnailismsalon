import { Plus } from "lucide-react";
import { useT } from "@/app/i18n";
import { Ambient, Reveal3D, SectionHeading } from "./ui";

/*
  Native <details> so the accordion is keyboard and screen reader friendly
  without any state of its own. Each row sits on the same glass panel as the
  cards elsewhere, and the marker is replaced by a plus in a frosted disc
  that turns into a minus when the panel opens.
*/
export function Faq() {
  const t = useT();

  return (
    <section className="relative overflow-hidden py-12 md:py-18 px-6 scene">
      <Ambient />
      <div className="relative max-w-3xl mx-auto">
        <Reveal3D className="flex justify-center">
          <SectionHeading eyebrow={t.home.faqEyebrow} title={t.home.faqTitle} />
        </Reveal3D>

        <div className="mt-10 flex flex-col gap-4">
          {t.home.faq.map((item, i) => (
            <Reveal3D key={item.q} delay={i * 0.05}>
              <details className="faq-item card card-hover group px-6 md:px-8">
                <summary className="flex items-center justify-between gap-6 py-6 cursor-pointer list-none">
                  <h3
                    className="font-display text-xl md:text-2xl text-mauve-deep leading-snug"
                    style={{ fontWeight: 500 }}
                  >
                    {item.q}
                  </h3>
                  <span className="glass-chip w-10 h-10 shrink-0 grid place-items-center text-mauve">
                    <Plus
                      size={17}
                      className="relative z-[1] transition-transform duration-300 group-open:rotate-45"
                    />
                  </span>
                </summary>
                <p className="text-[0.95rem] text-foreground/78 leading-relaxed pb-7 pr-14 max-w-2xl">
                  {item.a}
                </p>
              </details>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
