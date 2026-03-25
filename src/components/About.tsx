import { motion } from "motion/react";
import { Code2, Palette, Zap } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices",
    },
    {
      icon: Palette,
      title: "Design Focused",
      description: "Creating intuitive interfaces with attention to detail",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and exceptional user experience",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-900 relative overflow-hidden">
      {/* Violet spots */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">About Me</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience building web
            applications. I specialize in React, TypeScript, and modern web
            technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-violet-500/50 transition-all"
              >
                <div className="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}