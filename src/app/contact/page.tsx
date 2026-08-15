"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="relative py-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto bg-surface-container-lowest">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-display-lg text-display-lg text-primary mb-4">
            {t.contact.heading}
          </h1>
          <div className="w-20 h-1 bg-secondary-fixed mx-auto mb-6"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-premium-card">
            <h3 className="font-headline-lg text-headline-lg text-primary mb-6">
              {t.contact.sendMessage}
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-label-sm text-label-sm text-on-surface-variant mb-2"
                >
                  {t.contact.fullName}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder={t.contact.fullNamePlaceholder}
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-label-sm text-label-sm text-on-surface-variant mb-2"
                  >
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder={t.contact.emailPlaceholder}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-label-sm text-label-sm text-on-surface-variant mb-2"
                  >
                    {t.contact.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder={t.contact.phonePlaceholder}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block font-label-sm text-label-sm text-on-surface-variant mb-2"
                >
                  {t.contact.serviceType}
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option>{t.contact.serviceOptions.externalAudit}</option>
                  <option>{t.contact.serviceOptions.taxAdvisory}</option>
                  <option>{t.contact.serviceOptions.feasibilityStudies}</option>
                  <option>{t.contact.serviceOptions.managementConsulting}</option>
                  <option>{t.contact.serviceOptions.other}</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-label-sm text-label-sm text-on-surface-variant mb-2"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder={t.contact.messagePlaceholder}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-4 rounded-lg font-headline-md text-body-md hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg active:scale-[0.98]"
              >
                {t.contact.submitButton}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-primary text-on-primary p-8 rounded-xl shadow-premium-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 hero-pattern pointer-events-none"></div>
              <h3 className="font-headline-lg text-headline-lg mb-8 relative z-10">
                {t.contact.contactInfoHeading}
              </h3>
              <ul className="space-y-8 relative z-10">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-lg text-secondary-fixed mb-1">
                      {t.contact.addressTitle}
                    </h4>
                    <p className="font-body-md text-on-primary/90">
                      {t.contact.addressText}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-lg text-secondary-fixed mb-1">
                      {t.contact.phoneTitle}
                    </h4>
                    <p className="font-body-md text-on-primary/90" dir="ltr">
                      {t.contact.phoneValue}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-lg text-secondary-fixed mb-1">
                      {t.contact.emailTitle}
                    </h4>
                    <p className="font-body-md text-on-primary/90">
                      {t.contact.emailValue}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed text-primary flex items-center justify-center flex-shrink-0 shadow-sm">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-lg text-secondary-fixed mb-1">
                      {t.contact.hoursTitle}
                    </h4>
                    <p className="font-body-md text-on-primary/90">
                      {t.contact.hoursText}<br />
                      {t.contact.closedText}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map Placeholder */}
            <div className="h-[300px] bg-surface-variant rounded-xl overflow-hidden shadow-premium-card relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108343.89679103986!2d35.84501311029253!3d31.950153173748286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2sAmman%2C%20Jordan!5e0!3m2!1sen!2sus!4v1716382101000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
