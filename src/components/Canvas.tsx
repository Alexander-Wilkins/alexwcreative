import Image from "next/image";
import testDrawing from "@/assets/imgs/test-drawing.png";

export default function Canvas() {
  return (
    <div>
    <div id="drawing-canvas" className="bg-white mt-1 ml-1" style={{ position: 'relative', width: '98%', height: '100%' }}>
        <div style={{ position: 'absolute', top: -4, left: -4, width: '4px', height: '4px', backgroundColor: '#f5efef', border: '1px solid #8498df' }}></div>
        <div style={{ position: 'absolute', top: -4, right: -4, width: '4px', height: '4px', backgroundColor: '#f5efef', border: '1px solid #8498df' }}></div>
        <div style={{ position: 'absolute', bottom: -4, left: -4, width: '4px', height: '4px', backgroundColor: '#f5efef', border: '1px solid #8498df' }}></div>
        <div style={{ position: 'absolute', bottom: -4, right: -4, width: '4px', height: '4px', backgroundColor: '#f5efef', border: '1px solid #8498df' }}></div>
        <Image src={testDrawing} alt="Test Drawing" quality={100}/>
    </div>
    </div>
  );
}
