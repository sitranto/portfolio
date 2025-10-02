import {LanguageProvider} from "@/context/LanguageContext";
import NavBar from "@/widgets/NavBar";
import HeroSection from "@/widgets/HeroSection";
import AboutSection from "@/widgets/AboutSection";
import SkillsSection from "@/widgets/SkillsSection";

export default function Home() {
  return (
      <LanguageProvider>
        <div className="dark min-h-screen bg-black text-white">
            <NavBar/>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
        </div>
      </LanguageProvider>
  );
}
