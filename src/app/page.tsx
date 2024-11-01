import BlueSkyBackground from "@/components/BlueSkyBackground";
import Navbar from "@/components/Navbar";
import Window from "@/components/Window";
import Canvas from "@/components/Canvas";
import Tools from "@/components/Tools";
import ColorPalette from "@/components/ColorPalette";

export default function Home() {
  return (
    <div className="h-[99vh] w-screen overflow-hidden">
      {/* TODO: Make this an MSPaint Component, so that "Windows" are their own thing */}
      <Window size="w-[23rem] sm:w-[67rem]" title="alexwcreative.com">
        <Navbar />
        <main className="relative grid h-full w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] bg-ms-bronze-bg-ui">
          <div
            id="left-container"
            className="w-[5.25rem] border-[1px] border-ms-bronze-bg-ui bg-ms-bronze-ui pl-[0.65rem] sm:w-[5.5rem]"
          >
            <Tools />
          </div>
          <div id="right-container" className="h-full w-full overflow-hidden">
            <div className="overflow-auto max-h-[40.25rem]">
              <Canvas />
            </div>
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
