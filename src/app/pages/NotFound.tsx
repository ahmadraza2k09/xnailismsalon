import { Link } from "react-router";
import { useT } from "@/app/i18n";
import { routes } from "@/app/site/data";

export default function NotFound() {
  const t = useT();

  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-32 bg-mauve-deep">
      <p className="eyebrow text-blush">{t.notFound.eyebrow}</p>
      <h1 className="font-display text-5xl md:text-7xl text-white mt-4" style={{ fontWeight: 600 }}>
        404
      </h1>
      <p className="text-sm text-white/80 mt-6 max-w-sm">{t.notFound.text}</p>
      <Link to={routes.home} className="btn-on-dark text-[0.66rem] px-8 py-4 mt-9">
        {t.notFound.cta}
      </Link>
    </section>
  );
}
