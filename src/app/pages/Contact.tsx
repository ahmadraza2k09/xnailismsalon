import { Link } from "react-router";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import { FadeUp, PageHeader, SectionHeading } from "@/app/site/ui";
import { brand } from "@/app/site/data";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: brand.phone,
    sub: "Fastest response · Mon–Sat",
    href: brand.whatsapp,
    cta: "Chat on WhatsApp",
    external: true,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: brand.instagramHandle,
    sub: "Direct messages open",
    href: brand.instagram,
    cta: "Message on Instagram",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: brand.phone,
    sub: "For direct enquiries",
    href: brand.phoneHref,
    cta: "Call the studio",
    external: false,
  },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let us"
        accent="connect"
        subtitle="Questions about a design, pricing or availability? Reach out through any channel below."
      />

      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {channels.map((c, i) => (
            <FadeUp key={c.label} delay={i * 0.08}>
              <div className="h-full rounded-2xl p-8 text-center neo-panel flex flex-col items-center justify-between">
                <div>
                  <span className="inline-flex w-14 h-14 items-center justify-center rounded-full neo-inset text-mauve">
                    <c.icon size={22} />
                  </span>
                  <p className="eyebrow mt-6">{c.label}</p>
                  <p className="font-display text-lg text-mauve-deep mt-2.5" style={{ fontWeight: 600 }}>
                    {c.value}
                  </p>
                  <p className="text-xs text-foreground/55 mt-2">{c.sub}</p>
                </div>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="btn-lux text-[0.62rem] px-6 py-3.5 mt-7 w-full"
                >
                  {c.cta}
                </a>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Hours */}
        <FadeUp delay={0.1}>
          <div className="rounded-2xl p-8 md:p-12 neo-panel mt-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <SectionHeading align="left" eyebrow="Studio hours" title="When we are" accent="open" />
              <ul className="divide-y divide-mauve/12">
                {brand.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between py-4">
                    <span className="text-[0.68rem] font-body tracking-[0.16em] uppercase text-mauve-deep" style={{ fontWeight: 600 }}>
                      {h.day}
                    </span>
                    <span className="font-display text-base text-mauve" style={{ fontWeight: 600 }}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Instagram invitation */}
      <section
        className="py-20 md:py-28 px-6 text-white"
        style={{ background: "linear-gradient(135deg, #6E3A59 0%, #8B4A70 50%, #A35B85 100%)" }}
      >
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          <FadeUp className="flex flex-col items-center">
            <span
              className="inline-flex w-16 h-16 items-center justify-center rounded-full mb-8"
              style={{
                background: "rgba(255,255,255,0.12)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.28), 0 12px 26px -14px rgba(0,0,0,0.6)",
              }}
            >
              <Instagram size={26} />
            </span>
            <SectionHeading
              light
              eyebrow="Follow along"
              title="Daily nail inspiration"
              accent="from the atelier"
              subtitle="Studio updates, finished sets and behind-the-scenes detail."
            />
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-quiet text-[0.7rem] px-9 py-4"
                style={{ color: "#6E3A59" }}
              >
                {brand.instagramHandle}
              </a>
              <Link to="/booking" className="btn-lux text-[0.7rem] px-9 py-4">
                Book an appointment
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
