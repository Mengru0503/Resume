import { motion } from "motion/react";
import { useInView } from "./useInView";
import { useLanguage } from "./LanguageContext";
import { Code2, Palette, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    en: "Frontend",
    zh: "前端開發",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    color: "#9EAFC4"
  },
  {
    icon: Palette,
    en: "UI / Design",
    zh: "設計整合",
    skills: ["Figma", "UI Design", "Responsive Design"],
    color: "#D4A5A5"
  },
  {
    icon: Wrench,
    en: "Tools",
    zh: "開發工具",
    skills: ["Git", "GitHub", "Vite", "VS Code"],
    color: "#B5C4B1"
  }
];

const t = {
  en: {
    heading: "Skills",
    subtitle: "Core technologies I build with every day"
  },
  zh: {
    heading: "專業技能",
    subtitle: "日常開發使用的核心技術"
  }
};

export function Skills() {
  const { ref, isInView } = useInView();
  const { lang } = useLanguage();
  const text = t[lang];

  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-center">{text.heading}</h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            {text.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.en}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ borderTop: `3px solid ${category.color}` }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: category.color + "25" }}
                  >
                    <Icon size={28} style={{ color: category.color }} />
                  </div>

                  <h3 className="text-xl mb-5" style={{ color: category.color }}>
                    {lang === "en" ? category.en : category.zh}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full text-sm font-medium"
                        style={{
                          backgroundColor: category.color + "18",
                          color: category.color,
                          border: `1px solid ${category.color}40`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
