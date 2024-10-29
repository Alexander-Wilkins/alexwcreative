import { vt323 } from "@/fonts";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-ms-bronze-ui">
        <ul className={`${vt323.className} text-black text-2xl flex flex-row`}>
          <li className="px-4 hover:bg-ms-light-gray hover:text-white cursor-pointer">File</li>
          <li className="px-4 hover:bg-ms-light-gray hover:text-white cursor-pointer">Edit</li>
          <li className="px-4 hover:bg-ms-light-gray hover:text-white cursor-pointer">View</li>
          <li className="px-4 hover:bg-ms-light-gray hover:text-white cursor-pointer hidden sm:block">Image</li>
          <li className="px-4 hover:bg-ms-light-gray hover:text-white cursor-pointer hidden sm:block">Colors</li>
          <li className="px-4 hover:bg-ms-light-gray hover:text-white cursor-pointer">Help</li>
        </ul>
      </nav>
    </div>
  );
}
