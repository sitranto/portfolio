import {LanguageProvider} from "@/context/LanguageContext";
import NavBar from "@/widgets/NavBar";

export default function Home() {
  return (
      <LanguageProvider>
        <div className="dark min-h-screen bg-black text-white">
            <NavBar/>
        </div>
      </LanguageProvider>
  );
}
