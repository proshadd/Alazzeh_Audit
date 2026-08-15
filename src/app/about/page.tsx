"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative py-24 px-margin-desktop w-full max-w-container-max mx-auto bg-surface-container-lowest min-w-[1200px]">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/about-team.jpg"
              alt="Team of professional auditors discussing financial reports."
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
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

      {/* Vision & Mission */}
      <section className="py-24 px-margin-desktop w-full max-w-container-max mx-auto bg-background min-w-[1200px]">
        <div className="grid grid-cols-2 gap-8">
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

      {/* Professional Accreditations & Memberships */}
      <section className="py-20 px-margin-desktop w-full max-w-container-max mx-auto bg-surface-container-lowest border-t border-outline-variant/30 min-w-[1200px]">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-3">
            {t.about.accreditationsTitle}
          </h2>
          <div className="w-16 h-1 bg-secondary-fixed mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {/* JACPA Membership Card */}
          <div className="bg-background p-8 rounded-xl shadow-premium-card border-s-4 border-primary flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl text-secondary-fixed">
                    verified
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-xl font-bold text-primary">
                    {t.about.jacpaTitle}
                  </h3>
                  <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-3 py-1 rounded-full mt-1">
                    {t.about.jacpaLicense}
                  </span>
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t.about.jacpaDesc}
              </p>
            </div>
            <a
              href={t.about.jacpaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-secondary-fixed transition-colors"
            >
              {t.about.visitWebsite}
              <span className="material-symbols-outlined text-sm rtl:rotate-180">
                open_in_new
              </span>
            </a>
          </div>

          {/* ESITS Membership Card */}
          <div className="bg-background p-8 rounded-xl shadow-premium-card border-s-4 border-primary flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl text-secondary-fixed">
                    workspace_premium
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-xl font-bold text-primary">
                    {t.about.esitsTitle}
                  </h3>
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                {t.about.esitsDesc}
              </p>
            </div>
            <a
              href={t.about.esitsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-secondary-fixed transition-colors"
            >
              {t.about.visitWebsite}
              <span className="material-symbols-outlined text-sm rtl:rotate-180">
                open_in_new
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
