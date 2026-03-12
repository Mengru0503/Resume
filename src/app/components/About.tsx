import { motion } from "motion/react";
import { useInView } from "./useInView";
import { useLanguage } from "./LanguageContext";

const t = {
  en: {
    heading: "About Me",
    p1: "I'm Meng-Ru Lai, with years of hands-on experience in marketing planning and multimedia design. I'm actively transitioning to become a frontend engineer, combining cross-disciplinary strengths that merge design aesthetics with technical development.",
    p2: "From the Junior Chamber International to the Chinese Young Entrepreneurs Association and nonprofit organizations, I've accumulated rich experience in project planning, management, and cross-department coordination. These soft skills allow me to bring unique value to frontend development teams.",
    p3: "I'm passionate about UI/UX and engineering integration. Currently focused on learning React, JavaScript, and web architecture, I'm dedicated to building digital products that balance beauty with great user experience.",
    infoTitle: "Professional Info",
    targetLabel: "Target Role",
    targetValue: "Frontend Developer",
    bgLabel: "Background",
    bgValue: "Marketing Planning & Multimedia Design",
    locationLabel: "Location",
    locationValue: "Taiwan",
    githubLabel: "GitHub"
  },
  zh: {
    heading: "關於我",
    p1: "我是賴孟孺，擁有多年行銷企劃與多媒體設計的實戰經驗，目前正積極轉職成為前端工程師。綜合跨界整合的獨特優勢，我能將設計美學與技術開發完美融合。",
    p2: "從國際青年商會到中華青年企業家協會，再到公益組織，我累積了豐富的企劃執行、專案管理與跨部門協調經驗。這些軟實力讓我在前端開發團隊中也能發揮獨特的價值。",
    p3: "我熱衷於 UI/UX 與工程整合，目前專注學習 React、JavaScript 與 Web 架構，致力於打造兼具美感與使用體驗的數位產品。",
    infoTitle: "專業資訊",
    targetLabel: "目標職位",
    targetValue: "Frontend Developer",
    bgLabel: "背景",
    bgValue: "行銷企劃 & 多媒體設計",
    locationLabel: "所在地",
    locationValue: "台灣",
    githubLabel: "GitHub"
  }
};

export function About() {
  const { ref, isInView } = useInView();
  const { lang } = useLanguage();
  const text = t[lang];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center">{text.heading}</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {text.p1}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {text.p2}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {text.p3}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border"
            >
              <h3 className="text-2xl mb-6">{text.infoTitle}</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{text.targetLabel}</div>
                  <div className="text-lg">{text.targetValue}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{text.bgLabel}</div>
                  <div className="text-lg">{text.bgValue}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{text.locationLabel}</div>
                  <div className="text-lg">{text.locationValue}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{text.githubLabel}</div>
                  <div className="text-lg">
                    <a href="https://github.com/Mengru0503" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Mengru0503
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
