import React from "react";

export default function ColorPalette() {
  return (
    <div>
      <div className="block bg-ms-bronze-ui p-2">
        <div
          id="tan-box"
          className="h-20 w-20 border-[1px] border-solid border-ms-bronze-bg-ui border-b-white border-r-white"
        >
          <div
            id="primary-color"
            className="relative left-2 top-2 z-10 h-[2.3rem] w-[2.3rem] border-[1px] border-b-white border-l-black border-r-white border-t-black bg-black"
          ></div>
          <div
            id="secondary-color"
            className="relative -top-1 left-8 h-[2.3rem] w-[2.3rem] border-[1px] border-b-white border-l-black border-r-white border-t-black bg-white"
          ></div>
        </div>
      </div>
    </div>
  );
}
