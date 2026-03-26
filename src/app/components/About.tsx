import { motion } from "motion/react";
import { useInView } from "./useInView";
import { useLanguage } from "./LanguageContext";

const t = {
  en: {
    heading: "About Me",
    p1: "Frontend developer with a background in marketing and multimedia design.",
    p2: "Experienced in building responsive web interfaces and interactive UI experiences.",
    p3: "Currently focusing on modern frontend development using React.",
    infoTitle: "Professional Info",
    targetLabel: "Target Role",
    targetValue: "Frontend Developer",
    bgLabel: "Background",
    bgValue: "Marketing & Multimedia Design",
    locationLabel: "Location",
    locationValue: "Taiwan",
    githubLabel: "GitHub"
  },
  zh: {
    heading: "關於我",
    p1: "前端工程師，具備行銷企劃與多媒體設計背景。",
    p2: "擅長打造響應式網頁介面與互動式 UI 體驗。",
    p3: "目前專注於使用 React 進行現代前端開發。",
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
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">{text.p1}</p>
              <p className="text-lg leading-relaxed text-muted-foreground">{text.p2}</p>
              <p className="text-lg leading-relaxed text-muted-foreground">{text.p3}</p>
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
                    <a
                      href="https://github.com/Mengru0503"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
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
