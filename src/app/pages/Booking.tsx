import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { FadeUp, PageHeader } from "@/app/site/ui";
import { brand, serviceOptions } from "@/app/site/data";

const field =
  "w-full px-4 py-3.5 rounded-lg text-sm neo-inset border border-mauve/12 focus:outline-none focus:border-mauve/45 transition-colors";
const labelCls = "block text-[0.62rem] font-body tracking-[0.2em] uppercase text-mauve-deep mb-2.5";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    notes: "",
  });

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm({ ...form, [k]: e.target.value });

  const ready = form.name && form.phone && form.service;

  const sendToWhatsApp = () => {
    const message = [
      `Hello Ximena, I would like to book an appointment at ${brand.name}.`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Preferred date: ${form.date || "flexible"}`,
      `Preferred time: ${form.time || "flexible"}`,
      `Service: ${form.service}`,
      `Notes: ${form.notes || "none"}`,
      "",
      "Thank you.",
    ].join("\n");

    window.open(
      `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <>
      <PageHeader
        eyebrow="By appointment"
        title="Reserve your"
        accent="nail experience"
        subtitle="Fill in your details and your request is sent straight to Ximena on WhatsApp — no account, no waiting."
      />

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <div className="rounded-2xl p-8 md:p-12 neo-panel">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelCls} htmlFor="bk-name">
                    Full name *
                  </label>
                  <input id="bk-name" type="text" className={field} placeholder="Sofía Rodríguez" value={form.name} onChange={set("name")} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="bk-phone">
                    Phone number *
                  </label>
                  <input id="bk-phone" type="tel" className={field} placeholder="+52 664 000 0000" value={form.phone} onChange={set("phone")} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="bk-date">
                    Preferred date
                  </label>
                  <input id="bk-date" type="date" className={field} value={form.date} onChange={set("date")} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="bk-time">
                    Preferred time
                  </label>
                  <input id="bk-time" type="time" className={field} value={form.time} onChange={set("time")} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelCls} htmlFor="bk-service">
                    Service *
                  </label>
                  <select id="bk-service" className={field} value={form.service} onChange={set("service")}>
                    <option value="">Select a signature service</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className={labelCls} htmlFor="bk-notes">
                    Notes & inspiration
                  </label>
                  <textarea
                    id="bk-notes"
                    rows={4}
                    className={`${field} resize-none`}
                    placeholder="Preferred shape, length, colours or reference photos…"
                    value={form.notes}
                    onChange={set("notes")}
                  />
                </div>
              </div>

              <div className="mt-9 flex flex-col sm:flex-row items-center gap-5">
                <button onClick={sendToWhatsApp} disabled={!ready} className="btn-lux text-[0.68rem] px-8 py-4 w-full sm:w-auto">
                  <MessageCircle size={16} />
                  Send via WhatsApp
                </button>
                <p className="text-xs text-foreground/55 text-center sm:text-left leading-relaxed">
                  A direct line to Ximena. Your message opens pre-filled — review it, then send.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Studio hours */}
          <FadeUp delay={0.12}>
            <div className="grid sm:grid-cols-3 gap-5 mt-10">
              {brand.hours.map((h) => (
                <div key={h.day} className="rounded-xl p-6 text-center neo-panel-sm">
                  <p className="text-[0.6rem] font-body tracking-[0.18em] uppercase text-mauve" style={{ fontWeight: 600 }}>
                    {h.day}
                  </p>
                  <p className="font-display text-lg text-mauve-deep mt-2" style={{ fontWeight: 600 }}>
                    {h.time}
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
