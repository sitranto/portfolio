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

        'hero.greeting': 'Hello, I\'m',
        'hero.name': 'Anatoliy Latyshev',
        'hero.title1': 'I\'m a',
        'hero.title2': 'Full-Stack Developer',
        'hero.title3': 'specializing in',
        'hero.title4': 'Modern Web Applications',
        'hero.description': 'I develop digital products using React, Node.js, TypeScript, and Kotlin. I strive for clean code, user-friendly interfaces, and bringing ideas to life.',
        'hero.cta': 'View My Work',
    },
    ru: {
        'nav.home': 'главная',
        'nav.about': 'обо мне',
        'nav.skills': 'навыки',
        'nav.projects': 'проекты',
        'nav.contact': 'контакты',

        'hero.greeting': 'Привет, я',
        'hero.name': 'Анатолий Латышев',
        'hero.title1': 'Я',
        'hero.title2': 'Full-Stack Разработчик',
        'hero.title3': 'специализируюсь на',
        'hero.title4': 'Современных Веб-Приложениях',
        'hero.description': 'Я разрабатываю цифровые продукты на React, Node.js, TypeScript и Kotlin. Стремлюсь к чистому коду, удобному интерфейсу и воплощению идей в жизнь.',
        'hero.cta': 'Посмотреть работы',
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