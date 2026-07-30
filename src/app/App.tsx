import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { Navbar } from "@/app/site/Navbar";
import { Footer } from "@/app/site/Footer";
import { brand } from "@/app/site/data";

/* Every route change starts at the top of the new page. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "auto" }), [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-body overflow-x-hidden selection:bg-mauve/20">
      <ScrollToTop />
      <Navbar />

      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex-1"
      >
        <Outlet />
      </motion.main>

      <Footer />

      {/* Persistent WhatsApp shortcut */}
      <a
        href={brand.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full text-white"
        style={{
          background: "linear-gradient(180deg, #B96E9A 0%, #A35B85 50%, #8B4A70 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.4), 0 12px 24px -10px rgba(163,91,133,0.8)",
        }}
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
