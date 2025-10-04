'use client';

import {motion} from "motion/react";
import {ArrowDown, Github, Mail} from "lucide-react";
import { useLanguage } from '@/context/LanguageContext'
import Button from "@/ui/Button";
import TelegramIcon from "@/ui/Icon";

export default function HeroSection() {
    const { t } = useLanguage();

    const scrollToProjects = () => {
        const element = document.getElementById('projects')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0015] via-[#1a0a2e] to-black">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#339989] rounded-full opacity-10 blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#7DE2D1] rounded-full opacity-10 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-purple-500 rounded-full opacity-5 blur-[90px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="absolute inset-0">
                {[...Array(100)].map((_, i) => (
                    <motion.div
                        key={`star-small-${i}`}
                        className="absolute w-[2px] h-[2px] bg-white rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 3
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={`star-large-${i}`}
                        className="absolute w-1 h-1 rounded-full"
                        animate={{
                            opacity: [0.4, 1, 0.4],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 4,
                            repeat: Infinity,
                            delay: Math.random() * 3
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            backgroundColor: '#339989',
                            boxShadow: '0 0 20px #339989, 0 0 40px #7DE2D1'
                        }}
                    />
                ))}
            </div>

            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`shooting-${i}`}
                    className="absolute w-1 h-1 bg-[#7DE2D1] rounded-full"
                    initial={{
                        x: -100,
                        y: Math.random() * 300,
                        opacity: 0
                    }}
                    animate={{
                        x: window.innerWidth + 100,
                        y: Math.random() * 300 + 200,
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        delay: Math.random() * 10 + i * 5,
                        ease: "linear"
                    }}
                    style={{
                        boxShadow: '0 0 10px #7DE2D1, -50px 0 30px #7DE2D1'
                    }}
                />
            ))}

            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#7DE2D1] text-lg tracking-wider"
                    >
                        {t('hero.greeting')}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-7xl text-[#FFFAFB] mb-6"
                        style={{
                            textShadow: '0 0 30px rgba(125, 226, 209, 0.3)'
                        }}
                    >
                        {t('hero.name')}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-2xl md:text-4xl text-gray-300 mb-8"
                    >
                        {t('hero.title1')}{' '}
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-[#339989] to-[#7DE2D1]"
                            style={{
                                filter: 'drop-shadow(0 0 20px rgba(125, 226, 209, 0.5))'
                            }}
                        >
              {t('hero.title2')}
            </span>
                        <br />
                        {t('hero.title3')}{' '}
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-[#7DE2D1] to-[#FFFAFB]"
                            style={{
                                filter: 'drop-shadow(0 0 20px rgba(125, 226, 209, 0.3))'
                            }}
                        >
              {t('hero.title4')}
            </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
                    >
                        {t('hero.description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Button
                            onClick={scrollToProjects}
                            className="bg-[#339989] hover:bg-[#2a7d72] text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                            style={{
                                boxShadow: '0 0 20px rgba(51, 153, 137, 0.4)'
                            }}
                        >
                            {t('hero.cta')}
                        </Button>

                        <div className="flex items-center space-x-4">
                            {[
                                { icon: Github, href: 'https://github.com/sitranto' },
                                { icon: TelegramIcon, href: 'https://t.me/sitranto' },
                                { icon: Mail, href: 'mailto://anatoliyl2006@gmail.com' }
                            ].map(({ icon: Icon, href }, index) => (
                                <motion.a
                                    key={index}
                                    href={href}
                                    target={`_blank`}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.2 + index * 0.1 }}
                                    className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-[#7DE2D1] hover:bg-[#339989]/20 hover:text-[#FFFAFB] transition-all duration-300 hover:scale-110 border border-[#339989]/20"
                                    style={{
                                        boxShadow: '0 0 15px rgba(51, 153, 137, 0.2)'
                                    }}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[#7DE2D1]/60"
                >
                    <ArrowDown className="w-8 h-8" />
                </motion.div>
            </motion.div>
        </section>
    );
}