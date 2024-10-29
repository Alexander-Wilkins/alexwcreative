"use client";

import { ReactNode, useRef } from "react";
import React, { useState } from "react";
import Draggable from "react-draggable";

interface WindowProps {
  children: ReactNode;
  size: string;
}

export default function Window({ children, size }: WindowProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const nodeRef = useRef(null);

  const handleDrag = (_e: unknown, ui: { deltaX: number; deltaY: number }) => {
    const { x, y } = position;
    setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
  };

  return (
    <Draggable nodeRef={nodeRef} position={position} onDrag={handleDrag}>
      <div
        ref={nodeRef}
        id="window-container"
        className={`rounded-xl bg-[#0038FF] border-solid border-2 border-xp-blue ${size} mt-10 ml-10`} // the margin creates a default window position
      >
        {children}
      </div>
    </Draggable>
  );
}
