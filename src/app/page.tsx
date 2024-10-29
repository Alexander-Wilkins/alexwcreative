import Image from "next/image";
import msPaintIcon from "@/assets/logos/ms-paint-icon.png";
import BlueSkyBackground from "@/components/BlueSkyBackground";
import Navbar from "@/components/Navbar";
import { vt323 } from "@/fonts";
import Window from "@/components/Window";
import WindowButton from "@/components/WindowButton";

export default function Home() {
  return (
    <div style={{ overflow: "hidden", width: "100vw", height: "99vh" }}>
      <Window size="w-[23rem] sm:w-[67rem] sm:inline-block">
        <header
          id="blue-bar"
          className="flex flex-row gap-2 pl-3 bg-gradient-to-t from-xp-blue from-17% via-xp-blue via-27% to-[#eff2fa67] rounded-t-xl justify-between"
        >
          <div className="flex flex-row gap-2 items-center justify-center">
            <Image src={msPaintIcon} alt="MS Paint Icon" height={32} />
            <h1
              className={`text-white ${vt323.className} text-2xl drop-shadow-md`}
            >
              alexwcreative.com
            </h1>
          </div>
          <WindowButton />
        </header>
        <Navbar />
        <main className="bg-ms-bronze-bg-ui">
          <div
            id="left-container"
            className="bg-ms-bronze-ui w-[7.375rem] border-ms-bronze-bg-ui border-[1px] pl-[0.65rem]"
          >
            balh
            <div
              id="tan-box"
              className="h-[10.3125rem] w-[5.8125rem] block bg-[#FFFCEA] border-solid border-t-[1px] border-l-[1px] border-ms-bronze-bg-ui border-r-white border-b-white"
            ></div>
          </div>
        </main>
      </Window>
      <BlueSkyBackground />
    </div>
  );
}
