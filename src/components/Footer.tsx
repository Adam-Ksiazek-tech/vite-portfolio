import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import { Trans, useTranslation } from "react-i18next";

import { contactInfo, socialLinks, developerMeta } from "../data/contact";

export function Footer() {
  
  const { t } = useTranslation();
  const { name, brand, year } = developerMeta;

  // const socialLinks = [
  //   { icon: Github, href: "https://github.com", label: "GitHub" },
  //   { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  //   { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  //   { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
  // ];

  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400 transition-colors"
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
          
          <div className="text-center text-gray-400">
            <p>
              <Trans
                i18nKey="footer.copyright"
                values={{ name, brand, year }}
                components={{
                  bold: <strong className="font-semibold text-white" />,
                }}
              />
            </p>
            <p className="mt-2 text-sm">{t("footer.builtWith")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}