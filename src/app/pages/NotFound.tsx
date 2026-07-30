import { Link } from "react-router";
import { Rule } from "@/app/site/ui";
import { brand } from "@/app/site/data";

export default function NotFound() {
  return (
    <section
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-32"
      style={{ background: "linear-gradient(180deg, #FFF0F4 0%, #FBF6F8 100%)" }}
    >
      <p className="eyebrow">Page not found</p>
      <h1 className="font-display text-5xl md:text-7xl text-mauve-deep mt-4" style={{ fontWeight: 600 }}>
        404
      </h1>
      <Rule className="w-24 mt-6" />
      <p className="text-sm text-foreground/65 mt-6 max-w-sm">
        The page you were looking for is not part of the {brand.name} studio. Let us take you back.
      </p>
      <Link to="/" className="btn-lux text-[0.68rem] px-8 py-4 mt-9">
        Return home
      </Link>
    </section>
  );
}
