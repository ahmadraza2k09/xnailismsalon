import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { MessageCircle } from "lucide-react";
import { Navbar } from "@/app/site/Navbar";
import { Footer } from "@/app/site/Footer";
import { useT } from "@/app/i18n";
import { brand } from "@/app/site/data";

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

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-body overflow-x-hidden selection:bg-mauve/20">
      <ScrollToTop />
      <Navbar />

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
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full text-white bg-mauve hover:bg-mauve-deep transition-colors"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
