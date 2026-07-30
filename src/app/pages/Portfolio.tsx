import { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { FadeUp, PageHeader } from "@/app/site/ui";
import { galleryImages } from "@/app/site/data";

export default function Portfolio() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  const current = galleryImages.find((g) => g.alt === active);

  return (
    <>
      <PageHeader
        eyebrow="The portfolio"
        title="Recent work"
        accent="from the studio"
        subtitle="Select any set to view it up close."
      />

      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, i) => (
            <FadeUp key={img.alt} delay={(i % 3) * 0.06} className="break-inside-avoid">
              <button
                onClick={() => setActive(img.alt)}
                className="w-full text-left rounded-2xl p-2.5 neo-panel neo-hover cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg">
                  <ImageWithFallback src={img.src} alt={img.alt} className="w-full block object-cover" />
                </div>
                <p
                  className="text-[0.6rem] font-body tracking-[0.22em] uppercase text-mauve text-center py-3"
                  style={{ fontWeight: 600 }}
                >
                  {img.tag}
                </p>
              </button>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="flex justify-center mt-16">
          <Link to="/booking" className="btn-lux text-[0.68rem] px-9 py-4">
            Book a set like these
          </Link>
        </FadeUp>
      </section>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-5"
            style={{ background: "rgba(43,27,36,0.88)", backdropFilter: "blur(14px)" }}
            onClick={() => setActive(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-full text-white/80 hover:text-white bg-white/10 cursor-pointer"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <motion.figure
              initial={{ scale: 0.92, y: 14 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 14 }}
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
              className="max-w-2xl w-full rounded-2xl overflow-hidden bg-white p-3"
              style={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.6)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={current.src}
                alt={current.alt}
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
              <figcaption className="text-center py-4">
                <p className="eyebrow">{current.tag}</p>
                <p className="text-xs text-foreground/60 mt-2">{current.alt}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
