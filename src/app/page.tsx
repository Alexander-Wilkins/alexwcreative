
import BlueSkyBackground from "@/components/BlueSkyBackground";
import Navbar from "@/components/Navbar";

import Window from "@/components/Window";

import Canvas from "@/components/Canvas";
import Tools from "@/components/Tools";
import ColorPalette from "@/components/ColorPalette";

export default function Home() {
  return (
    <div style={{ overflow: "hidden", width: "100vw", height: "99vh" }}>
      {/* TODO: Add the weather api */}
      {/* TODO: Make this Windows Pocket version for mobile */}
      {/* TODO: Add in your own sprite buttons, left side in the toolbar */}
      {/* TODO: Feature: Left click and right click change the secondary and primary colors */}
      {/* TODO: Add in versioning for package.json */}
      {/* TODO: Add funny drawing pages to the drawing canvas */}
      {/* TODO: Feature: make it so that people can draw something and say hi and it says it to a local repo that displays a gallery */}
      {/* TODO: Feature: Make another application on the desktop */}
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
