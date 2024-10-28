import Image from 'next/image'
import blueSkyBg from '@/assets/imgs/background-clouds.png';

export default function BlueSkyBackground() {
  return (
    <Image src={blueSkyBg}  alt="blue open sky with clounds" />
  )
}
