import { vt323 } from "@/fonts";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-ms-bronze-ui">
        {/* TODO: Make a hamburger menu with all of the navbar items */}
        <ul className={`${vt323.className} text-black text-2xl flex flex-row`}>
          <li className="px-4 hover:bg-ms-light-gray hover:text-white cursor-pointer">File</li>
          <li className="px-4 hover:bg-ms-light-gray hover:text-white cursor-pointer">About Me</li>
          <li className="px-4 hover:bg-ms-light-gray hover:text-white cursor-pointer">Projects</li>
          <li className="px-4 hover:bg-ms-light-gray hover:text-white cursor-pointer hidden sm:block">Web Comic</li>
          <li className="px-4 hover:bg-ms-light-gray hover:text-white cursor-pointer hidden sm:block">Illustration Portfolio</li>
          <li className="px-4 hover:bg-ms-light-gray hover:text-white cursor-pointer">Blog</li>
        </ul>
      </nav>
    </div>
  );
}
