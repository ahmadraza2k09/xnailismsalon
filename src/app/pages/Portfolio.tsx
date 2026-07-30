import { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Ambient, FadeUp, MediaParallax, PageHeader, Reveal3D } from "@/app/site/ui";
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

      <section className="relative overflow-hidden py-12 md:py-20 px-6 scene">
        <Ambient />
        <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((img, i) => (
            <Reveal3D key={img.tag} delay={(i % 3) * 0.06} className="h-full">
              <button
                onClick={() => setActiveIndex(i)}
                className="media group block w-full aspect-[3/4] cursor-pointer"
              >
                <MediaParallax className="absolute inset-0" amount={8}>
                  <ImageWithFallback
                    src={img.src}
                    alt={t.portfolio.tags[img.tag]}
                    className="w-full h-full object-cover"
                  />
                </MediaParallax>
                <span className="media-scrim" />
                <span className="absolute inset-x-0 bottom-0 p-5 caption text-white/90 text-left">
                  {t.portfolio.tags[img.tag]}
                </span>
              </button>
            </Reveal3D>
          ))}
        </div>

        <FadeUp className="flex justify-center mt-12">
          <Link to={routes.booking} className="btn-primary text-[0.66rem] px-9 py-4">
            {t.portfolio.cta}
          </Link>
        </FadeUp>
        </div>
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
              className="glass-dark absolute top-6 right-6 p-3 text-white/90 hover:text-white cursor-pointer !rounded-full"
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
              className="glass max-w-2xl w-full overflow-hidden p-2.5"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={current.src}
                alt={t.portfolio.tags[current.tag]}
                className="w-full max-h-[72vh] object-contain rounded-lg"
              />
              <figcaption className="text-center pt-4 pb-2">
                <p className="eyebrow">{t.portfolio.tags[current.tag]}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
