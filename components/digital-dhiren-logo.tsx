export default function DigitalDhirenLogo() {
  return (
    <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent shadow-glow">
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_28%_20%,rgba(255,255,255,0.55),transparent_28%)]" />
      <svg viewBox="0 0 48 48" aria-hidden="true" className="relative h-8 w-8">
        <path
          d="M11 36V12h12.5c7.5 0 13.5 5.2 13.5 12s-6 12-13.5 12H11Zm8.4-7.4h4.1c3 0 5.5-1.9 5.5-4.6s-2.5-4.6-5.5-4.6h-4.1v9.2Z"
          fill="white"
        />
        <path
          d="M12 12h12.2c8.2 0 14.8 5.1 14.8 12s-6.6 12-14.8 12H12"
          fill="none"
          stroke="rgba(255,255,255,0.72)"
          strokeLinecap="round"
          strokeWidth="3.3"
        />
        <path d="M35.5 10.5l1.3 3.1 3.2 1.1-3.2 1.2-1.3 3.1-1.2-3.1-3.2-1.2 3.2-1.1 1.2-3.1Z" fill="#09090B" />
      </svg>
      <span className="sr-only">Digital Dhiren logo</span>
    </span>
  );
}
