import Image from "next/image";

export default function DigitalDhirenLogo() {
  return (
    <span className="relative block h-14 w-[240px] overflow-hidden sm:h-16 sm:w-[280px] lg:h-[72px] lg:w-[320px]">
      <Image
        src="/my-logo.png"
        alt="Digital Dhiren logo"
        fill
        priority
        sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 300px"
        className="object-contain object-center p-1"
      />
    </span>
  );
}
