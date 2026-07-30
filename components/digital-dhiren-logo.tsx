import Image from "next/image";

export default function DigitalDhirenLogo() {
  return (
    <span className="relative block h-12 w-[310px] overflow-hidden sm:h-14 sm:w-[345px] lg:h-[60px] lg:w-[380px]">
      <Image
        src="/my-logo.png"
        alt="Digital Dhiren logo"
        fill
        priority
        sizes="(max-width: 640px) 310px, (max-width: 1024px) 345px, 380px"
        className="object-contain object-left"
      />
    </span>
  );
}
