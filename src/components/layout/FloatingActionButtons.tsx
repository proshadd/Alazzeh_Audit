"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FloatingActionButtons() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside className="fixed end-4 bottom-24 flex flex-col gap-4 z-40 items-center space-y-4">
      <a
        href="https://wa.me/962791623118"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl active:scale-90 transition-all flex items-center justify-center group relative"
        title={t.floating.whatsApp}
        aria-label="Contact on WhatsApp"
      >
        <span className="material-symbols-outlined text-2xl">chat</span>
        <span className="absolute end-full mx-4 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap block">
          {t.floating.whatsApp}
        </span>
      </a>
      <button
        onClick={scrollToTop}
        className="bg-surface text-primary p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-xl transition-all active:scale-90 flex items-center justify-center group relative"
        aria-label={t.floating.backToTop}
      >
        <span className="material-symbols-outlined text-2xl group-hover:text-secondary transition-colors">
          arrow_upward
        </span>
        <span className="absolute end-full mx-4 bg-inverse-surface text-inverse-on-surface px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap block">
          {t.floating.backToTop}
        </span>
      </button>
    </aside>
  );
}
