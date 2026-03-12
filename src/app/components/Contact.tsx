import { motion } from "motion/react";
import { useInView } from "./useInView";
import { useLanguage } from "./LanguageContext";
import { Mail, Linkedin, Github } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Mengru0503",
    color: "#9EAFC4"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
    color: "#D4A5A5"
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:mengru0503@gmail.com",
    color: "#C8B8A8"
  }
];

const t = {
  en: {
    heading: "Contact",
    subtitle: "Nice to meet you! If you're interested in my work or have any collaboration opportunities, feel free to reach out anytime.",
    location: "Taiwan"
  },
  zh: {
    heading: "聯絡方式",
    subtitle: "很高興認識您！如果您對我的作品感興趣，或有任何合作機會，歡迎隨時聯繫",
    location: "台灣"
  }
};

export function Contact() {
  const { ref, isInView } = useInView();
  const { lang } = useLanguage();
  const text = t[lang];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-4">{text.heading}</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {text.subtitle}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-2xl p-6 md:p-12 shadow-lg border border-border mb-12"
          >
            <div className="grid grid-cols-3 gap-6 md:gap-8 max-w-md mx-auto">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex flex-col items-center gap-3 group cursor-pointer"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: link.color + "30" }}
                    >
                      <Icon size={28} style={{ color: link.color }} />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-muted-foreground"
          >
            <p className="mb-2">mengru0503@gmail.com</p>
            <p>{text.location}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
