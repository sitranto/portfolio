import Input from "@/ui/Input";
import TextArea from "@/ui/TextArea";
import Button from "@/ui/Button";
import Card from "@/ui/Card";
import {useLanguage} from "@/context/LanguageContext";

export default function MessageForm() {
    const { t } = useLanguage();

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        window.open("http://localhost:8080", "_blank");
    }

    return (
        <Card className="p-8 bg-gray-900/50 border-white/10">
            <h3 className="text-2xl text-white mb-6">{t('contact.formTitle')}</h3>
            <form className="space-y-9" onSubmit={onFormSubmit}>
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

                <Button className="w-full bg-[#339989] hover:bg-[#2a7d72] text-white py-3" type="submit">
                    {t('contact.send')}
                </Button>
            </form>
        </Card>
    );
}