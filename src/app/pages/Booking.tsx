import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Ambient, FadeUp, PageHeader, Reveal3D } from "@/app/site/ui";
import { useT } from "@/app/i18n";
import { translations } from "@/app/i18n/translations";
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

  /*
    The form is read in whichever language the visitor chose, but the
    message goes to Ximena, so it is always written in Spanish. The select
    stores the service index so the Spanish name can be looked up on send.
  */
  const sendToWhatsApp = () => {
    const es = translations.es;
    const m = es.booking.message;
    const service = es.services.items[Number(form.service)];
    const message = [
      m.intro,
      "",
      `${m.name}: ${form.name}`,
      `${m.phone}: ${form.phone}`,
      `${m.date}: ${form.date || m.flexible}`,
      `${m.time}: ${form.time || m.flexible}`,
      `${m.service}: ${service.title} · ${service.price}`,
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

      <section className="relative overflow-hidden py-16 md:py-24 px-6 scene">
        <Ambient />
        <div className="relative max-w-3xl mx-auto">
          <Reveal3D>
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
                    {t.services.items.map((item, i) => (
                      <option key={item.title} value={i}>
                        {item.title} · {item.price}
                      </option>
                    ))}
                  </select>
                  <p className="text-sm text-foreground/82 leading-relaxed mt-3">{t.services.priceNote}</p>
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
                <p className="text-sm text-foreground/82 text-center sm:text-left leading-relaxed">
                  {t.booking.sendNote}
                </p>
              </div>
            </div>
          </Reveal3D>

          <FadeUp delay={0.1}>
            <p className="caption text-center mt-14 mb-5">{t.booking.hoursTitle}</p>
            <ul className="glass px-6 py-2 max-w-xl mx-auto">
              {studioHours.map((h) => (
                <li key={h.day} className="flex items-baseline justify-between gap-4 py-4 border-b border-white/60 last:border-b-0">
                  <span className="caption text-mauve-deep">{t.common.hours[h.day]}</span>
                  <span className="font-display text-lg text-mauve" style={{ fontWeight: 500 }}>
                    {h.to ? `${h.from} ${t.common.hours.to} ${h.to}` : t.common.hours.byAppointment}
                  </span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
