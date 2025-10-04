'use client'

import { motion } from 'motion/react'
import Card from '@/ui/Card'
import Button from '@/ui/Button'
import Input from '@/ui/Input'
import TextArea from '@/ui/TextArea'
import { Github, Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import TelegramIcon from "@/ui/Icon";

export function ContactSection() {
    const { t } = useLanguage()

    const contactInfo = [
        {
            icon: Mail,
            label: t('Email'),
            value: t('anatoliyl2006@gmail.com'),
            href: 'mailto:anatoliyl2006@gmail.com'
        },
        {
            icon: Phone,
            label: t('contact.phone.label'),
            value: t('contact.phone.value'),
            href: 'tel:+79991234567'
        },
        {
            icon: MapPin,
            label: t('contact.location.label'),
            value: t('contact.location.value'),
            href: '#'
        }
    ]

    const socialLinks = [
        { icon: Github, href: 'https://github.com/sitranto', label: 'GitHub' },
        { icon: TelegramIcon, href: 'https:/t.me/sitranto', label: 'Twitter' },
        { icon: Mail, href: 'mailto:anatoliyl2006@gmail.com', label: 'Email' }
    ]

    return (
        <section id="contact" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl text-white mb-6">{t('contact.title')}</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#339989] to-[#7DE2D1] mx-auto"></div>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        {t('contact.description')}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-8 bg-gray-900/50 border-white/10">
                            <h3 className="text-2xl text-white mb-6">{t('contact.formTitle')}</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-gray-300 text-sm mb-2 block">{t('contact.firstName')}</label>
                                        <Input
                                            placeholder={t('contact.firstNamePlaceholder')}
                                            className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#339989]"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-gray-300 text-sm mb-2 block">{t('contact.lastName')}</label>
                                        <Input
                                            placeholder={t('contact.lastNamePlaceholder')}
                                            className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#339989]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-gray-300 text-sm mb-2 block">{t('contact.email')}</label>
                                    <Input
                                        type="email"
                                        placeholder={t('contact.emailPlaceholder')}
                                        className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#339989]"
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-300 text-sm mb-2 block">{t('contact.subject')}</label>
                                    <Input
                                        placeholder={t('contact.subjectPlaceholder')}
                                        className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#339989]"
                                    />
                                </div>

                                <div>
                                    <label className="text-gray-300 text-sm mb-2 block">{t('contact.message')}</label>
                                    <TextArea
                                        placeholder={t('contact.messagePlaceholder')}
                                        rows={5}
                                        className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#339989] resize-none"
                                    />
                                </div>

                                <Button className="w-full bg-[#339989] hover:bg-[#2a7d72] text-white py-3">
                                    {t('contact.send')}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl text-white mb-6">{t('contact.connectTitle')}</h3>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                {t('contact.connectDescription')}
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={index}
                                    href={info.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-white/10 hover:border-[#339989]/50 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-[#339989]/20 rounded-lg flex items-center justify-center text-[#7DE2D1] group-hover:bg-[#339989]/30 transition-all duration-300">
                                        <info.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">{info.label}</p>
                                        <p className="text-white">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div className="pt-8">
                            <h4 className="text-white text-lg mb-4">{t('contact.followMe')}</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target={`_blank`}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-[#339989] hover:text-white transition-all duration-300"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 mt-16 pt-8 text-center"
                >
                    <p className="text-gray-400">
                        {t('contact.footer')}
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
