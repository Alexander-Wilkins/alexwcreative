import Image from "next/image";
import msPaintIcon from "@/assets/logos/ms-paint-icon.png";
import BlueSkyBackground from "@/components/BlueSkyBackground";
import Navbar from "@/components/Navbar";
import { vt323 } from "@/fonts";
import Window from "@/components/Window";
import WindowButtons from "@/components/WindowButtons";
import Canvas from "@/components/Canvas";
import Tools from "@/components/Tools";
import ColorPalette from "@/components/ColorPalette";

export default function Home() {
  return (
    <div style={{ overflow: "hidden", width: "100vw", height: "99vh" }}>
      <Window size="w-[23rem] sm:w-[67rem] sm:inline-block ">
        <header
          id="blue-bar"
          className="from-17% via-27% flex flex-row justify-between gap-2 rounded-t-xl bg-gradient-to-t from-xp-blue via-xp-blue to-[#eff2fa67] pl-3"
        >
          <div className="flex flex-row items-center justify-center gap-2">
            <Image src={msPaintIcon} alt="MS Paint Icon" height={32} />
            <h1
              className={`text-white ${vt323.className} text-2xl drop-shadow-md`}
            >
              alexwcreative.com
            </h1>
          </div>
          <WindowButtons />
        </header>
        <Navbar />
        <main className="relative grid h-full w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] bg-ms-bronze-bg-ui">
          <div
            id="left-container"
            className="w-[7.375rem] border-[1px] border-ms-bronze-bg-ui bg-ms-bronze-ui pl-[0.65rem]"
          >
            <Tools />
          </div>
          <div id="right-container" className="">
            <Canvas />
          </div>
          <div id="bottom-container" className="col-span-2">
            <ColorPalette />
          </div>
        </main>
      </Window>
      <BlueSkyBackground />
    </div>
  );
}
