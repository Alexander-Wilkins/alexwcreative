import React from "react";

export default function ColorPalette() {
  // these reference the color themes in tailwind.config.ts
  const colors = {
    black: "#222",
    white: "#fff",
    gray: "#696969",
    lightGray: "#C0C0C0",
    darkRed: "#9B0000",
    red: "#FF0000",
    darkYellow: "#8D8800",
    yellow: "#FFF500",
    darkGreen: "#00A507",
    green: "#00FF0B",
    darkTurq: "#00A0B6",
    turq: "#00E0FF",
    darkBlue: "#030090",
    blue: "#001AFF",
    darkPink: "#9E00A1",
    pink: "#FA00FF",
    darkTan: "#A49239",
    tan: "#FFEB87",
    darkKelly: "#0F5C58",
    kelly: "#00FFA3",
    ocean: "#2B8CFF",
    lightOcean: "#6FF6FF",
    darkNavy: "#00498D",
    lightPurple: "#B196FF",
    violet: "#8000FF",
    hotPink: "#FF2574",
    darkOrange: "#8B510D",
    orange: "#FF9432",
  };

  return (
    <div>
      <div className="flex flex-row gap-2 bg-ms-bronze-ui p-2">
        <div
          id="tan-box"
          className="h-20 w-20 border-[1px] border-solid border-ms-bronze-bg-ui border-b-white border-r-white"
        >
          <div
            id="primary-color"
            className={`relative left-2 top-2 z-10 h-[2.3rem] w-[2.3rem] border-[1px] border-b-white border-l-black border-r-white border-t-black bg-black`}
          ></div>
          <div
            id="secondary-color"
            className={`relative -top-1 left-8 h-[2.3rem] w-[2.3rem] border-[1px] border-b-white border-l-black border-r-white border-t-black bg-white`}
          ></div>
        </div>
        <div
          id="colors-container"
          className="grid auto-cols-auto grid-flow-col grid-rows-2 gap-1"
        >
          {Object.entries(colors).map(([colorName, colorValue]) => (
            <div
              key={colorName}
              className={`h-[2.3rem] w-[2.3rem] border-[1px] border-b-white border-l-black border-r-white border-t-black`}
              style={{ backgroundColor: colorValue }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
