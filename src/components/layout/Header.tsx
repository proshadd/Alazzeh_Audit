"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../ui/Logo";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const pathname = usePathname();
  const { t, toggleLanguage } = useLanguage();

  return (
    <header className="bg-surface/90 dark:bg-primary/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm transition-transform duration-200 min-w-[1200px]">
      <div className="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto w-full">
        <Logo />
        
        <nav className="flex items-center gap-6 font-headline-md text-body-md font-semibold">
          <Link
            href="/services"
            className={`transition-colors hover:text-primary dark:hover:text-primary-fixed-dim ${
              pathname === "/services"
                ? "text-secondary dark:text-secondary-fixed-dim border-b-2 border-secondary pb-1"
                : "text-on-surface-variant dark:text-surface-variant"
            }`}
          >
            {t.nav.services}
          </Link>
          <Link
            href="/about"
            className={`transition-colors hover:text-primary dark:hover:text-primary-fixed-dim ${
              pathname === "/about"
                ? "text-secondary dark:text-secondary-fixed-dim border-b-2 border-secondary pb-1"
                : "text-on-surface-variant dark:text-surface-variant"
            }`}
          >
            {t.nav.about}
          </Link>
          <Link
            href="/contact"
            className={`transition-colors hover:text-primary dark:hover:text-primary-fixed-dim ${
              pathname === "/contact"
                ? "text-secondary dark:text-secondary-fixed-dim border-b-2 border-secondary pb-1"
                : "text-on-surface-variant dark:text-surface-variant"
            }`}
          >
            {t.nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center h-10 px-3 rounded-full hover:bg-surface-container-low transition-all duration-200 text-primary font-semibold text-sm border border-outline-variant/40"
            aria-label="Toggle language"
          >
            <span className="material-symbols-outlined text-lg">language</span>
            <span className="ml-1 rtl:mr-1 rtl:ml-0">{t.header.langSwitchLabel}</span>
          </button>
          <Link
            href="/contact"
            className="bg-primary text-on-primary px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-sm block"
          >
            {t.nav.freeConsultation}
          </Link>
        </div>
      </div>
    </header>
  );
}
