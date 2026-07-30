import Image from "next/image";

export default function DigitalDhirenLogo() {
  return (
    <span className="relative block h-16 w-[280px] overflow-hidden sm:h-[72px] sm:w-[320px] lg:h-20 lg:w-[360px]">
      <Image
        src="/my-logo.png"
        alt="Digital Dhiren logo"
        fill
        priority
        sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
        className="object-contain object-center"
      />
    </span>
  );
}
