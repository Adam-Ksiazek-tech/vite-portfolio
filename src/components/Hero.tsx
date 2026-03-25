import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";


export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gray-950 relative overflow-hidden">
      {/* Violet spots/gradients */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto w-full py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl mb-6 text-white"
          >            
            <span className="text-violet-400">{t("hero.title")}</span><br />
            <span className="text-violet-400">{t("hero.title_line_2", { name: "AKCODE Adam Książek" })}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {t("hero.desc")}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >            
              {t("contact.contact_label")}              
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-6 justify-center mt-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-gray-400 hover:text-violet-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}