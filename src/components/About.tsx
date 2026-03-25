import { motion } from "motion/react";
import { Code2, Palette, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FadeIn } from "./ui/FadeIn";

interface FeatureText {
  key: string;         // unikalny klucz do mapowania ikony
  title: string;       // tytuł przetłumaczony w danym języku
  description: string; // opis przetłumaczony w danym języku
}

interface Feature extends FeatureText {
  icon: React.ElementType; // komponent ikony z lucide-react
}

export function About() {
  const { t } = useTranslation();
  const iconsMap: Record<string, React.ElementType> = {
    clean_code: Code2,
    design_focused: Palette,
    performance: Zap,
  };
  const featuresText: FeatureText[] = t("about.features", { returnObjects: true }) as FeatureText[];

  const features: Feature[] = featuresText.map(f => ({
    ...f,
    icon: iconsMap[f.key],
  }));

  return (
    <section id="about" className="py-20 px-6 bg-gray-900 relative overflow-hidden">
      {/* Violet spots */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn as="div"          
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">{t("about.title")}</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t("about.description")}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={feature.title} delay={index * 0.1}                
                className="p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-violet-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}