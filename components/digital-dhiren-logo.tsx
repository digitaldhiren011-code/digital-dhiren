import Image from "next/image";

export default function DigitalDhirenLogo() {
  return (
    <span className="relative block h-20 w-[300px] overflow-hidden py-1 sm:h-[88px] sm:w-[340px] lg:h-[96px] lg:w-[380px] lg:py-2">
      <Image
        src="/my-logo.png"
        alt="Digital Dhiren logo"
        fill
        priority
        sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 380px"
        className="object-contain object-center"
      />
    </span>
  );
}
