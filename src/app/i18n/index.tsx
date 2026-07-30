import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type Dict, type Lang } from "./translations";

const STORAGE_KEY = "xnailsm-lang";

type LanguageValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
};

/* Spanish is the site's main language; English is the translation. */
const LanguageContext = createContext<LanguageValue>({
  lang: "es",
  setLang: () => {},
  t: translations.es,
});

function readStoredLang(): Lang {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "en" || stored === "es" ? stored : "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(readStoredLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", translations[lang].meta.description);
  }, [lang]);

  const value = useMemo<LanguageValue>(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/* Shortcut for components that only need the copy. */
export function useT() {
  return useContext(LanguageContext).t;
}

export type { Lang, Dict };
