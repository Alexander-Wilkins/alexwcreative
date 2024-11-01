'use client';
import { vt323 } from "@/fonts";

export default function Navbar() {

  const fileDropdown = [
    {
      label: "New...",
      action: () => alert("New File created!"),
    }, 
    {
      label: "Save",
      action: () => console.log("Feature coming soon!"),
    },
    {
      label: "Save As...",
      action: () => console.log("Feature coming soon!"),
    },
    {
      label: "Print",
      action: () => console.log("Feature coming soon!"),
    },
    {
      label: "Restore",
      action: () => alert("Restore"),
    },
    {
      label: "Close Window",
      action: () => console.log("Exit"),
    }
  ]

  return (
    <div>
      <nav className="border-[1px] border-x-ms-bronze-bg-ui border-t-ms-bronze-bg-ui bg-ms-bronze-ui">
        {/* TODO: Make a hamburger menu with all of the navbar items */}
        <ul
          id="dropdown"
          className={`${vt323.className} flex flex-row text-2xl text-black`}
        >
          <li className="group relative">
            <button
              id="dropdownbtn"
              className="cursor-pointer px-4 hover:bg-ms-light-gray"
            >
              <u>F</u>ile
            </button>
            <div
              id="dropdown-content"
              className="absolute z-10 hidden min-w-40 border-[1px] border-solid border-ms-bronze-bg-ui bg-ms-bronze-ui hover:cursor-pointer group-hover:block"
            >
                {fileDropdown.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-2 py-[3px] hover:bg-ms-light-gray cursor-pointer"
                  onClick={item.action}
                >
                  {item.label}
                </a>
                ))}
            </div>
          </li>
          <li className="cursor-pointer px-4 hover:bg-ms-light-gray">
            <u>A</u>bout Me
          </li>
          <li className="cursor-pointer px-4 hover:bg-ms-light-gray">
            <u>M</u>y Projects
          </li>
          <li className="hidden cursor-pointer px-4 hover:bg-ms-light-gray sm:block">
            <u>W</u>eb Comic
          </li>
          <li className="hidden cursor-pointer px-4 hover:bg-ms-light-gray sm:block">
            <u>I</u>llustration Portfolio
          </li>
          <li className="hidden cursor-pointer px-4 hover:bg-ms-light-gray sm:block">
            <u>B</u>log
          </li>
        </ul>
      </nav>
    </div>
  );
}
