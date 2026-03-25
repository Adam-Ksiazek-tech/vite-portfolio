import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const navItems = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.contact"), href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const switchLang = () => {
    i18n.changeLanguage(currentLang === "pl" ? "en" : "pl");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold text-white hover:text-violet-400">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-300 hover:text-violet-400 transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          {/* Language Switcher */}
          {/* LANGUAGE SWITCHER */}
          <button
            onClick={switchLang}
            className="text-gray-300 hover:text-violet-400 transition-colors ml-4 cursor-pointer"
          >
            {currentLang === "pl" ? "EN" : "PL"}
          </button>

          
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white cursor-pointer" />
          ) : (
            <Menu className="w-6 h-6 text-white cursor-pointer" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 md:hidden">
            <div className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-violet-400 text-left transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              {/* MOBILE LANG SWITCHER */}
              <button
                onClick={switchLang}
                className="text-gray-300 hover:text-violet-400 w-fit mt-3 cursor-pointer"
              >
                {currentLang === "pl" ? "EN" : "PL"}
              </button>
              
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}