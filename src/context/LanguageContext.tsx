"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  dir: "rtl" | "ltr";
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: typeof translations.ar;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("ar");

  useEffect(() => {
    const savedLang = localStorage.getItem("alazzeh_lang") as Language | null;
    if (savedLang && (savedLang === "ar" || savedLang === "en")) {
      setLangState(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("alazzeh_lang", lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLangState((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const setLanguage = (newLang: Language) => {
    setLangState(newLang);
  };

  const dir = lang === "ar" ? "rtl" : "ltr";
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
