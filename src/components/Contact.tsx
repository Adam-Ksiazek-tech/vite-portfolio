import { motion } from "motion/react";

import { useTranslation } from "react-i18next";
import { FadeIn } from "./ui/FadeIn";

import { contactInfo } from "../data/contact";

export function Contact() {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="py-20 px-6 bg-gray-950 relative overflow-hidden">
      {/* Violet spots */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn
          delay={0.4}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            {t("contact.contact_label")}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t("contact.project_in_mind")}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeIn
            delay={0.4}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl mb-6 text-white">{t("contact.contact_information")}</h3>
              <p className="text-gray-400 mb-8">
              {t("contact.contact_information_2")}
              </p>
            </div>
          </FadeIn>
          <FadeIn
            delay={0.6}
            className="space-y-6"
          >

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-violet-500/50 transition-all">
                  <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">{t(info.label)}</p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {info.href ? (
                    <a href={info.href}>{content}</a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}