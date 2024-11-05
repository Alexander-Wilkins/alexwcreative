import { ReactNode } from "react";

export default function Canvas({ children }: { children: ReactNode }) {
  return (
    <div>
      <div
        id="drawing-canvas"
        className="mb-20 ml-2 mt-2 inline-block bg-white p-4 sm:ml-4 sm:mt-4 sm:p-10"
        style={{ position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            top: -4,
            left: -4,
            width: "4px",
            height: "4px",
            backgroundColor: "#f5efef",
            border: "1px solid #8498df",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: -4,
            right: -4,
            width: "4px",
            height: "4px",
            backgroundColor: "#f5efef",
            border: "1px solid #8498df",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: -4,
            left: -4,
            width: "4px",
            height: "4px",
            backgroundColor: "#f5efef",
            border: "1px solid #8498df",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: -4,
            right: -4,
            width: "4px",
            height: "4px",
            backgroundColor: "#f5efef",
            border: "1px solid #8498df",
          }}
        ></div>
        {children}

      </div>
    </div>
  );
}
