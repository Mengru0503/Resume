import { motion } from "motion/react";
import { useInView } from "./useInView";
import { useLanguage } from "./LanguageContext";
import { ExternalLink, Github } from "lucide-react";
import innerSoulImg from "./img/InnerSoulimg.png";
import innerSoulLogo from "./img/InnerSoulLogo.png";
import cookieImg from "./img/Cookieimg.png";
import cookieLogo from "./img/Cookielogo.png";
import insightCardImg from "./img/insightCardimg.png";
import insightCardlogo from "./img/insightCardlogo.png";
import urbnstepImg from "./img/urbnstepimg.png";
import urbnstepLogo from "./img/urbnsteplogo.svg";

const projects = [
  {
    title: { en: "InnerSoul", zh: "InnerSoul 心途" },
    description: {
      en: "An emotional tracking and digital companion platform helping users understand their inner world.",
      zh: "情緒追蹤與數位陪伴平台，幫助使用者更好地了解自己的內心世界。"
    },
    features: {
      en: [
        "Emotion logging system with daily tracking",
        "Animated floating emotion UI elements",
        "Data visualization interface",
        "Responsive layout across all devices"
      ],
      zh: [
        "每日情緒記錄系統",
        "動態懸浮情緒 UI 元素",
        "數據視覺化介面",
        "全裝置響應式佈局"
      ]
    },
    tags: ["React", "Vite", "SCSS", "Redux"],
    github: "https://github.com/aitong0113/InnerSoul",
    live: "https://aitong0113.github.io/InnerSoul/",
    image: innerSoulImg,
    logo: innerSoulLogo,
    color: "#9EAFC4",
    category: "react"
  },
  {
    title: { en: "InnerSoul", zh: "InnerSoul 心途" },
    description: {
      en: "An emotional tracking and digital companion platform helping users understand their inner world.",
      zh: "情緒追蹤與數位陪伴平台，幫助使用者更好地了解自己的內心世界。"
    },
    features: {
      en: [
        "Emotion logging system with daily tracking",
        "Animated floating emotion UI elements",
        "Data visualization interface",
        "Responsive layout across all devices"
      ],
      zh: [
        "每日情緒記錄系統",
        "動態懸浮情緒 UI 元素",
        "數據視覺化介面",
        "全裝置響應式佈局"
      ]
    },
    tags: ["React", "Vite", "SCSS", "Redux"],
    github: "https://github.com/aitong0113/InnerSoul",
    live: "https://aitong0113.github.io/InnerSoul/",
    image: innerSoulImg,
    logo: innerSoulLogo,
    color: "#9EAFC4",
    category: "team"
  },
  {
    title: { en: "Happiness Cookie", zh: "晴天餅乾 Happiness Cookie" },
    description: {
      en: "A handmade cookie brand e-commerce website developed through team collaboration.",
      zh: "手工餅乾品牌電商網站，團隊協作開發。"
    },
    features: {
      en: [
        "Team-built e-commerce with cart flow",
        "Responsive product showcase pages",
        "Brand identity & visual design",
        "Vanilla HTML / CSS / JS implementation"
      ],
      zh: [
        "團隊協作打造購物車流程",
        "響應式商品展示頁面",
        "品牌識別與視覺設計",
        "純 HTML / CSS / JS 實作"
      ]
    },
    tags: ["HTML", "CSS", "JavaScript", "Vite"],
    github: "https://github.com/happinesscookie530/Happinesscookie",
    live: "https://happinesscookie530.github.io/Happinesscookie/",
    image: cookieImg,
    logo: cookieLogo,
    color: "#D4A5A5",
    category: "team"
  },
  {
    title: { en: "insightCard", zh: "insightCard" },
    description: {
      en: "A knowledge card interactive application built with React component-based architecture.",
      zh: "知識卡片互動應用，展現 React 元件化開發與現代前端架構。"
    },
    features: {
      en: [
        "React component-based architecture",
        "Interactive knowledge card UI",
        "Vite build system integration",
        "Clean & minimal CSS layout"
      ],
      zh: [
        "React 元件化架構",
        "互動式知識卡片介面",
        "Vite 建構系統整合",
        "簡潔 CSS 版面設計"
      ]
    },
    tags: ["React", "Vite", "CSS"],
    github: "https://github.com/Mengru0503/insightCard",
    live: "https://mengru0503.github.io/insightCard/",
    image: insightCardImg,
    logo: insightCardlogo,
    color: "#B5C4B1",
    category: "react"
  },
  {
    title: { en: "URBNSTEP Shoes E‑Commerce", zh: "URBNSTEP 鞋類電商網站" },
    description: {
      en: "A shoe brand e-commerce website with product listing pages and responsive layout design.",
      zh: "鞋類品牌電商網站，包含商品列表頁與響應式版面設計。"
    },
    features: {
      en: [
        "Product listing & detail pages",
        "Responsive layout (RWD)",
        "Vanilla JS interaction patterns",
        "Modern frontend UI structure"
      ],
      zh: [
        "商品列表與詳情頁",
        "響應式版面設計（RWD）",
        "原生 JS 互動模式",
        "現代前端 UI 結構"
      ]
    },
    tags: ["HTML", "CSS", "JavaScript", "RWD"],
    github: "https://github.com/Mengru0503/week4",
    live: "https://mengru0503.github.io/week4/",
    image: urbnstepImg,
    logo: urbnstepLogo,
    color: "#C8B8A8",
    category: "frontend"
  }
];

const categoryOrder: Record<string, number> = {
  react: 0,
  frontend: 1,
  team: 2
};

const sortedProjects = [...projects].sort(
  (a, b) => categoryOrder[a.category] - categoryOrder[b.category]
);

const groupedProjects = sortedProjects.reduce<Record<string, typeof projects>>((acc, project) => {
  if (!acc[project.category]) acc[project.category] = [];
  acc[project.category].push(project);
  return acc;
}, {});

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

const categoryTitles: Record<string, { en: string; zh: string }> = {
  react: { en: "React Projects", zh: "React 專案" },
  frontend: { en: "Frontend Projects", zh: "前端切版專案" },
  team: { en: "Team Projects", zh: "團隊協作專案" }
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

          <div className="space-y-16">
            {Object.keys(categoryOrder).map((category) =>
              groupedProjects[category] && (
                <div key={category}>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
                    {categoryTitles[category][lang]}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8">
                    {groupedProjects[category].map((project, index) => (
                      <motion.div
                        key={project.title.en + index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="group bg-card rounded-2xl overflow-hidden shadow-md border border-border flex flex-col"
                        style={{
                          transition: "transform 0.3s ease, box-shadow 0.3s ease"
                        }}
                        whileHover={{
                          y: -6,
                          boxShadow: `0 20px 40px ${project.color}30`
                        }}
                      >
                        {/* Image area with hover logo overlay */}
                        <div className="relative h-52 overflow-hidden">
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
                              <div className="mb-3">
                                <img src={project.logo} alt="project logo" className="h-12 mx-auto" />
                              </div>
                              <div className="text-xl font-medium text-white">
                                {project.title[lang]}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-7 flex-1 flex flex-col">
                          <h3 className="text-xl mb-2">{project.title[lang]}</h3>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {project.description[lang]}
                          </p>

                          {/* Key Features */}
                          <ul className="mb-5 space-y-1.5">
                            {project.features[lang].map((feat) => (
                              <li key={feat} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span
                                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: project.color }}
                                />
                                {feat}
                              </li>
                            ))}
                          </ul>

                          {/* Tech Stack Badges */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-full text-xs font-medium"
                                style={{
                                  backgroundColor: project.color + "20",
                                  color: project.color,
                                  border: `1px solid ${project.color}40`
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Buttons — pinned to bottom */}
                          <div className="flex flex-wrap gap-3 justify-center mt-auto">
                            {/* Live Demo */}
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                              style={{ backgroundColor: project.color }}
                            >
                              <ExternalLink size={15} />
                              Live Demo
                            </a>
                            {/* GitHub */}
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-300 hover:scale-105"
                              style={{
                                borderColor: project.color + "50",
                                color: project.color
                              }}
                            >
                              <Github size={15} />
                              GitHub
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
