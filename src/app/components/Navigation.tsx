import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import { Globe, X } from "lucide-react";

const navItems = [
  { en: "About", zh: "關於", href: "#about" },
  { en: "Skills", zh: "技能", href: "#skills" },
  { en: "Projects", zh: "作品", href: "#projects" },
  { en: "Experience", zh: "經歷", href: "#experience" },
  { en: "Contact", zh: "聯絡", href: "#contact" }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    // Small delay so menu closes before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? "bg-card/80 backdrop-blur-lg shadow-md" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl"
            >
              {lang === "en" ? "Meng-Ru" : "孟孺"}
            </motion.div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.en}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  onClick={() => scrollToSection(item.href)}
                  className="nav-link-hover relative text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-1"
                >
                  {lang === "en" ? item.en : item.zh}
                </motion.button>
              ))}

              {/* Language Toggle */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300 cursor-pointer"
              >
                <Globe size={14} />
                <span>{lang === "en" ? "繁中" : "EN"}</span>
              </motion.button>
            </div>

            {/* Mobile controls */}
            <div className="md:hidden flex items-center gap-3">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={toggleLang}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-border text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <Globe size={12} />
                <span>{lang === "en" ? "繁中" : "EN"}</span>
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X size={24} />
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2 px-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.en}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-2xl text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-3"
                >
                  {lang === "en" ? item.en : item.zh}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
