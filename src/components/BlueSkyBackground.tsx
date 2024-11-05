import Image from "next/image";
import blueSkyBg from "@/assets/imgs/background-clouds.png";

export default function BlueSkyBackground() {
  return (
    <div style={{ pointerEvents: "none" }}>
        <Image
          src={blueSkyBg}
          alt="blue open sky with clounds"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
          className="-z-10"
        />
    </div>
  );
}
