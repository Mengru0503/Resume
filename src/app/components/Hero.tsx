import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";

const t = {
  en: {
    name: "Meng-Ru Lai",
    title: "Frontend Developer",
    desc1: "Cross-disciplinary specialist in design & planning, transitioning to frontend engineering.",
    desc2: "Passionate about merging design aesthetics, usability, and technology."
  },
  zh: {
    name: "賴孟孺",
    title: "Frontend Developer",
    desc1: "跨界設計與企劃專才，正在轉職前端工程師的路上",
    desc2: "熱衷於將設計美學、易用性與技術完美結合"
  }
};

export function Hero() {
  const { lang } = useLanguage();
  const text = t[lang];

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-secondary overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center text-white text-3xl">
              {lang === "en" ? "M" : "孟"}
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl mb-6 text-foreground">
            {text.name}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4"
          >
            {text.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {text.desc1}<br />
            {text.desc2}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
