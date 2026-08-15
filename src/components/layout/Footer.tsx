"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary dark:bg-surface-container-lowest text-on-primary dark:text-on-surface font-body-md text-body-md w-full pt-16 pb-8 border-t-4 border-secondary-fixed mt-auto min-w-[1200px]">
      <div className="grid grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto mb-12">
        <div className="space-y-4 col-span-2">
          <h4 className="font-headline-lg text-headline-lg font-bold text-secondary-fixed mb-4">
            {t.footer.companyName}
          </h4>
          <p className="text-on-primary/80 dark:text-on-surface/80 max-w-sm">
            {t.footer.description}
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="mailto:info@alazzeh.com"
              className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a
              href="tel:+962791623118"
              className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">call</span>
            </a>
            <Link
              href="/contact"
              className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">location_on</span>
            </Link>
            <a
              href="#"
              title="Facebook"
              className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-secondary-fixed hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-headline-md text-lg font-bold mb-4 text-white">
            {t.footer.quickLinks}
          </h5>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services"
                className="text-on-primary/80 dark:text-on-surface/80 hover:text-secondary-fixed hover:translate-x-1 transition-transform duration-200 inline-block"
              >
                {t.footer.auditAssurance}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-on-primary/80 dark:text-on-surface/80 hover:text-secondary-fixed hover:translate-x-1 transition-transform duration-200 inline-block"
              >
                {t.footer.taxAdvisory}
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-on-primary/80 dark:text-on-surface/80 hover:text-secondary-fixed hover:translate-x-1 transition-transform duration-200 inline-block"
              >
                {t.footer.feasibilityStudies}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-headline-md text-lg font-bold mb-4 text-white">
            {t.footer.legal}
          </h5>
          <ul className="space-y-3">
            <li>
              <Link
                href="#"
                className="text-on-primary/80 dark:text-on-surface/80 hover:text-secondary-fixed hover:translate-x-1 transition-transform duration-200 inline-block"
              >
                {t.footer.privacyPolicy}
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-on-primary/80 dark:text-on-surface/80 hover:text-secondary-fixed hover:translate-x-1 transition-transform duration-200 inline-block"
              >
                {t.footer.termsOfService}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-on-primary/20 pt-8 text-center text-on-primary/60 text-sm px-margin-desktop">
        © {new Date().getFullYear()} {t.footer.companyName}. {t.footer.rightsReserved}
      </div>
    </footer>
  );
}
