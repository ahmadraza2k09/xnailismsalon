import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { FadeUp, PageHeader } from "@/app/site/ui";
import { useT } from "@/app/i18n";
import { brand, studioHours } from "@/app/site/data";

const labelCls = "block text-[0.62rem] font-body tracking-[0.18em] uppercase text-mauve-deep mb-2.5";

export default function Booking() {
  const t = useT();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm({ ...form, [key]: e.target.value });

  const ready = Boolean(form.name && form.phone && form.service);
  const serviceOptions = t.services.items.map((s) => `${s.title} — ${s.price}`);

  const sendToWhatsApp = () => {
    const m = t.booking.message;
    const message = [
      m.intro,
      "",
      `${m.name}: ${form.name}`,
      `${m.phone}: ${form.phone}`,
      `${m.date}: ${form.date || m.flexible}`,
      `${m.time}: ${form.time || m.flexible}`,
      `${m.service}: ${form.service}`,
      `${m.notes}: ${form.notes || m.none}`,
      "",
      m.thanks,
    ].join("\n");

    window.open(`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <>
      <PageHeader
        eyebrow={t.booking.headerEyebrow}
        title={t.booking.headerTitle}
        accent={t.booking.headerAccent}
        subtitle={t.booking.headerSubtitle}
      />

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="card p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelCls} htmlFor="bk-name">
                    {t.booking.name} *
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
                    {t.booking.phone} *
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
                  <label className={labelCls} htmlFor="bk-date">
                    {t.booking.date}
                  </label>
                  <input id="bk-date" type="date" className="field" value={form.date} onChange={update("date")} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="bk-time">
                    {t.booking.time}
                  </label>
                  <input id="bk-time" type="time" className="field" value={form.time} onChange={update("time")} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelCls} htmlFor="bk-service">
                    {t.booking.service} *
                  </label>
                  <select id="bk-service" className="field" value={form.service} onChange={update("service")}>
                    <option value="">{t.booking.servicePlaceholder}</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
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

              <div className="mt-9 flex flex-col sm:flex-row items-center gap-5">
                <button
                  onClick={sendToWhatsApp}
                  disabled={!ready}
                  className="btn-primary text-[0.66rem] px-8 py-4 w-full sm:w-auto"
                >
                  <MessageCircle size={16} />
                  {t.booking.send}
                </button>
                <p className="text-xs text-foreground/55 text-center sm:text-left leading-relaxed">
                  {t.booking.sendNote}
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p
              className="text-[0.6rem] font-body tracking-[0.22em] uppercase text-mauve-deep/60 mt-12 mb-4 text-center"
              style={{ fontWeight: 600 }}
            >
              {t.booking.hoursTitle}
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {studioHours.map((h) => (
                <div key={h.day} className="card-tint p-6 text-center">
                  <p
                    className="text-[0.6rem] font-body tracking-[0.16em] uppercase text-mauve"
                    style={{ fontWeight: 600 }}
                  >
                    {t.common.hours[h.day]}
                  </p>
                  <p className="font-display text-lg text-mauve-deep mt-2" style={{ fontWeight: 600 }}>
                    {h.time ?? t.common.hours.byAppointment}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
