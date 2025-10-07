'use client';

import {useEffect, useState} from "react";
import {useLanguage} from "@/context/LanguageContext";
import {motion} from "motion/react";
import {Languages} from "lucide-react";

export default function NavBar() {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ru' : 'en');
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white text-xl font-medium"
                    >
                        {'<Sitranto />'}
                    </motion.div>

                    <div className="hidden md:flex items-center space-x-8">
                        {['home', 'about', 'skills', 'projects', 'contact'].map((item, index) => (
                            <motion.button
                                key={item}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                onClick={() => scrollToSection(item)}
                                className="text-gray-300 hover:text-[#7DE2D1] transition-colors duration-200 capitalize"
                            >
                                {t(`nav.${item}`)}
                            </motion.button>
                        ))}

                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            onClick={toggleLanguage}
                            className="flex items-center space-x-2 text-gray-300 hover:text-[#7DE2D1] transition-colors duration-200 px-3 py-2 rounded-lg bg-[#339989]/10 hover:bg-[#339989]/20 border border-[#339989]/20"
                        >
                            <Languages className="w-4 h-4" />
                            <span className="uppercase">{language}</span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}