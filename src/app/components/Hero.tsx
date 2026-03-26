import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";
import { Github, FileDown, FolderOpen } from "lucide-react";

const techStack = ["HTML", "CSS", "JavaScript", "React"];

const t = {
  en: {
    name: "Mengru Lai",
    title: "Frontend Developer",
    tagline: "Building interactive web interfaces and user-centered web experiences.",
    viewProjects: "View Projects",
    resume: "Download Resume"
  },
  zh: {
    name: "賴孟孺",
    title: "Frontend Developer",
    tagline: "打造互動式網頁介面與以使用者為中心的 Web 體驗。",
    viewProjects: "查看作品",
    resume: "下載履歷"
  }
};

export function Hero() {
  const { lang } = useLanguage();
  const text = t[lang];

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-secondary overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center text-white text-3xl">
              {lang === "en" ? "Ru" : "孟"}
            </div>
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl mb-4 text-foreground">
            {text.name}
          </h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-primary mb-4 tracking-wide"
          >
            {text.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8"
          >
            {text.tagline}
          </motion.p>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {techStack.map((tech, i) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full text-sm font-medium border"
                style={{
                  borderColor: "var(--primary)",
                  color: "var(--primary)",
                  backgroundColor: "var(--primary)18"
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {/* View Projects */}
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              style={{ backgroundColor: "var(--primary)" }}
            >
              <FolderOpen size={16} />
              {text.viewProjects}
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/Mengru0503"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border transition-all duration-300 hover:scale-105 hover:shadow-md"
              style={{
                borderColor: "var(--primary)",
                color: "var(--primary)"
              }}
            >
              <Github size={16} />
              GitHub
            </a>

            {/* Download Resume */}
            <a
              href="https://mengru0503.github.io/ResumePDF/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border transition-all duration-300 hover:scale-105 hover:shadow-md"
              target="_blank"
              style={{
                borderColor: "var(--border)",
                color: "var(--muted-foreground)"
              }}
            >
              <FileDown size={16} />
              {text.resume}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
