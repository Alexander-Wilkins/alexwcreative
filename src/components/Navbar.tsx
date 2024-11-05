"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { vt323 } from "@/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const fileDropdown = [
    {
      label: "New...",
      action: () => alert("New File created!"),
    },
    {
      label: "Save",
      action: () => alert("Feature coming soon!"),
    },
    {
      label: "Save As...",
      action: () => alert("Feature coming soon!"),
    },
    {
      label: "Print",
      action: () => alert("Feature coming soon!"),
    },
    {
      label: "Restore",
      action: () => alert("Restore"),
    },
    {
      label: "Close Window",
      action: () => alert("Exit"),
    },
  ];

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
                <Link
                  key={index}
                  href="#"
                  className="block cursor-pointer px-2 py-[3px] hover:bg-ms-light-gray"
                  onClick={item.action}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </li>
          <li
            className={`cursor-pointer px-4 ${usePathname() === "/" ? "bg-ms-light-gray text-gray-600" : "hover:bg-ms-light-gray"}`}
          >
            <Link href="/">
              <u>A</u>bout Me
            </Link>
          </li>
          <li
            className={`cursor-pointer px-4 ${usePathname() === "/code-projects" ? "bg-ms-light-gray text-gray-600" : "hover:bg-ms-light-gray"}`}
          >
            <Link href="/code-projects">
              <u>C</u>ode Projects
            </Link>
          </li>
          <li
            className={`cursor-pointer px-4 ${usePathname() === "/portfolio" ? "bg-ms-light-gray text-gray-600" : "hover:bg-ms-light-gray"}`}
          >
            <Link href="/portfolio">
              <u>I</u>llustration Portfolio
            </Link>
          </li>
          <li
            className={`cursor-pointer px-4 ${usePathname() === "/blog" ? "bg-ms-light-gray text-gray-600" : "hover:bg-ms-light-gray"}`}
          >
            <Link href="/blog">
              <u>B</u>log
            </Link>
          </li>
          <li className="hidden cursor-pointer px-4 hover:bg-ms-light-gray sm:block">
            <Link href="https://www.pococomics.com" target='_blank'>
              <FontAwesomeIcon icon={faExternalLink} className='h-[0.875rem] pr-1 pb-[.125rem]' />
              <u>W</u>eb Comic
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
