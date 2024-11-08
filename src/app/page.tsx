import Image from "next/image";
import mainDrawing from "@/assets/imgs/main-page.png";

export default function Home() {
  return (
    <div className="">
      {/* TODO: Make this an MSPaint Component, so that "Windows" are their own thing */}
      <Image src={mainDrawing} alt="Test Drawing" quality={100} />
    </div>
  );
}
