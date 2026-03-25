import { Github, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FadeIn } from "./ui/FadeIn";
import projectsData from "../data/projects.json";

export function Projects() {
  const { t } = useTranslation();

  const projects = projectsData.map((p, i) => ({
    ...p,
    title: t(p.title),
    description: t(p.description),
  }));

  return (
    <section id="projects" className="py-20 px-6 bg-gray-950 relative overflow-hidden">
      {/* Violet spots */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn as="div" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">{t("projects.title")}</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-[20px]">{t("projects.description")}</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn
              key={project.title}
              className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:border-violet-500/50 transition-all"
              delay={index * 0.1}
            >
              <div className="aspect-video w-full overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-violet-600/20 text-violet-300 border border-violet-500/30 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}