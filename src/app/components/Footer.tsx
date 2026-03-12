import { Heart } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Made with <Heart size={16} className="text-secondary" fill="currentColor" /> by {lang === "en" ? "Meng-Ru Lai" : "賴孟孺"}
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © 2026 All rights reserved
        </p>
      </div>
    </footer>
  );
}
