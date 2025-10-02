'use client';

import {Language} from "@/types/main";
import {createContext, ReactNode, useContext, useState} from "react";

interface LanguageContextProps {
    language: Language,
    setLanguage: (language: Language) => void,
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations = {
    en: {
        'nav.home': 'home',
        'nav.about': 'about',
        'nav.skills': 'skills',
        'nav.projects': 'projects',
        'nav.contact': 'contact',
    },
    ru: {
        'nav.home': 'главная',
        'nav.about': 'обо мне',
        'nav.skills': 'навыки',
        'nav.projects': 'проекты',
        'nav.contact': 'контакты',
    }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('ru');

    const t = (key: string) => {
        return translations[language][key as keyof typeof translations['ru']] || key;
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage() must be used within LanguageProvider");
    }
    return context;
}