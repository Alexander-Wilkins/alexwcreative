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
        className={`rounded-t-xl bg-[#0038FF] border-solid border-2 border-xp-blue ${size} mt-10 ml-4`} // the margin creates a default window position
      >
        {children}
      </div>
    </Draggable>
  );
}
