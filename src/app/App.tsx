import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { MessageCircle } from "lucide-react";
import { Navbar } from "@/app/site/Navbar";
import { Footer } from "@/app/site/Footer";
import { ScrollProgress } from "@/app/site/ui";
import { useT } from "@/app/i18n";
import { brand } from "@/app/site/data";
import { IS_WEBSITE_DOWN } from "./maintenanceConfig";

/* Every route change starts at the top of the new page. */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const t = useT();

  if (IS_WEBSITE_DOWN) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white text-gray-800 font-sans p-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-700 tracking-tight">
            Website Not Available
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-body overflow-x-hidden selection:bg-mauve/20">
      <ScrollToTop />
      <Navbar />
      <ScrollProgress />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Persistent WhatsApp shortcut */}
      <a
        href={brand.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.common.whatsapp}
        className="btn-primary fixed bottom-6 right-6 z-40 p-4"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
