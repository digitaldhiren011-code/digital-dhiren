import Image from "next/image";

export default function DigitalDhirenLogo() {
  return (
    <span className="relative block h-14 w-[240px] overflow-hidden sm:h-16 sm:w-[260px] lg:h-[72px] lg:w-[280px]">
      <Image
        src="/my-logo.png"
        alt="Digital Dhiren logo"
        fill
        priority
        sizes="(max-width: 640px) 240px, (max-width: 1024px) 260px, 280px"
        className="object-contain object-left"
      />
    </span>
  );
}
