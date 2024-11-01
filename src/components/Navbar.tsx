import { vt323 } from "@/fonts";

export default function Navbar() {
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
              <a
                href="#"
                className="block px-2 py-[3px] hover:bg-ms-light-gray"
              >
                Linky Dinky 1
              </a>
              <a href="#" className="block px-2 py-[3px] hover:bg-ms-light-gray">
                Linky Dinky 2
              </a>
              <a href="#" className="block px-2 py-[3px] hover:bg-ms-light-gray">
                Linky Dinky 3
              </a>
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
