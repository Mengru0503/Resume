import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Lang = "en" | "zh";

interface LanguageContextType {
    lang: Lang;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "en",
    toggleLang: () => { },
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Lang>(() => {
        const saved = localStorage.getItem("lang");
        return (saved === "zh" ? "zh" : "en") as Lang;
    });

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    const toggleLang = () => {
        setLang((prev) => (prev === "en" ? "zh" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
