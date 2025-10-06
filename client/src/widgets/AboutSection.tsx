'use client'

import { motion } from 'motion/react'
import Card from '@/ui/Card'
import { Code, Coffee, Lightbulb, Users } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function AboutSection() {
    const { t } = useLanguage()

    const features = [
        {
            icon: Code,
            title: t('about.feature1.title'),
            description: t('about.feature1.description')
        },
        {
            icon: Lightbulb,
            title: t('about.feature2.title'),
            description: t('about.feature2.description')
        },
        {
            icon: Users,
            title: t('about.feature3.title'),
            description: t('about.feature3.description')
        },
        {
            icon: Coffee,
            title: t('about.feature4.title'),
            description: t('about.feature4.description')
        }
    ]

    const traits = [
        t('about.trait1'),
        t('about.trait2'),
        t('about.trait3'),
        t('about.trait4')
    ]

    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl text-white mb-6">{t('about.title')}</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#339989] to-[#7DE2D1] mx-auto"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl text-white mb-4">
                            {t('about.subtitle')}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            {t('about.paragraph1')}
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            {t('about.paragraph2')}
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3 mt-6"
                        >
                            {traits.map((trait, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-[#339989]/20 text-[#7DE2D1] rounded-full text-sm border border-[#339989]/30"
                                >
                  {trait}
                </span>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Card className="p-6 bg-black/50 border-white/10 hover:border-[#339989]/50 transition-all duration-300 group min-h-[230px]">
                                    <div className="text-[#7DE2D1] mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-white text-lg mb-2">{feature.title}</h4>
                                    <p className="text-gray-400 text-sm">{feature.description}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}