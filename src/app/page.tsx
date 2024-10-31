import BlueSkyBackground from "@/components/BlueSkyBackground";
import Navbar from "@/components/Navbar";
import Window from "@/components/Window";
import Canvas from "@/components/Canvas";
import Tools from "@/components/Tools";
import ColorPalette from "@/components/ColorPalette";

export default function Home() {
  return (
    <div style={{ overflow: "hidden", width: "100vw", height: "99vh" }}>
      <Window size="w-[23rem] sm:w-[67rem]" title="alexwcreative.com">
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
