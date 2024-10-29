import Image from "next/image";
import msPaintIcon from "@/assets/logos/ms-paint-icon.png";
import BlueSkyBackground from "@/components/BlueSkyBackground";
import Navbar from "@/components/Navbar";
import { vt323 } from "@/fonts";
import Window from "@/components/Window";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Window>
        <header id="blue-bar" className="flex flex-row gap-2 p-3 bg-gradient-to-t from-xp-blue from-17% via-xp-blue via-27% to-[#eff2fa67] rounded-t-xl">
          <Image src={msPaintIcon} alt="MS Paint Icon" height={32} />
          <h1 className={`text-white ${vt323.className} text-2xl drop-shadow-md`}>
        alexwcreative.com
          </h1>
        </header>
        <Navbar />
        <main>content</main>
      </Window>
      <BlueSkyBackground />
    </div>
  );
}
