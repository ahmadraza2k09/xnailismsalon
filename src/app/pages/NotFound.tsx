import { Link } from "react-router";
import { Rule } from "@/app/site/ui";
import { useT } from "@/app/i18n";
import { routes } from "@/app/site/data";

export default function NotFound() {
  const t = useT();

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-32 bg-white">
      <p className="eyebrow">{t.notFound.eyebrow}</p>
      <h1 className="font-display text-5xl md:text-7xl text-mauve-deep mt-4" style={{ fontWeight: 600 }}>
        404
      </h1>
      <Rule className="w-24 mt-6" />
      <p className="text-sm text-foreground/78 mt-6 max-w-sm">{t.notFound.text}</p>
      <Link to={routes.home} className="btn-primary text-[0.66rem] px-8 py-4 mt-9">
        {t.notFound.cta}
      </Link>
    </section>
  );
}
