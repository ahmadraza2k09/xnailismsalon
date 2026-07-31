import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

/*
  ── Ambient ────────────────────────────────────────────────────────
  Soft out-of-focus colour behind a section. It exists so the frosted
  panels above it have something to refract — glass over flat white
  reads as nothing at all.
*/
export function Ambient({ tone = "light" }: { tone?: "light" | "dark" }) {
  const orbs =
    tone === "dark"
      ? [
          "radial-gradient(circle at 30% 30%, rgba(254,181,203,0.30), transparent 68%)",
          "radial-gradient(circle at 60% 40%, rgba(201,155,182,0.24), transparent 70%)",
          "radial-gradient(circle at 50% 50%, rgba(143,34,81,0.34), transparent 70%)",
        ]
      : [
          "radial-gradient(circle at 30% 30%, rgba(254,181,203,0.34), transparent 68%)",
          "radial-gradient(circle at 60% 40%, rgba(163,91,133,0.18), transparent 70%)",
          "radial-gradient(circle at 50% 50%, rgba(143,34,81,0.10), transparent 70%)",
        ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl"
        style={{ background: orbs[0] }}
      />
      <div
        className="absolute top-1/4 -right-32 w-[32rem] h-[32rem] rounded-full blur-3xl"
        style={{ background: orbs[1] }}
      />
      <div
        className="absolute -bottom-40 left-1/3 w-[26rem] h-[26rem] rounded-full blur-3xl"
        style={{ background: orbs[2] }}
      />
    </div>
  );
}


/*
  ── MediaParallax ──────────────────────────────────────────────────
  The image drifts inside its own frame as the tile crosses the
  viewport, so the photo feels set behind the crop rather than pasted
  into it. Pair with .media, which already clips and zooms on hover.
*/
export function MediaParallax({
  children,
  amount = 8,
  className = "",
}: {
  children: ReactNode;
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yRaw = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);
  const y = useSpring(yRaw, { stiffness: 80, damping: 26, mass: 0.4 });

  return (
    <div ref={ref} className={className}>
      <motion.div className="w-full h-full" style={reduced ? undefined : { y, scale: 1 + amount / 100 }}>
        {children}
      </motion.div>
    </div>
  );
}

/*
  ── ScrollDepth ────────────────────────────────────────────────────
  Scroll-linked rotation and lift on a real perspective. Used for the
  hero stack, where a few degrees of turn as the page moves reads as
  depth rather than as a gimmick.
*/
export function ScrollDepth({
  children,
  turn = 6,
  lift = 30,
  className = "",
}: {
  children: ReactNode;
  turn?: number;
  lift?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const rotateRaw = useTransform(scrollYProgress, [0, 1], [turn, -turn]);
  const yRaw = useTransform(scrollYProgress, [0, 1], [lift, -lift]);
  const rotateY = useSpring(rotateRaw, { stiffness: 60, damping: 24, mass: 0.5 });
  const y = useSpring(yRaw, { stiffness: 60, damping: 24, mass: 0.5 });

  return (
    <div ref={ref} className={`scene ${className}`}>
      <motion.div
        className="layer-3d"
        style={reduced ? undefined : { rotateY, y, transformPerspective: 1400 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/*
  ── ScrollExit ─────────────────────────────────────────────────────
  Content settles back and fades as it leaves the top of the screen,
  so one section hands over to the next instead of cutting.
*/
export function ScrollExit({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduced ? undefined : { opacity, scale, y }}>{children}</motion.div>
    </div>
  );
}

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
  Enters with a hint of rotation out of the page plane. Kept to a few
  degrees so it reads as softness, not as a 3D effect.
*/
export function Reveal3D({
  children,
  delay = 0,
  angle = 5,
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
  distance = 20,
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
  Pointer-driven tilt, capped at a couple of degrees: enough for a card
  to catch the light, not enough to read as a 3D toy.
*/
export function TiltCard({
  children,
  intensity = 3,
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
  from = 1.04,
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
  tone = light ? "light" : "default",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  tone?: "default" | "light" | "pink";
}) {
  const titleColor = tone === "light" ? "text-white" : "text-mauve-deep";
  const accentColor =
    tone === "light" ? "text-blush" : tone === "pink" ? "text-mauve-dark" : "text-mauve";
  const eyebrowColor = tone === "light" ? "text-blush" : tone === "pink" ? "text-mauve-deep" : "";
  const subtitleColor =
    tone === "light" ? "text-white/85" : tone === "pink" ? "text-mauve-deep/80" : "text-foreground/82";
  const alignment =
    align === "center" ? "text-center mx-auto items-center max-w-2xl" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow && <Eyebrow className={eyebrowColor}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-display text-[2.6rem] md:text-[4.2rem] leading-[0.98] tracking-[-0.02em] mt-5 ${titleColor}`}
        style={{ fontWeight: 500 }}
      >
        {title}
        {accent && (
          <span className={`block mt-1 ${accentColor}`} style={{ fontWeight: 400 }}>
            {accent}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-[0.95rem] md:text-base leading-relaxed ${subtitleColor} ${
            align === "center" ? "max-w-xl" : "max-w-lg"
          }`}
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
    <header className="relative overflow-hidden pt-28 pb-12 md:pt-32 md:pb-16 px-6 bg-mauve-deep scene">
      <Ambient tone="dark" />
      <div className="relative max-w-3xl mx-auto flex justify-center">
        <Reveal3D>
          <SectionHeading tone="light" eyebrow={eyebrow} title={title} accent={accent} subtitle={subtitle} />
        </Reveal3D>
      </div>
    </header>
  );
}

/*
  ── Scroll3DRotate ─────────────────────────────────────────────────
  Dynamic 3D scroll-linked tilt effect where elements rotate on their X & Y 
  axis and scale in 3D space as you scroll through the page.
*/
export function Scroll3DRotate({
  children,
  intensity = 12,
  perspective = 1200,
  className = "",
}: {
  children: ReactNode;
  intensity?: number;
  perspective?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateXRaw = useTransform(scrollYProgress, [0, 0.5, 1], [intensity, 0, -intensity]);
  const rotateYRaw = useTransform(scrollYProgress, [0, 0.5, 1], [-intensity / 2, 0, intensity / 2]);
  const scaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [0.6, 1, 1, 0.7]);

  const rotateX = useSpring(rotateXRaw, { stiffness: 60, damping: 22 });
  const rotateY = useSpring(rotateYRaw, { stiffness: 60, damping: 22 });
  const scale = useSpring(scaleRaw, { stiffness: 60, damping: 22 });

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={`scene ${className}`}>
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          opacity: opacityRaw,
          transformPerspective: perspective,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
