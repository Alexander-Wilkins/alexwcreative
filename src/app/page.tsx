import Image from "next/image";
import msPaintIcon from "@/assets/logos/ms-paint-icon.png";
import BlueSkyBackground from "@/components/BlueSkyBackground";
import Navbar from "@/components/Navbar";
import { vt323 } from "@/fonts";
import Window from "@/components/Window";

export default function Home() {
  return (
    <div
      style={{ overflow: "hidden", width: "100vw", height: "99vh" }}
    >
      <Window size="w-[23rem] sm:w-[67rem] sm:inline-block">
        <header
          id="blue-bar"
          className="flex flex-row gap-2 p-2 bg-gradient-to-t from-xp-blue from-17% via-xp-blue via-27% to-[#eff2fa67] rounded-t-xl"
        >
          <Image src={msPaintIcon} alt="MS Paint Icon" height={32} />
          <h1
            className={`text-white ${vt323.className} text-2xl drop-shadow-md`}
          >
            alexwcreative.com
          </h1>
        </header>
        <Navbar />
        <main className="text-white p-4">website is a WIP currently...</main>
      </Window>
      <BlueSkyBackground />
    </div>
  );
}
