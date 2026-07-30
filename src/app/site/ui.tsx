import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

/* ── Quiet entrance animation ─────────────────────────────────────── */
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/*
  ── Reveal3D ───────────────────────────────────────────────────────
  Enters by rotating up out of the page plane. Subtle by design: a
  14° start angle reads as depth without looking like a slideshow.
*/
export function Reveal3D({
  children,
  delay = 0,
  angle = 14,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  angle?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <FadeUp delay={delay} className={className}>{children}</FadeUp>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 44, rotateX: angle, transformPerspective: 1100 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformOrigin: "50% 100%" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/*
  ── Parallax ───────────────────────────────────────────────────────
  Scroll-linked vertical drift (and optional depth push) tied to the
  element's own progress through the viewport.
*/
export function Parallax({
  children,
  distance = 60,
  depth = 0,
  className = "",
}: {
  children: ReactNode;
  distance?: number;
  depth?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const zRaw = useTransform(scrollYProgress, [0, 0.5, 1], [-depth, 0, -depth]);
  const y = useSpring(yRaw, { stiffness: 70, damping: 22, mass: 0.4 });
  const z = useSpring(zRaw, { stiffness: 70, damping: 22, mass: 0.4 });

  return (
    <div ref={ref} className={className}>
      <motion.div
        className="layer-3d"
        style={reduced ? undefined : { y, z, transformPerspective: 1200 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/*
  ── TiltCard ───────────────────────────────────────────────────────
  Pointer-driven tilt on a real perspective. Capped at a few degrees so
  it feels like a card catching light, not a toy.
*/
export function TiltCard({
  children,
  intensity = 7,
  className = "",
}: {
  children: ReactNode;
  intensity?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 18 });

  if (reduced) return <div className={className}>{children}</div>;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * intensity * 2);
    rotateX.set(-py * intensity * 2);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={`layer-3d ${className}`}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

/*
  ── ScrollZoom ─────────────────────────────────────────────────────
  Image wrapper that eases from slightly oversized to true scale as it
  crosses the viewport — the editorial "breathing" crop.
*/
export function ScrollZoom({
  children,
  from = 1.12,
  className = "",
}: {
  children: ReactNode;
  from?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [from, 1, from]);
  const smooth = useSpring(scale, { stiffness: 80, damping: 24, mass: 0.4 });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={reduced ? undefined : { scale: smooth }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

/* ── Hairline reading-progress line under the navbar ──────────────── */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-20 left-0 right-0 h-px bg-mauve z-50 origin-left"
    />
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

/* ── Section heading: eyebrow, display title, quiet subtitle ──────── */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center max-w-2xl" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow && <Eyebrow className={light ? "text-blush" : ""}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display text-4xl md:text-6xl leading-[1.08] mt-4 ${
          light ? "text-white" : "text-mauve-deep"
        }`}
        style={{ fontWeight: 500 }}
      >
        {title}
        {accent && (
          <span className={`block mt-1 ${light ? "text-blush" : "text-mauve"}`} style={{ fontWeight: 400 }}>
            {accent}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-sm md:text-[0.95rem] leading-relaxed ${
            light ? "text-white/85" : "text-foreground/82"
          } ${align === "center" ? "max-w-xl" : "max-w-lg"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ── Inner-page banner used by every route except Home ───────────── */
export function PageHeader({
  eyebrow,
  title,
  accent,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle?: string;
}) {
  return (
    <header className="pt-32 pb-14 md:pt-40 md:pb-16 px-6 bg-blush-mist border-b border-border scene">
      <div className="max-w-3xl mx-auto flex justify-center">
        <Reveal3D>
          <SectionHeading eyebrow={eyebrow} title={title} accent={accent} subtitle={subtitle} />
        </Reveal3D>
      </div>
    </header>
  );
}
