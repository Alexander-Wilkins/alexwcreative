'use client';

// import all mspaint-tool-icon images
import select1 from "@/assets/icons/mspaint-tool-icon_1.png";
import select2 from "@/assets/icons/mspaint-tool-icon_2.png";
import eraser from "@/assets/icons/mspaint-tool-icon_3.png";
import bucket from "@/assets/icons/mspaint-tool-icon_4.png";
import eyedropper from "@/assets/icons/mspaint-tool-icon_5.png";
import magnifyingGlass from "@/assets/icons/mspaint-tool-icon_6.png";
import pencil from "@/assets/icons/mspaint-tool-icon_7.png";
import brush from "@/assets/icons/mspaint-tool-icon_8.png";
import sprayCan from "@/assets/icons/mspaint-tool-icon_9.png";
import letter from "@/assets/icons/mspaint-tool-icon_10.png";
import line from "@/assets/icons/mspaint-tool-icon_11.png";
import squiggle from "@/assets/icons/mspaint-tool-icon_12.png";
import box from "@/assets/icons/mspaint-tool-icon_13.png";
import polygon from "@/assets/icons/mspaint-tool-icon_14.png";
import circle from "@/assets/icons/mspaint-tool-icon_15.png";
import pill from "@/assets/icons/mspaint-tool-icon_16.png";

import Image from "next/image";
import { useState, useRef } from "react";

export default function Tools() {
  // store the images in an object
  const buttonIcons = {
    select1,
    select2,
    eraser,
    bucket,
    eyedropper,
    magnifyingGlass,
    pencil,
    brush,
    sprayCan,
    letter,
    line,
    squiggle,
    box,
    polygon,
    circle,
    pill,
  };

  // handle tool click
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleToolClick(index: number) {
    setSelectedButtonIndex(index);
  }

  return (
    <div className="flex h-full flex-col justify-between">
      <div
        id="button-container"
        className="-ml-[.125rem] grid grid-cols-2 pt-2"
      >
        {Object.values(buttonIcons).map((icon, index) => (
          <button
            key={index}
            ref={(el) => {
              buttonRefs.current[index] = el;
            }}
            className={`flex h-8 w-8 flex-col items-center justify-center rounded-sm hover:cursor-pointer hover:bg-[#d6cfb1] ${
              selectedButtonIndex === index ? "bg-white border-solid border-[#0058ab9f] border-[1px]" : ""
            }`}
            onClick={() => handleToolClick(index)}
          >
            <Image src={icon} alt={`tool-icon-${index}`} />
          </button>
        ))}
      </div>
      <div
        id="tan-box"
        className="my-12 block h-[10.3125rem] w-[4rem] border-[1px] border-solid border-ms-bronze-bg-ui border-b-white border-r-white bg-[#FFFCEA]"
      ></div>
    </div>
  );
}
