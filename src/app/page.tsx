import BlueSkyBackground from "@/components/BlueSkyBackground";
import Navbar from "@/components/Navbar";
import Window from "@/components/Window";
import Canvas from "@/components/Canvas";
import Tools from "@/components/Tools";
import ColorPalette from "@/components/ColorPalette";

export default function Home() {
  return (
    <div className="overflow-hidden w-screen h-[99vh]">
      {/* TODO: Make this an MSPaint Component, so that "Windows" are their own thing */}
      <Window size="w-[23rem] sm:w-[67rem]" title="alexwcreative.com">
        <Navbar />
        <main className="relative grid h-full w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] bg-ms-bronze-bg-ui">
          <div
            id="left-container"
            className="sm:w-[5.5rem] w-[5.25rem] border-[1px] border-ms-bronze-bg-ui bg-ms-bronze-ui pl-[0.65rem]"
          >
            <Tools />
          </div>
          <div id="right-container" className="overflow-hidden">
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
