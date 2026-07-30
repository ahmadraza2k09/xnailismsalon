import { Link } from "react-router";
import { Instagram, MessageCircle, Phone } from "lucide-react";
import { FadeUp, PageHeader, Reveal3D, SectionHeading } from "@/app/site/ui";
import { useT } from "@/app/i18n";
import { brand, routes, studioHours } from "@/app/site/data";

export default function Contact() {
  const t = useT();

  const channels = [
    {
      icon: MessageCircle,
      label: t.common.whatsapp,
      value: brand.phone,
      sub: t.contact.channels.whatsappSub,
      href: brand.whatsapp,
      cta: t.contact.channels.whatsappCta,
      external: true,
    },
    {
      icon: Instagram,
      label: t.common.instagram,
      value: brand.instagramHandle,
      sub: t.contact.channels.instagramSub,
      href: brand.instagram,
      cta: t.contact.channels.instagramCta,
      external: true,
    },
    {
      icon: Phone,
      label: t.common.phone,
      value: brand.phone,
      sub: t.contact.channels.phoneSub,
      href: brand.phoneHref,
      cta: t.contact.channels.phoneCta,
      external: false,
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow={t.contact.headerEyebrow}
        title={t.contact.headerTitle}
        accent={t.contact.headerAccent}
        subtitle={t.contact.headerSubtitle}
      />

      <section className="py-16 md:py-24 px-6 max-w-6xl mx-auto scene">
        <div className="grid md:grid-cols-3 gap-6">
          {channels.map((c, i) => (
            <Reveal3D key={c.label} delay={i * 0.07}>
              <div className="h-full card p-8 text-center flex flex-col items-center justify-between">
                <div>
                  <c.icon size={22} className="text-mauve mx-auto" />
                  <p className="eyebrow mt-5">{c.label}</p>
                  <p className="font-display text-2xl text-mauve-deep mt-3" style={{ fontWeight: 500 }}>
                    {c.value}
                  </p>
                  <p className="text-sm text-foreground/85 mt-2">{c.sub}</p>
                </div>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="btn-primary text-[0.72rem] px-6 py-3.5 mt-7 w-full"
                >
                  {c.cta}
                </a>
              </div>
            </Reveal3D>
          ))}
        </div>

        {/* Hours */}
        <FadeUp delay={0.1}>
          <div className="card p-8 md:p-12 mt-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <SectionHeading
                align="left"
                eyebrow={t.contact.hoursEyebrow}
                title={t.contact.hoursTitle}
                accent={t.contact.hoursAccent}
              />
              <ul className="divide-y divide-border">
                {studioHours.map((h) => (
                  <li key={h.day} className="flex items-baseline justify-between py-4">
                    <span className="caption text-mauve-deep">{t.common.hours[h.day]}</span>
                    <span className="font-display text-lg text-mauve" style={{ fontWeight: 500 }}>
                      {h.time ?? t.common.hours.byAppointment}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Instagram invitation */}
      <section className="py-20 md:py-28 px-6 text-white bg-mauve-deep">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          <FadeUp className="flex flex-col items-center">
            <Instagram size={26} className="mb-6" />
            <SectionHeading
              light
              eyebrow={t.contact.followEyebrow}
              title={t.contact.followTitle}
              accent={t.contact.followAccent}
              subtitle={t.contact.followSubtitle}
            />
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-on-dark text-[0.8rem] px-9 py-4"
              >
                {brand.instagramHandle}
              </a>
              <Link
                to={routes.booking}
                className="btn-outline text-[0.8rem] px-9 py-4 text-white border-white/40 hover:bg-white hover:text-mauve-deep"
              >
                {t.nav.bookAppointment}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
