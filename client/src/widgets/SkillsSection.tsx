'use client';

import {useLanguage} from "@/context/LanguageContext";
import {motion} from "motion/react";
import {Code2, FileCode, Layers, Server, Palette, Terminal, Boxes, GitBranch, Cloud, Box, Sparkles, Database} from "lucide-react";
import Card from "@/ui/Card";

export default function SkillsSection() {
    const { t } = useLanguage()

    const technologies = [
        { name: 'React', icon: Code2 },
        { name: 'Next.js', icon: Layers},
        { name: 'TypeScript', icon: FileCode},
        { name: 'Kotlin', icon: FileCode},
        { name: 'Tailwind CSS', icon: Palette},
        { name: 'Node.js', icon: Server},
        { name: 'Spring', icon: Server},
        { name: 'PostgreSQL', icon: Database},
        { name: 'Redis', icon: Database},
        { name: 'Docker', icon: Box},
        { name: 'Git', icon: GitBranch},
    ];

    return (
        <section id="skills" className="py-20 bg-black relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#339989] rounded-full opacity-5 blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#7DE2D1] rounded-full opacity-5 blur-[100px]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl text-white mb-6">{t('skills.title')}</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#339989] to-[#7DE2D1] mx-auto"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        {t('skills.description')}
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4"
                >
                    {technologies.map((tech, _index) => {
                        const Icon = tech.icon
                        return (
                            <motion.div
                                key={tech.name}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -5, 5, 0],
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Card className="relative p-6 bg-black/50 border-white/10 hover:border-[#339989]/50 transition-all duration-300 group overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#339989]/0 to-[#7DE2D1]/0 group-hover:from-[#339989]/10 group-hover:to-[#7DE2D1]/5 transition-all duration-300"></div>
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-[#7DE2D1]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative flex flex-col items-center justify-center space-y-3">
                                        <div className="w-12 h-12 flex items-center justify-center text-[#7DE2D1] group-hover:text-[#FFFAFB] transition-all duration-300 group-hover:scale-110">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm text-center">
                      {tech.name}
                    </span>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#339989] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>

                <div className="absolute top-20 left-10 w-2 h-2 bg-[#7DE2D1] rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-20 w-1 h-1 bg-[#339989] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-[#7DE2D1] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
        </section>
    );
}