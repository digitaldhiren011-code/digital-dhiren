import Image from "next/image";

export default function DigitalDhirenLogo() {
  return (
    <span className="relative block h-10 w-[160px] overflow-hidden sm:h-11 sm:w-[180px] lg:h-12 lg:w-[200px]">
      <Image
        src="/my-logo.png"
        alt="Digital Dhiren logo"
        fill
        priority
        sizes="(max-width: 640px) 160px, (max-width: 1024px) 180px, 200px"
        className="object-contain object-left"
      />
    </span>
  );
}
