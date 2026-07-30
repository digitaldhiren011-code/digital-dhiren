import Image from "next/image";

export default function DigitalDhirenLogo() {
  return (
    <span className="relative block h-11 w-[190px] overflow-hidden sm:h-12 sm:w-[205px] lg:h-[56px] lg:w-[220px]">
      <Image
        src="/my-logo.png"
        alt="Digital Dhiren logo"
        fill
        priority
        sizes="(max-width: 640px) 190px, (max-width: 1024px) 205px, 220px"
        className="object-contain object-left"
      />
    </span>
  );
}
