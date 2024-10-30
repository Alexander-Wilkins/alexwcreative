import React from "react";

export default function Tools() {
  const toolButtonStyles =
    "h-10 w-10 rounded-sm active:bg-white active:border-solid active:border-[#0058ab9f] active:border-[1px] hover:bg-[#d6cfb1]";
  return (
    <div>
      <div id="button-container" className="grid grid-cols-2 pt-2">
        <button className={`${toolButtonStyles}`}>a</button>
        <button className={`${toolButtonStyles}`}>b</button>
        <button className={`${toolButtonStyles}`}>x</button>
        <button className={`${toolButtonStyles}`}>d</button>
        <button className={`${toolButtonStyles}`}>e</button>
        <button className={`${toolButtonStyles}`}>r</button>
        <button className={`${toolButtonStyles}`}>t</button>
        <button className={`${toolButtonStyles}`}>y</button>
      </div>
      <div
        id="tan-box"
        className="my-12 block h-[10.3125rem] w-[5.8125rem] border-[1px] border-solid border-ms-bronze-bg-ui border-b-white border-r-white bg-[#FFFCEA]"
      ></div>
    </div>
  );
}
