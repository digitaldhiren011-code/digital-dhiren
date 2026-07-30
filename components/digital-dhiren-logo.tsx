import Image from "next/image";

export default function DigitalDhirenLogo() {
  return (
    <span className="relative block h-16 w-[300px] overflow-hidden sm:h-[76px] sm:w-[340px] lg:h-[84px] lg:w-[380px]">
      <Image
        src="/my-logo.png"
        alt="Digital Dhiren logo"
        fill
        priority
        sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 380px"
        className="object-contain object-left"
      />
    </span>
  );
}
