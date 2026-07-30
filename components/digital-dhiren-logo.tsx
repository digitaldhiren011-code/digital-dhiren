import Image from "next/image";

export default function DigitalDhirenLogo() {
  return (
    <span className="relative block h-14 w-[260px] overflow-hidden sm:h-16 sm:w-[280px] lg:h-[68px] lg:w-[300px]">
      <Image
        src="/my-logo.png"
        alt="Digital Dhiren logo"
        fill
        priority
        sizes="(max-width: 640px) 260px, (max-width: 1024px) 280px, 300px"
        className="object-contain object-left"
      />
    </span>
  );
}
