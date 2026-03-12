import { motion } from "motion/react";
import { useInView } from "./useInView";
import { useLanguage } from "./LanguageContext";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: { en: "InnerSoul", zh: "InnerSoul 心途" },
    description: {
      en: "An emotional tracking and digital companion platform. Through daily emotion logging and interactive features, it helps users better understand their inner world.",
      zh: "情緒追蹤與數位陪伴平台，透過每日情緒記錄與互動功能，幫助使用者更好地了解自己的內心世界。"
    },
    tags: ["React", "Vite", "SCSS", "Redux"],
    github: "https://github.com/aitong0113/InnerSoul",
    live: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
    logo: "🧠",
    color: "#9EAFC4"
  },
  {
    title: { en: "Happiness Cookie", zh: "晴天餅乾 Happiness Cookie" },
    description: {
      en: "A handmade cookie brand e-commerce website, developed through team collaboration. Features responsive design, product showcase, and brand identity presentation.",
      zh: "手工餅乾品牌電商網站，團隊協作開發，包含響應式設計、產品展示與品牌形象呈現。"
    },
    tags: ["HTML", "CSS", "JavaScript", "Vite"],
    github: "https://github.com/happinesscookie530/Happinesscookie",
    live: "#",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&h=400&fit=crop",
    logo: "🍪",
    color: "#D4A5A5"
  },
  {
    title: { en: "insightCard", zh: "insightCard" },
    description: {
      en: "A knowledge card interactive application built with React, demonstrating component-based development and modern frontend architecture practices.",
      zh: "知識卡片互動應用，使用 React 打造的前端專案，展現元件化開發與現代前端架構的實踐。"
    },
    tags: ["React", "Vite", "CSS"],
    github: "https://github.com/Mengru0503/insightCard",
    live: "#",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&h=400&fit=crop",
    logo: "💡",
    color: "#B5C4B1"
  },
  {
    title: { en: "Personal Portfolio", zh: "個人作品集網站" },
    description: {
      en: "A responsive personal portfolio website showcasing projects and skills, featuring UI animations and modular architecture.",
      zh: "響應式個人履歷網站，展示專案作品與技能，具備 UI 互動動畫與模組化結構。"
    },
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    github: "https://github.com/Mengru0503/ruru",
    live: "https://mengru0503.github.io/ruru/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    logo: "✨",
    color: "#C8B8A8"
  }
];

const t = {
  en: {
    heading: "Projects",
    subtitle: "From learning to building — every project is a milestone of growth"
  },
  zh: {
    heading: "專案作品",
    subtitle: "從學習到實作，每個專案都是成長的紀錄"
  }
};

export function Projects() {
  const { ref, isInView } = useInView();
  const { lang } = useLanguage();
  const text = t[lang];

  return (
    <section id="projects" className="py-24 px-6">
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

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title.en}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image area with hover logo overlay */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Logo overlay on hover */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ backgroundColor: project.color + "e6" }}
                  >
                    <div className="text-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                      <div className="text-6xl mb-3">{project.logo}</div>
                      <div className="text-xl font-medium text-white">
                        {project.title[lang]}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl mb-3">{project.title[lang]}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description[lang]}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          backgroundColor: project.color + "20",
                          color: project.color
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Centered buttons — pinned to bottom */}
                  <div className="flex flex-wrap gap-3 justify-center mt-auto pt-2">
                    {/* Live Demo — prominent */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{ backgroundColor: project.color }}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    {/* GitHub Repo — subtle */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-300 hover:scale-105"
                      style={{
                        borderColor: project.color + "40",
                        color: project.color + "cc"
                      }}
                    >
                      <Github size={16} />
                      <span>GitHub Repo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
