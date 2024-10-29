import Image from "next/image";
import logo from "@/assets/logos/AlexW-Logo.png";
import { vt323 } from "@/fonts";

export default function Footer() {
  return (
    <div>
      <footer
        className={`absolute bottom-0 w-full h-10 flex flex-row items-center justify-end gap-4 p-12 text-white ${vt323.className} drop-shadow-md`}
      >
        Copyright Of Alex Wilkins &copy; All Rights Reserved.
        <Image
          aria-hidden
          src={logo}
          alt="Alex Wilkins Creative Logo"
          height={41}
          quality={100}
        />
      </footer>
    </div>
  );
}
