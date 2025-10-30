'use client';

import {ArrowDown, Github, Mail} from "lucide-react";
import { useLanguage } from '@/context/LanguageContext'
import Button from "@/ui/Button";
import TelegramIcon from "@/ui/Icon";
import constants from "@/lib/constants.json";
import {useEffect, useState} from "react";

export default function HeroSection() {
    const { t } = useLanguage();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

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

            {isMounted && (
                <div className="absolute inset-0">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={`star-small-${i}`}
                            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-fade-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDuration: `${Math.random() * 3 + 2}s`,
                                animationDelay: `${Math.random() * 3}s`,
                            }}
                        />
                    ))}
                </div>
            )}

            {isMounted && (
                <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={`star-large-${i}`}
                            className="absolute w-1 h-1 rounded-full animate-fade-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDuration: `${Math.random() * 5 + 4}s`,
                                animationDelay: `${Math.random() * 3}s`,
                                backgroundColor: '#339989',
                                boxShadow: '0 0 20px #339989, 0 0 40px #7DE2D1'
                            }}
                        />
                    ))}
                </div>
            )}

            {isMounted && (
                <div className="absolute inset-0">
                    {[...Array(3)].map((_, i) => (
                        <div key={`shooting-${i}`}
                             className="absolute w-1 h-1 bg-[#7DE2D1] rounded-full animate-shooting-star"
                             style={{
                                 top: `${Math.random() * 300}px`,
                                 boxShadow: '0 0 10px #7DE2D1, -50px 0 30px #7DE2D1',
                                 ['--duration' as string]: `${Math.random() * 2 + 1}s`,
                                 ['--delay' as string]: `${Math.random() * 5 + i * 5}s`
                             }}
                        />
                    ))}
                </div>
            )}


            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                <div className="space-y-6">
                    <p className="text-[#7DE2D1] text-lg tracking-wider animate-fade-in delay-200">
                        {t('hero.greeting')}
                    </p>

                    <h1 className="text-5xl md:text-7xl text-[#FFFAFB] mb-6 animate-fade-in-up delay-400"
                        style={{
                            textShadow: '0 0 30px rgba(125, 226, 209, 0.3)'
                        }}
                    >
                        {t('hero.name')}
                    </h1>

                    <div className="text-2xl md:text-4xl text-gray-300 mb-8 animate-fade-in-up delay-600">
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
                    </div>

                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 animate-fade-in-up delay-800">
                        {t('hero.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-1000">
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
                                { icon: Github, href: constants.links.github },
                                { icon: TelegramIcon, href: constants.links.telegram },
                                { icon: Mail, href: `mailto:${constants.links.mail}` },
                            ].map(({ icon: Icon, href }, index) => (
                                <a key={index}
                                    href={href}
                                    target={`_blank`}
                                    className={`w-12 h-12 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center text-[#7DE2D1] hover:bg-[#339989]/20 hover:text-[#FFFAFB] transition-all duration-300 hover:scale-110 border border-[#339989]/20 animate-scale-in delay-1200`}
                                    style={{
                                        boxShadow: '0 0 15px rgba(51, 153, 137, 0.2)'
                                    }}
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in delay-1500">
                <div className="text-[#7DE2D1]/60 animate-float">
                    <ArrowDown className="w-8 h-8" />
                </div>
            </div>
        </section>
    );
}