import { motion } from "motion/react";
import { useInView } from "./useInView";
import { useLanguage } from "./LanguageContext";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: { en: "Frontend Engineer Training & Self-Study", zh: "前端工程師培訓 & 自學" },
    position: { en: "Frontend Developer (Career Transition)", zh: "Frontend Developer（轉職中）" },
    period: { en: "2025 - Present", zh: "2025 - 現在" },
    description: {
      en: "Actively transitioning to frontend engineering, focusing on the React ecosystem and modern web development.",
      zh: "積極投入前端工程師轉職，專注學習 React 生態系與現代 Web 開發技術。"
    },
    achievements: {
      en: [
        "Built InnerSoul — an emotional tracking & digital companion platform (React + Vite + SCSS + Redux)",
        "Team-developed Happiness Cookie brand e-commerce website (HTML + CSS + JavaScript)",
        "Learning & practicing React Component Architecture, API integration, and full-stack app development"
      ],
      zh: [
        "完成 InnerSoul 心途 — 情緒追蹤與數位陪伴平台（React + Vite + SCSS + Redux）",
        "團隊協作開發晴天餅乾品牌電商網站（HTML + CSS + JavaScript）",
        "學習並實作 React Component Architecture、API 整合與全端應用開發"
      ]
    }
  },
  {
    company: { en: "Muscular Dystrophy Association of Taiwan", zh: "社團法人中華民國肌萎縮症病友協會" },
    position: { en: "Social Welfare Specialist", zh: "社福專員" },
    period: "2023 - 2025",
    description: {
      en: "Led the organization's historical archive project, managed website updates and charity fundraising campaigns.",
      zh: "主導協會歷史成果整理，負責官網更新與公益勸募企劃執行。"
    },
    achievements: {
      en: [
        "Video editing: 2024 annual results video \"Beyond Limitations\", nutrition supplement results video",
        "Website updates: donation pages, event galleries, member benefits and linked page updates",
        "Campaign execution: 7-Eleven charity fundraising platform, National Family Day event key visual"
      ],
      zh: [
        "影片剪輯：113 年成果影片「跨越肌限」、營養品成果影片",
        "官網更新：捐款頁面、活動錦集、會員福利等頁面串聯更新",
        "企劃執行：統一超商公益勸募平台、全國家庭日活動主視覺"
      ]
    }
  },
  {
    company: { en: "Yuan Meng International Co., Ltd.", zh: "元萌國際股份有限公司" },
    position: { en: "Graphic Designer", zh: "美術編輯" },
    period: "2018",
    description: {
      en: "Responsible for visual design and graphic editing projects.",
      zh: "負責公司視覺設計與平面編輯相關工作。"
    },
    achievements: {
      en: [
        "Graphic design and visual editing",
        "Multimedia asset production"
      ],
      zh: [
        "平面設計與視覺編輯",
        "多媒體素材製作"
      ]
    }
  },
  {
    company: { en: "Chinese Young Entrepreneurs Association", zh: "中華青年企業家協會" },
    position: { en: "Secretariat Specialist", zh: "秘書處專員" },
    period: "2014 - 2018",
    description: {
      en: "Independently won and executed government tenders; led startup teams in cross-strait competitions.",
      zh: "獨立承接政府標案並成功得標執行，帶領創業隊伍參與兩岸競賽。"
    },
    achievements: {
      en: [
        "Government tenders: 2014-2016 NIA illegal labor training workshops",
        "Organized 2016 Cross-Strait Youth Innovation & Entrepreneurship Competition",
        "Quarterly publication editing, proposal planning & execution"
      ],
      zh: [
        "政府標案：103-105 年移民署查緝非法外勞工作講習會",
        "獨立辦理 2016 年兩岸青年大學生創新創業邀請賽",
        "季刊編輯出版、企劃提案與執行"
      ]
    }
  },
  {
    company: { en: "Junior Chamber International, R.O.C.", zh: "國際青年商會中華民國總會" },
    position: { en: "Planning Department Specialist", zh: "企劃處專員" },
    period: "2013 - 2014",
    description: {
      en: "Assisted in organizing large-scale event planning, building experience in execution and cross-department coordination.",
      zh: "協助辦理大型活動企劃，累積活動執行與跨部門協調經驗。"
    },
    achievements: {
      en: [
        "Event planning & execution: JCI 60th Anniversary Celebration",
        "Cross-Strait Economic Forum, Youth Leaders Forum"
      ],
      zh: [
        "企劃執行：青商六十周年慶",
        "兩岸經貿論壇、青年領袖論壇"
      ]
    }
  }
];

const t = {
  en: {
    heading: "Experience",
    subtitle: "From planning to frontend — an exciting cross-disciplinary journey"
  },
  zh: {
    heading: "經歷",
    subtitle: "從企劃到前端，跨領域的精彩旅程"
  }
};

export function Experience() {
  const { ref, isInView } = useInView();
  const { lang } = useLanguage();
  const text = t[lang];

  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
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

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <div className="bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Briefcase size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl mb-1">{typeof exp.position === "string" ? exp.position : exp.position[lang]}</h3>
                        <div className="text-lg text-muted-foreground mb-2">{typeof exp.company === "string" ? exp.company : exp.company[lang]}</div>
                        <div className="text-sm text-muted-foreground">{typeof exp.period === "string" ? exp.period : exp.period[lang]}</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {typeof exp.description === "string" ? exp.description : exp.description[lang]}
                    </p>

                    <div className="space-y-2">
                      {(Array.isArray(exp.achievements) ? exp.achievements : exp.achievements[lang]).map((achievement: string, i: number) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
