import Image from "next/image";
import mainDrawing from "@/assets/imgs/main-page.png";

export default function Home() {
  return (
    <div className="">
      {/* TODO: Make this an MSPaint Component, so that "Windows" are their own thing */}
      <Image src={mainDrawing} alt="Test Drawing" quality={100} />
      <Image src={mainDrawing} alt="Test Drawing" quality={100} />
      <Image src={mainDrawing} alt="Test Drawing" quality={100} />
      <Image src={mainDrawing} alt="Test Drawing" quality={100} />
      <Image src={mainDrawing} alt="Test Drawing" quality={100} />
      {/* <Window
        size="w-[23rem] sm:w-[67rem]"
        defaultPos="ml-8 sm:ml-[23.125rem] sm:mt-10"
        title="alexwcreative.com"
      >
        <Navbar />
        <main className="relative grid h-full w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr_auto] bg-ms-bronze-bg-ui">
          <div
            id="left-container"
            className="w-[5.25rem] border-[1px] border-ms-bronze-bg-ui bg-ms-bronze-ui pl-[0.65rem] sm:w-[5.5rem]"
          >
            <Tools />
          </div>
          <div id="right-container" className="h-full w-full overflow-hidden">
            <div className="max-h-[40.25rem] overflow-auto">
              <Canvas />
            </div>
          </div>
          <div id="bottom-container" className="col-span-2">
            <ColorPalette />
          </div>
        </main>
      </Window> */}
    </div>
  );
}
