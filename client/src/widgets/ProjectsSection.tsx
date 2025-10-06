'use client'

import { motion } from 'motion/react'
import Card from '@/ui/Card'
import Button from '@/ui/Button'
import { ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import {Project} from "@/types/main";
import Image from "next/image";

export function ProjectsSection() {
    const { t } = useLanguage()

    const projects: Project[] = [];

    const featuredProjects = projects.filter(p => p.featured)
    const otherProjects = projects.filter(p => !p.featured)

    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl text-white mb-6">{t('projects.title')}</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#339989] to-[#7DE2D1] mx-auto"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        {t('projects.description')}
                    </p>
                </motion.div>

                {/* Featured Projects */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <Card className="group bg-black/50 border-white/10 overflow-hidden hover:border-[#339989]/50 transition-all duration-500">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={project.imageId}
                                        alt={project.title}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                                    <div className="absolute top-4 right-4 flex space-x-2">
                                        <motion.a
                                            href={project.github}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-[#339989] transition-all duration-300"
                                        >
                                            <Github className="w-5 h-5" />
                                        </motion.a>
                                        <motion.a
                                            href={project.live}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-[#339989] transition-all duration-300"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </motion.a>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl text-white mb-3 group-hover:text-[#7DE2D1] transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-[#339989]/20 text-[#7DE2D1] rounded-full text-sm border border-[#339989]/30"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h3 className="text-2xl text-white text-center mb-8">{t('projects.other')}</h3>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Card className="group bg-black/30 border-white/10 hover:border-white/30 transition-all duration-300 h-full">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={project.imageId}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40"></div>
                                    <div className="absolute top-3 right-3 flex space-x-2">
                                        <a
                                            href={project.github}
                                            className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-[#339989] transition-all duration-300"
                                        >
                                            <Github className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={project.live}
                                            className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-[#339989] transition-all duration-300"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <h4 className="text-lg text-white mb-2 group-hover:text-[#7DE2D1] transition-colors duration-300">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                                            >
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Button
                        variant="outline"
                        className="border-[#339989]/50 text-[#7DE2D1] hover:bg-[#339989]/10 px-8 py-3"
                    >
                        {t('projects.viewAll')}
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
