import { motion } from "motion/react";
import { useInView } from "./useInView";
import { useLanguage } from "./LanguageContext";
import { Code2, Palette, Zap, Database, GitBranch, Smartphone } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    en: "Frontend Development",
    zh: "前端開發",
    skills: ["React", "JavaScript ES6+", "TypeScript", "Vite", "HTML5"],
    color: "#9EAFC4"
  },
  {
    icon: Palette,
    en: "Styling & Design",
    zh: "樣式設計",
    skills: ["CSS3", "Sass/SCSS", "Tailwind CSS", "Bootstrap", "RWD"],
    color: "#D4A5A5"
  },
  {
    icon: Database,
    en: "State Management",
    zh: "狀態管理",
    skills: ["Redux", "Context API", "React Hook Form", "RESTful API"],
    color: "#C8B8A8"
  },
  {
    icon: GitBranch,
    en: "Dev Tools",
    zh: "開發工具",
    skills: ["Git", "GitHub", "GitHub Pages", "Vite", "npm"],
    color: "#A8B8C8"
  },
  {
    icon: Smartphone,
    en: "Design Integration",
    zh: "設計整合",
    skills: ["Figma", "UI/UX Design", "Responsive Design", "Wireframing", "Prototyping"],
    color: "#B5C4B1"
  },
  {
    icon: Zap,
    en: "Marketing & Planning",
    zh: "行銷 & 企劃",
    skills: {
      en: ["Project Planning", "Project Management", "Video Editing", "Graphic Design", "Cross-Dept Coordination"],
      zh: ["企劃提案", "專案管理", "影片剪輯", "平面設計", "跨部門協調"]
    },
    color: "#C4B59E"
  }
];

const t = {
  en: {
    heading: "Skills",
    subtitle: "Combining design thinking with frontend development, continuously improving"
  },
  zh: {
    heading: "專業技能",
    subtitle: "結合設計思維與前端開發技術，持續精進中"
  }
};

export function Skills() {
  const { ref, isInView } = useInView();
  const { lang } = useLanguage();
  const text = t[lang];

  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-center">{text.heading}</h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            {text.subtitle}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const skills = Array.isArray(category.skills)
                ? category.skills
                : category.skills[lang];
              return (
                <motion.div
                  key={category.en}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-xl transition-shadow duration-300"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: category.color + "30" }}
                  >
                    <Icon size={28} style={{ color: category.color }} />
                  </div>

                  <h3 className="text-xl mb-4">{lang === "en" ? category.en : category.zh}</h3>

                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-sm bg-muted text-muted-foreground"
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
