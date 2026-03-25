import { motion } from "motion/react";
import { FadeIn } from "./ui/FadeIn";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 60 },
        { name: "TypeScript", level: 70 },
        { name: "Tailwind CSS", level: 40 },
        { name: "Next.js", level: 30 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 90 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 60 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "Figma", level: 50 },
        { name: "AWS", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 relative overflow-hidden">
      {/* Violet spots */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Skills & Expertise</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <FadeIn>
              <h3 className="text-2xl mb-6 text-white">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <FadeIn delay={categoryIndex * 0.1 + skillIndex * 0.1} as="div"
                      className="h-2 bg-gray-800 rounded-full overflow-hidden"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-violet-600 to-purple-600 rounded-full"
                      />
                    </FadeIn>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}