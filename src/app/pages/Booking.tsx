import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Ambient, PageHeader, Reveal3D } from "@/app/site/ui";
import { useLanguage } from "@/app/i18n";
import { translations } from "@/app/i18n/translations";
import { brand, serviceImages, timeSlots } from "@/app/site/data";

const TOTAL_STEPS = 4;
const labelCls = "block text-[0.68rem] font-body tracking-[0.16em] uppercase text-mauve-deep mb-2.5";

/* Local calendar helpers — no timezone maths, everything stays in local time. */
const startOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1);
const iso = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const fromIso = (v: string) => {
  const [y, m, d] = v.split("-").map(Number);
  return new Date(y, m - 1, d);
};

/* Monday first, padded to whole weeks. */
function monthGrid(cursor: Date) {
  const first = startOfMonth(cursor);
  const lead = (first.getDay() + 6) % 7;
  const days: (Date | null)[] = Array.from({ length: lead }, () => null);
  const total = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate();
  for (let day = 1; day <= total; day += 1) {
    days.push(new Date(cursor.getFullYear(), cursor.getMonth(), day));
  }
  return days;
}

export default function Booking() {
  const { lang, t } = useLanguage();
  const locale = lang === "es" ? "es-MX" : "en-GB";

  const [step, setStep] = useState(1);
  const [service, setService] = useState<number | null>(null);
  const [cursor, setCursor] = useState(() => startOfMonth(new Date()));
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", notes: "" });

  const today = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }, []);

  const days = useMemo(() => monthGrid(cursor), [cursor]);
  const slots = date ? timeSlots[fromIso(date).getDay()] : [];
  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm({ ...form, [key]: e.target.value });

  const canContinue =
    (step === 1 && service !== null) ||
    (step === 2 && Boolean(date && time)) ||
    (step === 3 && Boolean(form.name && form.phone)) ||
    step === 4;

  const stepLabel = t.booking.stepOf.replace("{n}", String(step)).replace("{total}", String(TOTAL_STEPS));
  const weekdayInitials = useMemo(() => {
    const base = new Date(2024, 0, 1); // a Monday
    return Array.from({ length: 7 }, (_, i) =>
      new Date(2024, 0, base.getDate() + i).toLocaleDateString(locale, { weekday: "narrow" }),
    );
  }, [locale]);

  const longDate = (value: string) =>
    fromIso(value).toLocaleDateString(locale, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  /* The message always reaches Ximena in Spanish, whatever the visitor reads. */
  const confirmReservation = () => {
    if (service === null || !date || !time) return;
    const es = translations.es;
    const m = es.booking.message;
    const chosen = es.services.items[service];
    const spanishDate = fromIso(date).toLocaleDateString("es-MX", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const message = [
      m.intro,
      "",
      `${m.name}: ${form.name}`,
      `${m.phone}: ${form.phone}`,
      `${m.date}: ${spanishDate}`,
      `${m.time}: ${time}`,
      `${m.service}: ${chosen.title} · ${chosen.price}`,
      `${m.notes}: ${form.notes || m.none}`,
      "",
      m.thanks,
    ].join("\n");

    window.open(`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <PageHeader
        eyebrow={t.booking.system}
        title={t.booking.headerTitle}
        accent={t.booking.headerAccent}
        subtitle={t.booking.headerSubtitle}
      />

      <section className="relative overflow-hidden py-12 md:py-18 px-6 scene">
        <Ambient />
        <div className="relative max-w-4xl mx-auto">
          {/* Progress */}
          <ol className="flex items-center justify-center gap-2 md:gap-3 mb-9">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((n) => (
              <li key={n} className="flex items-center gap-2 md:gap-3">
                <span
                  aria-current={n === step ? "step" : undefined}
                  className={`grid place-items-center w-9 h-9 rounded-full text-[0.78rem] transition-colors ${
                    n < step
                      ? "bg-mauve text-white"
                      : n === step
                        ? "bg-mauve-deep text-white"
                        : "glass-chip text-mauve-deep/50"
                  }`}
                >
                  {n < step ? <Check size={15} className="relative z-[1]" /> : <span className="relative z-[1]">{n}</span>}
                </span>
                {n < TOTAL_STEPS && (
                  <span className={`w-8 md:w-16 h-px ${n < step ? "bg-mauve" : "bg-mauve/25"}`} />
                )}
              </li>
            ))}
          </ol>

          <Reveal3D>
            <div className="card p-7 md:p-12">
              <h2 className="font-display text-2xl md:text-3xl text-mauve-deep" style={{ fontWeight: 500 }}>
                {step === 1 && t.booking.stepService}
                {step === 2 && t.booking.stepWhen}
                {step === 3 && t.booking.stepYou}
                {step === 4 && t.booking.stepConfirm}
              </h2>
              {step === 2 && (
                <p className="text-sm text-foreground/70 mt-2 max-w-xl">{t.booking.stepWhenNote}</p>
              )}
              <p className="caption mt-3">{stepLabel}</p>

              {/* Step 1 — service */}
              {step === 1 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                  {t.services.items.map((item, i) => (
                    <button
                      key={item.title}
                      onClick={() => setService(i)}
                      aria-pressed={service === i}
                      className={`text-left rounded-xl overflow-hidden border transition-all cursor-pointer ${
                        service === i
                          ? "border-mauve ring-2 ring-mauve/25 bg-white"
                          : "border-border bg-white/70 hover:border-mauve/50"
                      }`}
                    >
                      <ImageWithFallback
                        src={serviceImages[i]}
                        alt={item.title}
                        className="w-full aspect-[4/3] object-cover"
                      />
                      <span className="block px-4 py-3.5">
                        <span className="block font-display text-lg text-mauve-deep" style={{ fontWeight: 500 }}>
                          {item.title}
                        </span>
                        <span className="block caption text-mauve mt-1.5">{item.price}</span>
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Step 2 — date and time */}
              {step === 2 && (
                <div className="grid md:grid-cols-2 gap-10 mt-8">
                  <div>
                    <p className="caption text-mauve mb-4">{t.booking.selectDate}</p>
                    <div className="card-tint p-5">
                      <div className="flex items-center justify-between mb-4">
                        <button
                          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}
                          className="btn-icon w-8 h-8 cursor-pointer"
                          aria-label={t.booking.back}
                        >
                          <ChevronLeft size={15} />
                        </button>
                        <span className="font-display text-lg text-mauve-deep" style={{ fontWeight: 500 }}>
                          {cursor.toLocaleDateString(locale, { month: "long", year: "numeric" })}
                        </span>
                        <button
                          onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}
                          className="btn-icon w-8 h-8 cursor-pointer"
                          aria-label={t.booking.next}
                        >
                          <ChevronRight size={15} />
                        </button>
                      </div>

                      <div className="grid grid-cols-7 gap-1 text-center">
                        {weekdayInitials.map((d, i) => (
                          <span key={i} className="caption text-mauve-deep/45 py-1">
                            {d}
                          </span>
                        ))}
                        {days.map((day, i) => {
                          if (!day) return <span key={`pad-${i}`} />;
                          const value = iso(day);
                          const disabled = day < today || timeSlots[day.getDay()].length === 0;
                          const selected = value === date;
                          return (
                            <button
                              key={value}
                              disabled={disabled}
                              onClick={() => {
                                setDate(value);
                                setTime(null);
                              }}
                              className={`h-9 rounded-full text-[0.85rem] transition-colors ${
                                selected
                                  ? "bg-mauve text-white"
                                  : disabled
                                    ? "text-mauve-deep/25 cursor-not-allowed"
                                    : "text-mauve-deep hover:bg-mauve/12 cursor-pointer"
                              }`}
                            >
                              {day.getDate()}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="caption text-mauve mb-4">{t.booking.selectTime}</p>
                    {!date && <p className="text-sm text-foreground/60">{t.booking.pickDateFirst}</p>}
                    {date && slots.length === 0 && (
                      <p className="text-sm text-foreground/60">{t.booking.noSlots}</p>
                    )}
                    <div className="flex flex-wrap gap-3">
                      {slots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setTime(slot)}
                          aria-pressed={time === slot}
                          className={`px-5 py-3 rounded-full text-[0.85rem] border transition-colors cursor-pointer ${
                            time === slot
                              ? "bg-mauve text-white border-mauve"
                              : "bg-white/70 border-border text-mauve-deep hover:border-mauve/50"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 — details */}
              {step === 3 && (
                <div className="grid gap-6 mt-8 max-w-xl">
                  <div>
                    <label className={labelCls} htmlFor="bk-name">
                      {t.booking.name}
                    </label>
                    <input
                      id="bk-name"
                      type="text"
                      className="field"
                      placeholder={t.booking.namePlaceholder}
                      value={form.name}
                      onChange={update("name")}
                    />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="bk-phone">
                      {t.booking.phone}
                    </label>
                    <input
                      id="bk-phone"
                      type="tel"
                      className="field"
                      placeholder={t.booking.phonePlaceholder}
                      value={form.phone}
                      onChange={update("phone")}
                    />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="bk-notes">
                      {t.booking.notes}
                    </label>
                    <textarea
                      id="bk-notes"
                      rows={4}
                      className="field resize-none"
                      placeholder={t.booking.notesPlaceholder}
                      value={form.notes}
                      onChange={update("notes")}
                    />
                  </div>
                </div>
              )}

              {/* Step 4 — summary */}
              {step === 4 && (
                <>
                  <dl className="mt-8 divide-y divide-border border-y border-border">
                    {[
                      [t.booking.summaryService, service !== null ? t.services.items[service].title : ""],
                      [t.booking.summaryDate, date ? longDate(date) : ""],
                      [t.booking.summaryTime, time ?? ""],
                      [t.booking.summaryName, form.name],
                      [t.booking.summaryPhone, form.phone],
                      ...(form.notes ? [[t.booking.summaryNotes, form.notes]] : []),
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-baseline justify-between gap-6 py-4">
                        <dt className="caption text-mauve-deep/70">{label}</dt>
                        <dd className="font-display text-lg text-mauve-deep text-right" style={{ fontWeight: 500 }}>
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="text-sm text-foreground/65 leading-relaxed mt-5">{t.booking.sendNote}</p>
                </>
              )}

              {/* Controls */}
              <div className="flex items-center justify-between gap-4 mt-10">
                <button
                  onClick={() => setStep((n) => Math.max(1, n - 1))}
                  disabled={step === 1}
                  className="btn-outline text-[0.7rem] px-6 py-3 disabled:opacity-35 disabled:cursor-not-allowed"
                >
                  <ArrowLeft size={14} />
                  {t.booking.back}
                </button>

                {step < TOTAL_STEPS ? (
                  <button
                    onClick={() => setStep((n) => Math.min(TOTAL_STEPS, n + 1))}
                    disabled={!canContinue}
                    className="btn-primary text-[0.7rem] px-7 py-3"
                  >
                    {t.booking.next}
                    <ArrowRight size={14} />
                  </button>
                ) : (
                  <button onClick={confirmReservation} className="btn-primary text-[0.7rem] px-7 py-3">
                    <MessageCircle size={15} />
                    {t.booking.confirm}
                  </button>
                )}
              </div>
            </div>
          </Reveal3D>
        </div>
      </section>
    </>
  );
}
