import Image from "next/image";
import mainDrawing from "@/assets/imgs/main-page.png";

export default function Canvas() {
  return (
    <div>
    <div id="drawing-canvas" className="bg-white mt-4 ml-4 mb-20 inline-block p-10" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: -4, left: -4, width: '4px', height: '4px', backgroundColor: '#f5efef', border: '1px solid #8498df' }}></div>
        <div style={{ position: 'absolute', top: -4, right: -4, width: '4px', height: '4px', backgroundColor: '#f5efef', border: '1px solid #8498df' }}></div>
        <div style={{ position: 'absolute', bottom: -4, left: -4, width: '4px', height: '4px', backgroundColor: '#f5efef', border: '1px solid #8498df' }}></div>
        <div style={{ position: 'absolute', bottom: -4, right: -4, width: '4px', height: '4px', backgroundColor: '#f5efef', border: '1px solid #8498df' }}></div>
        <Image src={mainDrawing} alt="Test Drawing" quality={100} />
    </div>
    </div>
  );
}
