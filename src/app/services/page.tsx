"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto bg-surface-container-lowest">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="font-display-lg text-display-lg text-primary">
              {t.services.heading}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              {t.services.subheading}
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbAxxYe9OzoO1YT_44nwpwGI5Gf0jWAjww7KrFH_fLUlLpIpMg9y-GUiFNwOYwT9_K3nKfXcrBMCsvdHnQno8QL6FYgGVjcC-75aKDFE7w366ro4w700-uK7wydwLmmFuWNp01Du-Ps-yUROoaOetne_xGTUhZi5HCuK_HByCqGvk9oiQymkFHw3_CJ2tHfI4IrBYHfTzq6l8ZBOJlmLl8_gehm5jWPwIv1dBp8WEuFRxNJr3qDeLFYg"
              alt="A professional corporate environment setting in a bright modern office."
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Service Card 1 */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-premium-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-secondary-fixed group cursor-pointer flex flex-col h-full">
            <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary-fixed text-3xl">
                assured_workload
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
              {t.services.auditTitle}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-8">
              {t.services.auditDesc}
            </p>
            <Link
              href="/contact"
              className="self-start text-primary font-headline-md text-headline-md flex items-center gap-2 group-hover:text-secondary transition-colors"
            >
              {t.services.learnMore}
              <span className="material-symbols-outlined rtl:rotate-180">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Service Card 2 */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-premium-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-secondary-fixed group cursor-pointer flex flex-col h-full">
            <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary-fixed text-3xl">
                account_balance
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
              {t.services.taxTitle}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-8">
              {t.services.taxDesc}
            </p>
            <Link
              href="/contact"
              className="self-start text-primary font-headline-md text-headline-md flex items-center gap-2 group-hover:text-secondary transition-colors"
            >
              {t.services.learnMore}
              <span className="material-symbols-outlined rtl:rotate-180">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Service Card 3 */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-premium-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-secondary-fixed group cursor-pointer flex flex-col h-full">
            <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary-fixed text-3xl">
                lightbulb
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
              {t.services.adminTitle}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-8">
              {t.services.adminDesc}
            </p>
            <Link
              href="/contact"
              className="self-start text-primary font-headline-md text-headline-md flex items-center gap-2 group-hover:text-secondary transition-colors"
            >
              {t.services.learnMore}
              <span className="material-symbols-outlined rtl:rotate-180">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Service Card 4 */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-premium-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-secondary-fixed group cursor-pointer flex flex-col h-full">
            <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-secondary-fixed text-3xl">
                query_stats
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
              {t.services.feasibilityTitle}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-8">
              {t.services.feasibilityDesc}
            </p>
            <Link
              href="/contact"
              className="self-start text-primary font-headline-md text-headline-md flex items-center gap-2 group-hover:text-secondary transition-colors"
            >
              {t.services.learnMore}
              <span className="material-symbols-outlined rtl:rotate-180">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
