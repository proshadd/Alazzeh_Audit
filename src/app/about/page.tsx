"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative py-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto bg-surface-container-lowest">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image
              src="/about-team.jpg"
              alt="Team of professional auditors discussing financial reports."
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h1 className="font-display-lg text-display-lg text-primary mb-2">
              {t.about.heading}
            </h1>
            <div className="w-20 h-1 bg-secondary-fixed mb-6"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {t.about.paragraph1}
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {t.about.paragraph2}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto bg-background">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-premium-card border-s-4 border-secondary-fixed">
            <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary-fixed text-3xl">
                visibility
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
              {t.about.visionTitle}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t.about.visionText}
            </p>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-premium-card border-s-4 border-secondary-fixed">
            <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-secondary-fixed text-3xl">
                flag
              </span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">
              {t.about.missionTitle}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {t.about.missionText}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
