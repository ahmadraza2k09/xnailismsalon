import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useT } from "@/app/i18n";
import { Ambient, Eyebrow, Reveal3D } from "./ui";

const ROTATE_MS = 9000;

/*
  One quote at a time, set large, with the client list acting as the index.
  Auto-advances until the reader interacts with it (hover or a click), which
  hands control over for the rest of the visit.
*/
export function Testimonials() {
  const t = useT();
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);
  const total = t.testimonials.length;
  const current = t.testimonials[active];

  useEffect(() => {
    if (held) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % total), ROTATE_MS);
    return () => window.clearInterval(id);
  }, [held, total]);

  const go = (next: number) => {
    setHeld(true);
    setActive((next + total) % total);
  };

  return (
    <section
      id="opiniones"
      className="relative overflow-hidden py-20 md:py-32 px-6 bg-ivory-warm border-y border-border scene"
      onPointerEnter={() => setHeld(true)}
    >
      <Ambient />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-24">
        {/* Index of clients */}
        <Reveal3D>
          <Eyebrow>{t.home.testimonialsEyebrow}</Eyebrow>
          <h2
            className="font-display text-4xl md:text-5xl leading-[1.08] mt-4 text-mauve-deep"
            style={{ fontWeight: 500 }}
          >
            {t.home.testimonialsTitle}
          </h2>

          <ul className="glass mt-10 px-5 py-1">
            {t.testimonials.map((item, i) => {
              const isActive = i === active;
              return (
                <li key={item.name} className="border-b border-white/60 last:border-b-0">
                  <button
                    onClick={() => go(i)}
                    aria-current={isActive}
                    className="w-full flex items-baseline gap-4 py-4 text-left cursor-pointer group"
                  >
                    <span className={`caption ${isActive ? "text-mauve" : "text-mauve/45"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-xl transition-colors ${
                        isActive ? "text-mauve" : "text-mauve-deep/60 group-hover:text-mauve-deep"
                      }`}
                      style={{ fontWeight: 500 }}
                    >
                      {item.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal3D>

        {/* The quote itself */}
        <div className="glass flex flex-col p-8 md:p-10 lg:mt-10">
          <div className="min-h-[15rem] md:min-h-[17rem]">
            <AnimatePresence mode="wait">
            <motion.figure
              key={active}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                exit: { duration: 0.18, ease: "easeOut" },
              }}
              style={{ transformOrigin: "0% 100%" }}
            >
              <blockquote className="font-display text-2xl md:text-4xl leading-[1.3] text-mauve-deep">
                {current.text}
              </blockquote>
              <figcaption className="caption mt-8">
                {current.name} · {current.role}
              </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Counter and manual controls */}
          <div className="flex items-center gap-8 mt-12">
            <span className="caption text-mauve">
              {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => go(active - 1)}
                aria-label={t.common.previous}
                className="btn-icon p-2.5 cursor-pointer"
              >
                <ArrowLeft size={15} />
              </button>
              <button
                onClick={() => go(active + 1)}
                aria-label={t.common.next}
                className="btn-icon p-2.5 cursor-pointer"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
