import Image from "next/image";

export default function DigitalDhirenLogo() {
  return (
    <span className="relative block h-14 w-[320px] overflow-hidden sm:h-[68px] sm:w-[360px] lg:h-[76px] lg:w-[400px]">
      <Image
        src="/my-logo.png"
        alt="Digital Dhiren logo"
        fill
        priority
        sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 400px"
        className="object-contain object-left"
      />
    </span>
  );
}
