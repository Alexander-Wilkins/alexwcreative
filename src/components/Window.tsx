"use client";

import { ReactNode, useRef } from "react";
import React, { useState } from "react";
import Draggable from "react-draggable";
import Image from "next/image";
import msPaintIcon from "@/assets/logos/ms-paint-icon.png";
import WindowButtons from "@/components/WindowButtons";
import { vt323 } from "@/fonts";

interface WindowProps {
  children?: ReactNode;
  size: string;
  title: string;
  defaultPos: string;
}

export default function Window({
  children,
  size,
  title,
  defaultPos = "ml-4 mt-10",
}: WindowProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const nodeRef = useRef(null);

  const handleDrag = (_e: unknown, ui: { deltaX: number; deltaY: number }) => {
    const { x, y } = position;
    setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
    document.body.style.cursor = "grabbing";
  };

  const handleStop = () => {
    document.body.style.cursor = "default";
  };

  return (
    // TODO: Make only the header bar draggable, and prevent draggable for any other parts of the window.
    <Draggable
      nodeRef={nodeRef}
      position={position}
      onDrag={handleDrag}
      onStop={handleStop}
    >
      <div
        ref={nodeRef}
        id="window-container"
        className={`rounded-t-xl border-2 border-solid border-xp-blue bg-[#0038FF] ${size} ${defaultPos} sm:inline-block`}
      >
        <header
          id="blue-bar"
          className="from-17% via-27% flex flex-row justify-between gap-2 rounded-t-xl bg-gradient-to-t from-xp-blue via-xp-blue to-[#eff2fa67] pl-3"
        >
          <div className="flex flex-row items-center justify-center gap-2">
            <Image src={msPaintIcon} alt="MS Paint Icon" height={32} />
            <h1
              className={`text-white ${vt323.className} text-2xl drop-shadow-md`}
            >
              {title}
            </h1>
          </div>
          <WindowButtons />
        </header>
        {children}
      </div>
    </Draggable>
  );
}
