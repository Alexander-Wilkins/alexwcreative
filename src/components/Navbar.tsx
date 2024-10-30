import { vt323 } from "@/fonts";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-ms-bronze-ui border-[1px] border-x-ms-bronze-bg-ui border-t-ms-bronze-bg-ui">
        {/* TODO: Make a hamburger menu with all of the navbar items */}
        <ul className={`${vt323.className} flex flex-row text-2xl text-black`}>
          <li className="cursor-pointer px-4 hover:bg-ms-light-gray">File</li>
          <li className="cursor-pointer px-4 hover:bg-ms-light-gray">
            About Me
          </li>
          <li className="cursor-pointer px-4 hover:bg-ms-light-gray">
            My Projects
          </li>
          <li className="hidden cursor-pointer px-4 hover:bg-ms-light-gray sm:block">
            Web Comic
          </li>
          <li className="hidden cursor-pointer px-4 hover:bg-ms-light-gray sm:block">
            Illustration Portfolio
          </li>
          <li className="cursor-pointer px-4 hover:bg-ms-light-gray">Blog</li>
        </ul>
      </nav>
    </div>
  );
}
