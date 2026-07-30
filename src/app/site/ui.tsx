import type { ReactNode } from "react";
import { motion } from "motion/react";

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
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Engraved rule with a small centred lozenge ───────────────────── */
export function Rule({ className = "" }: { className?: string }) {
  return (
    <div className={`rule-lux ${className}`}>
      <span className="w-1.5 h-1.5 rotate-45 bg-mauve/45" />
    </div>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

/* ── Section heading: eyebrow, serif title, quiet subtitle ────────── */
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
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignment} ${align === "center" ? "max-w-2xl" : ""}`}>
      {eyebrow && (
        <Eyebrow className={light ? "text-blush" : ""}>{eyebrow}</Eyebrow>
      )}
      <h2
        className={`font-display text-3xl md:text-5xl leading-[1.15] mt-3 ${
          light ? "text-white" : "text-mauve-deep"
        }`}
        style={{ fontWeight: 600 }}
      >
        {title}
        {accent && (
          <span className={`block mt-1 ${light ? "text-blush" : "text-mauve"}`} style={{ fontWeight: 400 }}>
            {accent}
          </span>
        )}
      </h2>
      <Rule className={`w-24 mt-5 ${align === "center" ? "" : "self-start"}`} />
      {subtitle && (
        <p
          className={`mt-5 text-sm md:text-base leading-relaxed ${
            light ? "text-white/75" : "text-foreground/70"
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
    <header
      className="pt-32 pb-16 md:pt-40 md:pb-20 px-6"
      style={{
        background:
          "linear-gradient(180deg, #FFF0F4 0%, #F6EBF0 55%, #FBF6F8 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <SectionHeading eyebrow={eyebrow} title={title} accent={accent} subtitle={subtitle} />
        </FadeUp>
      </div>
    </header>
  );
}
