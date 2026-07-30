import { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { FadeUp, PageHeader, Reveal3D, TiltCard } from "@/app/site/ui";
import { useT } from "@/app/i18n";
import { galleryItems, routes } from "@/app/site/data";

export default function Portfolio() {
  const t = useT();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeIndex === null ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const current = activeIndex === null ? null : galleryItems[activeIndex];

  return (
    <>
      <PageHeader
        eyebrow={t.portfolio.headerEyebrow}
        title={t.portfolio.headerTitle}
        accent={t.portfolio.headerAccent}
        subtitle={t.portfolio.headerSubtitle}
      />

      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto scene">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((img, i) => (
            <Reveal3D key={img.tag} delay={(i % 3) * 0.06} className="h-full">
              <TiltCard intensity={6} className="h-full">
                <button
                  onClick={() => setActiveIndex(i)}
                  className="w-full h-full text-left card card-hover overflow-hidden cursor-pointer group"
                >
                  <div className="overflow-hidden aspect-[3/4]">
                    <ImageWithFallback
                      src={img.src}
                      alt={t.portfolio.tags[img.tag]}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="caption text-mauve text-center py-4">{t.portfolio.tags[img.tag]}</p>
                </button>
              </TiltCard>
            </Reveal3D>
          ))}
        </div>

        <FadeUp className="flex justify-center mt-16">
          <Link to={routes.booking} className="btn-primary text-[0.66rem] px-9 py-4">
            {t.portfolio.cta}
          </Link>
        </FadeUp>
      </section>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-5 bg-ink/90"
            onClick={() => setActiveIndex(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-full text-white/80 hover:text-white border border-white/25 cursor-pointer"
              onClick={() => setActiveIndex(null)}
              aria-label={t.portfolio.close}
            >
              <X size={20} />
            </button>

            <motion.figure
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={current.src}
                alt={t.portfolio.tags[current.tag]}
                className="w-full max-h-[72vh] object-contain"
              />
              <figcaption className="text-center py-4 border-t border-border">
                <p className="eyebrow">{t.portfolio.tags[current.tag]}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
